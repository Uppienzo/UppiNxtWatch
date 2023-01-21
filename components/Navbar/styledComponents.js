import styled from 'styled-components'

export const NavbarContainer = styled.div`
  height: 70px;
  padding: 0px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`
export const NavOptions = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  font-size: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const Profile = styled.img`
  height: 30px;
`

export const Logout = styled.button`
  background-color: white;
  border: 2px solid #3b82f6;
  color: #3b82f6;
  padding: 5px 15px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 17px;
  font-family: roboto;
  cursor: pointer;
`
