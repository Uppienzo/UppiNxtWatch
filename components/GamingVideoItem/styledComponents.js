import styled from 'styled-components'

export const GameCardItem = styled.li`
  width: 230px;
  border-radius: 10px;
  margin: 25px 20px;
  @media screen and (max-width: 767px) {
    width: 155px;
    margin: 10px 5px;
  }
`
export const Thumbnail = styled.img`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 9px;
`
export const GameTitle = styled.p`
  margin: 0px;
  font-size: 15px;
  color: ${props => (props.isDark ? ' #f1f1f1' : ' #1e293b')};
  font-weight: bold;
`
export const Views = styled.p`
  margin: 5px 0px;
  font-size: 17px;
  color: #94a3b8;
  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
`
