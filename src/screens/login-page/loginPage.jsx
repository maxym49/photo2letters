import React, {Component} from 'react';
import {Text, View} from 'react-native';
import BackgroundContainer from '../../components/global-components/background-container/backgroundContainer';
import Input from '../../components/global-components/input/input';
import {
  EMAIL_INPUT_PLACEHOLDER,
  LOGIN_PAGE_HEADER,
  LOGIN_PAGE_SUB_HEADER,
  PASSWORD_INPUT_PLACEHOLDER,
  START_PAGE_LOGIN_TO_ACCOUNT_BUTTON_TEXT,
  LOGIN_PAGE_FORGOT_PASSWORD,
  EMAIL_VALIDATION_ERROR_MESSAGE,
  PASSWORD_VALIDATION_ERROR_MESSAGE,
} from '../../common/constant-text/texts';
import {LOGIN_URL} from '../../common/env/env';
import {getToken, setToken} from '../../common/auth/token';
import {navigateTo} from '../../common/router/commonFunctions';
import {ButtonWithBorder} from '../../components/global-components/buttons/buttonWithBorder/button';
import {ButtonWithOutBorder} from '../../components/global-components/buttons/buttonWithOutBorder/button';
import Header from '../../components/start-page/header/header';
import {
  headerFontFamily,
  headerFontSize,
  headerFontColor,
  textFontFamily,
  textFontSize,
  textFontColor,
} from '../../common/styles-variables/typography/typography';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isEmailValid: false,
      isPassValid: false,
    };

    if (getToken()) {
      this.navigateToApp();
    }
  }

  navigateToApp = () => {
    const ra = navigateTo('MainImport');
    this.props.navigation.dispatch(ra);
  };

  onLoginPress() {
    const {email, password} = this.state;
    fetch(LOGIN_URL, {
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
        else {
          this.setState({
            email: '',
            password: '',
          });
        }
      })
      .then(responseJson => {
        if (responseJson) {
          setToken(responseJson.token);
          this.navigateToApp();
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

  onPassChange = t => {
    this.setState({
      password: t,
    });
  };

  onForgotPasswordPress = () => {
    const ra = navigateTo('ForgotPassword');
    this.props.navigation.dispatch(ra);
  };

  isEmailValid = isEmailValid => {
    this.setState({
      isEmailValid,
    });
  };

  isPassValid = isPassValid => {
    this.setState({
      isPassValid,
    });
  };

  isFormValid = () => {
    //todo
    const {isEmailValid, isPassValid} = this.state;
    // if (isEmailValid && isPassValid)
    return true;
    // else return false;
  };

  render() {
    const {email, password} = this.state;
    return (
      <>
        <BackgroundContainer>
          <Header from="Login" disabled navigation={this.props.navigation} />
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              padding: 50,
              position: 'relative',
            }}>
            <View
              style={{
                alignItems: 'flex-start',
                width: '100%',
                marginBottom: 50,
              }}>
              <Text
                style={{
                  fontFamily: headerFontFamily,
                  fontSize: headerFontSize,
                  color: headerFontColor,
                }}>
                {LOGIN_PAGE_HEADER}
              </Text>
              <Text
                style={{
                  fontFamily: textFontFamily,
                  fontSize: textFontSize,
                  color: textFontColor,
                }}>
                {LOGIN_PAGE_SUB_HEADER}
              </Text>
            </View>
            <Input
              text={email}
              isValid={this.isEmailValid}
              errorMessage={EMAIL_VALIDATION_ERROR_MESSAGE}
              type="email"
              action={this.onEmailChange}
              placeholder={EMAIL_INPUT_PLACEHOLDER}
            />
            <Input
              security
              isValid={this.isPassValid}
              text={password}
              errorMessage={PASSWORD_VALIDATION_ERROR_MESSAGE}
              type="password"
              action={this.onPassChange}
              placeholder={PASSWORD_INPUT_PLACEHOLDER}
            />
            <View
              style={{
                width: '100%',
                position: 'absolute',
                bottom: 50,
                left: 50,
              }}>
              <ButtonWithBorder
                disabled={!this.isFormValid}
                action={this.onLoginPress.bind(this)}
                text={START_PAGE_LOGIN_TO_ACCOUNT_BUTTON_TEXT}
              />
              <ButtonWithOutBorder
                action={this.onForgotPasswordPress.bind(this)}
                text={LOGIN_PAGE_FORGOT_PASSWORD}
              />
            </View>
          </View>
        </BackgroundContainer>
      </>
    );
  }
}
