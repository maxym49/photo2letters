import {StyleSheet} from 'react-native';
import {GREY} from '../../../../src/common/styles-variables/colors';

const styles = StyleSheet.create({
  bubbled: {
    width: 334,
    height: 257,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  frontImage: {
    alignSelf: 'center',
    width: 128,
    height: 173,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    marginBottom: 6,
    fontFamily: 'Roboto-Medium',
  },
  text: {
    color: GREY,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
});

export default styles;
