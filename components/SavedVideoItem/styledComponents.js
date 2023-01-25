import styled from 'styled-components'

export const TrendingVideoItem = styled.li`
  width: 80%;
  display: flex;
  margin: 35px 20px;
  @media screen and (max-width: 767px) {
    width: 345px;
    flex-direction: column;
    align-items: center;
    margin: 10px 5px;
  }
`
export const Thumbnial = styled.img`
  height: 200px;
  @media screen and (max-width: 767px) {
    width: 345px;
    height: 180px;
  }
`
export const VideoDescriptionContainer = styled.div`
  padding: 3px 15px;
  font-family: roboto;
  @media screen and (max-width: 767px) {
    align-self: flex-start;
    padding: 3px 5px;
  }
`

export const ChannelName = styled.p`
  color: #94a3b8;
  font-size: 14px;
  margin: 5px 0px;
  @media screen and (max-width: 767px) {
    margin: 0px;
    font-size: 14px;
  }
`
export const Title = styled.p`
  color: ${props => (props.isDark ? ' #f1f1f1' : ' #1e293b')};
  margin-top: 0px;
  font-size: 26px;
  font-weight: bold;
  @media screen and (max-width: 767px) {
    font-size: 14px;
    margin-top: auto;
  }
`

export const ViewsAndTimeAgo = styled.div`
  color: #94a3b8;
  display: flex;
  align-items: center;
  height: 25px;
`
export const Views = styled.p`
  display: flex;
  color: #94a3b8;
  font-size: 14px;
  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
`
export const UploadedDate = styled(Views)``

export const Dot = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    color: #94a3b8;
    display: flex;
    align-items: center;
    height: 25px;
    margin: 0px 5px;
  }
`
export const ChannelData = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    margin-top: auto;
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  padding: 0px;
`
export const Profile = styled.img`
  height: 35px;
  display: none;

  @media screen and (max-width: 767px) {
    display: inline;
    margin: 15px;
  }
`
