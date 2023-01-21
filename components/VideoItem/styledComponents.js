import styled from 'styled-components'

export const VideoContainer = styled.div`
  width: 320px;
  margin: 0px 22px 22px 0px;
  height: auto;
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
  color: #1e293b;
  margin-top: 0px;
  font-size: 15px;
`
export const ChannelName = styled.p`
  color: #475569;
  font-size: 14px;
  margin: 5px 0px;
`
export const ViewsAndTimeAgo = styled.div`
  color: #475569;
  display: flex;
`
export const Views = styled(Title)`
  color: #475569;
  font-size: 14px;
`
export const UploadedDate = styled(Views)``
