import React from 'react';
import {View} from 'react-native';

const ContentWrapper = ({children, style}) => {
  return (
    <>
      <View
        style={[
          {
            justifyItems: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 25,
          },
          style,
        ]}>
        {children}
      </View>
    </>
  );
};

export default ContentWrapper;
