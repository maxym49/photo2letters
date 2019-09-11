import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback, ScrollView} from 'react-native';
import selectBoxStyle from './selectBox.style';
import Checkbox from "../checkbox/checkbox";
import {GREY, LIGHTLINE} from "../../../common/styles-variables/colors";

export default class SelectBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false
        }
    }

    onSwitch = () => {
        const {isOpened} = this.state;
        this.setState({
            isOpened: !isOpened
        });
    };

    render() {
        const {isOpened} = this.state;
        const {itemList, text, action} = this.props;
        return (
            <>
                <View style={selectBoxStyle.selectBox}>
                    <TouchableWithoutFeedback onPress={this.onSwitch}>
                        <View style={selectBoxStyle.selectBoxInput}>
                            <Text style={{color: GREY}}>{text}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    {isOpened ? (
                        <ScrollView nestedScrollEnabled={true}>
                            {itemList ? itemList.map((item, index) => (
                                <View key={item.value} style={{flexDirection: 'column'}}>
                                    <View style={{width: '100%', height: 1, backgroundColor: LIGHTLINE}}/>
                                    <View style={[selectBoxStyle.selectBoxItem, itemList.length - 1 === index ? {borderRadius:8} : null]}>
                                        <Text style={{color: GREY}}>{item.label}</Text>
                                        <Checkbox checked={item.checked} action={() => action(item)}
                                                  styles={{alignContent: 'flex-end'}}/>
                                    </View>
                                </View>
                            )) : null}
                        </ScrollView>
                    ) : null}
                </View>
            </>
        )
    }
}