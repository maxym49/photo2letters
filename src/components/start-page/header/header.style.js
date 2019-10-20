import {StyleSheet} from 'react-native';
import {WHITE} from '../../../../src/common/styles-variables/colors';

const styles = StyleSheet.create({
  header: {
    color: WHITE,
    fontWeight: '600',
    fontSize: 26,
    margin: 0,
    fontFamily: 'Roboto-Bold',
  },
  subHeader: {
    color: WHITE,
    fontSize: 14,
    marginTop: -6,
    fontFamily: 'Roboto-Regular',
  },
  backgroundContainer: {
    width: 400,
    height: 100,
    paddingLeft: 25,
    paddingTop: 10,
  },
});

export default styles;
