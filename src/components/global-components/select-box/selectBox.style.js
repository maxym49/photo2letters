import {StyleSheet} from 'react-native';
import {GREY, WHITE, GREY_7} from '../../../common/styles-variables/colors';
import {buttonFontColor} from '../../../common/styles-variables/typography/typography';

const styles = StyleSheet.create({
  selectBox: {
    width: '100%',
    maxHeight: 196,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    color: buttonFontColor,
    marginBottom: 20,
    backgroundColor: WHITE,
  },
  selectBoxInput: {
    width: '100%',
    height: 36,
    paddingLeft: 10,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: WHITE,
    borderBottomWidth: 2,
    borderBottomColor: GREY_7,
  },
  selectBoxItem: {
    width: '100%',
    height: 36,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: WHITE,
  },
});

export default styles;
