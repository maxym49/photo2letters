import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Input from '../../components/global-components/input/input';
import {
  MAIN_EMAILS_PAGE_SEND_ON_LABEL,
  EMAIL_VALIDATION_ERROR_MESSAGE,
} from '../../common/constant-text/texts';
import styles from './styles';
import {getToken} from '../../common/auth/token';
import {FILES_URL} from '../../common/env/env';
import {navigateTo} from '../../common/router/commonFunctions';

export default class SendEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      renderEmail: false,
    };
  }

  onEmailChange = t => {
    this.setState({
      email: t,
    });
  };

  navigateToFiles = () => {
    const ra = navigateTo('MainFiles');
    this.props.navigation.dispatch(ra);
  };

  onCancel = () => {
    this.saveFile();
    this.navigateToFiles();
  };

  onAccept = () => {
    this.setState({
      renderEmail: true,
    });
  };

  saveFile = () => {
    const {fileName, image} = this.props.navigation.state.params;
    const {email} = this.state;
    fetch(FILES_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: getToken(),
      },
      body: JSON.stringify({
        image,
        fileName,
        emailObj: {
          value: email,
        },
      }),
    })
      .then(response => {
        if (response.status === 409) {
          const ra = navigateTo('FileName', {image});
          this.props.navigation.dispatch(ra);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  sendToEmail = isValid => {
    this.setState(
      {
        isValid,
      },
      () => {
        if (this.state.isValid) {
          this.saveFile();
          this.navigateToFiles();
        }
      },
    );
  };

  renderForm() {
    return (
      <>
        <View style={styles.wrapper}>
          <View style={[styles.container, {marginBottom: 10}]}>
            <Text style={styles.lightText}>Do you want to send file now?</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity onPress={this.onCancel}>
              <View style={styles.button}>
                <Text style={styles.boldText}>No</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onAccept}>
              <View style={styles.button}>
                <Text style={styles.bolTextPrimary}>Yes</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }

  renderEmailForm() {
    const {email} = this.state;
    return (
      <>
        <View style={styles.wrapper}>
          <Input
            text={email}
            type="email"
            isValueValid={this.sendToEmail}
            action={this.onEmailChange}
            placeholder={MAIN_EMAILS_PAGE_SEND_ON_LABEL}
            textContentType="emailAddress"
            autoCompleteType="email"
            errorMessage={EMAIL_VALIDATION_ERROR_MESSAGE}
            keyboardType="email-address"
          />
        </View>
      </>
    );
  }

  render() {
    const {renderEmail} = this.state;
    return <>{renderEmail ? this.renderEmailForm() : this.renderForm()}</>;
  }
}
