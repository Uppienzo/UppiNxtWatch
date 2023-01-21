import styled from 'styled-components'

export const TrendingVideoItem = styled.div`
  width: 80%;
  display: flex;
  margin: 35px 20px;
`
export const Thumbnial = styled.img`
  height: 200px;
`
export const VideoDescriptionContainer = styled.div`
  padding: 3px 15px;
  font-family: roboto;
`

export const ChannelName = styled.p`
  color: #475569;
  font-size: 14px;

  margin: 5px 0px;
`
export const Title = styled.p`
  color: #1e293b;
  margin-top: 0px;
  font-size: 17px;
  font-weight: bold;
`

export const ViewsAndTimeAgo = styled.div`
  color: #475569;
  display: flex;
  align-items: center;
  height: 25px;
`
export const Views = styled.p`
  display: flex;
  color: #475569;
  font-size: 14px;
`
export const UploadedDate = styled(Views)``
