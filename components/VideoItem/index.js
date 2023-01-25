import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import Context from '../../context'

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
    <Context.Consumer>
      {value => {
        const {shiftTab, isDark} = value
        const onTap = () => {
          shiftTab('NONE')
        }
        return (
          <Link
            to={`/videos/${id}`}
            style={{color: 'inherit', textDecoration: 'none'}}
            onClick={onTap}
          >
            <VideoContainer>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoInfo>
                <ChannelProfile src={profileImageUrl} alt="channel logo" />
                <VideoDescription>
                  <Title isDark={isDark}> {title} </Title>
                  <ChannelName isDark={isDark}> {name} </ChannelName>
                  <ViewsAndTimeAgo>
                    <Views isDark={isDark}>{viewCount} Views</Views>
                    <BsDot />
                    <UploadedDate isDark={isDark}> {now}</UploadedDate>
                  </ViewsAndTimeAgo>
                </VideoDescription>
              </VideoInfo>
            </VideoContainer>
          </Link>
        )
      }}
    </Context.Consumer>
  )
}

export default VideoItem
