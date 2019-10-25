import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  Easing,
} from 'react-native';
import {navigateTo} from '../../../common/router/commonFunctions';
import {
  buttonFontColor,
  buttonFontFamily,
  buttonLetterSpacing,
} from '../../../common/styles-variables/typography/typography';
import {PRIMARY} from '../../../common/styles-variables/colors';

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scaleVal: new Animated.Value(1),
      opacityVal: new Animated.Value(1),
    };
  }

  animateText = () => {
    Animated.timing(this.state.opacityVal, {
      toValue: 0,
      easing: Easing.ease,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      this.handleNavigate();
      this.state.scaleVal.setValue(1);
    });
    Animated.timing(this.state.scaleVal, {
      toValue: 0,
      easing: Easing.ease,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      this.handleNavigate();
      this.state.scaleVal.setValue(1);
    });
  };

  handleNavigate = () => {
    const {redirectTo} = this.props.item;
    const ra = navigateTo(redirectTo);
    this.props.navigation.dispatch(ra);
  };

  render() {
    const {item, isActive} = this.props;
    return (
      <>
        <View style={{alignSelf: 'center'}}>
          <TouchableWithoutFeedback onPress={this.animateText}>
            <Animated.Text
              style={[
                {
                  fontFamily: buttonFontFamily,
                  fontSize: 16,
                  opacity: this.state.opacityVal.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.8, 1],
                  }),
                  letterSpacing: buttonLetterSpacing,
                  marginBottom: 10,
                  transform: [
                    {
                      scale: this.state.scaleVal.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.7, 1],
                      }),
                    },
                  ],
                },
                isActive ? {color: PRIMARY} : null,
              ]}>
              {item.title}
            </Animated.Text>
          </TouchableWithoutFeedback>
        </View>
      </>
    );
  }
}
