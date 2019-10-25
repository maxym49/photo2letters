import React, {Component} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Easing,
  Text,
  Animated,
  Image,
  StyleSheet,
} from 'react-native';
import {
  buttonFontFamily,
  buttonFontColor,
} from '../../common/styles-variables/typography/typography';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class LargeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proportions: new Animated.Value(0),
      opacityVal: new Animated.Value(1),
      scaleVal: new Animated.Value(1),
    };
  }

  animateButton = () => {
    Animated.timing(this.state.scaleVal, {
      toValue: 0,
      easing: Easing.linear,
      duration: 150,
    }).start();
    this.animateRings();
    this.aniamteOpacity();
  };

  animateRings = () => {
    const {action} = this.props;
    Animated.timing(this.state.proportions, {
      toValue: 1,
      easing: Easing.linear,
      duration: 1000,
    }).start(() => {
      action();
      setTimeout(() => {
        this.state.scaleVal.setValue(1);
        this.state.opacityVal.setValue(1);
        this.state.proportions.setValue(0);
      }, 200);
    });
  };

  aniamteOpacity = () => {
    Animated.timing(this.state.opacityVal, {
      toValue: 0,
      easing: Easing.linear,
      duration: 1000,
    }).start();
  };

  render() {
    const {title, bgColor, icon} = this.props;
    return (
      <>
        <TouchableWithoutFeedback onPress={this.animateButton}>
          <View
            style={{
              flex: 1,
              backgroundColor: bgColor,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}>
            <View style={styles.container}>
              <Animated.View
                style={{
                  zIndex: 3,
                  width: 60,
                  height: 60,
                  borderRadius: 60,
                  backgroundColor: bgColor,
                }}></Animated.View>
            </View>
            <View style={styles.container}>
              <Animated.View
                style={{
                  zIndex: 2,
                  width: this.state.proportions.interpolate({
                    inputRange: [0, 1],
                    outputRange: [60, 110],
                  }),
                  height: this.state.proportions.interpolate({
                    inputRange: [0, 1],
                    outputRange: [60, 110],
                  }),
                  borderRadius: 110,
                  opacity: this.state.opacityVal.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                  backgroundColor: '#DFDFDF',
                }}></Animated.View>
            </View>
            <View style={styles.container}>
              <Animated.View
                style={{
                  zIndex: 1,
                  width: this.state.proportions.interpolate({
                    inputRange: [0, 1],
                    outputRange: [60, 130],
                  }),
                  height: this.state.proportions.interpolate({
                    inputRange: [0, 1],
                    outputRange: [60, 130],
                  }),
                  borderRadius: 130,
                  opacity: this.state.opacityVal.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                  backgroundColor: '#EEEAEB',
                }}></Animated.View>
            </View>

            <Animated.Image
              style={{
                zIndex: 4,
                transform: [
                  {
                    scale: this.state.scaleVal.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.95, 1],
                    }),
                  },
                ],
              }}
              source={icon}
              resizeMode="contain"
            />
            <Text
              style={{
                fontFamily: buttonFontFamily,
                fontSize: 20,
                color: buttonFontColor,
              }}>
              {title}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </>
    );
  }
}
