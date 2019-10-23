import React, {Component} from 'react';
import {View, Animated, Image, Easing, Text} from 'react-native';
import {WHITE} from '../../../common/styles-variables/colors';
import {loadingSquare} from '../../../common/path-extracter/pathExtracter';
import {
  buttonFontFamily,
  buttonFontSize,
  buttonLetterSpacing,
  buttonFontColor,
} from '../../../common/styles-variables/typography/typography';

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.animateLogo();
  }

  animateLogo = () => {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => this.animateLogo());
  };

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <>
        <View
          style={{
            flex: 1,
            backgroundColor: WHITE,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Animated.Image
            style={{transform: [{rotate: spin}]}}
            resizeMode="contain"
            source={loadingSquare}
          />
          <Text
            style={{
              marginTop: 10,
              color: buttonFontColor,
              fontFamily: buttonFontFamily,
              fontSize: buttonFontSize,
              letterSpacing: buttonLetterSpacing,
            }}>
            Loading...
          </Text>
        </View>
      </>
    );
  }
}
