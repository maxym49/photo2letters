import React, {Component} from 'react';
import Header from '../../components/start-page/header/header';
import LoginHeader from '../../components/login-register-page/header/header';
import BackgroundContainer from '../../components/global-components/background-container/backgroundContainer';
import ContentWrapper from '../../components/global-components/content-wrapper/contentWrapper';
import Input from '../../components/global-components/input/input';
import {
  EMAIL_INPUT_PLACEHOLDER,
  REGISTER_PAGE_HEADER,
  REGISTER_PAGE_SUB_HEADER,
  PASSWORD_INPUT_PLACEHOLDER,
  START_PAGE_CREATE_ACCOUNT_BUTTON_TEXT,
  RE_TYPE_PASSWORD_INPUT_PLACEHOLDER,
} from '../../common/constant-text/texts';
import Button from '../../components/global-components/buttons/button';
import {PRIMARY} from '../../common/styles-variables/colors';
import {DEV_REGISTER_URL} from '../../common/env/env';
import {setToken} from '../../common/auth/token';
import {navigateTo} from '../../common/router/commonFunctions';

export default class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rePassword: '',
      formNotValid: true,
    };
  }

  navigateToLogin = () => {
    const ra = navigateTo('Login');
    this.props.navigation.dispatch(ra);
  };

  onRegisterPress() {
    const {email, password} = this.state;
    fetch(DEV_REGISTER_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(response => {
        if (response.ok) return response.json();
      })
      .then(responseJson => {
        if (responseJson) {
          setToken(responseJson.token);
          this.navigateToLogin();
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  onEmailChange = t => {
    this.setState({
      email: t,
    });
  };

  onPasswordChange = t => {
    this.setState(
      {
        password: t,
      },
      () => this.validForm(),
    );
  };

  onRePasswordChange = t => {
    this.setState(
      {
        rePassword: t,
      },
      () => this.validForm(),
    );
  };

  validForm = () => {
    const {password, rePassword, email} = this.state;
    const canCheck = email.length && password.length && rePassword.length;
    if (canCheck) {
      const {password, rePassword} = this.state;
      this.setState({
        formNotValid: password !== rePassword,
      });
    }
  };

  render() {
    const {navigation} = this.props;
    const {email, password, rePassword, formNotValid} = this.state;
    return (
      <>
        <BackgroundContainer>
          <Header navigation={navigation} />
          <ContentWrapper
            style={{
              marginTop: 40,
            }}>
            <LoginHeader
              headerText={REGISTER_PAGE_HEADER}
              subHeaderText={REGISTER_PAGE_SUB_HEADER}
            />
            <Input
              text={email}
              action={this.onEmailChange}
              placeholder={EMAIL_INPUT_PLACEHOLDER}
            />
            <Input
              text={password}
              action={this.onPasswordChange}
              security
              placeholder={PASSWORD_INPUT_PLACEHOLDER}
            />
            <Input
              text={rePassword}
              action={this.onRePasswordChange}
              security
              placeholder={RE_TYPE_PASSWORD_INPUT_PLACEHOLDER}
            />
            <Button
              disabled={formNotValid}
              action={this.onRegisterPress.bind(this)}
              shadow
              text={START_PAGE_CREATE_ACCOUNT_BUTTON_TEXT}
              btnStyle={{
                backgroundColor: PRIMARY,
                marginTop: 30,
              }}
            />
          </ContentWrapper>
        </BackgroundContainer>
      </>
    );
  }
}
