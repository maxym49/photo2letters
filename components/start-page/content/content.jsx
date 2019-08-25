import React from 'react';
import styleSheet from './content.style';
import {Text, ImageBackground, Image, View} from 'react-native';
import {
    START_PAGE_TUTORIAL_CONTENT_FIRST_LINE,
    START_PAGE_TUTORIAL_CONTENT_SECOND_LINE,
    START_PAGE_TUTORIAL_CONTENT_THIRD_LINE,
    START_PAGE_TUTORIAL_HEADR
} from "../../../constant-text/texts";
import Dots from "./dots/dots";

const {bubbled, avatar, contentContainer, header, text} = styleSheet;

const Content = (props) => {
    return (
        <>
            <ImageBackground source={require('../../../images/bubble.png')} style={bubbled}>
                <Image source={require('../../../images/avatar.png')} style={avatar}/>
            </ImageBackground>
            <View style={contentContainer}>
                <Text style={header}>
                    {START_PAGE_TUTORIAL_HEADR}
                </Text>
                <Text style={text}>
                    {START_PAGE_TUTORIAL_CONTENT_FIRST_LINE}
                </Text>
                <Text style={text}>
                    {START_PAGE_TUTORIAL_CONTENT_SECOND_LINE}
                </Text>
                <Text style={text}>
                    {START_PAGE_TUTORIAL_CONTENT_THIRD_LINE}
                </Text>
                <Dots/>
            </View>
        </>
    )
};

export default Content;