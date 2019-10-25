import React, {Component} from 'react';
import {View, Animated, Easing, Dimensions} from 'react-native';
import {GREY_1, PRIMARY} from '../../common/styles-variables/colors';

export default class LoadingBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: new Animated.Value(1),
    };
  }

  componentDidMount() {
    this.animateBar();
  }

  animateBar = () => {
    this.state.loading.setValue(1);
    Animated.timing(this.state.loading, {
      toValue: 0,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => this.animateBar());
  };

  render() {
    const {width} = Dimensions.get('window');
    return (
      <>
        <View
          style={{
            width,
            height: 2,
            backgroundColor: GREY_1,
            position: 'relative',
          }}>
          <Animated.View
            style={{
              width: width / 3,
              height: 2,
              backgroundColor: PRIMARY,
              transform: [
                {
                  translateX: this.state.loading.interpolate({
                    inputRange: [0, 1],
                    outputRange: [width, 0 - width / 3],
                  }),
                },
              ],
            }}></Animated.View>
        </View>
      </>
    );
  }
}
