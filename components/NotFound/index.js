import {NotfoundContainer, Image, Description, Header} from './styledComponents'
import Context from '../../context'

const NotFound = () => (
  <Context.Consumer>
    {value => {
      const {isDark} = value
      const imageUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <NotfoundContainer isDark={isDark}>
          <Image src={imageUrl} alt="not-found" />
          <Header isDark={isDark}>Page NotFound</Header>
          <Description isDark={isDark}>
            We are sorry, the page you requested could not be found.
          </Description>
        </NotfoundContainer>
      )
    }}
  </Context.Consumer>
)

export default NotFound
