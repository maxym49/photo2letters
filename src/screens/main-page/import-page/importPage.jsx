import React, {Component} from 'react';
import {View} from 'react-native';
import Header from '../../../components/start-page/header/header';
import {
  MAIN_IMPORT_PAGE_MAKE_PHOTO_BUTTON,
  MAIN_IMPORT_PAGE_UPLOAD_PHOTO_BUTTON,
} from '../../../common/constant-text/texts';
import {GREY_1, WHITE} from '../../../common/styles-variables/colors';
import BackgroundContainer from '../../../components/global-components/background-container/backgroundContainer';
import LargeButton from '../../../components/large-button/largeButton';
import {camera, gallery} from '../../../common/path-extracter/pathExtracter';

export default class ImportPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  onMakePhotoPress = () => {
    this.props.navigation.navigate('Camera');
  };

  onUploadPress = () => {
    this.props.navigation.navigate('Gallery');
  };

  render() {
    return (
      <>
        <BackgroundContainer resizeMode="contain">
          <Header from="MainImport" navigation={this.props.navigation} />
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              position: 'relative',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'space-between',
                flexDirection: 'row',
              }}></View>
            <LargeButton
              title={MAIN_IMPORT_PAGE_MAKE_PHOTO_BUTTON}
              bgColor={GREY_1}
              icon={camera}
              action={this.onMakePhotoPress}
            />
            <LargeButton
              title={MAIN_IMPORT_PAGE_UPLOAD_PHOTO_BUTTON}
              icon={gallery}
              bgColor={WHITE}
              action={this.onUploadPress}
            />
          </View>
        </BackgroundContainer>
      </>
    );
  }
}
