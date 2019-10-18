import React, {Component} from 'react';
import {View, Image, Text, Dimensions} from 'react-native';
import {RNCamera} from 'react-native-camera';
import cStyles from './camera.style';
import RoundedButton from '../../components/global-components/rounded-button/button';
import {WHITE, BLACK} from '../../common/styles-variables/colors';

export default class CameraPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUri: null,
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
        <Text
          style={{
            position: 'absolute',
            left: 20,
            bottom: 20,
            backgroundColor: 'transparent',
            color: WHITE,
            fontWeight: '600',
            fontSize: 17,
          }}
          onPress={() => this.setState({imageUri: null})}>
          Cancel
        </Text>
        <Text
          style={{
            position: 'absolute',
            right: 20,
            bottom: 20,
            backgroundColor: 'transparent',
            color: WHITE,
            fontWeight: '600',
            fontSize: 17,
          }}
          onPress={() => this.savePicture()}>
          Accept
        </Text>
      </View>
    );
  }

  renderCamera() {
    return (
      <>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
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
            <RoundedButton action={this.takePicture.bind(this)}></RoundedButton>
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
