import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {aboutMe, creditCard} from '../../common/path-extracter/pathExtracter';
import {
  CREDENTIALS_ABOUT_TITLE,
  CREDENTIALS_ABOUT_TEXT,
  CREDENTIALS_DONATION_TITLE,
  CREDENTIALS_DONATION_TEXT,
  CREDENTIALS_DONATION_BUTTON,
} from '../../common/constant-text/texts';
import {
  buttonFontFamily,
  headerFontFamily,
  headerFontColor,
  headerFontSize,
  buttonFontColor,
  buttonFontSize,
} from '../../common/styles-variables/typography/typography';
import {WHITE} from '../../common/styles-variables/colors';
import Header from '../../components/start-page/header/header';
import {ButtonWithBorder} from '../../components/global-components/buttons/buttonWithBorder/button';

export default class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  onDonate = () => {};

  render() {
    const {navigation} = this.props;
    return (
      <>
        <Header from="Credentials" navigation={navigation} />
        <ScrollView>
          <View
            style={{
              backgroundColor: WHITE,
              flex: 1,
              padding: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '100%',
                marginBottom: 60,
              }}>
              <Text
                style={{
                  fontFamily: headerFontFamily,
                  color: headerFontColor,
                  fontSize: headerFontSize,
                }}>
                {CREDENTIALS_ABOUT_TITLE}
              </Text>
              <Text
                style={{
                  fontFamily: buttonFontFamily,
                  color: '#4B4B4B',
                  fontSize: buttonFontSize,
                  lineHeight: 24,
                }}>
                {CREDENTIALS_ABOUT_TEXT}
              </Text>
            </View>
            <Image source={aboutMe} resizeMode="contain" />
            <View
              style={{
                width: '100%',
                marginTop: 80,
                marginBottom: 60,
              }}>
              <Text
                style={{
                  fontFamily: headerFontFamily,
                  color: headerFontColor,
                  fontSize: headerFontSize,
                }}>
                {CREDENTIALS_DONATION_TITLE}
              </Text>
              <Text
                style={{
                  fontFamily: buttonFontFamily,
                  color: '#4B4B4B',
                  fontSize: buttonFontSize,
                }}>
                {CREDENTIALS_DONATION_TEXT}
              </Text>
            </View>
            <Image source={creditCard} resizeMode="contain" />
            <ButtonWithBorder
              action={this.onDonate}
              btnStyle={{marginTop: 120}}
              text={CREDENTIALS_DONATION_BUTTON}
            />
          </View>
        </ScrollView>
      </>
    );
  }
}
