import Cookie from 'js-cookie'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {
  AppContainer,
  FormContainer,
  LoginLogo,
  InputContainer,
  LoginButton,
  SubmitError,
  InputLabel,
  UserInput,
  CheckboxContainer,
  Checkbox,
  ShowPassword,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showError: false,
    errorMsg: '',
  }

  onChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = token => {
    const {history} = this.props
    Cookie.set('jwt_token', token, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => this.setState({showError: true, errorMsg})

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <>
        <InputLabel htmlFor="username">USERNAME</InputLabel>
        <UserInput
          type="text"
          value={username}
          onChange={this.onChangeHandler}
          placeholder="Username"
          id="username"
          name="username"
        />
      </>
    )
  }

  renderPassword = () => {
    const {password, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'
    return (
      <>
        <InputLabel htmlFor="password">PASSWORD</InputLabel>
        <UserInput
          type={inputType}
          value={password}
          onChange={this.onChangeHandler}
          placeholder="Password"
          id="password"
          name="password"
        />
        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            id="checkbox"
            onChange={this.onShowPassword}
          />
          <ShowPassword htmlFor="checkbox">Show Password</ShowPassword>
        </CheckboxContainer>
      </>
    )
  }

  render() {
    const {showError, errorMsg} = this.state
    const token = Cookie.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <AppContainer>
        <FormContainer onSubmit={this.onSubmitForm}>
          <LoginLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputContainer>{this.renderUsername()}</InputContainer>
          <InputContainer>{this.renderPassword()}</InputContainer>
          <LoginButton type="submit">Login</LoginButton>
          {showError && <SubmitError>*{errorMsg}</SubmitError>}
        </FormContainer>
      </AppContainer>
    )
  }
}
export default Login
