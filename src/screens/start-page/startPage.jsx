import React from 'react';
import StartPageEasy from './sub-screens/startPageEasy';
import StartPageFast from './sub-screens/startPageFast';
import StartPageStarted from './sub-screens/startPageStarted';
import Swiper from 'react-native-swiper';
import {View} from 'react-native';
import Header from '../../components/start-page/header/header';
import {WHITE_GREY, PRIMARY} from '../../common/styles-variables/colors';
import {navigateTo} from '../../common/router/commonFunctions';
import Button from '../../components/global-components/buttons/button';
import {
  START_PAGE_CREATE_ACCOUNT_BUTTON_TEXT,
  START_PAGE_LOGIN_TO_ACCOUNT_BUTTON_TEXT,
} from '../../common/constant-text/texts';

export default class StartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  onSwipe(i) {
    this.setState({
      index: i,
    });
  }

  onLoginPress() {
    const ra = navigateTo('Login');
    this.props.navigation.dispatch(ra);
  }

  onRegisterPress() {
    const ra = navigateTo('Register');
    this.props.navigation.dispatch(ra);
  }

  render() {
    const {index} = this.state;
    const {navigation} = this.props;
    return (
      <>
        <View
          style={{
            backgroundColor: WHITE_GREY,
            flex: 1,
          }}>
          <Header navigation={navigation} />
          <Swiper
            onIndexChanged={i => this.onSwipe(i)}
            activeDot={<View />}
            dot={<View />}
            loop={false}>
            <StartPageEasy navigation={navigation} index={index} />
            <StartPageStarted navigation={navigation} index={index} />
            <StartPageFast navigation={navigation} index={index} />
          </Swiper>
          <View
            style={{
              width: '100%',
              position: 'absolute',
              bottom: 50,
              justifyContent: 'center',
            }}>
            <Button
              action={this.onRegisterPress.bind(this)}
              shadow
              text={START_PAGE_CREATE_ACCOUNT_BUTTON_TEXT}
              btnStyle={{
                backgroundColor: PRIMARY,
                marginTop: 0,
              }}
            />
            <Button
              action={this.onLoginPress.bind(this)}
              text={START_PAGE_LOGIN_TO_ACCOUNT_BUTTON_TEXT}
              btnStyle={{
                backgroundColor: WHITE_GREY,
              }}
              textStyle={{
                color: PRIMARY,
              }}
            />
          </View>
        </View>
      </>
    );
  }
}
