import {StyleSheet} from 'react-native';
import {BLACKSHADOW, WHITE} from "../../../common/styles-variables/colors";

const styles = StyleSheet.create({
    button: {
        width: 256,
        height: 42,
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 36,
        marginTop: 20
    },
    buttonWithShadow: {
        shadowColor: BLACKSHADOW,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 1,
    },
    buttonText: {
        color: WHITE,
        fontSize: 16
    },
    buttonDisabled: {
        backgroundColor: '#B5B5B5'
    }
});

export default styles;