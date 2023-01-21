import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FaGamepad} from 'react-icons/fa'

import GamingVideoItem from '../GamingVideoItem'

import {
  TrendsContainer,
  HeadContainer,
  Icon,
  TrendingHead,
  TrendingVideosContainer,
  LoadAnimation,
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeader,
  NoVideosDescription,
  RetryButton,
} from './styledComponents'

const constantStates = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Games extends Component {
  state = {gamingVideos: [], state: constantStates.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  successfulFetch = videos => {
    const updatedVideos = videos.map(each => ({
      id: each.id,
      thumbnailUrl: each.thumbnail_url,
      title: each.title,
      viewCount: each.view_count,
    }))
    console.log(updatedVideos)
    this.setState({gamingVideos: updatedVideos, state: constantStates.success})
  }

  getGamingVideos = async () => {
    this.setState({state: constantStates.loading})
    const trendingVideosUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(trendingVideosUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.successfulFetch(data.videos)
    } else {
      this.setState({state: constantStates.failure})
    }
  }

  header = () => (
    <HeadContainer>
      <Icon>
        <FaGamepad />
      </Icon>
      <TrendingHead>Gaming</TrendingHead>
    </HeadContainer>
  )

  loader = () => (
    <LoadAnimation className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color=" #3b82f6" height="50" width="50" />
    </LoadAnimation>
  )

  failureView = () => (
    <NoVideosContainer>
      <NoVideosImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure"
      />
      <NoVideosHeader>Oops! Something Went Wrong</NoVideosHeader>
      <NoVideosDescription>
        We are having some trouble to complete your request. <br /> Please try
        again.
      </NoVideosDescription>
      <RetryButton type="button" onClick={this.getTrendingVideos}>
        Retry
      </RetryButton>
    </NoVideosContainer>
  )

  trendingVideos = () => {
    const {gamingVideos} = this.state
    return (
      <TrendingVideosContainer>
        {gamingVideos.map(each => (
          <GamingVideoItem key={each.id} details={each} />
        ))}
      </TrendingVideosContainer>
    )
  }

  VideosSectionView = () => {
    const {state} = this.state
    switch (state) {
      case constantStates.loading:
        return this.loader()
      case constantStates.success:
        return this.trendingVideos()
      case constantStates.failure:
        return this.failureView()

      default:
        return null
    }
  }

  render() {
    return (
      <TrendsContainer>
        {this.header()}
        {this.VideosSectionView()}
      </TrendsContainer>
    )
  }
}

export default Games
