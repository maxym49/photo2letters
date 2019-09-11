import {StyleSheet} from 'react-native';
import {GREY, WHITE} from "../../../common/styles-variables/colors";

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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
    }
});

export default styles;