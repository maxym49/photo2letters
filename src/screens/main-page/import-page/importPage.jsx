import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import Header from '../../../components/start-page/header/header';
import CardModule from '../../../components/main/card-module/cardModule';
import Button from '../../../components/global-components/buttons/button';
import {
  MAIN_IMPORT_PAGE_BETWEEN_BUTTONS,
  MAIN_IMPORT_PAGE_MAKE_PHOTO_BUTTON,
  MAIN_IMPORT_PAGE_UPLOAD_PHOTO_BUTTON,
} from '../../../common/constant-text/texts';
import {GREY, PRIMARY, WHITE} from '../../../common/styles-variables/colors';
import BackgroundContainer from '../../../components/global-components/background-container/backgroundContainer';
import ContentWrapper from '../../../components/global-components/content-wrapper/contentWrapper';
import cardModules from '../../../common/static-data/main/cardModules';
import {
  onModuleCardPress,
  navigateTo,
} from '../../../common/router/commonFunctions';

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
    const ra = navigateTo('Camera');
    this.props.navigation.dispatch(ra);
  }

  onUploadPress() {
    const ra = navigateTo('Gallery');
    this.props.navigation.dispatch(ra);
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
          <Header disabled={true} />
          <ContentWrapper>
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
            <Button
              action={this.onMakePhotoPress.bind(this)}
              shadow
              text={MAIN_IMPORT_PAGE_MAKE_PHOTO_BUTTON}
              btnStyle={{
                backgroundColor: WHITE,
                marginTop: 60,
                marginBottom: 10,
              }}
              textStyle={{color: PRIMARY}}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: '300',
                color: GREY,
              }}>
              {MAIN_IMPORT_PAGE_BETWEEN_BUTTONS}
            </Text>
            <Button
              action={this.onUploadPress.bind(this)}
              text={MAIN_IMPORT_PAGE_UPLOAD_PHOTO_BUTTON}
              btnStyle={{
                backgroundColor: PRIMARY,
                marginBottom: 10,
              }}
            />
          </ContentWrapper>
        </BackgroundContainer>
      </>
    );
  }
}
