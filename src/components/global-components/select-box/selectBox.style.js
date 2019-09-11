import {StyleSheet} from 'react-native';
import {GREY, WHITE} from "../../../common/styles-variables/colors";

const styles = StyleSheet.create({
    selectBox: {
        width: '100%',
        maxHeight: 196,
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: WHITE,
        color: GREY,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
    },
    selectBoxInput: {
        width: '100%',
        height: 48,
        borderRadius: 8,
        paddingLeft: 20,
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: WHITE
    },
    selectBoxItem: {
        width: '100%',
        height: 48,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: WHITE,
    }
});

export default styles;