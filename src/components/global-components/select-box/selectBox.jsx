import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback, ScrollView} from 'react-native';
import selectBoxStyle from './selectBox.style';
import Checkbox from '../checkbox/checkbox';
import {GREY, LIGHTLINE} from '../../../common/styles-variables/colors';

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
            <View style={selectBoxStyle.selectBoxInput}>
              <Text style={{color: GREY}}>
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
                        <View>
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
                            <Text style={{color: GREY}}>{item.label}</Text>
                            <Checkbox
                              checked={item.checked}
                              action={() => action(item)}
                              styles={{alignContent: 'flex-end'}}
                            />
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
