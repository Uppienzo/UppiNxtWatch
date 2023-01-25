import {HiFire} from 'react-icons/hi'
import SavedVideoItem from '../SavedVideoItem'

import Navbar from '../Navbar'
import LeftBar from '../LeftBar'

import {
  SavedVideosContainer,
  HeadContainer,
  Icon,
  TrendingHead,
  TrendingVideosContainer,
  NoSavedVideosContainer,
  NoSavedImage,
  NoSaveHead,
  NoSaveDescription,
  HomeContainer,
  HomeBody,
} from './styledComponents'
import Context from '../../context'

const SavedVideos = () => {
  const header = () => (
    <Context.Consumer>
      {value => {
        const {isDark} = value
        return (
          <HeadContainer isDark={isDark} data-testid="banner">
            <Icon isDark={isDark}>
              <HiFire />
            </Icon>
            <TrendingHead>Saved Videos</TrendingHead>
          </HeadContainer>
        )
      }}
    </Context.Consumer>
  )
  const noSavedVideosView = () => (
    <Context.Consumer>
      {value => {
        const {isDark} = value
        return (
          <NoSavedVideosContainer>
            <NoSavedImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoSaveHead isDark={isDark}>No saved videos found</NoSaveHead>
            <NoSaveDescription isDark={isDark}>
              {' '}
              You can save your videos while watching them
            </NoSaveDescription>
          </NoSavedVideosContainer>
        )
      }}
    </Context.Consumer>
  )

  return (
    <Context.Consumer>
      {value => {
        const {savedVideos, isDark} = value
        const videosExist = savedVideos.length > 0
        const trendingVideos = () => {
          console.log(savedVideos)
          return (
            <TrendingVideosContainer>
              {savedVideos.map(each => (
                <SavedVideoItem key={each.id} details={each} />
              ))}
            </TrendingVideosContainer>
          )
        }
        console.log(savedVideos)
        return (
          <HomeContainer isDark={isDark} data-testid="savedVideos">
            <Navbar />
            <HomeBody>
              <LeftBar />
              <SavedVideosContainer isDark={isDark}>
                {videosExist && header()}
                {videosExist && trendingVideos()}
                {!videosExist && noSavedVideosView()}
              </SavedVideosContainer>
            </HomeBody>
          </HomeContainer>
        )
      }}
    </Context.Consumer>
  )
}

export default SavedVideos
