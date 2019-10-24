import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback, Animated} from 'react-native';
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
  }

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
          <TouchableWithoutFeedback onPress={this.handleNavigate}>
            <Text
              style={[
                {
                  fontFamily: buttonFontFamily,
                  fontSize: 16,
                  color: buttonFontColor,
                  letterSpacing: buttonLetterSpacing,
                  marginBottom: 10,
                },
                isActive ? {color: PRIMARY} : null,
              ]}>
              {item.title}
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </>
    );
  }
}
