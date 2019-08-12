import React, { Component } from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    StatusBar,
    FlatList
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import Swiper from 'react-native-swiper';
import styles from '../styles/TabStyles';

export default class HomeTab extends Component {

    constructor() {
        super();
        this.state = {
            dataSource: {},
        };
    }

    componentDidMount() {
        var that = this;
        let items = Array.apply(null, Array(9)).map((v, i) => {
            return { id: 1, source: 'd:/React Native/FirstDemo/src/image/details.jpg' + (i + 1) };
        });
        that.setState({
            dataSource: items,
        });
    }

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
                <ScrollView>
                    <View style={{ height: 200 }}>
                        <Swiper
                            style={styles.wrapper}
                            autoplay={true}
                            loop={true}
                            height={200}
                            dot={<View style={{ backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                            activeDot={<View style={{ backgroundColor: 'rgba(255,255,255,.7)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                            paginationStyle={{
                                top: -150, left: null, right: 10,
                            }}>
                            <View style={styles.slide1}>
                                <Text style={styles.text}>Hello Swiper</Text>
                            </View>
                            <View style={styles.slide2}>
                                <Text style={styles.text}>Beautiful</Text>
                            </View>
                            <View style={styles.slide3}>
                                <Text style={styles.text}>And simple</Text>
                            </View>
                        </Swiper>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <View style={{ height: 30, marginStart: 5 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, paddingTop: 5 }}>CÓ THỂ BẠN MUỐN NGHE ></Text>
                        </View>
                        <FlatList
                            style={{ height: 130 }}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={[
                                { key: 'Devin' },
                                { key: 'Dan' },
                                { key: 'Dominic' },
                                { key: 'Jackson' },
                                { key: 'James' },
                                { key: 'Joel' },
                                { key: 'John' },
                                { key: 'Jillian' },
                                { key: 'Jimmy' },
                                { key: 'Julie' },
                            ]}
                            renderItem={
                                ({ item }) =>
                                    <View>
                                        <Image style={{ height: 100, width: 100, margin: 5, justifyContent: 'center' }} source={require('../image/trangbom.jpg')}></Image>
                                        <Text style={{ margin: 5 }}>{item.key}</Text>
                                    </View>
                            }
                        />
                        <View style={{ height: 20, marginTop: 20 }}>
                            <Text style={{ color: 'purple', fontSize: 12, paddingTop: 5, textAlign: 'center' }}>Xem thêm ></Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <View style={{ height: 30, marginStart: 5 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, paddingTop: 5 }}>PLAYLIST NGHE GẦN ĐÂY ></Text>
                        </View>
                        <FlatList
                            style={{ height: 130 }}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={[
                                { key: 'Devin' },
                                { key: 'Dan' },
                                { key: 'Dominic' },
                                { key: 'Jackson' },
                                { key: 'James' },
                                { key: 'Joel' },
                                { key: 'John' },
                                { key: 'Jillian' },
                                { key: 'Jimmy' },
                                { key: 'Julie' },
                            ]}
                            renderItem={
                                ({ item }) =>
                                    <View>
                                        <Image style={{ height: 100, width: 100, margin: 5, }} source={require('../image/trangbom.jpg')}></Image>
                                        <Text style={{ margin: 5 }}>{item.key}</Text>
                                    </View>
                            }
                        />
                        <View style={{ height: 20, marginTop: 20 }}>
                            <Text style={{ color: 'purple', fontSize: 12, paddingTop: 5, marginBottom: 10, textAlign: 'center' }}>Xem thêm ></Text>
                        </View>
                    </View>
                </ScrollView>
            </View >
        );
    }
}
