import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import FailureView from '../FailureView'
import PlayVideoView from '../PlayVideoView'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {VideoDetailViewContainer, LoaderContainer} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class VideoDetailView extends Component {
  state = {
    videoDetails: [],
    apiStatus: apiConstants.initial,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.video_details.id,
        title: each.video_details.title,
        videoUrl: each.video_details.video_Url,
        thumbnailUrl: each.video_details.thumbnail_url,
        viewCount: each.video_details.view_count,
        publishedAt: each.video_details.published_at,
        name: each.video_details.channel.name,
        profileImageUrl: each.video_details.channel.profile_image_url,
        subscriberCount: each.video_details.channel.subscriber_count,
      }))
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  clickLiked = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  clickDisLiked = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideos = () => {
    const {videoDetails, isLiked, isDisliked} = this.state
    return (
      <PlayVideoView
        videoDetails={videoDetails}
        clickLiked={this.clickLiked}
        clickDisLiked={this.clickDisLiked}
        clickSaved={this.clickSaved}
        isLiked={isLiked}
        isDisliked={isDisliked}
      />
    )
  }

  onRetry = () => {
    this.getVideos()
  }

  renderFailure = () => <FailureView onRetry={this.onRetry} />

  renderVideosView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiConstants.success:
        return this.renderVideos()
      case apiConstants.failure:
        return this.renderFailure()
      case apiConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDartTheme} = value
          const bgColor = isDartTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <>
              <Header />
              <NavigationBar />
              <VideoDetailViewContainer
                bgColor={bgColor}
                data-testid="videoItemDetails"
              >
                {this.renderVideosView()}
              </VideoDetailViewContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default VideoDetailView
