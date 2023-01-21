import {NotfoundContainer, Image, Description, Header} from './styledComponents'

const NotFound = () => (
  <NotfoundContainer>
    <Image
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
      alt="not-found"
    />
    <Header>Page NotFound</Header>
    <Description>
      We are sorry, the page you requested could not be found.
    </Description>
  </NotfoundContainer>
)

export default NotFound
