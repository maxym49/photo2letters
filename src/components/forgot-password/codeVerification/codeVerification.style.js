import {StyleSheet, Platform} from 'react-native';
import {
  BLACK,
  WHITE,
  THIRD,
  SECONDARY,
} from '../../../common/styles-variables/colors';

export const CELL_SIZE = 60;
export const CELL_BORDER_RADIUS = 2;
export const DEFAULT_CELL_BG_COLOR = WHITE;
export const NOT_EMPTY_CELL_BG_COLOR = SECONDARY;
export const ACTIVE_CELL_BG_COLOR = SECONDARY;

export default StyleSheet.create({
  inputSubLabel: {
    paddingTop: 30,
    color: BLACK,
    textAlign: 'center',
  },
  inputWrapStyle: {
    height: CELL_SIZE,
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputSubLabel: {
    paddingTop: 30,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
  input: {
    margin: 0,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: 55,
    ...Platform.select({
      web: {
        lineHeight: 65,
      },
    }),
    fontSize: 30,
    fontFamily: 'Roboto-Bold',
    borderRadius: CELL_BORDER_RADIUS,
    color: THIRD,
    backgroundColor: WHITE,
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
