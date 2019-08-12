import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, ScrollView, Image, StatusBar } from 'react-native';
import styles from '../styles/TabStyles';

export default class PersonTab extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.bar}>
                    <Image style={styles.avatar}
                        source={require('../image/trangbom.jpg')}>
                    </Image>
                    <View style={styles.searchbar}>
                        <Image
                            style={styles.iconsearch}
                            source={require('../image/icons8-search-24.png')}>
                        </Image>
                        <TextInput
                            style={styles.inputsearch}
                            placeholder='Tìm kiếm'
                            placeholderTextColor='rgba(255, 255, 255, 0.5)'
                            autoCorrect={false}
                            returnKeyType='next' />
                    </View>
                </View>
            </View>
        )
    }
}
