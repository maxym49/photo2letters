import React from 'react';
import {View} from 'react-native';
import {
  PRIMARY,
  GREY_2,
} from '../../../../../../src/common/styles-variables/colors';

const RadioButton = props => {
  return (
    <View
      style={[
        {
          width: 10,
          height: 10,
          borderRadius: 10,
          marginLeft: 10,
          marginRight: 10,
          backgroundColor: GREY_2,
        },
        props.selected
          ? {
              width: 10,
              height: 10,
              borderRadius: 10,
              marginLeft: 10,
              marginRight: 10,
              backgroundColor: PRIMARY,
            }
          : null,
      ]}></View>
  );
};

export default RadioButton;
