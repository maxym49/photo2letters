import {StyleSheet} from 'react-native';
import {WHITE, REDERROR, GREY_7} from '../../../common/styles-variables/colors';
import {
  buttonFontFamily,
  buttonFontSize,
  buttonFontColor,
  buttonLetterSpacing,
} from '../../../common/styles-variables/typography/typography';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 36,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    letterSpacing: buttonLetterSpacing,
    marginTop: 5,
    marginBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: GREY_7,
    color: buttonFontColor,
    paddingLeft: 10,
    fontSize: buttonFontSize,
    fontFamily: buttonFontFamily,
  },
  errorWrapper: {
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    borderRadius: 8,
    width: '100%',
    paddingBottom: 5,
    paddingRight: 2,
  },
  errorMessage: {
    color: REDERROR,
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
    textAlign: 'right',
  },
});

export default styles;
