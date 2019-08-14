import React, { Component } from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    StatusBar,
    FlatList,
    TouchableOpacity,
    TouchableWithoutFeedback,
    SafeAreaView,
} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from '../styles/TabStyles';

export default class HomeTab extends Component {

    componentDidMount() {
        var that = this;
        let items = Array.apply(null, Array(9)).map((v, i) => {
            return { id: 1, source: '' + (i + 1) };
        });
        that.setState({
            dataSource: items,
        });
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flex: 1 }}>
                    {/* Search View */}
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
                    {/* ScrollView */}
                    <ScrollView>
                        {/* Swiper View */}
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
                                <View style={styles.slide}>
                                    <TouchableWithoutFeedback
                                        onPress={() => this.props.navigation.navigate('DetailsPlaylist')}>
                                        <Image
                                            style={{ height: '100%', width: '100%' }}
                                            source={{ uri: 'https://lh3.googleusercontent.com/uL2fI2IeyDgEZZUgddz7ZDGY_t0NG_TOZXCiSA0OOKhXAbPIQKCiKIPNiiItNiQ3fA' }}></Image>
                                    </TouchableWithoutFeedback>
                                </View>
                                <View style={styles.slide}>
                                    <Image style={{ height: '100%', width: '100%' }} source={{ uri: 'https://www.isb.edu.vn/Res/global/images/zing.jpg' }}></Image>
                                </View>
                                <View style={styles.slide}>
                                    <Image style={{ height: '100%', width: '100%' }} source={{ uri: 'https://zmp3-photo-fbcrawler.zadn.vn/cover_video/f/f/3/3/ff33b3808f586b71b41f7d9a9a1b9db5.jpg' }}></Image>
                                </View>
                                <View style={styles.slide}>
                                    <Image style={{ height: '100%', width: '100%' }} source={{ uri: 'https://static-zmp3.zadn.vn/zma_2018/images/thumbnail_zma.jpg' }}></Image>
                                </View>
                            </Swiper>
                        </View>
                        {/* Flast List View */}
                        <View style={{ marginTop: 30, marginBottom: 10, }}>
                            <TouchableWithoutFeedback
                                onPress={() => this.props.navigation.navigate('DetailsPlaylist')}>
                                <View style={{ height: 30, marginStart: 5, marginBottom: 10 }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, paddingTop: 5 }}>CÓ THỂ BẠN MUỐN NGHE ></Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <FlatList
                                style={{ height: 150 }}
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
                                        <TouchableWithoutFeedback
                                            onPress={() => this.props.navigation.navigate('ListSong')}>
                                            <View>
                                                <Image style={{ height: 120, width: 120, margin: 5, borderRadius: 5, }} source={require('../image/trangbom.jpg')}></Image>
                                                <Text style={{ margin: 5 }}>{item.key}</Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                                }
                            />
                            <TouchableWithoutFeedback
                                style={{ height: 30, }}
                                onPress={() => this.props.navigation.navigate('DetailsPlaylist')}>
                                <Text
                                    style={{ color: 'purple', fontSize: 12, paddingTop: 5, textAlign: 'center', marginTop: 15, }}>Xem thêm ></Text>
                            </TouchableWithoutFeedback>
                        </View>
                        {/* Flast List View */}
                        <View style={{ marginTop: 5, marginBottom: 10, }}>
                            <TouchableWithoutFeedback
                                onPress={() => this.props.navigation.navigate('DetailsPlaylist')}>
                                <View style={{ height: 30, marginStart: 5, }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, paddingTop: 5 }}>PLAYLIST NGHE GẦN ĐÂY ></Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <FlatList
                                style={{ height: 150 }}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                data={[
                                    { key: 'Devin', image: 'https://static-zmp3.zadn.vn/skins/common/logo600.png' },
                                    { key: 'Dan', image: 'https://static-zmp3.zadn.vn/skins/common/logo600.png' },
                                    { key: 'Dominic', image: 'https://static-zmp3.zadn.vn/skins/common/logo600.png' },
                                    { key: 'Jackson', image: 'https://static-zmp3.zadn.vn/skins/common/logo600.png' },
                                    { key: 'James', image: 'https://static-zmp3.zadn.vn/skins/common/logo600.png' },
                                    { key: 'Joel', image: 'https://static-zmp3.zadn.vn/skins/common/logo600.png' },
                                    { key: 'John', image: 'https://static-zmp3.zadn.vn/skins/common/logo600.png' },
                                    { key: 'Jillian', image: 'https://static-zmp3.zadn.vn/skins/common/logo600.png' },
                                    { key: 'Jimmy', image: 'https://static-zmp3.zadn.vn/skins/common/logo600.png' },
                                    { key: 'Julie', image: 'https://static-zmp3.zadn.vn/skins/common/logo600.png' },
                                ]}
                                renderItem={
                                    ({ item }) =>
                                        <TouchableWithoutFeedback
                                            onPress={() => this.props.navigation.navigate('ListSong')}>
                                            <View>
                                                <Image style={{ height: 120, width: 120, margin: 5, borderRadius: 5, }} source={{ uri: item.image }}></Image>
                                                <Text style={{ margin: 5 }}>{item.key}</Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                                } />
                            <TouchableWithoutFeedback
                                style={{ height: 20, marginTop: 20 }}
                                onPress={() => this.props.navigation.navigate('DetailsPlaylist')}>
                                <Text style={{ color: 'purple', fontSize: 12, paddingTop: 5, marginBottom: 10, marginTop: 15, textAlign: 'center' }}>Xem thêm ></Text>
                            </TouchableWithoutFeedback>
                        </View>
                        {/* Grid View  */}
                        <View style={{ marginTop: 10, marginBottom: 5, }}>
                            <View style={{ height: 30, marginStart: 5, marginBottom: 10, }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, paddingTop: 5 }}>#CHARTATTACK OF WEEK</Text>
                            </View>
                            <FlatList
                                style={{ height: 200 }}
                                numColumns={2}
                                columnWrapperStyle={{ justifyContent: 'space-around' }}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                data={[
                                    { key: 'Devin', image: 'http://s.nhac.vn/v1/seo/album/s1/0/21/268/22295255.jpg' },
                                    { key: 'Dan', image: 'http://s.nhac.vn/v1/seo/album/s1/0/21/268/22295255.jpg' },
                                    { key: 'Dominic', image: 'http://s.nhac.vn/v1/seo/album/s1/0/21/268/22295255.jpg' },
                                    { key: 'Jackson', image: 'https://zmp3-photo-fbcrawler.zadn.vn/covers/d/2/d28ef98a1827d390296f2759555cc606_1499827932.jpg' },
                                ]}
                                renderItem={
                                    ({ item }) =>
                                        <TouchableWithoutFeedback
                                            onPress={() => this.props.navigation.navigate('DetailsPlaylist')}>
                                            <View>
                                                <Image style={{ height: 80, width: 165, margin: 5, borderRadius: 5, resizeMode: 'stretch' }} source={{ uri: item.image }}></Image>
                                            </View>
                                        </TouchableWithoutFeedback>
                                } />
                        </View>
                        {/* Horizontal Flast list */}
                        <View style={{ marginTop: 10, marginBottom: 5, }}>
                            <View style={{ height: 30, marginStart: 5, marginBottom: 10, }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, paddingTop: 5 }}>CHỦ ĐỀ VÀ THỂ LOẠI</Text>
                            </View>
                            <FlatList
                                style={{ height: 100 }}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                data={[
                                    { key: 'Devin', image: 'https://photo-zmp3.zadn.vn/cover/6/0/8/d/608d6474b6daa5563eb5c088ca08cc98.jpg' },
                                    { key: 'Devin', image: 'https://photo-zmp3.zadn.vn/cover/6/e/2/1/6e21382da5676fbd693a932a3625a5b8.jpg' },
                                    { key: 'Dan', image: 'https://avatar-nct.nixcdn.com/topic/mobile/2018/11/19/c/0/6/c/1542616072586_org.jpg' },
                                    { key: 'Dominic', image: 'https://avatar-nct.nixcdn.com/topic/mobile/2018/11/19/c/0/6/c/1542616603210_org.jpg' },
                                    { key: 'Jackson', image: 'https://photo-zmp3.zadn.vn/covers/f/7/f766f301706abd51957040cf1dedeaad_1510648555.jpg' },
                                    { key: 'Jackson', image: 'https://photo-zmp3.zadn.vn/cover/6/3/3/6/63369e512fbdd23fb18dc528564660df.jpg' },
                                ]}
                                renderItem={
                                    ({ item }) =>
                                        <View>
                                            <Image style={{ height: 80, width: 165, margin: 5, borderRadius: 7, resizeMode: 'stretch' }} source={{ uri: item.image }}></Image>
                                        </View>
                                } />
                        </View>
                    </ScrollView>
                </View >
            </SafeAreaView >
        );
    }
}
