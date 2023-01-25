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

export const MainBarContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  background-color: ${props => (props.isDark ? '#181818 ' : '  #f9f9f9')};
  overflow: auto;
`
export const Banner = styled.div`
  height: 200px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  font-family: roboto;
  background-position: center;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  @media screen and (max-width: 767px) {
    height: 145px;
    padding: 0px 5px;
  }
`
export const BannerHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: stretch;
  @media screen and (max-width: 767px) {
    margin: 0px;
  }
`

export const BannerImage = styled.img`
  height: 35px;
  @media screen and (max-width: 767px) {
    height: 25px;
  }
`
export const CloseButton = styled.button`
  font-size: 20px;
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`

export const BannerHeadText = styled.p`
  color: #1e293b;
  font-size: 20px;
  font-weight: 500;
  @media screen and (max-width: 767px) {
    margin: 0px;
    padding: 0px;
    font-size: 15px;
  }
`
export const GetItNow = styled.button`
  color: #1e293b;
  font-size: 15px;
  font-weight: 500;
  padding: 10px 15px;
  border: 2px solid #1e293b;
  background-color: white;
  border-radius: 4px;
  @media screen and (max-width: 767px) {
    font-size: 11px;
    padding: 5px 10px;
  }
`
export const VideosContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  height: 400px;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 0px;
    justify-content: center;
    height: 100%;
  }
`
export const LoadAnimation = styled.div`
  color: #3b82f6;
  text-align: center;
  margin-top: 120px;
`
export const SearchContainer = styled.div`
  width: 360px;
  background-color: ${props => (props.isDark ? '#424242' : ' #e2e8f0')};
  display: flex;
  padding-right: 13px;
  align-items: center;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  margin: 15px;
  @media screen and (max-width: 767px) {
    width: 90%;
    margin: 8px auto;
  }
`
export const Search = styled.input`
  padding: 10px;
  flex-grow: 1;
  background-color: ${props => (props.isDark ? '#212121' : 'white')};
  color: ${props => (props.isDark ? 'white' : '#212121')};
  margin-right: 13px;
  border-width: 0px;
  outline: none;
  border-radius: 4px;
`
export const SearchButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  font-size: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const NoVideosContainer = styled.div`
  font-family: roboto;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const NoVideosImage = styled.img`
  height: 300px;
  @media screen and (max-width: 767px) {
    height: 180px;
  }
`
export const NoVideosHeader = styled.h1`
  color: ${props => (props.isDark ? '#f1f5f9' : 'black')};
  font-size: 22px;
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`
export const NoVideosDescription = styled.p`
  font-size: 17px;
  color: #7e858e;
  margin: 0px;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: white;
  padding: 7px 18px;
  border-radius: 3px;
  border-width: 0px;
  margin-top: 15px;
  cursor: pointer;
`
