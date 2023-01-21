import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {
  VideosContainer,
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

class Video extends Component {
  state = {video: '', state: constantStates.initial}

  componentDidMount() {
    this.getVideoDetails()
  }

  successfulFetch = data => {
    console.log(data)
  }

  getVideoDetails = async () => {
    this.setState({state: constantStates.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const videoUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(videoUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.successfulFetch(data)
    } else {
      this.setState({state: constantStates.failure})
    }
  }

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
    return <VideosContainer>{this.VideosSectionView()}</VideosContainer>
  }
}

export default Video
