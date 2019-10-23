import React, {Component} from 'react';
import styleSheet from './content.style';
import {Text, Image, View} from 'react-native';
import Dots from './dots/dots';

const {frontImage, contentContainer, header, text} = styleSheet;

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
        <Image source={centerImage} style={frontImage} resizeMode="contain" />
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
