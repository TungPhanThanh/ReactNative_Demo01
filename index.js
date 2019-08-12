/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Home from './src/screens/HomeTab';
import {name as appName} from './app.json';
import swiper from './src/test/swiper';

console.disableYellowBox = true

AppRegistry.registerComponent(appName, () => App);
