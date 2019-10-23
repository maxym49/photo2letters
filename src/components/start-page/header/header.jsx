import React, {Component} from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import styleSheet from './header.style';
import {logo, hamburger} from '../../../common/path-extracter/pathExtracter';
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
        <View style={styleSheet.container}>
          <Image source={logo} resizeMode="contain" />
          {disabled ? null : <Image source={hamburger} resizeMode="contain" />}
        </View>
      </>
    );
  }
}

export default Header;
