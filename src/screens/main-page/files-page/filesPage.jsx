import React, {Component} from 'react';
import {View, ScrollView, Text, Animated, Easing, Image} from 'react-native';
import BackgroundContainer from '../../../components/global-components/background-container/backgroundContainer';
import {navigateTo} from '../../../common/router/commonFunctions';
import ListWithDots from '../../../components/global-components/list-with-dots/listWithDots';
import {
  MAIN_FILES_PAGE_REMOVE_BUTTON,
  MAIN_FILES_PAGE_SAVED_FILES,
  MAIN_EMAILS_PAGE_SELECT_NO_FILES,
  MAIN_FILES_PAGE_IMPORT_BUTTON,
} from '../../../common/constant-text/texts';
import Header from '../../../components/start-page/header/header';
import {
  INFORMATION_SAVED_FILES_URL,
  FILE_URL_SPECIFIC,
} from '../../../common/env/env';
import {getToken} from '../../../common/auth/token';
import {convertTimestampToDate} from '../../../common/converter/time';
import Loading from '../../../components/global-components/loading/loading';
import {ButtonWithOutBorder} from '../../../components/global-components/buttons/buttonWithOutBorder/button';
import {
  headerFontFamily,
  headerFontSize,
  headerFontColor,
  buttonFontFamily,
  buttonFontColor,
} from '../../../common/styles-variables/typography/typography';
import {noData} from '../../../common/path-extracter/pathExtracter';

export default class FilesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [],
      contentLoaded: false,
    };
    this.opacityValue = new Animated.Value(1);
  }

  componentDidMount() {
    this.initFilesData();
  }

  checkUpdates = async () => {
    const {fileList} = this.state;
    await this.fetchFilesData();
    console.log(fileList.length !== this.state.fileList.length);
    if (fileList.length !== this.state.fileList.length)
      this.setState({
        showLoadingBar: false,
      });
    else setTimeout(async () => await this.checkUpdates(), 10000);
  };

  onRemove = () => {
    const {fileList} = this.state;
    const filesToRemove = [];
    const filteredList = [];
    fileList.forEach(file => {
      !file.isSelected ? filteredList.push(file) : filesToRemove.push(file);
    });
    fetch(FILE_URL_SPECIFIC, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: getToken(),
      },
      body: JSON.stringify({
        filesToRemove,
      }),
    })
      .then(response => {
        if (response.ok) {
          this.setState({
            fileList: filteredList,
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  initFilesData = async () => {
    await this.fetchFilesData();
    const {params} = this.props.navigation.state;
    if (params) {
      if (params.createdFile) {
        this.setState(
          {
            showLoadingBar: true,
          },
          () => this.checkUpdates(),
        );
      }
    }
  };

  fetchFilesData = () => {
    return new Promise((resolve, reject) => {
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
                title: file.name,
                value: file._id,
                isSelected: false,
                date: convertTimestampToDate(file.createdAt),
              });
            });
            this.fadeOutLoader();
            setTimeout(() => {
              this.setState(
                {
                  fileList,
                  contentLoaded: true,
                },
                () => resolve(),
                console.log('Fetched ended'),
              );
            }, 1000);
          }
        })
        .catch(error => {
          console.error(error);
          reject();
        });
    });
  };

  setFilesToRemove = fileList => {
    this.setState({
      fileList,
    });
  };

  fadeOutLoader = () => {
    Animated.timing(this.opacityValue, {
      toValue: 0,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
      delay: 500,
    }).start();
  };

  redirectToImport = () => {
    navigateTo('MainImport', this.props);
  };

  renderLoader = () => {
    return (
      <>
        <Animated.View
          style={{
            flex: 1,
            opacity: this.opacityValue,
            transform: [
              {
                scale: this.opacityValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.9],
                }),
              },
            ],
          }}>
          <Loading></Loading>
        </Animated.View>
      </>
    );
  };

  renderFiles = () => {
    const {fileList, showLoadingBar} = this.state;
    return (
      <BackgroundContainer resizeMode="contain">
        <Header
          showLoader={showLoadingBar}
          from="MainFiles"
          navigation={this.props.navigation}
        />
        <ScrollView
          nestedScrollEnabled={true}
          style={{
            flexGrow: 1,
          }}
          contentContainerStyle={{flex: 1}}>
          <View
            style={[
              {
                flex: 1,
                justifyContent: 'flex-start',
                padding: 50,
                position: 'relative',
              },
              !fileList.length ? {justifyContent: 'center'} : null,
            ]}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'space-between',
                flexDirection: 'row',
              }}></View>
            {!fileList.length ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={noData} resizeMode="contain" />
                <Text
                  style={{
                    fontFamily: buttonFontFamily,
                    color: buttonFontColor,
                    fontSize: 16,
                  }}>
                  {MAIN_EMAILS_PAGE_SELECT_NO_FILES}
                </Text>
                <ButtonWithOutBorder
                  action={this.redirectToImport}
                  text={MAIN_FILES_PAGE_IMPORT_BUTTON}
                />
              </View>
            ) : (
              <Text
                style={[
                  {
                    color: headerFontColor,
                    fontSize: headerFontSize,
                    fontFamily: headerFontFamily,
                    alignSelf: 'flex-start',
                  },
                ]}>
                {MAIN_FILES_PAGE_SAVED_FILES}
              </Text>
            )}
            <ListWithDots
              itemsList={fileList}
              setItemsToRemove={this.setFilesToRemove}
            />
            {fileList.length ? (
              <ButtonWithOutBorder
                action={this.onRemove}
                text={MAIN_FILES_PAGE_REMOVE_BUTTON}
              />
            ) : null}
          </View>
        </ScrollView>
      </BackgroundContainer>
    );
  };

  render() {
    const {contentLoaded} = this.state;
    return <>{contentLoaded ? this.renderFiles() : this.renderLoader()}</>;
  }
}
