import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    bubbled: {
        width: 334,
        height: 257,
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 128,
        height: 173,
    },
    contentContainer: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        fontSize: 20,
        marginBottom: 6,
        fontWeight: '700'
    },
    text: {
        color: '#8B8B8B',
        fontSize: 14
    }
});

export default styles;