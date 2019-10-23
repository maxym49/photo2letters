import {StyleSheet} from 'react-native';
import {
  headerFontSize,
  headerFontFamily,
  headerFontColor,
  textFontColor,
  textFontSize,
  textFontFamily,
} from '../../../common/styles-variables/typography/typography';

const styles = StyleSheet.create({
  frontImage: {
    alignSelf: 'center',
    marginBottom: 40,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: headerFontSize,
    marginBottom: 2,
    color: headerFontColor,
    fontFamily: headerFontFamily,
  },
  text: {
    color: textFontColor,
    fontSize: textFontSize,
    fontFamily: textFontFamily,
  },
});

export default styles;
