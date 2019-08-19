import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';

const AlbumArt = ({
    url,
    onPress
}) => (
        <View style={styles.container}>
            <Swiper
                style={styles.wrapper}
                loop={false}
                index={1}
                dot={<View style={{ backgroundColor: 'rgba(135, 131, 135,.5)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                activeDot={<View style={{ backgroundColor: 'rgba(147, 24, 158,0.9)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                paginationStyle={{
                    top: -400, left: 10, right: 10,
                }}>
                <View style={PlayScreenStyles.slide}>

                </View>
                <View style={PlayScreenStyles.slide}>
                    <Image style={{ height: 250, width: 250, borderRadius: 125 }} source={{ uri: url }}></Image>
                </View>
                <View style={PlayScreenStyles.slide}>
                    <Text></Text>
                </View>
            </Swiper>
        </View>
    );

export default AlbumArt;

const { width, height } = Dimensions.get('window');
const imageSize = width - 48;

const styles = StyleSheet.create({
    container: {
        height: 400,
        marginTop: 20,
    },
    image: {
        width: imageSize,
        height: imageSize,
    },
});

const PlayScreenStyles = StyleSheet.create({
    container: {
        margin: 10,
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
    },
    headerChild: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    songTitle: {
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
    },
    slide: {
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
