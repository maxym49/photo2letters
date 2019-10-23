import {StyleSheet, Dimensions} from 'react-native';
import {WHITE} from '../../../../src/common/styles-variables/colors';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: width,
    height: 100,
    paddingLeft: 10,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
