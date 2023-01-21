import styled from 'styled-components'

export const MainBarContainer = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #f8fafc;
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
`
export const BannerHead = styled.div`
  display: flex;
  justify-content: space-between;

  align-self: stretch;
`

export const BannerImage = styled.img`
  height: 35px;
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
`
export const GetItNow = styled.button`
  color: #1e293b;
  font-size: 15px;
  font-weight: 500;
  padding: 10px 15px;
  border: 2px solid #1e293b;
  background-color: white;
  border-radius: 4px;
`
export const VideosContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  height: 400px;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
`
export const LoadAnimation = styled.div`
  color: #3b82f6;
  text-align: center;
  margin-top: 120px;
`
export const SearchContainer = styled.div`
  width: 360px;
  background-color: #e2e8f0;
  display: flex;
  padding-right: 13px;
  align-items: center;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  margin: 15px;
`
export const Search = styled.input`
  padding: 10px;
  flex-grow: 1;
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
`
export const NoVideosHeader = styled.h1`
  color: black;
  font-size: 22px;
`
export const NoVideosDescription = styled.p`
  font-size: 17px;
  color: #7e858e;
  margin: 0px;
  text-align: center;
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
