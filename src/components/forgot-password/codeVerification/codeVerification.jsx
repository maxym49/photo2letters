import React, {Component} from 'react';
import {View, Text, Animated, Alert} from 'react-native';
import CodeFiled from 'react-native-confirmation-code-field';

import styles, {
  ACTIVE_CELL_BG_COLOR,
  CELL_BORDER_RADIUS,
  CELL_SIZE,
  DEFAULT_CELL_BG_COLOR,
  NOT_EMPTY_CELL_BG_COLOR,
} from './codeVerification.style';
import {FORGOT_PASSWORD_CODE_VERIFICATION} from '../../../common/constant-text/texts';

const codeLength = 4;

export default class CodeVerification extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _animationsColor = [...new Array(codeLength)].map(
    () => new Animated.Value(0),
  );

  _animationsScale = [...new Array(codeLength)].map(
    () => new Animated.Value(1),
  );

  onFinishCheckingCode = code => {
    if (code !== '1234') {
      return Alert.alert(
        'Confirmation Code',
        "Code doesn't match!",
        [{text: 'OK'}],
        {cancelable: false},
      );
    } else {
      const {codeIsValid} = this.props;
      codeIsValid();
    }
  };

  animateCell({hasValue, index, isFocused}) {
    Animated.parallel([
      Animated.timing(this._animationsColor[index], {
        toValue: isFocused ? 1 : 0,
        duration: 250,
      }),
      Animated.spring(this._animationsScale[index], {
        toValue: hasValue ? 0 : 1,
        duration: hasValue ? 300 : 250,
      }),
    ]).start();
  }

  cellProps = ({hasValue, index, isFocused}) => {
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? this._animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          })
        : this._animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          }),
      borderRadius: this._animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: this._animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
        },
      ],
    };
    setTimeout(() => {
      this.animateCell({hasValue, index, isFocused});
    }, 0);

    return {
      style: [styles.input, animatedCellStyle],
    };
  };

  containerProps = {style: styles.inputWrapStyle};

  render() {
    return (
      <>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.inputSubLabel}>
            {FORGOT_PASSWORD_CODE_VERIFICATION}
          </Text>
          <CodeFiled
            maskSymbol=" "
            variant="clear"
            codeLength={codeLength}
            keyboardType="numeric"
            cellProps={this.cellProps}
            containerProps={this.containerProps}
            onFulfill={this.onFinishCheckingCode}
            CellComponent={Animated.Text}
          />
        </View>
      </>
    );
  }
}
