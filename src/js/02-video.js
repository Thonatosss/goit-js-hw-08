import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const LOCAL_STORAGE_KEY = "videoplayer-current-time"
const player = new Player(iframe);

player.on('timeupdate', throttle(function (time) {
    localStorage.setItem(LOCAL_STORAGE_KEY, time.seconds);
}, 1000));
player.setCurrentTime(localStorage.getItem(LOCAL_STORAGE_KEY));



