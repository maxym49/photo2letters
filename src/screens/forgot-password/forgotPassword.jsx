import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {forgotPassword} from '../../common/path-extracter/pathExtracter';
import BackgroundContainer from '../../components/global-components/background-container/backgroundContainer';
import Input from '../../components/global-components/input/input';
import styles from './forgotPassword.style';
import {
  FORGOT_PASSWORD_PAGE_EMAIL_TEXT,
  FORGOT_PASSWORD_PAGE_AUTH_TEXT,
  EMAIL_INPUT_PLACEHOLDER,
  EMAIL_VALIDATION_ERROR_MESSAGE,
  PASSWORD_VALIDATION_ERROR_MESSAGE,
  PASSWORD_INPUT_PLACEHOLDER,
  FORGOT_PASSWORD_CODE_RESET,
} from '../../common/constant-text/texts';
import CodeVerification from '../../components/forgot-password/codeVerification/codeVerification';
import {navigateTo} from '../../common/router/commonFunctions';

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: '', stage: '1'};
  }

  onEmailChange = email => this.setState({email});

  onPassChange = password => this.setState({password});

  goToVerification = isValid => {
    if (isValid) this.setState({stage: '2'});
  };

  goToLogin = isValid => {
    if (isValid) {
      navigateTo('Login', this.props);
    }
  };

  getStage = () => {
    const {stage} = this.state;
    switch (stage) {
      case '1':
        return this.renderForm();
      case '2':
        return this.renderVerfication();
      case '3':
        return this.renderReset();
    }
  };

  codeIsValid = () => this.setState({stage: '3'});

  renderForm = () => {
    const {email} = this.state;
    return (
      <>
        <Text style={styles.text}>{FORGOT_PASSWORD_PAGE_EMAIL_TEXT}</Text>
        <Text style={styles.subText}>{FORGOT_PASSWORD_PAGE_AUTH_TEXT}</Text>
        <Input
          text={email}
          placeholder={EMAIL_INPUT_PLACEHOLDER}
          errorMessage={EMAIL_VALIDATION_ERROR_MESSAGE}
          type="email"
          isValueValid={this.goToVerification}
          errorStyle={{width: '100%'}}
          action={this.onEmailChange}
          styles={{marginTop: 20, alignSelf: 'flex-start', width: '100%'}}
        />
      </>
    );
  };

  renderVerfication = () => {
    return (
      <>
        <CodeVerification codeIsValid={this.codeIsValid} />
      </>
    );
  };

  renderReset = () => {
    const {password} = this.state;
    return (
      <>
        <Text style={styles.subText}>{FORGOT_PASSWORD_CODE_RESET}</Text>
        <Input
          text={password}
          security
          isValueValid={this.goToLogin}
          placeholder={`new ${PASSWORD_INPUT_PLACEHOLDER}`}
          errorMessage={PASSWORD_VALIDATION_ERROR_MESSAGE}
          type="password"
          errorStyle={{width: '100%'}}
          action={this.onPassChange}
          styles={{marginTop: 10, alignSelf: 'flex-start', width: '100%'}}
        />
      </>
    );
  };

  render() {
    return (
      <>
        <BackgroundContainer>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              padding: 50,
              position: 'relative',
            }}>
            <View style={styles.container}>
              <Image
                source={forgotPassword}
                resizeMode="contain"
                style={styles.image}
              />
              {this.getStage()}
            </View>
          </View>
        </BackgroundContainer>
      </>
    );
  }
}
