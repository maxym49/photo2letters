import React, {Component} from 'react';
import {View, Text, Image, Dimensions, TouchableWithoutFeedback} from 'react-native';
import cardStyle from './cardModule.style';
import {PRIMARY} from "../../../common/styles-variables/colors";
import {BoxShadow} from 'react-native-shadow';

const {width} = Dimensions.get('window');
const activeCardModuleStyle = {
    width: width/4,
    height: width/4,
    color: PRIMARY,
    border: 8,
    radius: 3,
    opacity: 0.2,
    x: 0,
    y: 0,
};

export default class CardModule extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {image, text, isActive} = this.props;
        return (
            <>
                    {isActive ? (
                        <View style={{
                            width: width/4,
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: width/4,
                            marginLeft: 10,
                            marginRight: 10,
                        }}>
                            <BoxShadow setting={activeCardModuleStyle}>
                                <View style={[cardStyle.cardModule, cardStyle.cardModuleActive]}>
                                    <View style={cardStyle.circle}>
                                        <Image source={image} resizeMode="contain" style={cardStyle.cardModuleIcon}/>
                                    </View>
                                    <Text style={cardStyle.cardModuleText}>{text}</Text>
                                </View>
                            </BoxShadow>
                        </View>
                    ) : (
                        <View style={[cardStyle.cardModule, isActive ? cardStyle.cardModuleActive : null]}>
                            <View style={cardStyle.circle}>
                                <Image source={image} resizeMode="contain" style={cardStyle.cardModuleIcon}/>
                            </View>
                            <Text style={cardStyle.cardModuleText}>{text}</Text>
                        </View>
                    )}
            </>
        )
    }
};
