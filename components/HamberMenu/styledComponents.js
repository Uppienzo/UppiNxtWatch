import styled from 'styled-components'

export const LeftBarContainer = styled.div`
  background-color: ${props => (props.isDark ? '#313131' : 'white')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const Tab = styled.button`
  background-color: ${props => {
    if (props.isDark) {
      return props.activeTab ? ' #424242' : 'transparent'
    }
    return props.activeTab ? ' #f1f5f9' : 'transparent'
  }};
  border-width: 0px;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 19px;
  padding: 7px 15px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#475569')};
  font-weight: 400;
  width: 100%;
  border-radius: 5px;
`
export const RoutesContainer = styled.ul`
  list-style-type: none;
  width: 100%;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
`
export const Route = styled.li`
  margin-left: 15px;
  font-family: roboto;
  font-size: 16px;
`
export const Icon = styled.div`
  margin-top: 2px;
`
export const Info = styled.div`
  margin: 10px;
  color: ${props => (props.isDark ? 'white' : ' #475569')};
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const Contact = styled.p`
  font-weight: bold;
  text-transform: uppercase;
`
export const NetworkImages = styled.div`
  display: flex;
`
export const Image = styled.img`
  height: 30px;
  margin: 10px 15px 10px 0px;
`
export const Descriptions = styled.p``
