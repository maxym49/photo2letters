import React, {Component} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  Animated,
  Easing,
} from 'react-native';
import buttonStyles from '../button.style';
import {PRIMARY} from '../../../../common/styles-variables/colors';

export class ButtonWithBorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      borderTop: new Animated.Value(100),
      borderLeft: new Animated.Value(100),
      borderRight: new Animated.Value(100),
      borderBottom: new Animated.Value(100),
    };
  }

  animateborderTop = () => {
    const {borderTop} = this.state;
    Animated.timing(borderTop, {
      toValue: 0,
      duration: 250,
      easing: Easing.ease,
    }).start(() => this.animateBorderLeft());
  };

  animateBorderBottom = () => {
    const {borderBottom} = this.state;
    Animated.timing(borderBottom, {
      toValue: 0,
      duration: 250,
      easing: Easing.ease,
    }).start(() => this.animateBorderRight());
  };

  animateBorderLeft = () => {
    const {borderLeft} = this.state;
    Animated.timing(borderLeft, {
      toValue: 0,
      duration: 150,
      easing: Easing.ease,
    }).start();
  };

  animateBorderRight = () => {
    const {borderRight} = this.state;
    Animated.timing(borderRight, {
      toValue: 0,
      duration: 250,
      easing: Easing.ease,
    }).start(() => this.props.action());
  };

  animateButton = () => {
    this.animateBorderBottom();
    this.animateborderTop();
  };

  render() {
    const {borderTop, borderLeft, borderRight, borderBottom} = this.state;
    const {text, btnStyle, disabled, textStyle} = this.props;
    return (
      <>
        <TouchableWithoutFeedback
          onPress={() => this.animateButton()}
          disabled={disabled}>
          <View
            style={[
              buttonStyles.button,
              buttonStyles.buttonWithBorder,
              btnStyle,
              disabled ? buttonStyles.borderButtonDisabled : null,
            ]}>
            {disabled ? null : (
              <>
                <View style={buttonStyles.borderLeftWrapper}>
                  <Animated.View
                    style={[
                      buttonStyles.borderLeft,
                      {
                        height: borderLeft.interpolate({
                          inputRange: [0, 1],
                          outputRange: ['0%', '1%'],
                        }),
                      },
                    ]}></Animated.View>
                </View>
                <Animated.View
                  style={[
                    buttonStyles.borderRight,
                    {
                      height: borderRight.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0%', '1%'],
                      }),
                    },
                  ]}></Animated.View>
                <Animated.View
                  style={[
                    buttonStyles.borderTop,
                    {
                      width: borderTop.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0%', '1%'],
                      }),
                    },
                  ]}></Animated.View>
                <View style={buttonStyles.borderBottomWrapper}>
                  <Animated.View
                    style={[
                      {
                        width: borderBottom.interpolate({
                          inputRange: [0, 1],
                          outputRange: ['0%', '1%'],
                        }),
                      },
                      buttonStyles.borderBottom,
                    ]}></Animated.View>
                </View>
              </>
            )}
            <View style={buttonStyles.textWrapper}>
              <Text style={[buttonStyles.buttonText, textStyle]}>{text}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </>
    );
  }
}
