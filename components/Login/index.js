import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginContainer,
  FormContainer,
  Logo,
  LoginBox,
  Label,
  Input,
  ShowPasswordContainer,
  ShowPassword,
  Submit,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    error: false,
    errorMessage: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  toggleShowPassword = () => {
    this.setState(PrevState => ({showPassword: !PrevState.showPassword}))
  }

  onLoginSuccess = jwtToken => {
    this.setState({error: false})
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    const {history} = this.props
    history.replace('/')
  }

  onLoginFailure = errorMessage => {
    this.setState({errorMessage, error: true})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  logo = () => (
    <Logo
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
      alt="logo"
    />
  )

  form = () => {
    const {username, password, showPassword, error} = this.state
    const modifiedPassword = showPassword ? 'text' : 'password'
    return (
      <FormContainer onSubmit={this.onSubmitForm}>
        <Label>Username</Label>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUsername}
        />
        <Label>Password</Label>
        <Input
          type={modifiedPassword}
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
        <ShowPasswordContainer>
          <input
            id="checkbox"
            type="checkBox"
            onChange={this.toggleShowPassword}
          />
          <ShowPassword htmlFor="checkbox">Show Password</ShowPassword>
        </ShowPasswordContainer>
        <Submit type="submit">Login</Submit>
        {error && this.errorMessage()}
      </FormContainer>
    )
  }

  errorMessage = () => {
    const {errorMessage} = this.state
    return <ErrorMsg>*{errorMessage}</ErrorMsg>
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <LoginBox>
          {this.logo()}
          {this.form()}
        </LoginBox>
      </LoginContainer>
    )
  }
}

export default Login
