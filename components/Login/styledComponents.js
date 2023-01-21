import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    min-width: 350px;
  }
`
export const LoginBox = styled.div`
  height: 380px;
  width: 380px;
  box-shadow: 0px 0px 25px 0px #bfbfbf, 0px 0px 25px 0px #bfbfbf;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-family: roboto;

  @media screen and (max-width: 767px) {
    width: 84%;
  }
`

export const Logo = styled.img`
  height: 50px;

  @media screen and (max-width: 767px) {
    height: 30px;
  }
`
export const FormContainer = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  color: #616e7c;
  font-size: 11px;
  font-weight: bold;
  margin: 16px 0px 4px 0px;
  text-transform: uppercase;
`

export const Input = styled.input`
  border: 1px solid #cccccc;
  padding: 7px;
  border-radius: 3px;
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0px;
`
export const ShowPassword = styled.label`
  padding: 0px 0px 0px 4px;
  font-size: 13px;
`
export const Submit = styled.button`
  color: white;
  background-color: #3b82f6;
  padding: 9px;
  border-radius: 5px;
  border-width: 0px;
  margin: 15px 0px;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  color: red;
  align-self: flex-start;
  font-size: 13px;
  margin-top: -9px;
`
