import React from 'react';
import {View, Text} from 'react-native';
import {BLACK, GREY} from '../../../common/styles-variables/colors';

const Header = ({headerText, subHeaderText}) => {
  return (
    <>
      <View
        style={{
          width: '80%',
          justifyContent: 'center',
          marginBottom: 20,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Roboto-Bold',
            color: BLACK,
          }}>
          {headerText}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontFamily: 'Roboto-Regular',
            color: GREY,
          }}>
          {subHeaderText}
        </Text>
      </View>
    </>
  );
};

export default Header;
