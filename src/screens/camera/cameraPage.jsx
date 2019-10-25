import React, {Component} from 'react';
import {View, Image, Text, Dimensions, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import cStyles from './camera.style';
import RoundedButton from '../../components/global-components/rounded-button/button';
import {WHITE, BLACK} from '../../common/styles-variables/colors';
import {
  flashOn,
  flashOff,
  focusOn,
  focusOff,
} from '../../common/path-extracter/pathExtracter';
import {
  buttonFontFamily,
  buttonFontSize,
} from '../../common/styles-variables/typography/typography';

export default class CameraPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUri: null,
      isFlashOn: false,
      isFocusOn: true,
    };
  }

  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      this.setState({
        image: data,
        imageUri: data.uri,
      });
    }
  };

  savePicture = () => {
    const {image} = this.state;
    const {navigate} = this.props.navigation;
    navigate('FileName', {image});
  };

  changeFlash = () => {
    this.setState({
      isFlashOn: !this.state.isFlashOn,
    });
  };

  changeFocus = () => {
    this.setState({
      isFocusOn: !this.state.isFocusOn,
    });
  };

  renderImage() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: BLACK,
        }}>
        <Image
          source={{uri: this.state.imageUri}}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
          }}
        />
        <View
          style={{
            backgroundColor: BLACK,
            width: '100%',
            height: 80,
            position: 'relative',
          }}>
          <Text
            style={{
              position: 'absolute',
              left: 30,
              bottom: 30,
              backgroundColor: 'transparent',
              color: WHITE,
              fontFamily: buttonFontFamily,
              fontSize: 16,
            }}
            onPress={() => this.setState({imageUri: null})}>
            Cancel
          </Text>
          <Text
            style={{
              position: 'absolute',
              right: 30,
              bottom: 30,
              backgroundColor: 'transparent',
              color: WHITE,
              fontFamily: buttonFontFamily,
              fontSize: 16,
            }}
            onPress={() => this.savePicture()}>
            Accept
          </Text>
        </View>
      </View>
    );
  }

  renderCamera() {
    const {isFlashOn, isFocusOn} = this.state;
    return (
      <>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          defaultOnFocusComponent={true}
          type={RNCamera.Constants.Type.back}
          autoFocus={
            isFocusOn
              ? RNCamera.Constants.AutoFocus.on
              : RNCamera.Constants.AutoFocus.ff
          }
          flashMode={
            isFlashOn
              ? RNCamera.Constants.FlashMode.on
              : RNCamera.Constants.FlashMode.off
          }
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({barcodes}) => {
            console.warn(barcodes.data);
          }}
          style={{flex: 1}}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
          <View style={cStyles.capture}>
            <View style={cStyles.iconWrapper}>
              <TouchableOpacity onPress={this.changeFlash}>
                {isFlashOn ? (
                  <Image
                    source={flashOn}
                    resizeMode="contain"
                    style={cStyles.icon}
                  />
                ) : (
                  <Image
                    source={flashOff}
                    resizeMode="contain"
                    style={cStyles.icon}
                  />
                )}
              </TouchableOpacity>
            </View>
            <RoundedButton action={this.takePicture.bind(this)}></RoundedButton>
            <View style={cStyles.iconWrapper}>
              <TouchableOpacity onPress={this.changeFocus}>
                {isFocusOn ? (
                  <Image
                    source={focusOn}
                    resizeMode="contain"
                    style={cStyles.icon}
                  />
                ) : (
                  <Image
                    source={focusOff}
                    resizeMode="contain"
                    style={cStyles.icon}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  }

  render() {
    const {imageUri} = this.state;
    return <>{imageUri ? this.renderImage() : this.renderCamera()}</>;
  }
}
