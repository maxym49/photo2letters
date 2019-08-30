import React from 'react';
import styleSheet from './header.style';
import {Text, ImageBackground, TouchableOpacity, View} from 'react-native';
import {
    START_PAGE_LOGO_HEADER,
    START_PAGE_LOGO_SUB_HEADER
} from '../../../../src/common/constant-text/texts';
import {waves} from "../../../common/path-extracter/pathExtracter";

const Header = (props) => {
    return (
        <>
            <ImageBackground source={waves} style={styleSheet.backgroundContainer}>
                <TouchableOpacity onPress={() => props.navigate('Home')}>
                  <View>
                      <Text style={styleSheet.header}>
                          {START_PAGE_LOGO_HEADER}
                      </Text>
                      <Text style={styleSheet.subHeader}>
                          {START_PAGE_LOGO_SUB_HEADER}
                      </Text>
                  </View>
                </TouchableOpacity>
            </ImageBackground>
        </>
    )
};

export default Header;