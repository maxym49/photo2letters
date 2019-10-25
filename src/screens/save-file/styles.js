import {StyleSheet} from 'react-native';
import {
  BLACKSHADOW,
  WHITE,
  GREY,
  PRIMARY,
} from '../../common/styles-variables/colors';
import {
  buttonFontFamily,
  textFontColor,
  textFontFamily,
  buttonFontColor,
} from '../../common/styles-variables/typography/typography';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 50,
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    padding: 16,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: WHITE,
    width: 80,
    height: 40,
    alignItems: 'center',
    borderRadius: 4,
    justifyContent: 'center',
    margin: 5,
  },
  lightText: {
    fontSize: 17,
    color: textFontColor,
    fontFamily: textFontFamily,
  },
  boldText: {
    fontSize: 17,
    color: buttonFontColor,
    fontFamily: buttonFontFamily,
  },
  bolTextPrimary: {
    fontSize: 17,
    color: PRIMARY,
    fontFamily: buttonFontFamily,
  },
});
