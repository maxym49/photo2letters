import React from 'react';
import StartPageEasy from './sub-screens/startPageEasy';
import StartPageFast from './sub-screens/startPageFast';
import StartPageStarted from './sub-screens/startPageStarted';
import Swiper from 'react-native-swiper';
import {View} from 'react-native';
import Header from '../../components/start-page/header/header';
import {WHITE} from '../../common/styles-variables/colors';
import {navigateTo} from '../../common/router/commonFunctions';
import {ButtonWithBorder} from '../../components/global-components/buttons/buttonWithBorder/button';
import {ButtonWithOutBorder} from '../../components/global-components/buttons/buttonWithOutBorder/button';
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
    navigateTo('Login', this.props);
  }

  onRegisterPress() {
    navigateTo('Register', this.props);
  }

  render() {
    const {index} = this.state;
    const {navigation} = this.props;
    return (
      <>
        <Header disabled navigation={navigation} />
        <View
          style={{
            backgroundColor: WHITE,
            flex: 1,
            padding: 50,
            justifyContent: 'center',
          }}>
          <Swiper
            onIndexChanged={i => this.onSwipe(i)}
            activeDot={<View />}
            dot={<View />}
            loop={false}>
            <StartPageEasy navigation={navigation} index={index} />
            <StartPageStarted navigation={navigation} index={index} />
            <StartPageFast navigation={navigation} index={index} />
          </Swiper>

          <ButtonWithBorder
            action={this.onLoginPress.bind(this)}
            text={START_PAGE_LOGIN_TO_ACCOUNT_BUTTON_TEXT}
            btnStyle={{
              marginTop: 0,
            }}
          />
          <ButtonWithOutBorder
            action={this.onRegisterPress.bind(this)}
            text={START_PAGE_CREATE_ACCOUNT_BUTTON_TEXT}
          />
        </View>
      </>
    );
  }
}
