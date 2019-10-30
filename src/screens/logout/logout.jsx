import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {bye, logo} from '../../common/path-extracter/pathExtracter';
import {
  LOGOUT_BYE_MESSAGE,
  LOGOUT_APP_NAME,
  LOGOUT_THANKS_MESSAGE,
} from '../../common/constant-text/texts';
import {
  buttonFontSize,
  buttonFontColor,
  buttonFontFamily,
} from '../../common/styles-variables/typography/typography';
import {PRIMARY} from '../../common/styles-variables/colors';
import {LOGOUT_URL} from '../../common/env/env';
import {removeToken} from '../../common/auth/token';
import {navigateTo} from '../../common/router/commonFunctions';

export default class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.logoutUser();
  }

  logoutUser = () => {
    fetch(LOGOUT_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          removeToken();
          setTimeout(() => {
            navigateTo('Home', this.props);
          }, 3000);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}>
          <Image source={bye} resizeMode="contain" />
          <Text
            style={{
              fontSize: 20,
              color: buttonFontColor,
              fontFamily: buttonFontFamily,
            }}>
            {LOGOUT_BYE_MESSAGE}
          </Text>
          <View
            style={{
              width: '100%',
              position: 'absolute',
              flexDirection: 'row',
              justifyContent: 'center',
              bottom: 0,
              left: 0,
              padding: 20,
            }}>
            <Image source={logo} resizeMode="contain" />
            <View style={{justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: buttonFontSize,
                  color: buttonFontColor,
                  fontFamily: buttonFontFamily,
                }}>
                {LOGOUT_THANKS_MESSAGE}
              </Text>
              <Text
                style={{
                  fontSize: buttonFontSize,
                  color: PRIMARY,
                  fontFamily: buttonFontFamily,
                }}>
                {LOGOUT_APP_NAME}
              </Text>
            </View>
          </View>
        </View>
      </>
    );
  }
}
