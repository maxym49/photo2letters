import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 12,
        marginLeft: 12,
        marginRight: 12,
        backgroundColor: '#F1EEFC'
    },
    activeDot: {
        width: 12,
        height: 12,
        borderRadius: 12,
        marginLeft: 12,
        marginRight: 12,
        backgroundColor: '#7966FF'
    }
});

export default styles;