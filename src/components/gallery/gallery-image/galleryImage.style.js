import {StyleSheet, Dimensions} from 'react-native';
import {WHITE} from '../../../common/styles-variables/colors';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  masonryWrapper: {
    position: 'relative',
    width: width / 2 - 20,
    height: 150,
    margin: 10,
  },
  masonryImage: {
    width: '100%',
    height: 150,
    borderRadius: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, .7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  tick: {
    color: WHITE,
    fontSize: 30,
  },
});
