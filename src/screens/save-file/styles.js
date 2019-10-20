import {StyleSheet} from 'react-native';
import {
  BLACKSHADOW,
  WHITE,
  WHITE_GREY,
  GREY,
  PRIMARY,
} from '../../common/styles-variables/colors';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: WHITE_GREY,
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
    shadowColor: BLACKSHADOW,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 1,
  },
  lightText: {
    fontSize: 17,
    color: GREY,
    fontFamily: 'Roboto-Regular',
  },
  boldText: {
    fontSize: 17,
    color: GREY,
    fontFamily: 'Roboto-Medium',
  },
  bolTextPrimary: {
    fontSize: 17,
    color: PRIMARY,
    fontFamily: 'Roboto-Medium',
  },
});
