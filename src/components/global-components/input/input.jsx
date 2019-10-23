import React, {Component} from 'react';
import {TextInput, View, Text} from 'react-native';
import inputStyles from './input.style';
import {isInputValid} from '../../../common/validators/validators';
import {PRIMARY} from '../../../common/styles-variables/colors';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
      isValid: true,
      isOnFocus: false,
    };
  }

  validate = () => {
    this.setFocus();
    const {onBlurAction, type, text, isValueValid} = this.props;
    const isValid = isInputValid(text, type);
    this.setState({
      isValid,
    });
    if (isValueValid) {
      isValid ? isValueValid(true) : isValueValid(false);
    }
    if (onBlurAction) onBlurAction();
  };

  setFocus = () => {
    this.setState({
      isOnFocus: !this.state.isOnFocus,
    });
  };

  render() {
    const {textValue, isValid, isOnFocus} = this.state;
    const {
      action,
      text,
      styles,
      placeholder,
      textContentType,
      autoCompleteType,
      keyboardType,
      security,
      errorStyle,
      errorMessage,
    } = this.props;
    return (
      <>
        <TextInput
          onFocus={this.setFocus}
          style={[
            inputStyles.input,
            styles,
            isOnFocus ? {borderBottomColor: PRIMARY} : null,
          ]}
          onChangeText={action ? t => action(t) : null}
          value={text ? text : textValue}
          textContentType={textContentType}
          autoCompleteType={autoCompleteType}
          keyboardType={keyboardType}
          placeholder={placeholder}
          secureTextEntry={security}
          onBlur={this.validate}></TextInput>
        <View style={[inputStyles.errorWrapper, errorStyle]}>
          {!isValid ? (
            <Text style={inputStyles.errorMessage}>
              {errorMessage ? errorMessage : 'error'}
            </Text>
          ) : null}
        </View>
      </>
    );
  }
}
