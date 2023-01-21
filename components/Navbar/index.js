import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {FaMoon} from 'react-icons/fa'

import {
  NavbarContainer,
  Logo,
  NavOptions,
  Profile,
  Logout,
  ThemeButton,
  HomeButton,
} from './styledComponents'

const Navbar = props => {
  const {history} = props
  const onHomeButton = () => {
    history.push('/')
  }

  const onLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <NavbarContainer>
      <HomeButton type="button" onClick={onHomeButton}>
        <Logo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
      </HomeButton>

      <NavOptions>
        <ThemeButton>
          <FaMoon />
        </ThemeButton>
        <Profile
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />
        <Logout type="button" onClick={onLogout}>
          Logout
        </Logout>
      </NavOptions>
    </NavbarContainer>
  )
}

export default withRouter(Navbar)
