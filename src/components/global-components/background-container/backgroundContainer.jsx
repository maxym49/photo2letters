import React from 'react';
import {View} from 'react-native';
import {WHITE_GREY} from '../../../common/styles-variables/colors';

const BackgroundContainer = ({children}) => {
  return (
    <>
      <View
        style={{
          backgroundColor: WHITE_GREY,
          flex: 1,
        }}>
        {children}
      </View>
    </>
  );
};

export default BackgroundContainer;
