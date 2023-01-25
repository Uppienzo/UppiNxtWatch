import styled from 'styled-components'

export const VideoContainer = styled.li`
  width: 320px;
  margin: 0px 22px 22px 0px;
  height: auto;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const Thumbnail = styled.img`
  width: 100%;
`
export const VideoInfo = styled.div`
  margin: 3px 0px;
  font-family: roboto;

  display: flex;
`
export const ChannelProfile = styled.img`
  height: 40px;
  margin: 5px;
  margin-right: 10px;
`

export const VideoDescription = styled.div``

export const Title = styled.p`
  color: ${props => (props.isDark ? '#f1f5f9' : '#475569')};
  margin-top: 0px;
  font-size: 14px;
  color: ${props => (props.isDark ? 'white' : '#475569')};
`
export const ChannelName = styled.p`
  color: #475569;
  color: ${props => (props.isDark ? '#f1f5f9' : '#475569')};
  font-size: 14px;
  margin: 5px 0px;
`
export const ViewsAndTimeAgo = styled.div`
  display: flex;
  color: ${props => (props.isDark ? 'white' : '#475569')};
`
export const Views = styled(Title)`
  font-size: 14px;
`
export const UploadedDate = styled(Views)``
