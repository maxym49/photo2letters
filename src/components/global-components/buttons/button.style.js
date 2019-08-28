import {StyleSheet} from 'react-native';

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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16
    }
});

export default styles;