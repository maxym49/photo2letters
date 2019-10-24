import React, {Component} from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Image,
  Animated,
  Easing,
} from 'react-native';
import styleSheet from './header.style';
import {logo, hamburger} from '../../../common/path-extracter/pathExtracter';
import {navigateTo} from '../../../common/router/commonFunctions';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinValue: new Animated.Value(1),
    };
  }

  redirectToMenu = () => {
    const {from} = this.props;
    const ra = navigateTo('Menu', {from});
    this.props.navigation.dispatch(ra);
  };

  animateHamburger = callback => {
    Animated.timing(this.state.spinValue, {
      toValue: 0,
      duration: 150,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => callback());
  };

  redirectWithAnimation = () => this.animateHamburger(this.redirectToMenu);

  render() {
    const {disabled} = this.props;
    const {spinValue} = this.state;
    return (
      <>
        <View style={styleSheet.container}>
          <Image source={logo} resizeMode="contain" />
          {disabled ? null : (
            <View>
              <TouchableWithoutFeedback onPress={this.redirectWithAnimation}>
                <Animated.Image
                  style={{
                    transform: [
                      {
                        scale: spinValue.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, 1],
                        }),
                      },
                    ],
                    opacity: spinValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 1],
                    }),
                  }}
                  source={hamburger}
                  resizeMode="contain"
                />
              </TouchableWithoutFeedback>
            </View>
          )}
        </View>
      </>
    );
  }
}

export default Header;
