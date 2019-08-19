import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';
import styles from '../styles/TabStyles';
import PLAYLISTDATA from '../data/DataPlaylist';
export default class DetailsPlaylist extends Component {
    render() {
        return (
            <View style={{ flex: 1, paddingTop: 10, paddingBottom: 10 }}>
                <FlatList
                    numColumns={2}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{ justifyContent: 'space-around' }}
                    data={PLAYLISTDATA}
                    renderItem={
                        ({ item }) =>
                            <TouchableWithoutFeedback
                                onPress={() => this.props.navigation.navigate('ListSong')}>
                                <View style={{}}>
                                    <Image style={{ height: 165, width: 165, borderRadius: 5, }} source={{ uri: item.image }}></Image>
                                    <Text>{item.playlist}</Text>
                                    <Text style={{ fontStyle: 'italic', color: '#91908d' }}>{item.artist}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                    } />
            </View>
        )
    }
}