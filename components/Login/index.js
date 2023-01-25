import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Context from '../../context'
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
    <Context.Consumer>
      {value => {
        const {isDark} = value
        const imageUrl = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        return <Logo src={imageUrl} alt="website logo" />
      }}
    </Context.Consumer>
  )

  form = () => {
    const {username, password, showPassword, error} = this.state
    const modifiedPassword = showPassword ? 'text' : 'password'
    return (
      <Context.Consumer>
        {value => {
          const {isDark} = value
          return (
            <FormContainer onSubmit={this.onSubmitForm}>
              <Label isDark={isDark}>Username</Label>
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={this.onChangeUsername}
                isDark={isDark}
              />
              <Label isDark={isDark}>Password</Label>
              <Input
                type={modifiedPassword}
                placeholder="Password"
                value={password}
                onChange={this.onChangePassword}
                isDark={isDark}
              />
              <ShowPasswordContainer>
                <input
                  id="checkbox"
                  type="checkBox"
                  onChange={this.toggleShowPassword}
                />
                <ShowPassword htmlFor="checkbox" isDark={isDark}>
                  Show Password
                </ShowPassword>
              </ShowPasswordContainer>
              <Submit type="submit">Login</Submit>
              {error && this.errorMessage()}
            </FormContainer>
          )
        }}
      </Context.Consumer>
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
      <Context.Consumer>
        {value => {
          const {isDark} = value
          return (
            <LoginContainer isDark={isDark}>
              <LoginBox isDark={isDark}>
                {this.logo()}
                {this.form()}
              </LoginBox>
            </LoginContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Login
