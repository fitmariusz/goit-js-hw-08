import Player from '@vimeo/player';
import _ from 'lodash'

const player = new Player("vimeo-player", {
    id: 19231868,
    width: 640,
});

lastTime = localStorage.getItem("videoplayer-current-time")
player.setCurrentTime(lastTime);

player.on('timeupdate', _.throttle((actualTime) => {
    localStorage.setItem("videoplayer-current-time", actualTime.seconds);
}, 1000));