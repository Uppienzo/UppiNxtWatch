import styled from 'styled-components'

export const NotfoundContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '  #f8fafc')};
  flex-direction: column;
  align-items: center;
  padding: 50px 0px;
  font-family: roboto;
  @media screen and (max-width: 767px) {
    padding: 19px;
    padding-top: 70px;
  }
`
export const Image = styled.img`
  height: 320px;
  @media screen and (max-width: 767px) {
    height: 180px;
  }
`
export const Header = styled.h1`
  color: ${props => (props.isDark ? ' white' : ' #1e293b')};
  @media screen and (max-width: 767px) {
    font-size: 19px;
  }
`
export const Description = styled.p`
  color: #94a3b8;
  margin: 0px;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`
