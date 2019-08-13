/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Home from './src/screens/HomeTab';
import {name as appName} from './app.json';
import Details from './src/screens/DetailsPlaylist';

console.disableYellowBox = true

AppRegistry.registerComponent(appName, () => App);
