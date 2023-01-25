import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import Context from '../../context'
import {
  TrendingVideoItem,
  Thumbnial,
  VideoDescriptionContainer,
  Title,
  ChannelName,
  ViewsAndTimeAgo,
  Views,
  UploadedDate,
  ChannelData,
  Dot,
  DescriptionContainer,
  Profile,
} from './styledComponents'

const SavedVideoItem = props => {
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
            <TrendingVideoItem>
              <Thumbnial src={thumbnailUrl} alt="video thumbnail" />
              <DescriptionContainer>
                <Profile src={profileImageUrl} alt="profile" />

                <VideoDescriptionContainer>
                  <Title isDark={isDark}> {title} </Title>
                  <ChannelData>
                    <ChannelName> {name} </ChannelName>
                    <Dot>
                      <BsDot />
                    </Dot>
                    <ViewsAndTimeAgo>
                      <Views>{viewCount} Views</Views>
                      <BsDot />
                      <UploadedDate> {now}</UploadedDate>
                    </ViewsAndTimeAgo>
                  </ChannelData>
                </VideoDescriptionContainer>
              </DescriptionContainer>
            </TrendingVideoItem>
          </Link>
        )
      }}
    </Context.Consumer>
  )
}

export default SavedVideoItem
