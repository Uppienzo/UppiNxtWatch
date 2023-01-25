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

export const SavedVideosContainer = styled.div`
  min-height: 90vh;
  overflow: auto;
  width: 100%;
  background-color: ${props => (props.isDark ? '#0f0f0f ' : '#f9f9f9')};
  font-family: roboto;
  @media screen and (max-width: 767px) {
    min-height: 100vh;
  }
`

export const HeadContainer = styled.div`
  background-color: ${props => (props.isDark ? ' #212121' : ' #ebebeb')};
  color: ${props => (props.isDark ? ' white' : ' #black')};
  padding: 5px 30px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    padding: 3px 8px;
  }
`
export const Icon = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#d7dfe9')};
  color: #ff0000;
  font-size: 28px;
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 18px;
  @media screen and (max-width: 767px) {
    font-size: 18px;
    padding: 10px;
    margin: 8px;
  }
`
export const TrendingHead = styled.h1`
  @media screen and (max-width: 767px) {
    font-size: 23px;
  }
`

export const TrendingVideosContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  @media screen and (max-width: 767px) {
    align-items: center;
  }
`
export const NoSavedVideosContainer = styled.div`
  font-family: roboto;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const NoSavedImage = styled.img`
  height: 300px;
  @media screen and (max-width: 767px) {
    height: 150px;
  }
`

export const NoSaveHead = styled.h1`
  color: ${props => (props.isDark ? ' #f1f1f1' : ' #1e293b')};
  font-size: 22px;
  @media screen and (max-width: 767px) {
    font-size: 17px;
  }
`

export const NoSaveDescription = styled.p`
  font-size: 17px;
  color: #7e858e;
  margin: 0px;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`
