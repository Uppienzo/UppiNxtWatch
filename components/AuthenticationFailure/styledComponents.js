import styled from 'styled-components'

export const NoVideosContainer = styled.div`
  font-family: roboto;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767px) {
    padding: 20px;
  }
`
export const NoVideosImage = styled.img`
  height: 300px;
  @media screen and (max-width: 767px) {
    height: 170px;
  }
`
export const NoVideosHeader = styled.h1`
  color: ${props => (props.isDark ? '#f1f5f9' : 'black')};

  font-size: 22px;
  @media screen and (max-width: 767px) {
    font-size: 17px;
  }
`
export const NoVideosDescription = styled.p`
  font-size: 17px;
  color: #7e858e;
  margin: 0px;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 14px;
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
