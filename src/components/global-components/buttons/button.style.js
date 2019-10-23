import {StyleSheet} from 'react-native';
import {
  buttonFontColor,
  buttonFontSize,
  buttonFontFamily,
  buttonLetterSpacing,
} from '../../../common/styles-variables/typography/typography';
import {GREY_1, WHITE, PRIMARY} from '../../../common/styles-variables/colors';

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 36,
    alignSelf: 'center',
    flexDirection: 'column',
    position: 'relative',
    borderRadius: 2,
    marginTop: 5,
    marginBottom: 5,
  },
  buttonText: {
    color: buttonFontColor,
    fontSize: buttonFontSize,
    fontFamily: buttonFontFamily,
    letterSpacing: buttonLetterSpacing,
  },
  buttonDisabled: {
    backgroundColor: GREY_1,
  },
  borderButtonDisabled: {
    backgroundColor: WHITE,
  },
  borderLeftWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 2,
    height: 36,
    transform: [{rotate: '180deg'}],
  },
  borderLeft: {
    width: 2,
    backgroundColor: PRIMARY,
  },
  borderRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 2,
    backgroundColor: PRIMARY,
  },
  borderTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: PRIMARY,
    height: 2,
  },
  borderBottomWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 2,
    transform: [{rotate: '180deg'}],
  },
  borderBottom: {
    backgroundColor: PRIMARY,
    height: 2,
  },
  textWrapper: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
  },
});

export default styles;
