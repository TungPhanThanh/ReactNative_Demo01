/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Song from './src/screens/PlayingScreen/PlayScreen';
import Application from './src/screens/PlayingScreen/Application'

console.disableYellowBox = true

AppRegistry.registerComponent(appName, () => App);
