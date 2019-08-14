import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
    TouchableHighlight,
    Dimensions,
    ImageBackground,
    TouchableWithoutFeedback,
    Animated,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListSongStyles from '../styles/ListSongStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class ListSong extends Component {
    constructor(props) {
        super(props)
        this.scrollYAnimatedValue = new Animated.Value(0);
    }
    render() {
        const headerHeight = this.scrollYAnimatedValue.interpolate(
            {
                inputRange: [0, 240],
                outputRange: [300, 60],
                extrapolate: 'clamp'
            });
        const headerOpacity = this.scrollYAnimatedValue.interpolate(
            {
                inputRange: [0, 240],
                outputRange: [1, 0],
                extrapolate: 'clamp'
            });
        return (
            <View>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    contentContainerStyle={{ overflow: 'visible', paddingTop: 300 }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.scrollYAnimatedValue } } }]
                    )}>
                    <FlatList
                        style={{ marginTop: 25, marginBottom: 10 }}
                        data={[
                            {
                                playlist: 'PlayList Name 0',
                                image: 'https://static-zmp3.zadn.vn/skins/common/logo600.png',
                                artist: 'Artist',
                            },
                            {
                                playlist: 'PlayList Name 0',
                                image: 'https://static-zmp3.zadn.vn/skins/common/logo600.png',
                                artist: 'Artist',
                            },
                            {
                                playlist: 'PlayList Name 0',
                                image: 'https://static-zmp3.zadn.vn/skins/common/logo600.png',
                                artist: 'Artist',
                            },
                            {
                                playlist: 'PlayList Name 0',
                                image: 'https://static-zmp3.zadn.vn/skins/common/logo600.png',
                                artist: 'Artist',
                            },
                            {
                                playlist: 'PlayList Name 0',
                                image: 'https://static-zmp3.zadn.vn/skins/common/logo600.png',
                                artist: 'Artist',
                            },
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
                            {
                                playlist: 'PlayList Name 9',
                                image: 'https://static-zmp3.zadn.vn/skins/common/logo600.png',
                                artist: 'Artist',
                            },
                            {
                                playlist: 'PlayList Name 9',
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
                                <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'space-between' }}>
                                    <View>
                                        <Text>{item.playlist}</Text>
                                        <Text style={{ fontStyle: 'italic', color: '#91908d' }}>{item.artist}</Text>
                                    </View>
                                    <Ionicons
                                        name='ios-more' size={20} color={'black'}
                                        onPress={() => this.props.navigation.navigate('Home')}
                                    />
                                </View>
                        } />
                </ScrollView>
                <Animated.View style={[ListSongStyles.ImageBackground, { height: headerHeight }]}>
                    <ImageBackground
                        style={{ width: '100%', height: '100%', justifyContent: 'center', }}
                        source={require('../image/trangbom.jpg')}
                        blurRadius={10}>
                        <View style={ListSongStyles.titlePlaylist}>
                            <Animated.Image
                                style={[ListSongStyles.avatarPlaylist, { opacity: headerOpacity }]}
                                source={require('../image/trangbom.jpg')} />
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, marginTop: 5, }}>Top 100 Bài Hát Nhạc Trẻ</Text>
                            <Text style={{ color: 'white', fontSize: 12, marginTop: 5 }}>bởi SoundClound API</Text>
                            <Text style={{ color: 'white', fontSize: 12, marginTop: 5 }}>100 bài hát</Text>
                        </View>
                        <TouchableHighlight
                            onPress={() => this.props.navigation.navigate('Home')}
                            underlayColor={'#33083b'}
                            style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', height: 40, width: 180, backgroundColor: '#9b14b3', borderRadius: 20, position: 'absolute', bottom: -20 }}>
                            <Text
                                style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>NGHE NGẪU NHIÊN</Text>
                        </TouchableHighlight>
                    </ImageBackground>
                </Animated.View>
                <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center', position: 'absolute', top: 0 }}>
                    <View style={{ flex: 1, }}>
                        <Ionicons
                            style={{ width: 25, height: 25, }}
                            name='ios-arrow-back' size={25} color={'white'}
                            onPress={() => this.props.navigation.navigate('Home')}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                        <Ionicons
                            name='ios-heart-empty' size={25} color={'white'}
                            onPress={() => this.props.navigation.navigate('Home')}
                        />
                        <Ionicons
                            name='ios-chatbubbles' size={25} color={'white'}
                            onPress={() => this.props.navigation.navigate('Home')}
                        />
                        <Ionicons
                            name='md-share' size={25} color={'white'}
                            onPress={() => this.props.navigation.navigate('Home')}
                        />
                        <Ionicons
                            name='md-more' size={25} color={'white'}
                            onPress={() => this.props.navigation.navigate('Home')}
                        />
                    </View>
                </View>
            </View>
        )
    }
}