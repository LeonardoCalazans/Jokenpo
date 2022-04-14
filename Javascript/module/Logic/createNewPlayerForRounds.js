import Player from '../../class/classPlayers.js';

const params = JSON.parse(localStorage.getItem('playing'));

const newGame = {
    player: new Player(params.player),
    rounds: params.rounds,
    CPU: new Player('CPU'),
}

export default newGame;