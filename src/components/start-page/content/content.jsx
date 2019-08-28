import React from 'react';
import styleSheet from './content.style';
import {Text, ImageBackground, Image, View} from 'react-native';
import Dots from "./dots/dots";
import Button from "../../global-components/buttons/button";
import {PRIMARY, WHITE_GREY} from "../../../../src/common/styles-variables/colors";
import {bubble} from "../../../common/path-extracter/pathExtracter";
import {
    START_PAGE_CREATE_ACCOUNT_BUTTON_TEXT, START_PAGE_LOGIN_TO_ACCOUNT_BUTTON_TEXT
} from "../../../../src/common/constant-text/texts";


const {bubbled, frontImage, contentContainer, header, text} = styleSheet;

const Content = (props) => {
    const {
        centerImage,
        textHeader,
        textContentFirstLine,
        textContentSecondLine,
        textContentThirdLine,
        index
    } = props;
    return (
        <>
            <ImageBackground source={bubble} style={bubbled}>
                <Image source={centerImage} style={frontImage} resizeMode="contain"/>
            </ImageBackground>
            <View style={contentContainer}>
                <Text style={header}>
                    {textHeader}
                </Text>
                <Text style={text}>
                    {textContentFirstLine}
                </Text>
                <Text style={text}>
                    {textContentSecondLine}
                </Text>
                <Text style={text}>
                    {textContentThirdLine}
                </Text>
                <Dots index={index}/>
            </View>
            <Button shadow text={START_PAGE_CREATE_ACCOUNT_BUTTON_TEXT} btnStyle={{
                backgroundColor: PRIMARY
            }}/>
            <Button text={START_PAGE_LOGIN_TO_ACCOUNT_BUTTON_TEXT} btnStyle={{
                backgroundColor: WHITE_GREY
            }} textStyle={{
                color: PRIMARY
            }}/>
        </>
    )
};

export default Content;