import React, {Component} from 'react';
import styleSheet from './content.style';
import {Text, ImageBackground, Image, View} from 'react-native';
import Dots from './dots/dots';
import {bubble} from '../../../common/path-extracter/pathExtracter';

const {bubbled, frontImage, contentContainer, header, text} = styleSheet;

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      centerImage,
      textHeader,
      textContentFirstLine,
      textContentSecondLine,
      textContentThirdLine,
      index,
    } = this.props;
    return (
      <>
        <ImageBackground source={bubble} style={bubbled}>
          <Image source={centerImage} style={frontImage} resizeMode="contain" />
        </ImageBackground>
        <View style={contentContainer}>
          <Text style={header}>{textHeader}</Text>
          <Text style={text}>{textContentFirstLine}</Text>
          <Text style={text}>{textContentSecondLine}</Text>
          <Text style={text}>{textContentThirdLine}</Text>
          <Dots index={index} />
        </View>
      </>
    );
  }
}
