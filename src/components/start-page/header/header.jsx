import React from 'react';
import styleSheet from './header.style';
import {Text, ImageBackground, TouchableOpacity, View} from 'react-native';
import {
    LOGO_HEADER,
    LOGO_SUB_HEADER
} from '../../../../src/common/constant-text/texts';
import {waves} from "../../../common/path-extracter/pathExtracter";

const Header = (props) => {
    return (
        <>
            <ImageBackground source={waves} style={styleSheet.backgroundContainer}>
                <TouchableOpacity disabled={props.disabled} onPress={() => props.navigate('Home')}>
                  <View>
                      <Text style={styleSheet.header}>
                          {LOGO_HEADER}
                      </Text>
                      <Text style={styleSheet.subHeader}>
                          {LOGO_SUB_HEADER}
                      </Text>
                  </View>
                </TouchableOpacity>
            </ImageBackground>
        </>
    )
};

export default Header;