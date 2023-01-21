import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {
  TrendingVideoItem,
  Thumbnial,
  VideoDescriptionContainer,
  Title,
  ChannelName,
  ViewsAndTimeAgo,
  Views,
  UploadedDate,
} from './styledComponents'

const TrendingVideoITem = props => {
  const {details} = props
  const {id, thumbnailUrl, channel, title, viewCount, publishedAt} = details
  const {name} = channel

  const date = formatDistanceToNow(new Date(publishedAt))

  const time = date.split(' ')
  const now = `${time[1]} years ago`
  return (
    <Link
      to={`/videos/${id}`}
      style={{color: 'inherit', textDecoration: 'none'}}
    >
      <TrendingVideoItem>
        <Thumbnial src={thumbnailUrl} alt="video" />
        <VideoDescriptionContainer>
          <Title> {title} </Title>
          <ChannelName> {name} </ChannelName>
          <ViewsAndTimeAgo>
            <Views>{viewCount} Views</Views>
            <BsDot />
            <UploadedDate> {now}</UploadedDate>
          </ViewsAndTimeAgo>
        </VideoDescriptionContainer>
      </TrendingVideoItem>
    </Link>
  )
}

export default TrendingVideoITem
