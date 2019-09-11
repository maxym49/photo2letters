import React, {Component} from 'react';
import Header from './header/header';
import Content from "./content/content";
import {View} from 'react-native'
import {WHITE_GREY} from "../../../src/common/styles-variables/colors";

export default class StartPage extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        const {
            centerImage,
            textHeader,
            textContentFirstLine,
            textContentSecondLine,
            textContentThirdLine,
            index,
            navigate
        } = this.props;
        return (
            <>
                <View style={{
                    backgroundColor: WHITE_GREY,
                    flex: 1
                }}>
                    <Header navigate={navigate}/>
                    <Content
                        navigate={navigate}
                        index={index}
                        centerImage={centerImage}
                        textHeader={textHeader}
                        textContentFirstLine={textContentFirstLine}
                        textContentSecondLine={textContentSecondLine}
                        textContentThirdLine={textContentThirdLine}
                    />
                </View>
            </>
        )
    }
}