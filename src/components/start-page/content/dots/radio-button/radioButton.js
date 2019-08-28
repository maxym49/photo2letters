import React from 'react';
import {View} from 'react-native';
import {PRIMARY, SECONDARY} from "../../../../../../src/common/styles-variables/colors";

const RadioButton = (props) => {
    return (
        <View style={[{
            width: 12,
            height: 12,
            borderRadius: 12,
            marginLeft: 12,
            marginRight: 12,
            backgroundColor: SECONDARY
        }, props.selected ? {
            width: 12,
            height: 12,
            borderRadius: 12,
            marginLeft: 12,
            marginRight: 12,
            backgroundColor: PRIMARY
        } : null]}>
        </View>
    );
};

export default RadioButton;