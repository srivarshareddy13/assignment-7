import {
  NoVideosView,
  NoVideoImage,
  NoVideosHeading,
  NoVideosNote,
  RetryButton,
  VideoCardList,
} from './styledComponents'

import HomeVideoCard from '../HomeVideoCard'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const HomeVideos = props => {
  const {homeVideos, onRetry} = props
  const videosCount = homeVideos.length

  const onClickRetry = () => onRetry()

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDartTheme} = value
        const headingColor = isDartTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDartTheme ? '#e2e8f0' : '#475569'

        return videosCount > 0 ? (
          <VideoCardList>
            {homeVideos.map(each => (
              <HomeVideoCard video={each} key={each.id} />
            ))}
          </VideoCardList>
        ) : (
          <NoVideosView>
            <NoVideoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading headingColor={headingColor}>
              No Search results found
            </NoVideosHeading>
            <NoVideosNote noteColor={noteColor}>
              Try different keywords or remove search filter
            </NoVideosNote>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </NoVideosView>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default HomeVideos
