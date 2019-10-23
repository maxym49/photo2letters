import React, {Component} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  ScrollView,
  Text,
  Animated,
  Easing,
} from 'react-native';
import CardModule from '../../../components/main/card-module/cardModule';
import BackgroundContainer from '../../../components/global-components/background-container/backgroundContainer';
import cardModules from '../../../common/static-data/main/cardModules';
import {onModuleCardPress} from '../../../common/router/commonFunctions';
import ListWithDots from '../../../components/global-components/list-with-dots/listWithDots';
import {
  MAIN_FILES_PAGE_REMOVE_BUTTON,
  MAIN_FILES_PAGE_SAVED_FILES,
  MAIN_EMAILS_PAGE_SELECT_NO_FILES,
} from '../../../common/constant-text/texts';
import {
  BLACK,
  PRIMARY,
  WHITE_GREY,
} from '../../../common/styles-variables/colors';
import Header from '../../../components/start-page/header/header';
import {
  INFORMATION_SAVED_FILES_URL,
  FILE_URL_SPECIFIC,
} from '../../../common/env/env';
import {getToken} from '../../../common/auth/token';
import {convertTimestampToDate} from '../../../common/converter/time';
import Loading from '../../../components/global-components/loading/loading';
import {ButtonWithOutBorder} from '../../../components/global-components/buttons/buttonWithOutBorder/button';

export default class FilesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardModules,
      fileList: [],
      contentLoaded: false,
    };
    this.opacityValue = new Animated.Value(1);
  }

  componentDidMount() {
    const {cardModules} = this.state;
    const filteredCardModules = cardModules.map(module => {
      module.isActive = module.name === 'files';
      return module;
    });
    this.setState({
      cardModules: filteredCardModules,
    });
    this.initFilesData();
  }

  onCardPress = name => {
    const ra = onModuleCardPress(
      name,
      this.state,
      this.props.navigation.navigate,
    );
    this.props.navigation.dispatch(ra);
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
              title: file.name,
              value: file._id,
              isSelected: false,
              date: convertTimestampToDate(file.createdAt),
            });
          });
          this.fadeOutLoader();
          setTimeout(() => {
            this.setState({
              fileList,
              contentLoaded: true,
            });
          }, 1000);
        }
      })
      .catch(error => {
        console.error(error);
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
      useNativeDriver: true,
      delay: 500,
    }).start();
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
    const {cardModules, fileList} = this.state;
    return (
      <BackgroundContainer resizeMode="contain">
        <Header disabled={true} />
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
                justifyContent: 'center',
                alignItems: 'space-between',
                flexDirection: 'row',
              }}>
              {cardModules.map(module => (
                <TouchableWithoutFeedback
                  disabled={module.isActive}
                  key={module.name}
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
            <Text
              style={{
                color: PRIMARY,
                fontSize: 18,
                fontFamily: 'Roboto-Regular',
                alignSelf: 'flex-start',
                marginTop: 50,
              }}>
              {fileList.length
                ? MAIN_FILES_PAGE_SAVED_FILES
                : MAIN_EMAILS_PAGE_SELECT_NO_FILES}
            </Text>
            <ListWithDots
              itemsList={fileList}
              setItemsToRemove={this.setFilesToRemove}
            />
            {fileList.length ? (
              <ButtonWithOutBorder
                action={this.onRemove}
                text={MAIN_FILES_PAGE_REMOVE_BUTTON}
                btnStyle={{
                  backgroundColor: WHITE_GREY,
                  borderColor: PRIMARY,
                  borderWidth: 2,
                }}
                textStyle={{
                  color: BLACK,
                }}
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
