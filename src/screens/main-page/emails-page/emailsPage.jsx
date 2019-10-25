import React, {Component} from 'react';
import {View, ScrollView, Text, Alert} from 'react-native';
import Header from '../../../components/start-page/header/header';
import BackgroundContainer from '../../../components/global-components/background-container/backgroundContainer';
import {navigateTo} from '../../../common/router/commonFunctions';
import Input from '../../../components/global-components/input/input';
import {
  MAIN_EMAILS_PAGE_SELECT_PLACEHOLDER,
  MAIN_EMAILS_PAGE_SEND_ON_LABEL,
  MAIN_EMAILS_PAGE_SEND_ON_PLACEHOLDER,
  MAIN_EMAILS_PAGE_BUTTON_SEND,
  MAIN_EMAILS_PAGE_SELECT_NO_FILES,
} from '../../../common/constant-text/texts';
import SelectBox from '../../../components/global-components/select-box/selectBox';
import {getToken} from '../../../common/auth/token';
import {
  INFORMATION_EMAIL_URL,
  INFORMATION_SAVED_FILES_URL,
  EMAIL_SENDER_URL,
} from '../../../common/env/env';
import {ButtonWithOutBorder} from '../../../components/global-components/buttons/buttonWithOutBorder/button';
import {
  headerFontColor,
  headerFontSize,
  headerFontFamily,
} from '../../../common/styles-variables/typography/typography';

export default class EmailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sendToEmail: '',
      fileList: [],
    };
  }

  componentDidMount() {
    this.initFilesData();
    this.initEmailData();
  }

  onSelect = selectedItem => {
    const {fileList} = this.state;
    const filteredFileList = fileList.map(item => {
      if (item.value === selectedItem.value) item.checked = !item.checked;
      return item;
    });
    this.setState({
      fileList: filteredFileList,
    });
  };

  initEmailData = () => {
    fetch(INFORMATION_EMAIL_URL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: getToken(),
      },
    })
      .then(response => {
        if (response.ok) return response.json();
      })
      .then(responseJson => {
        if (responseJson) {
          const [email] = responseJson.email;
          if (email) {
            const fileList = this.state.fileList.map(file => {
              email.selectedFiles.forEach(sFile => {
                if (file._id === sFile) {
                  file.checked = true;
                }
              });
              return file;
            });
            this.setState({
              sendToEmail: email.value,
              fileList: fileList,
            });
          }
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  initFilesData = () => {
    fetch(INFORMATION_SAVED_FILES_URL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: getToken(),
      },
    })
      .then(response => {
        if (response.ok) return response.json();
      })
      .then(responseJson => {
        if (responseJson) {
          const fileList = [];
          responseJson.files.forEach(file => {
            fileList.push({
              _id: file._id,
              label: file.name,
              value: file._id,
              checked: false,
            });
          });
          this.setState({
            fileList,
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  sendPackage = () => {
    const {sendToEmail, fileList} = this.state;
    const selectedFiles = fileList.filter(file => file.checked);
    fetch(EMAIL_SENDER_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: getToken(),
      },
      body: JSON.stringify({
        emailObj: {
          value: sendToEmail,
          selectedFiles,
        },
      }),
    })
      .then(() =>
        Alert.alert('Awesome', 'Your package has been sent.', [{text: 'OK'}], {
          cancelable: false,
        }),
      )
      .catch(error => {
        console.error(error);
      });
  };

  onEmailChange = t => {
    this.setState({
      sendToEmail: t,
    });
  };

  disableSending = () => {
    const {fileList, sendToEmail} = this.state;
    const selectedFiles = [];
    fileList.forEach(file => (file.checked ? selectedFiles.push(file) : null));
    if (sendToEmail.length && selectedFiles.length) {
      return false;
    } else return true;
  };

  render() {
    const {fileList, sendToEmail} = this.state;
    return (
      <>
        <BackgroundContainer resizeMode="contain">
          <Header from="MainEmails" navigation={this.props.navigation} />
          <ScrollView
            nestedScrollEnabled={true}
            style={{
              flexGrow: 1,
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                padding: 50,
                position: 'relative',
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'space-between',
                  flexDirection: 'row',
                }}></View>
              <View
                style={{
                  marginTop: 40,
                  width: '100%',
                }}>
                <Text
                  style={[
                    {
                      color: headerFontColor,
                      fontSize: headerFontSize,
                      fontFamily: headerFontFamily,
                      alignSelf: 'flex-start',
                    },
                  ]}>
                  {MAIN_EMAILS_PAGE_SEND_ON_LABEL}
                </Text>
                <View
                  style={{
                    marginBottom: 20,
                    width: '100%',
                    alignSelf: 'center',
                  }}>
                  <Input
                    placeholder={MAIN_EMAILS_PAGE_SEND_ON_PLACEHOLDER}
                    text={sendToEmail}
                    action={this.onEmailChange}
                    styles={{
                      alignSelf: 'flex-start',
                      width: '100%',
                      marginBottom: 5,
                    }}
                    textContentType="emailAddress"
                    autoCompleteType="email"
                    keyboardType="email-address"
                    type="email"
                  />
                </View>
                <View
                  style={{
                    marginBottom: 20,
                    width: '100%',
                    alignSelf: 'center',
                  }}>
                  <SelectBox
                    action={this.onSelect.bind(this)}
                    itemList={fileList}
                    text={
                      fileList.length
                        ? MAIN_EMAILS_PAGE_SELECT_PLACEHOLDER
                        : MAIN_EMAILS_PAGE_SELECT_NO_FILES
                    }
                  />
                </View>
                <ButtonWithOutBorder
                  disabled={this.disableSending()}
                  action={this.sendPackage}
                  text={MAIN_EMAILS_PAGE_BUTTON_SEND}
                />
              </View>
            </View>
          </ScrollView>
        </BackgroundContainer>
      </>
    );
  }
}
