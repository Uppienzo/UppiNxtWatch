import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike} from 'react-icons/bi'
import {HiSortDescending} from 'react-icons/hi'

import ReactPlayer from 'react-player'

import {Component} from 'react'
import Cookies from 'js-cookie'
import Context from '../../context'
import Load from '../Loader'
import FailureView from '../AuthenticationFailure'

import Navbar from '../Navbar'
import LeftBar from '../LeftBar'

import {
  VideosContainer,
  VideoContainer,
  Title,
  InfoContainer,
  ViewsAndTimeAgo,
  Views,
  UploadedDate,
  ChannelInfo,
  ChannelProfile,
  ChannelDetailsContainer,
  ChannelName,
  Subscribers,
  Description,
  LikeAndSaveContainer,
  Like,
  DisLike,
  Icon,
  Save,
  VideoPlayer,
  HomeContainer,
  HomeBody,
} from './styledComponents'

const constantStates = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class Video extends Component {
  state = {
    video: '',
    state: constantStates.initial,
    isLikeActive: false,
    isDislikeActive: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  successfulFetch = data => {
    const VideoDetails = data.video_details
    const updatedVideoDetails = {
      channel: {
        name: VideoDetails.channel.name,
        profileImageUrl: VideoDetails.channel.profile_image_url,
        subscriberCount: VideoDetails.channel.subscriber_count,
      },
      id: VideoDetails.id,
      description: VideoDetails.description,
      publishedAt: VideoDetails.published_at,
      thumbnailUrl: VideoDetails.thumbnail_url,
      title: VideoDetails.title,
      videoUrl: VideoDetails.video_url,
      viewsCount: VideoDetails.view_count,
    }
    this.setState({video: updatedVideoDetails, state: constantStates.success})
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

  videoContent = () => {
    const {video, isLikeActive, isDislikeActive} = this.state

    console.log(isLikeActive, isDislikeActive)
    const {
      channel,
      description,
      publishedAt,
      title,
      videoUrl,
      viewsCount,
    } = video
    const {name, profileImageUrl, subscriberCount} = channel
    const date = formatDistanceToNow(new Date(publishedAt))

    const toggleLikeButton = () => {
      this.setState({isLikeActive: true, isDislikeActive: false})
    }
    const toggleDisLikeButton = () => {
      this.setState({isLikeActive: false, isDislikeActive: true})
    }

    const time = date.split(' ')
    const now = `${time[1]} years ago`

    const LikeSaveContainer = () => (
      <Context.Consumer>
        {value => {
          const {saveVideo, savedVideos} = value
          const onSaveVideo = () => {
            saveVideo(video)
          }
          const noOfVideos = savedVideos.filter(each => each.id === video.id)

          const isVideoExist = noOfVideos.length > 0
          let isPresent
          let savedText
          if (isVideoExist) {
            savedText = 'Saved'
            isPresent = true
          } else {
            isPresent = false
            savedText = 'Save'
          }

          return (
            <LikeAndSaveContainer>
              <Like
                type="button"
                active={isLikeActive}
                onClick={toggleLikeButton}
              >
                <Icon>
                  <BiLike />
                </Icon>{' '}
                Like
              </Like>{' '}
              <DisLike
                type="button"
                active={isDislikeActive}
                onClick={toggleDisLikeButton}
              >
                {' '}
                <Icon>
                  <BiDislike />
                </Icon>
                Dislike
              </DisLike>
              <Save type="button" active={isPresent} onClick={onSaveVideo}>
                <Icon>
                  <HiSortDescending />
                </Icon>
                {savedText}
              </Save>
            </LikeAndSaveContainer>
          )
        }}
      </Context.Consumer>
    )

    const infoContainer = () => (
      <InfoContainer>
        <ViewsAndTimeAgo>
          <Views>{viewsCount} Views</Views>
          <BsDot />
          <UploadedDate> {now}</UploadedDate>
        </ViewsAndTimeAgo>
        {LikeSaveContainer()}
      </InfoContainer>
    )

    const channelInfo = () => (
      <Context.Consumer>
        {value => {
          const {isDark} = value
          return (
            <ChannelInfo>
              <ChannelProfile src={profileImageUrl} alt="profile" />
              <ChannelDetailsContainer>
                <ChannelName isDark={isDark}>{name}</ChannelName>
                <Subscribers>{subscriberCount} subscribers </Subscribers>
              </ChannelDetailsContainer>
            </ChannelInfo>
          )
        }}
      </Context.Consumer>
    )

    return (
      <Context.Consumer>
        {value => {
          const {isDark} = value
          return (
            <VideoContainer>
              <VideoPlayer>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width="100%"
                  height="100%"
                  className="video-player"
                />
              </VideoPlayer>
              <Title isDark={isDark}>{title} </Title>
              {infoContainer()}
              <hr />
              {channelInfo()}
              <Description> {description} </Description>
            </VideoContainer>
          )
        }}
      </Context.Consumer>
    )
  }

  VideosSectionView = () => {
    const {state} = this.state
    switch (state) {
      case constantStates.loading:
        return <Load />
      case constantStates.success:
        return this.videoContent()
      case constantStates.failure:
        return <FailureView />
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
            <HomeContainer isDark={isDark} data-testid="videoItemDetails">
              <Navbar />
              <HomeBody>
                <LeftBar />
                <VideosContainer isDark={isDark}>
                  {this.VideosSectionView()}
                </VideosContainer>
              </HomeBody>
            </HomeContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Video
