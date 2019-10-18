import React, {Component} from 'react';
import styleSheet from './header.style';
import {Text, ImageBackground, TouchableOpacity, View} from 'react-native';
import {
  LOGO_HEADER,
  LOGO_SUB_HEADER,
} from '../../../../src/common/constant-text/texts';
import {waves} from '../../../common/path-extracter/pathExtracter';
import {navigateTo} from '../../../common/router/commonFunctions';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  redirectToHome = () => {
    const ra = navigateTo('Home');
    this.props.navigation.dispatch(ra);
  };

  render() {
    const {disabled} = this.props;
    return (
      <>
        <ImageBackground source={waves} style={styleSheet.backgroundContainer}>
          <TouchableOpacity disabled={disabled} onPress={this.redirectToHome}>
            <View>
              <Text style={styleSheet.header}>{LOGO_HEADER}</Text>
              <Text style={styleSheet.subHeader}>{LOGO_SUB_HEADER}</Text>
            </View>
          </TouchableOpacity>
        </ImageBackground>
      </>
    );
  }
}

export default Header;
