import styled from 'styled-components'

export const NavbarContainer = styled.div`
  height: 70px;
  padding: 0px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.isDark ? '#313131' : 'white')};
  @media screen and (max-width: 767px) {
    padding: 0px 5px;
    height: 50px;
  }
`

export const HomeButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const Logo = styled.img`
  height: 30px;
  @media screen and (max-width: 767px) {
    height: 22px;
  }
`
export const NavOptions = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 110px;
  }
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  font-size: 25px;
  cursor: pointer;
  color: ${props => (props.isDark ? 'white' : 'black')};
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    font-size: 17px;
    padding-bottom: 3px;
  }
`

export const Profile = styled.img`
  height: 30px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const Menu = styled.button`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
    color: ${props => (props.isDark ? 'white' : 'black')};
    background-color: transparent;
    border-width: 0px;
    font-size: 17px;
  }
`

export const Logout = styled.button`
  background-color: transparent;

  border: 2px solid ${props => (props.isDark ? 'white' : '#3b82f6')};
  color: ${props => (props.isDark ? 'white' : '#3b82f6')};
  padding: 5px 15px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 17px;
  font-family: roboto;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const LogoutSmall = styled.button`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
    color: ${props => (props.isDark ? 'white' : 'black')};
    background-color: transparent;
    border-width: 0px;
    font-size: 17px;
  }
`

export const LogOutContainer = styled.div`
  width: 400px;
  padding: 10px;

  background-color: ${props => (props.isDark ? '#424242' : ' #f4f4f4')};
  border-radius: 5px;
  border: 2px solid #d7dfe9;
  @media screen and (max-width: 767px) {
    width: 300px;
  }
`
export const Header = styled.p`
  color: ${props => (props.isDark ? ' #f1f1f1' : ' #1e293b')};
  text-align: center;
  font-family: roboto;
  margin: 20px;
`
export const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  margin: 25px auto;
`
export const Cancel = styled.button`
  background-color: transparent;
  color: #94a3b8;
  border: 2px solid #94a3b8;
  border-radius: 3px;
  width: 100px;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  font-size: 25px;
  align-self: flex-end;
  margin: 15px 15px 0px 0px;
`

export const Confirm = styled(Cancel)`
  color: white;
  background-color: #3b82f6;
  border-color: #3b82f6;
`
export const SideBar = styled.div`
  width: 100vw;
  background-color: white;
  height: 800vh;
  display: flex;
  flex-direction: column;
`
