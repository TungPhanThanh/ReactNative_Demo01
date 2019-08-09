import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, ScrollView, Image, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default class HomeTab extends Component {
    render() {
        return (
            <View>
                {/* <StatusBar backgroundColor="#f4511e" barStyle="light-content" /> */}
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
                <ScrollView>
                    <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
                    <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
                    <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
                    <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
                    <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
                    <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
                    <Text style={{ fontSize: 96 }}>If you like</Text>
                    <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
                    <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
                    <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
                    <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
                    <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
                    <Text style={{ fontSize: 96 }}>Scrolling down</Text>
                    <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
                    <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
                    <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
                    <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
                    <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
                    <Text style={{ fontSize: 96 }}>What's the best</Text>
                    <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
                    <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
                    <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
                    <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
                    <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
                    <Text style={{ fontSize: 96 }}>Framework around?</Text>
                    <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
                    <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
                    <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
                    <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
                    <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
                    <Text style={{ fontSize: 80 }}>React Native</Text>
                </ScrollView>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    bar: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    searchbar: {
        width: '85%',
        height: 27,
        backgroundColor: '#d9d5d4',
        borderRadius: 20,
        marginStart: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    avatar: {
        width: 30,
        height: 30,
        backgroundColor: 'red',
        borderRadius: 30,
    },
    logo: {
        width: 35,
        height: 35,
        borderRadius: 30,
    },
    iconsearch: {
        width: 18,
        height: 18,
        marginStart: 5,
    },
    inputsearch: {
        flex: 1,
        fontSize: 13,
        height: 27,
        color: '#111211',
        width: '90%',
        marginStart: 5,
        paddingVertical: 0,
    },
});
