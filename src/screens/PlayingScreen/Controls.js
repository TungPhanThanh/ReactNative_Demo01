import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Controls = ({
    paused,
    shuffleOn,
    repeatOn,
    onPressPlay,
    onPressPause,
    onBack,
    onForward,
    onPressShuffle,
    onPressRepeat,
    forwardDisabled,
}) => (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.0} onPress={onPressShuffle}>
                <Ionicons
                    style={{ width: 25, height: 25, }}
                    name='ios-shuffle' size={25} color={'white'}
                />
            </TouchableOpacity>
            <View style={{ width: 40 }} />
            <TouchableOpacity onPress={onBack}>
                <Ionicons
                    style={{ width: 25, height: 25, }}
                    name='ios-skip-backward' size={25} color={'white'}
                />
            </TouchableOpacity>
            <View style={{ width: 20 }} />
            {!paused ?
                <TouchableOpacity onPress={onPressPause}>
                    <View style={styles.playButton}>
                        <Ionicons name='ios-pause' size={25} color={'white'} />
                    </View>
                </TouchableOpacity> :
                <TouchableOpacity onPress={onPressPlay}>
                    <View style={styles.playButton}>
                        <Ionicons name='ios-play' size={25} color={'white'} />
                    </View>
                </TouchableOpacity>
            }
            <View style={{ width: 20 }} />
            <TouchableOpacity onPress={onForward}
                disabled={forwardDisabled}>
                <Ionicons
                    style={{ width: 25, height: 25, }}
                    name='ios-skip-forward' size={25} color={'white'}
                />
            </TouchableOpacity>
            <View style={{ width: 40 }} />
            <TouchableOpacity activeOpacity={0.0} onPress={onPressRepeat}>
                <Ionicons
                    style={{ width: 25, height: 25, }}
                    name='ios-repeat' size={25} color={'white'}
                />
            </TouchableOpacity>
        </View>
    );

export default Controls;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 8,
    },
    playButton: {
        height: 66,
        width: 66,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 66 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    secondaryControl: {
        height: 18,
        width: 18,
    },
    off: {
        opacity: 0.30,
    }
});
