import {Component} from 'react'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'

import FailureView from '../AuthenticationFailure'
import Load from '../Loader'

import TrendingVideoItem from '../TrendingVideoItem'
import Context from '../../context'
import Navbar from '../Navbar'
import LeftBar from '../LeftBar'

import {
  TrendsContainer,
  HeadContainer,
  Icon,
  TrendingHead,
  TrendingVideosContainer,
  HomeContainer,
  HomeBody,
} from './styledComponents'

const constantStates = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Trending extends Component {
  state = {trendVideos: [], state: constantStates.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  successfulFetch = videos => {
    const updatedVideos = videos.map(each => ({
      channel: {
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      },
      id: each.id,
      publishedAt: each.published_at,
      thumbnailUrl: each.thumbnail_url,
      title: each.title,
      viewCount: each.view_count,
    }))

    this.setState({trendVideos: updatedVideos, state: constantStates.success})
  }

  getTrendingVideos = async () => {
    this.setState({state: constantStates.loading})
    const trendingVideosUrl = 'https://apis.ccbp.in/videos/trending'
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
    <Context.Consumer>
      {value => {
        const {isDark} = value
        return (
          <HeadContainer isDark={isDark} data-testid="banner">
            <Icon isDark={isDark}>
              <HiFire />
            </Icon>
            <TrendingHead>Trending</TrendingHead>
          </HeadContainer>
        )
      }}
    </Context.Consumer>
  )

  trendingVideos = () => {
    const {trendVideos} = this.state
    console.log(trendVideos)
    return (
      <TrendingVideosContainer>
        {trendVideos.map(each => (
          <TrendingVideoItem key={each.id} details={each} />
        ))}
      </TrendingVideosContainer>
    )
  }

  VideosSectionView = () => {
    const {state} = this.state
    switch (state) {
      case constantStates.loading:
        return <Load />
      case constantStates.success:
        return this.trendingVideos()
      case constantStates.failure:
        return <FailureView retry={this.getTrendingVideos} />
      default:
        return null
    }
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isDark} = value
          return (
            <HomeContainer isDark={isDark} data-testid="trending">
              <Navbar />
              <HomeBody>
                <LeftBar />
                <TrendsContainer isDark={isDark}>
                  {this.header()}
                  {this.VideosSectionView()}
                </TrendsContainer>
              </HomeBody>
            </HomeContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Trending
