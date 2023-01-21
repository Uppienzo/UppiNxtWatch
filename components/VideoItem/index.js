import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import {
  VideoContainer,
  Thumbnail,
  VideoInfo,
  ChannelProfile,
  VideoDescription,
  ChannelName,
  Title,
  ViewsAndTimeAgo,
  Views,
  UploadedDate,
} from './styledComponents'

const VideoItem = props => {
  const {details} = props
  const {id, thumbnailUrl, channel, title, viewCount, publishedAt} = details
  const {name, profileImageUrl} = channel
  const date = formatDistanceToNow(new Date(publishedAt))

  const time = date.split(' ')
  const now = `${time[1]} years ago`

  return (
    <Link
      to={`/videos/${id}`}
      style={{color: 'inherit', textDecoration: 'none'}}
    >
      <VideoContainer>
        <Thumbnail src={thumbnailUrl} alt="video" />
        <VideoInfo>
          <ChannelProfile src={profileImageUrl} alt="profile" />
          <VideoDescription>
            <Title> {title} </Title>
            <ChannelName> {name} </ChannelName>
            <ViewsAndTimeAgo>
              <Views>{viewCount} Views</Views>
              <BsDot />
              <UploadedDate> {now}</UploadedDate>
            </ViewsAndTimeAgo>
          </VideoDescription>
        </VideoInfo>
      </VideoContainer>
    </Link>
  )
}

export default VideoItem
