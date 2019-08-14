/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Song from './src/screens/ListSong';

console.disableYellowBox = true

AppRegistry.registerComponent(appName, () => Song);
