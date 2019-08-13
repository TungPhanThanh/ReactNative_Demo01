import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import styles from '../styles/TabStyles';
const SCREEN_WIDTH = Dimensions.get("window").width
const SCREEN_HEIGHT = Dimensions.get('window').height

export default class DetailsPlaylist extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <FlatList
                    style={{ flex: 1, }}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    data={[
                        {
                            playlist: 'PlayList Name 0',
                            image: 'https://static-zmp3.zadn.vn/skins/common/logo600.png',
                            artist: 'Artist',
                        },
                        {
                            playlist: 'PlayList Name 1',
                            image: 'https://static-zmp3.zadn.vn/skins/common/logo600.png',
                            artist: 'Artist',
                        },
                        {
                            playlist: 'PlayList Name 2',
                            image: 'https://static-zmp3.zadn.vn/skins/common/logo600.png',
                            artist: 'Artist',
                        },
                        {
                            playlist: 'PlayList Name 3',
                            image: 'https://static-zmp3.zadn.vn/skins/common/logo600.png',
                            artist: 'Artist',
                        },
                        {
                            playlist: 'PlayList Name 4',
                            image: 'https://static-zmp3.zadn.vn/skins/common/logo600.png',
                            artist: 'Artist',
                        },
                        {
                            playlist: 'PlayList Name 5',
                            image: 'https://static-zmp3.zadn.vn/skins/common/logo600.png',
                            artist: 'Artist',
                        },
                        {
                            playlist: 'PlayList Name 6',
                            image: 'https://static-zmp3.zadn.vn/skins/common/logo600.png',
                            artist: 'Artist',
                        },
                        {
                            playlist: 'PlayList Name 7',
                            image: 'https://static-zmp3.zadn.vn/skins/common/logo600.png',
                            artist: 'Artist',
                        },
                        {
                            playlist: 'PlayList Name 8',
                            image: 'https://static-zmp3.zadn.vn/skins/common/logo600.png',
                            artist: 'Artist',
                        },
                        {
                            playlist: 'PlayList Name 9',
                            image: 'https://static-zmp3.zadn.vn/skins/common/logo600.png',
                            artist: 'Artist',
                        },
                    ]}
                    renderItem={
                        ({ item }) =>
                            <View style={{ margin: 10 }}>
                                <Image style={{ height: 150, width: 150, borderRadius: 10, }} source={{ uri: item.image }}></Image>
                                <Text>{item.playlist}</Text>
                                <Text style={{ fontStyle:'italic', color: '#91908d' }}>{item.artist}</Text>
                            </View>
                    } />
            </View>
        )
    }
}