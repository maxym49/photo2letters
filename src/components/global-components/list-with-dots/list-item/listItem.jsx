import React from 'react';
import listStyle from '../listWithDots.style';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import {LIGHTGREY, PRIMARY} from '../../../../common/styles-variables/colors';
import {
  buttonFontFamily,
  buttonFontColor,
  textFontFamily,
} from '../../../../common/styles-variables/typography/typography';

const shadowConfig = {
  width: listStyle.dot.width,
  height: listStyle.dot.height,
  color: PRIMARY,
  border: 6,
  radius: 6,
  opacity: 0.4,
  x: 0,
  y: 0,
};

export default function ListItem({item, isLastItem, action}) {
  return (
    <>
      <TouchableWithoutFeedback onPress={action}>
        <View style={listStyle.listItem}>
          <View style={listStyle.dotWrapper}>
            {item.isSelected ? (
              <BoxShadow setting={shadowConfig}>
                <View style={[listStyle.dot, listStyle.selectedDot]} />
              </BoxShadow>
            ) : (
              <View style={[listStyle.dot, listStyle.unelectedDot]} />
            )}
            {!isLastItem ? <View style={listStyle.dotLine} /> : null}
          </View>

          <View style={listStyle.horizontalCard}>
            <Text
              style={{fontFamily: buttonFontFamily, color: buttonFontColor}}>
              {item.title}
            </Text>
            <Text style={{fontFamily: textFontFamily, color: LIGHTGREY}}>
              {item.date}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
