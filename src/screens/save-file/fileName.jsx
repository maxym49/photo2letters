import React, {Component} from 'react';
import {View} from 'react-native';
import Input from '../../components/global-components/input/input';
import {SAVE_FILE_PAGE_FILE_NAME} from '../../common/constant-text/texts';
import {WHITE_GREY} from '../../common/styles-variables/colors';
import {navigateTo} from '../../common/router/commonFunctions';

export default class FileName extends Component {
  constructor(props) {
    super(props);
    this.state = {fileName: ''};
  }

  onFileNameChange = t => {
    this.setState({
      fileName: t,
    });
  };

  navigateToEmail = () => {
    const {image} = this.props.navigation.state.params;
    const {fileName} = this.state;
    const ra = navigateTo('SendEmail', {image, fileName});
    this.props.navigation.dispatch(ra);
  };

  render() {
    const {fileName} = this.state;
    return (
      <>
        <View
          style={{
            flex: 1,
            backgroundColor: WHITE_GREY,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Input
            text={fileName}
            action={this.onFileNameChange}
            placeholder={SAVE_FILE_PAGE_FILE_NAME}
            onBlurAction={this.navigateToEmail}
          />
        </View>
      </>
    );
  }
}
