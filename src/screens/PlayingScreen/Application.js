import React, { Component } from 'react';
import Player from './Player';

export const TRACKS = [
    {
        title: 'Stressed Out',
        artist: 'Twenty One Pilots',
        albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
        audioUrl: 'https://data04.chiasenhac.com/downloads/1515/5/1514601-440e24df/128/Stressed%20Out%20-%20Twenty%20One%20Pilots.mp3',
    },
    {
        title: 'Love Yourself',
        artist: 'Justin Bieber',
        albumArtUrl: "http://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg",
        audioUrl: 'https://109a15170.vws.vegacdn.vn/m2babMum3K_3v2LvhDSXlw/1565900838/media2/song/web1/180/1479228/1479228.mp3?v=3',
    },
    {
        title: 'Hotline Bling',
        artist: 'Drake',
        albumArtUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png',
        audioUrl: 'http://dl2.shirazsong.org/dl/music/94-10/CD%201%20-%20Best%20of%202015%20-%20Top%20Downloads/03.%20Drake%20-%20Hotline%20Bling%20.mp3',
    },
];

export default class App extends Component {
    render() {
        return <Player tracks={TRACKS} />
    }
}
