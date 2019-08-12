import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bar: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    searchbar: {
        width: '85%',
        height: 27,
        backgroundColor: '#d9d5d4',
        borderRadius: 20,
        marginStart: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    avatar: {
        width: 30,
        height: 30,
        backgroundColor: 'red',
        borderRadius: 30,
    },
    logo: {
        width: 35,
        height: 35,
        borderRadius: 30,
    },
    iconsearch: {
        width: 18,
        height: 18,
        marginStart: 5,
    },
    inputsearch: {
        flex: 1,
        fontSize: 13,
        height: 27,
        color: '#111211',
        width: '90%',
        marginStart: 5,
        paddingVertical: 0,
    },
    wrapper: {},
    slide1: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#000000',
        fontSize: 30,
        fontWeight: 'bold'
    },
});

export default styles;