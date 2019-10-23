import React from 'react';
import {View} from 'react-native';
import {WHITE} from '../../../common/styles-variables/colors';

const BackgroundContainer = ({children}) => {
  return (
    <>
      <View
        style={{
          backgroundColor: WHITE,
          flex: 1,
        }}>
        {children}
      </View>
    </>
  );
};

export default BackgroundContainer;
