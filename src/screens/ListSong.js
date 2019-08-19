import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
    TouchableHighlight,
    Dimensions,
    StatusBar,
    ImageBackground,
    TouchableWithoutFeedback,
    Animated,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListSongStyles from '../styles/ListSongStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TRACKS from '../data/TrackData';

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
                <StatusBar hidden={true} />
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
                        data={TRACKS}
                        renderItem={
                            ({ item, index }) =>
                                <TouchableWithoutFeedback
                                    onPress={() => this.props.navigation.navigate('Player')}>
                                    <View style={{ flexDirection: 'row', margin: 10, height: 35, alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text style={{ textAlign: 'center', width: 20 }}>{index + 1}</Text>
                                        <View style={{ position: 'absolute', left: 40, right: 25 }}>
                                            <Text>{item.title}</Text>
                                            <Text style={{ fontStyle: 'italic', color: '#91908d' }}>{item.artist}</Text>
                                        </View>
                                        <Ionicons
                                            name='ios-more' size={20} color={'black'}
                                            onPress={() => this.props.navigation.navigate('Home')}
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
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
                            onPress={() => this.props.navigation.navigate('Player')}
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
                            onPress={() => this.props.navigation.goBack()}
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