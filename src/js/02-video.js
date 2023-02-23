import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const LOCAL_STORAGE_KEY = "videoplayer-current-time"
const player = new Player(iframe);

player.on('timeupdate', throttle(function (time) {
    const Playertime = {
        playerCurrentTime: time.seconds,
    }
    function updateStorage() {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Playertime));
    }
    updateStorage();
}, 1000));
const savedSettings = localStorage.getItem(LOCAL_STORAGE_KEY);
const parsedSettings = JSON.parse(savedSettings);

player.setCurrentTime(parsedSettings.playerCurrentTime);



