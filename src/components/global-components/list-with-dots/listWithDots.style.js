import {StyleSheet} from 'react-native';
import {PRIMARY, WHITE, BLACKSHADOW} from "../../../common/styles-variables/colors";

const styles = StyleSheet.create({
    listContainer: {
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    list: {
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginBottom: 20
    },
    listItem: {
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    dotWrapper: {
        paddingTop: 10,
        width: '10%',
        alignSelf: 'stretch',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    dot: {
        width: 16,
        height: 16,
        borderRadius: 16,
    },
    selectedDot: {
        backgroundColor: PRIMARY
    },
    unelectedDot: {
        borderWidth: 1,
        borderColor: BLACKSHADOW
    },
    dotLine: {
        height: 36,
        width: 1,
        backgroundColor: BLACKSHADOW,
        position: 'absolute',
        bottom: -36,
    },
    horizontalCard: {
        width: '88%',
        backgroundColor: WHITE,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8
    }
});

export default styles;