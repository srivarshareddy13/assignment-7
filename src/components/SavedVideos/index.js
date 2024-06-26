import {CgPlayListAdd} from 'react-icons/cg'
import Header from '../Header'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import NavigationBar from '../NavigationBar'
import VideoCard from '../VideoCard'

import {
  SavedContainer,
  SavedTitleIconContainer,
  SavedVideoTitle,
  SavedVideoList,
  SavedText,
  NotSavedVideoView,
  NotSavedVideoImage,
  NotSavedVideoHeading,
  NotSavedVideoNote,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      const noteColor = isDarkTheme ? 'e2e8f0' : '#475569'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'

      return (
        <>
          <Header />
          <NavigationBar />
          <SavedContainer data-testid="savedVideos" bgColor={bgColor}>
            <SavedVideoTitle>
              <SavedTitleIconContainer>
                <CgPlayListAdd size={35} color="#ff0000" />
              </SavedTitleIconContainer>
              <SavedText color={textColor}>Saved Videos</SavedText>
            </SavedVideoTitle>
            {savedVideos.length > 0 ? (
              <SavedVideoList>
                {savedVideos.map(each => (
                  <VideoCard key={each.isDarkTheme} videoDetails={each} />
                ))}
              </SavedVideoList>
            ) : (
              <NotSavedVideoView>
                <NotSavedVideoImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NotSavedVideoHeading headingColor={headingColor}>
                  No saved videos found
                </NotSavedVideoHeading>
                <NotSavedVideoNote noteColor={noteColor}>
                  You can save your videos while watching them
                </NotSavedVideoNote>
              </NotSavedVideoView>
            )}
          </SavedContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)
export default SavedVideos
