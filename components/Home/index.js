import {Component} from 'react'
import {IoClose} from 'react-icons/io5'
import {BiSearchAlt} from 'react-icons/bi'
import Cookies from 'js-cookie'
import VideoItem from '../VideoItem'
import Context from '../../context'
import LeftBar from '../LeftBar'
import FailureView from '../AuthenticationFailure'
import Navbar from '../Navbar'
import Load from '../Loader'

import {
  MainBarContainer,
  Banner,
  BannerHead,
  BannerImage,
  BannerHeadText,
  GetItNow,
  CloseButton,
  VideosContainer,
  SearchContainer,
  Search,
  SearchButton,
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeader,
  NoVideosDescription,
  RetryButton,
  HomeContainer,
  HomeBody,
} from './styledComponents'

const constantStates = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
  noVideos: 'NOVIDEOS',
}

class MainBar extends Component {
  state = {
    videos: [],
    isBannerDisplayed: true,
    searchInput: '',
    state: constantStates.initial,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  SuccessfulFetch = data => {
    const {videos} = data
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
    if (updatedVideos.length === 0) {
      this.setState({videos: updatedVideos, state: constantStates.noVideos})
    } else {
      this.setState({videos: updatedVideos, state: constantStates.success})
    }
  }

  failureFetch = () => {
    this.setState({state: constantStates.failure})
  }

  getHomeVideos = async () => {
    this.setState({state: constantStates.loading})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(homeVideosApiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.SuccessfulFetch(data)
    } else {
      this.failureFetch()
    }
  }

  onCloseBanner = () => {
    this.setState({isBannerDisplayed: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  searchInput = () => {
    const {searchInput} = this.state
    return (
      <Context.Consumer>
        {value => {
          const {isDark} = value
          return (
            <SearchContainer isDark={isDark}>
              <Search
                type="search"
                placeholder="Search"
                value={searchInput}
                onChange={this.onChangeSearchInput}
                isDark={isDark}
              />
              <SearchButton
                type="button"
                data-testid="searchButton"
                onClick={this.getHomeVideos}
              >
                <BiSearchAlt />
              </SearchButton>
            </SearchContainer>
          )
        }}
      </Context.Consumer>
    )
  }

  banner = () => (
    <Banner>
      <BannerHead>
        <BannerImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <CloseButton
          type="button"
          onClick={this.onCloseBanner}
          data-testid="close"
        >
          <IoClose />
        </CloseButton>
      </BannerHead>
      <BannerHeadText>
        But Nxt Watch Premium prepaid plans with <br /> UPI
      </BannerHeadText>
      <GetItNow>GET IT NOW</GetItNow>
    </Banner>
  )

  renderVideos = () => {
    const {videos} = this.state
    return (
      <VideosContainer>
        {videos.map(each => (
          <VideoItem key={each.id} details={each} />
        ))}
      </VideosContainer>
    )
  }

  noVideosView = () => (
    <Context.Consumer>
      {value => {
        const {isDark} = value
        const imageUrl = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        return (
          <NoVideosContainer>
            <NoVideosImage src={imageUrl} alt="not found" />
            <NoVideosHeader isDark={isDark}>
              No Search results found
            </NoVideosHeader>
            <NoVideosDescription>
              Try different key words or remove search filter
            </NoVideosDescription>
            <RetryButton type="button" onClick={this.getHomeVideos}>
              Retry
            </RetryButton>
          </NoVideosContainer>
        )
      }}
    </Context.Consumer>
  )

  VideosSectionView = () => {
    const {state} = this.state
    switch (state) {
      case constantStates.loading:
        return <Load />
      case constantStates.success:
        return this.renderVideos()
      case constantStates.failure:
        return <FailureView retry={this.getHomeVideos} />
      case constantStates.noVideos:
        return this.noVideosView()
      default:
        return null
    }
  }

  render() {
    const {isBannerDisplayed} = this.state
    return (
      <Context.Consumer>
        {value => {
          const {isDark} = value
          return (
            <HomeContainer isDark={isDark} data-testid="home">
              <Navbar />
              <HomeBody>
                <LeftBar />
                <MainBarContainer isDark={isDark}>
                  {isBannerDisplayed && this.banner()}
                  {this.searchInput()}
                  {this.VideosSectionView()}
                </MainBarContainer>
              </HomeBody>
            </HomeContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default MainBar
