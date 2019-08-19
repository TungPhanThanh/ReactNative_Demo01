import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({ message, onDownPress, onQueuePress, onMessagePress, }) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={onDownPress}>
            <Ionicons
                style={{ width: 25, height: 25, }}
                name='ios-arrow-down' size={25} color={'white'}
            />
        </TouchableOpacity>
        <Text onPress={onMessagePress}
            style={styles.message}>{message.toUpperCase()}</Text>
        <TouchableOpacity onPress={onQueuePress}>
            <Ionicons
                style={{ width: 25, height: 25, }}
                name='ios-more' size={25} color={'white'}
            />
        </TouchableOpacity>
    </View>
);

export default Header;

const styles = StyleSheet.create({
    container: {
        height: 72,
        paddingTop: 20,
        paddingLeft: 12,
        paddingRight: 12,
        flexDirection: 'row',
    },
    message: {
        flex: 1,
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.72)',
        fontWeight: 'bold',
        fontSize: 10,
    },
    button: {
        opacity: 0.72
    }
});
