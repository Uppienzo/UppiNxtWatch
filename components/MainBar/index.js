import {Component} from 'react'
import {IoClose} from 'react-icons/io5'
import {BiSearchAlt} from 'react-icons/bi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import VideoItem from '../VideoItem'

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
      console.log(updatedVideos)
    } else {
      this.setState({videos: updatedVideos, state: constantStates.success})
      console.log(updatedVideos)
    }
  }

  failureFetch = () => {
    this.setState({state: constantStates.failure})
  }

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
      <RetryButton type="button" onClick={this.getHomeVideos}>
        Retry
      </RetryButton>
    </NoVideosContainer>
  )

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

  loader = () => (
    <LoadAnimation className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color=" #3b82f6" height="50" width="50" />
    </LoadAnimation>
  )

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  searchInput = () => {
    const {searchInput} = this.state
    return (
      <SearchContainer>
        <Search
          type="search"
          placeholder="Search"
          value={searchInput}
          onChange={this.onChangeSearchInput}
        />
        <SearchButton type="button" onClick={this.getHomeVideos}>
          <BiSearchAlt />
        </SearchButton>
      </SearchContainer>
    )
  }

  banner = () => (
    <Banner>
      <BannerHead>
        <BannerImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <CloseButton type="button" onClick={this.onCloseBanner}>
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
    <NoVideosContainer>
      <NoVideosImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoVideosHeader>No Search results found</NoVideosHeader>
      <NoVideosDescription>
        Try different key words or remove search filter
      </NoVideosDescription>
      <RetryButton type="button" onClick={this.getHomeVideos}>
        Retry
      </RetryButton>
    </NoVideosContainer>
  )

  VideosSectionView = () => {
    const {state} = this.state
    switch (state) {
      case constantStates.loading:
        return this.loader()
      case constantStates.success:
        return this.renderVideos()
      case constantStates.failure:
        return this.failureView()
      case constantStates.noVideos:
        return this.noVideosView()
      default:
        return null
    }
  }

  render() {
    const {isBannerDisplayed} = this.state
    return (
      <MainBarContainer>
        {isBannerDisplayed && this.banner()}
        {this.searchInput()}
        {this.VideosSectionView()}
      </MainBarContainer>
    )
  }
}

export default MainBar
