import {StyleSheet, Dimensions} from 'react-native';
import {BLACKSHADOW, DARKGREY, LIGHTPRIMARY, WHITE, WHITE_GREY} from "../../../common/styles-variables/colors";

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    cardModule: {
        width: width / 4,
        height: width / 4,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: WHITE,
        shadowColor: BLACKSHADOW,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        marginLeft: 10,
        marginRight: 10,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardModuleActive: {
        marginLeft: 0,
        marginRight: 0,
    },
    circle: {
        width: 48,
        height: 48,
        backgroundColor: WHITE_GREY,
        borderRadius: 48,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: BLACKSHADOW,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 5
    },
    cardModuleIcon: {
        width: 26,
        height: 26,
        alignSelf: 'center'
    },
    cardModuleText: {
        marginTop: 5,
        fontSize: 12,
        fontWeight: '300',
        color: DARKGREY
    }
});

export default styles;