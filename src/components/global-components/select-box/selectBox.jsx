import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback, ScrollView} from 'react-native';
import selectBoxStyle from './selectBox.style';
import Checkbox from '../checkbox/checkbox';
import {
  GREY,
  LIGHTLINE,
  PRIMARY,
} from '../../../common/styles-variables/colors';
import {
  buttonFontColor,
  buttonFontFamily,
  buttonLetterSpacing,
  buttonFontSize,
} from '../../../common/styles-variables/typography/typography';

export default class SelectBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };
  }

  componentDidMount() {
    const {itemList} = this.props;
    const checkedItems = itemList.map(item => {
      if (item && item.checked) return item;
    });
    this.setState({
      listLength: checkedItems.length,
    });
  }

  onSwitch = () => {
    const {isOpened} = this.state;
    this.setState({
      isOpened: !isOpened,
    });
  };

  render() {
    const {isOpened} = this.state;
    const {itemList, text, action} = this.props;
    const checkedItems = [];
    if (itemList)
      itemList.forEach(item => {
        if (item && item.checked) checkedItems.push(item);
      });
    return (
      <>
        <View
          onStartShouldSetResponder={evt => {
            evt.persist();
          }}
          style={selectBoxStyle.selectBox}>
          <TouchableWithoutFeedback onPress={this.onSwitch}>
            <View
              style={[
                selectBoxStyle.selectBoxInput,
                isOpened ? {borderBottomColor: PRIMARY} : null,
              ]}>
              <Text
                style={{
                  color: buttonFontColor,
                  fontFamily: buttonFontFamily,
                  fontSize: buttonFontSize,
                  letterSpacing: buttonLetterSpacing,
                }}>
                {checkedItems.length
                  ? `Selected items: ${checkedItems.length}`
                  : text}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          {isOpened ? (
            <ScrollView nestedScrollEnabled={true}>
              {itemList
                ? itemList.map((item, index) => (
                    <View key={item.value} style={{flexDirection: 'column'}}>
                      <TouchableWithoutFeedback onPress={() => action(item)}>
                        <View style={{width: '100%'}}>
                          <View
                            style={{
                              width: '100%',
                              height: 1,
                              backgroundColor: LIGHTLINE,
                            }}
                          />
                          <View
                            style={[
                              selectBoxStyle.selectBoxItem,
                              itemList.length - 1 === index
                                ? {borderRadius: 8}
                                : null,
                            ]}>
                            <Checkbox
                              checked={item.checked}
                              action={() => action(item)}
                              styles={{
                                alignContent: 'flex-start',
                                marginRight: 10,
                              }}
                            />
                            <Text
                              style={{
                                color: buttonFontColor,
                                fontFamily: buttonFontFamily,
                              }}>
                              {item.label}
                            </Text>
                          </View>
                        </View>
                      </TouchableWithoutFeedback>
                    </View>
                  ))
                : null}
            </ScrollView>
          ) : null}
        </View>
      </>
    );
  }
}
