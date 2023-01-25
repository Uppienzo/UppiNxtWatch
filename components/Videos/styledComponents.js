import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => (props.isDark ? '#181818 ' : '  #f9f9f9')};
  @media screen and (max-width: 767px) {
    min-width: 350px;
  }
`

export const HomeBody = styled.div`
  display: flex;
`

export const VideosContainer = styled.div`
  min-height: 90vh;
  overflow: auto;
  padding: 20px;
  width: 100%;
  background-color: ${props => (props.isDark ? '#0f0f0f ' : ' #f9f9f9')};
  font-family: roboto;
  @media screen and (max-width: 767px) {
    padding: 0px;
    min-height: 100vh;
  }
`

export const VideoContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 767px) {
    width: 100%;
    min-width: 350px;
  }
`
export const VideoPlayer = styled.div`
  width: 80%;
  height: 350px;
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 200px;
  }
`

export const Title = styled.p`
  color: ${props => (props.isDark ? ' #f1f1f1' : ' #1e293b')};
  font-size: 15px;
  @media screen and (max-width: 767px) {
    margin: 2px 6px;
  }
`
export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const ViewsAndTimeAgo = styled.div`
  color: #94a3b8;
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    margin-left: 12px;
  }
`
export const Views = styled.p`
  color: #94a3b8;
  font-size: 14px;
`
export const UploadedDate = styled(Views)``

export const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
`
export const ChannelProfile = styled.img`
  height: 45px;
  margin: 0px 10px;
`
export const ChannelDetailsContainer = styled.div``

export const ChannelName = styled.h1`
  color: ${props => (props.isDark ? ' #f1f1f1' : ' #1e293b')};
  font-size: 15px;
`

export const Subscribers = styled.p`
  color: #94a3b8;
  font-size: 13px;
`
export const Description = styled(Subscribers)`
  margin: 15px 0px 0px 65px;
  font-size: 15px;
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`
export const LikeAndSaveContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Like = styled.button`
  cursor: pointer;
  background-color: transparent;
  border-width: 0px;
  width: 80px;
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`

export const DisLike = styled(Like)`
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
`

export const Save = styled(Like)`
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
`

export const Icon = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-right: 5px;
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`
