import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {GREY, LIGHTGREY} from '../../../common/styles-variables/colors';

export default ({action}) => {
  return (
    <>
      <TouchableOpacity onPress={action}>
        <View
          style={{
            width: 42,
            height: 42,
            alignSelf: 'center',
            borderRadius: 42 / 2,
            borderWidth: 2,
            borderColor: LIGHTGREY,
          }}></View>
      </TouchableOpacity>
    </>
  );
};
