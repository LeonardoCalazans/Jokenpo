import Player from '../../class/classPlayers.js';

const params = window.location.search.substring(1).split('?');

const paramArray = {};

for(let i=0; i<params.length; i++) {
    const param = params[i].split('=');
    paramArray[param[0]] = param[1];
}

const newGame = {
    player: new Player(decodeURI(paramArray.username)),
    rounds: parseInt(paramArray.rounds),
    CPU: new Player('CPU'),
}

export default newGame;