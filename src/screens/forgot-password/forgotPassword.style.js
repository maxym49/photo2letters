import {StyleSheet, Dimensions} from 'react-native';
import {
  WHITE,
  PRIMARY,
  GREY,
  BLACK,
} from '../../common/styles-variables/colors';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'center',
    paddingTop: 50,
    height: height - 40,
    width: width - 100,
  },
  header: {
    alignSelf: 'flex-start',
    fontSize: 22,
    fontWeight: '300',
    fontFamily: 'Roboto-Regular',
    color: BLACK,
    marginBottom: 20,
  },
  image: {
    alignSelf: 'center',
    borderRadius: 2,
    width: width - 10,
    height: width / 2,
    marginBottom: 50,
  },
  text: {
    alignSelf: 'flex-start',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
  },
  subText: {
    alignSelf: 'flex-start',
    fontSize: 14,
    color: GREY,
    fontFamily: 'Roboto-Regular',
  },
});
