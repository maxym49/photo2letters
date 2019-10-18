import {StyleSheet} from 'react-native';
import {BLACK, WHITE, WHITE_GREY} from '../../common/styles-variables/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_GREY,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: BLACK,
    fontWeight: '300',
  },
  masonry: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
});
