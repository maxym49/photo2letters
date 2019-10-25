import React, {Component} from 'react';
import {View, Text, Alert} from 'react-native';
import Header from '../../components/start-page/header/header';
import BackgroundContainer from '../../components/global-components/background-container/backgroundContainer';
import Input from '../../components/global-components/input/input';
import {
  EMAIL_INPUT_PLACEHOLDER,
  REGISTER_PAGE_HEADER,
  REGISTER_PAGE_SUB_HEADER,
  PASSWORD_INPUT_PLACEHOLDER,
  START_PAGE_CREATE_ACCOUNT_BUTTON_TEXT,
  RE_TYPE_PASSWORD_INPUT_PLACEHOLDER,
  PASSWORD_VALIDATION_ERROR_MESSAGE,
  EMAIL_VALIDATION_ERROR_MESSAGE,
} from '../../common/constant-text/texts';
import {PRIMARY} from '../../common/styles-variables/colors';
import {REGISTER_URL} from '../../common/env/env';
import {setToken} from '../../common/auth/token';
import {navigateTo} from '../../common/router/commonFunctions';
import {ButtonWithOutBorder} from '../../components/global-components/buttons/buttonWithOutBorder/button';
import {
  textFontFamily,
  textFontSize,
  textFontColor,
  headerFontColor,
  headerFontSize,
  headerFontFamily,
} from '../../common/styles-variables/typography/typography';

export default class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      rePassword: '',
      formNotValid: true,
      isEmailValid: false,
    };
  }

  navigateToLogin = () => {
    const ra = navigateTo('Login');
    this.props.navigation.dispatch(ra);
  };

  onRegisterPress() {
    const {email, password} = this.state;
    fetch(REGISTER_URL, {
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
          Alert.alert(
            'Please, try again',
            'This account already exists.',
            [{text: 'OK'}],
            {
              cancelable: false,
            },
          );
        }
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
    const {password, rePassword, email, isEmailValid} = this.state;
    const canCheck = email.length && password.length && rePassword.length;
    if (canCheck && isEmailValid) {
      const {password, rePassword} = this.state;
      this.setState({
        formNotValid: password !== rePassword,
      });
    }
  };

  isEmailValid = isEmailValid => this.setState({isEmailValid});

  render() {
    const {email, password, rePassword, formNotValid} = this.state;
    return (
      <>
        <BackgroundContainer>
          <Header from="Register" disabled navigation={this.props.navigation} />
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              position: 'relative',
              padding: 50,
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
                {REGISTER_PAGE_HEADER}
              </Text>
              <Text
                style={{
                  fontFamily: textFontFamily,
                  fontSize: textFontSize,
                  color: textFontColor,
                }}>
                {REGISTER_PAGE_SUB_HEADER}
              </Text>
            </View>
            <Input
              errorMessage={EMAIL_VALIDATION_ERROR_MESSAGE}
              isValueValid={this.isEmailValid}
              type="email"
              text={email}
              action={this.onEmailChange}
              placeholder={EMAIL_INPUT_PLACEHOLDER}
            />
            <Input
              errorMessage={PASSWORD_VALIDATION_ERROR_MESSAGE}
              type="password"
              text={password}
              action={this.onPasswordChange}
              security
              placeholder={PASSWORD_INPUT_PLACEHOLDER}
            />
            <Input
              errorMessage={PASSWORD_VALIDATION_ERROR_MESSAGE}
              type="password"
              text={rePassword}
              action={this.onRePasswordChange}
              security
              placeholder={RE_TYPE_PASSWORD_INPUT_PLACEHOLDER}
            />
            <View
              style={{
                width: '100%',
                position: 'absolute',
                bottom: 50,
                left: 50,
              }}>
              <ButtonWithOutBorder
                disabled={formNotValid}
                action={this.onRegisterPress.bind(this)}
                text={START_PAGE_CREATE_ACCOUNT_BUTTON_TEXT}
                btnStyle={{
                  marginTop: 30,
                }}
              />
            </View>
          </View>
        </BackgroundContainer>
      </>
    );
  }
}
