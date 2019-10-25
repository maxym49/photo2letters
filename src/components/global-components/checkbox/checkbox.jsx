import React, {Component} from 'react';
import {View, TouchableWithoutFeedback, Image} from 'react-native';
import {check} from '../../../common/path-extracter/pathExtracter';
import {
  PRIMARY,
  WHITE_GREY,
  GREY_2,
  GREY_1,
} from '../../../common/styles-variables/colors';

export default class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSelect() {
    const {action} = this.props;
    action();
  }

  render() {
    const {styles, checked} = this.props;
    return (
      <>
        <View>
          <TouchableWithoutFeedback onPress={this.onSelect.bind(this)}>
            <View
              style={[
                {
                  width: 22,
                  height: 22,
                  borderRadius: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                checked
                  ? {backgroundColor: PRIMARY}
                  : {
                      backgroundColor: 'transparent',
                      borderWidth: 2,
                      borderColor: GREY_1,
                      width: 20,
                      height: 20,
                    },
                styles,
              ]}>
              {checked ? (
                <Image
                  source={check}
                  resizeMode="contain"
                  style={{
                    width: 16,
                    height: 16,
                  }}
                />
              ) : null}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </>
    );
  }
}
