import React, {Component} from 'react';
import {View} from 'react-native';
import Content from './content/content';

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
      navigation,
    } = this.props;
    return (
      <>
        <View
          style={{
            flex: 1,
          }}>
          <Content
            navigation={navigation}
            index={index}
            centerImage={centerImage}
            textHeader={textHeader}
            textContentFirstLine={textContentFirstLine}
            textContentSecondLine={textContentSecondLine}
            textContentThirdLine={textContentThirdLine}
          />
        </View>
      </>
    );
  }
}
