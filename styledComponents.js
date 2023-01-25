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
