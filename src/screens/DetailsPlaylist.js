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
export default class DetailsPlaylist extends Component {
    render() {
        return (
            <View style={{ flex: 1, paddingTop: 10, paddingBottom: 10 }}>
                <FlatList
                    numColumns={2}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{ justifyContent: 'space-around' }}
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
                            <View style={{  }}>
                                <Image style={{ height: 165, width: 165, borderRadius: 5, }} source={{ uri: item.image }}></Image>
                                <Text>{item.playlist}</Text>
                                <Text style={{ fontStyle:'italic', color: '#91908d' }}>{item.artist}</Text>
                            </View>
                    } />
            </View>
        )
    }
}