import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import Header from '../../../components/start-page/header/header';
import CardModule from '../../../components/main/card-module/cardModule';
import {
  MAIN_IMPORT_PAGE_BETWEEN_BUTTONS,
  MAIN_IMPORT_PAGE_MAKE_PHOTO_BUTTON,
  MAIN_IMPORT_PAGE_UPLOAD_PHOTO_BUTTON,
} from '../../../common/constant-text/texts';
import {GREY, PRIMARY, WHITE} from '../../../common/styles-variables/colors';
import BackgroundContainer from '../../../components/global-components/background-container/backgroundContainer';
import cardModules from '../../../common/static-data/main/cardModules';
import {
  onModuleCardPress,
  navigateTo,
} from '../../../common/router/commonFunctions';
import {ButtonWithBorder} from '../../../components/global-components/buttons/buttonWithBorder/button';

export default class ImportPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardModules,
    };
  }

  componentDidMount() {
    const {cardModules} = this.state;
    const filteredCardModules = cardModules.map(module => {
      module.isActive = module.name === 'import';
      return module;
    });
    this.setState({
      cardModules: filteredCardModules,
    });
  }

  onMakePhotoPress() {
    this.props.navigation.navigate('Camera');
  }

  onUploadPress() {
    this.props.navigation.navigate('Gallery');
  }

  onCardPress = name => {
    const ra = onModuleCardPress(
      name,
      this.state,
      this.props.navigation.navigate,
    );
    this.props.navigation.dispatch(ra);
  };

  render() {
    const {cardModules} = this.state;
    return (
      <>
        <BackgroundContainer resizeMode="contain">
          <Header />
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
            <ButtonWithBorder
              action={this.onMakePhotoPress.bind(this)}
              text={MAIN_IMPORT_PAGE_MAKE_PHOTO_BUTTON}
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Roboto-Regular',
                color: GREY,
              }}>
              {MAIN_IMPORT_PAGE_BETWEEN_BUTTONS}
            </Text>
            <ButtonWithBorder
              action={this.onUploadPress.bind(this)}
              text={MAIN_IMPORT_PAGE_UPLOAD_PHOTO_BUTTON}
            />
          </View>
        </BackgroundContainer>
      </>
    );
  }
}
