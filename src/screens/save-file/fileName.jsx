import React, {Component} from 'react';
import {View} from 'react-native';
import Input from '../../components/global-components/input/input';
import {
  SAVE_FILE_PAGE_FILE_NAME,
  FILE_NAME_VALIDATION_ERROR_MESSAGE,
} from '../../common/constant-text/texts';
import {WHITE_GREY, WHITE} from '../../common/styles-variables/colors';
import {navigateTo} from '../../common/router/commonFunctions';

export default class FileName extends Component {
  constructor(props) {
    super(props);
    this.state = {fileName: '', isValid: false};
  }

  onFileNameChange = t => {
    this.setState({
      fileName: t,
    });
  };

  isFileNameValid = isValid => {
    this.setState(
      {
        isValid,
      },
      () => {
        if (this.state.isValid) {
          const {image} = this.props.navigation.state.params;
          const {fileName} = this.state;
          const ra = navigateTo('SendEmail', {image, fileName});
          this.props.navigation.dispatch(ra);
        }
      },
    );
  };

  render() {
    const {fileName} = this.state;
    return (
      <>
        <View
          style={{
            flex: 1,
            padding: 50,
            backgroundColor: WHITE,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Input
            text={fileName}
            isValueValid={this.isFileNameValid}
            type="text"
            action={this.onFileNameChange}
            placeholder={SAVE_FILE_PAGE_FILE_NAME}
            errorMessage={FILE_NAME_VALIDATION_ERROR_MESSAGE}
          />
        </View>
      </>
    );
  }
}
