import { StyleSheet } from 'react-native';
import { width } from '../../helpers/dimensions';

export const stylesHome = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    listContainer: {
        paddingRight: 20,
        paddingLeft: 20,
        flex: 1,
    },
    column: {
        paddingTop: 8,
        justifyContent: 'space-between',
    },
    item: {
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        width: width,
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: 'transparent',
    },
    imageCircle: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    imageCheck: {
        position: 'absolute',
        top: 15,
        right: 14,
    },
    button: {
        backgroundColor: '#BBFF00',
        borderRadius: 40,
        alignItems: 'center',
        width: '70%',
        paddingTop: 18,
        paddingBottom: 18,
    },
    activeTextButton: {
        color: '#272727',
        fontSize: 16,
        fontWeight: 'bold',
    },
    disableTextButton: {
        color: '#8CBF00',
        fontSize: 16,
        fontWeight: 'bold',
    },
})