import React, {Component} from 'react';
import {
  View,
  Image,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';
import {GREY_1} from '../../common/styles-variables/colors';
import {menuList} from '../../common/static-data/menu/menuList';
import MenuItem from '../../components/menu/menu-item/menuItem';
import {exit} from '../../common/path-extracter/pathExtracter';
import {navigateTo} from '../../common/router/commonFunctions';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinValue: new Animated.Value(1),
    };
  }

  closeMenu = () => {
    const {from} = this.props.navigation.state.params;
    const ra = navigateTo(from);
    this.props.navigation.dispatch(ra);
  };

  animateCross = callback => {
    Animated.timing(this.state.spinValue, {
      toValue: 0,
      duration: 150,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => callback());
  };

  closeWithAnimate = () => this.animateCross(this.closeMenu);

  render() {
    const {navigation} = this.props;
    const {spinValue} = this.state;
    const {from} = navigation.state.params;
    return (
      <>
        <View
          style={{
            backgroundColor: GREY_1,
            flex: 1,
            padding: 50,
            justifyContent: 'center',
            position: 'relative',
          }}>
          <TouchableWithoutFeedback onPress={this.closeWithAnimate}>
            <Animated.Image
              style={{
                position: 'absolute',
                top: 40,
                right: 20,
                transform: [
                  {
                    rotate: spinValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['180deg', '0deg'],
                    }),
                  },
                ],
              }}
              source={exit}
              resizeMode="contain"
            />
          </TouchableWithoutFeedback>
          {menuList.map((item, index) => (
            <MenuItem
              isActive={from === item.redirectTo}
              item={item}
              key={index}
              navigation={navigation}
            />
          ))}
        </View>
      </>
    );
  }
}
