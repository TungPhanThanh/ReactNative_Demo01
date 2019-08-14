import { StyleSheet } from 'react-native';

const ListSongStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    ImageBackground: {
        height: 300,
        width: '100%',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
    },
    titlePlaylist: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    avatarPlaylist: {
        height: 100,
        width: 100,
        margin: 5,
        borderRadius: 5,
    },
});

export default ListSongStyles;