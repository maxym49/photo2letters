import {StyleSheet} from 'react-native';
import {GREY, WHITE, REDERROR} from '../../../common/styles-variables/colors';

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 48,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: WHITE,
    color: GREY,
    paddingLeft: 20,
    shadowColor: '#000',
    fontFamily: 'Roboto-Regular',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
  errorWrapper: {
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    borderRadius: 8,
    width: '80%',
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
