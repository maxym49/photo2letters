import React, {Component} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  Animated,
  Easing,
} from 'react-native';
import buttonStyles from '../button.style';
import {buttonFontColor} from '../../../../common/styles-variables/typography/typography';
import {GREY_1, PRIMARY} from '../../../../common/styles-variables/colors';

export class ButtonWithOutBorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlay: new Animated.Value(0),
    };
  }

  animateOut() {
    const {animatePress} = this.state;
    Animated.timing(animatePress, {
      toValue: 1,
      duration: 500,
    }).start();
    const {action} = this.props;
    setTimeout(() => action(), 1500);
  }

  startOverlay = () => {
    const {overlay} = this.state;
    Animated.timing(overlay, {
      toValue: 100,
      duration: 150,
      easing: Easing.ease,
    }).start(() => {
      const {action} = this.props;
      setTimeout(() => {
        action();
        this.state.overlay.setValue(0);
      }, 100);
    });
  };

  render() {
    const {overlay} = this.state;
    const {text, btnStyle, disabled, textStyle} = this.props;
    return (
      <>
        <TouchableWithoutFeedback
          onPress={() => this.startOverlay()}
          disabled={disabled}>
          <View
            style={[
              buttonStyles.button,
              btnStyle,
              disabled ? buttonStyles.buttonDisabled : null,
            ]}>
            <Animated.View
              style={{
                flex: 1,
                width: overlay.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0%', '1%'],
                }),
                backgroundColor: GREY_1,
              }}></Animated.View>
            <View style={buttonStyles.textWrapper}>
              <Animated.Text
                style={[
                  buttonStyles.buttonText,
                  textStyle,
                  {
                    color: overlay.interpolate({
                      inputRange: [40, 100],
                      outputRange: [PRIMARY, buttonFontColor],
                    }),
                  },
                ]}>
                {text}
              </Animated.Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </>
    );
  }
}
