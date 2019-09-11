import React from 'react';
import {Dimensions, Text, ImageBackground, View} from 'react-native';
import {WHITE} from "../../../common/styles-variables/colors";
import {mainWaves} from "../../../common/path-extracter/pathExtracter";
import {LOGO_HEADER, LOGO_SUB_HEADER} from "../../../common/constant-text/texts";


const Header = (props) => {
    const {width, height} = Dimensions.get('window');
    return (
        <>
            <ImageBackground source={mainWaves} style={{
                width: width,
                height: height / 4 + 20,
                alignItems: 'center',
                paddingTop: 40
            }}>
                <View>
                    <Text style={{
                        color: WHITE,
                        fontWeight: '600',
                        fontSize: 26,
                        margin: 0,
                        fontFamily: "Roboto-Bold"
                    }}>{LOGO_HEADER}</Text>
                    <Text style={{
                        color: WHITE,
                        fontWeight: '300',
                        fontSize: 14,
                        marginTop: -6,
                        fontFamily: "Roboto-Regular"
                    }}>{LOGO_SUB_HEADER}</Text>
                </View>
            </ImageBackground>
        </>
    )
};

export default Header;