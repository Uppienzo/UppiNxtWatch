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

export const GamesContainer = styled.div`
  min-height: 90vh;
  overflow: auto;
  width: 100%;
  background-color: ${props => (props.isDark ? '#0f0f0f ' : '  #f9f9f9')};
  font-family: roboto;
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
export const GamesHead = styled.h1`
  @media screen and (max-width: 767px) {
    font-size: 23px;
  }
`

export const GamesVideosContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    padding: 0px;
    justify-content: center;
  }
`
