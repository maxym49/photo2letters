import React from 'react';
import styleSheet from './header.style';
import {Text, ImageBackground} from 'react-native';
import {
    START_PAGE_LOGO_HEADER,
    START_PAGE_LOGO_SUBHEADER
} from '../../../constant-text/texts';

const Header = (props) => {
        return (
            <>
                <ImageBackground  source={require( '../../../images/waves.png')} style={styleSheet.backgroundContainer}>
                <Text style={styleSheet.header}>
                    {START_PAGE_LOGO_HEADER}
                </Text>
                    <Text style={styleSheet.subHeader}>
                        {START_PAGE_LOGO_SUBHEADER}
                    </Text>
                </ImageBackground>
            </>
        )
};

export default Header;