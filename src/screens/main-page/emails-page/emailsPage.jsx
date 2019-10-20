import React, {Component} from 'react';
import {View, TouchableWithoutFeedback, ScrollView, Text} from 'react-native';
import Header from '../../../components/start-page/header/header';
import CardModule from '../../../components/main/card-module/cardModule';
import BackgroundContainer from '../../../components/global-components/background-container/backgroundContainer';
import ContentWrapper from '../../../components/global-components/content-wrapper/contentWrapper';
import cardModules from '../../../common/static-data/main/cardModules';
import {onModuleCardPress} from '../../../common/router/commonFunctions';
import Input from '../../../components/global-components/input/input';
import {
  MAIN_EMAILS_PAGE_SELECT_LABEL,
  MAIN_EMAILS_PAGE_SELECT_PLACEHOLDER,
  MAIN_EMAILS_PAGE_SEND_ON_LABEL,
  MAIN_EMAILS_PAGE_SEND_ON_PLACEHOLDER,
  MAIN_EMAILS_PAGE_BUTTON_SEND,
  MAIN_EMAILS_PAGE_SELECT_NO_FILES,
} from '../../../common/constant-text/texts';
import {BLACK, PRIMARY} from '../../../common/styles-variables/colors';
import SelectBox from '../../../components/global-components/select-box/selectBox';
import {getToken} from '../../../common/auth/token';
import {
  DEV_INFORMATION_EMAIL_URL,
  DEV_INFORMATION_SAVED_FILES_URL,
  DEV_EMAIL_SENDER_URL,
} from '../../../common/env/env';
import Button from '../../../components/global-components/buttons/button';

export default class EmailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sendToEmail: '',
      cardModules,
      fileList: [],
    };
  }

  componentDidMount() {
    const {cardModules} = this.state;
    const filteredCardModules = cardModules.map(module => {
      module.isActive = module.name === 'emails';
      return module;
    });
    this.setState({
      cardModules: filteredCardModules,
    });
    this.initFilesData();
    this.initEmailData();
  }

  onCardPress = name => {
    const ra = onModuleCardPress(
      name,
      this.state,
      this.props.navigation.navigate,
    );
    this.props.navigation.dispatch(ra);
  };

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
    fetch(DEV_INFORMATION_EMAIL_URL, {
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
    fetch(DEV_INFORMATION_SAVED_FILES_URL, {
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
    fetch(DEV_EMAIL_SENDER_URL, {
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
    }).catch(error => {
      console.error(error);
    });
  };

  onEmailChange = t => {
    this.setState({
      sendToEmail: t,
    });
  };

  render() {
    const {cardModules, fileList, sendToEmail} = this.state;
    const selectedFiles = fileList.map(file => (file.checked ? file : null));
    return (
      <>
        <BackgroundContainer resizeMode="contain">
          <ScrollView
            nestedScrollEnabled={true}
            style={{
              flexGrow: 1,
            }}>
            <ContentWrapper
              style={{
                flex: 1,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'space-between',
                  flexDirection: 'row',
                }}>
                {cardModules.map(module => (
                  <TouchableWithoutFeedback
                    key={module.name}
                    disabled={module.isActive}
                    onPress={() => this.onCardPress(module.name)}>
                    <View>
                      <CardModule
                        isActive={module.isActive}
                        image={module.image}
                        text={module.text}
                      />
                    </View>
                  </TouchableWithoutFeedback>
                ))}
              </View>
              <View
                style={{
                  marginTop: 40,
                  width: '80%',
                }}>
                <View
                  style={{
                    marginBottom: 20,
                    width: '100%',
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      color: BLACK,
                    }}>
                    {MAIN_EMAILS_PAGE_SEND_ON_LABEL}
                  </Text>
                  <Input
                    placeholder={MAIN_EMAILS_PAGE_SEND_ON_PLACEHOLDER}
                    text={sendToEmail}
                    action={this.onEmailChange}
                    styles={{alignSelf: 'flex-start', width: '100%'}}
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
                  <Text
                    style={{
                      color: BLACK,
                    }}>
                    {MAIN_EMAILS_PAGE_SELECT_LABEL}
                  </Text>
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
                <Button
                  disabled={!sendToEmail.length && !selectedFiles.length}
                  action={this.sendPackage}
                  shadow
                  text={MAIN_EMAILS_PAGE_BUTTON_SEND}
                  btnStyle={{
                    backgroundColor: PRIMARY,
                    marginTop: 30,
                  }}
                />
              </View>
            </ContentWrapper>
          </ScrollView>
        </BackgroundContainer>
      </>
    );
  }
}
