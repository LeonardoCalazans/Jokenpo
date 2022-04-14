import newGame from './Player/createNewPlayerForRounds.js'
import newRecord from './Records/newRecords.js';
import matchResult from './Logic/matchResult.js';
import addingScore from './Logic/addingScore.js';
import gameWinner from './Logic/gameWinner.js';
import hideGame from './Logic/hideGame.js';
export const scoreCPU = document.querySelector('#placarCPU');
export const scorePlayer = document.querySelector('#placarPlayer');
export const game = newGame;

let count = 1;
function getEndGame(game) {
    let round = document.querySelector('#round');
    count++;
    round.innerHTML = `<h3>ROUND ${count}</h3>`;
    if (game.rounds === count) {
        count = 1;
        newRecord(game);
        if (game.player.getScore() === game.CPU.getScore()) {
            return endGame('EMPATE');
        }
        return (game.player.getScore() > game.CPU.getScore()) ? endGame(game.player.getName()) : endGame(game.CPU.getName())
    }
    return false;
}

function endGame(winner) {
    setTimeout(() => {
        hideGame();
        let showWinner = document.getElementById('showWinner');
        if (winner === 'EMPATE') {
            return showWinner.innerHTML = `<h1>${winner}</h1>`
        }
        return showWinner.innerHTML = `<h1>${winner}</h1> <h1>VENCEU</h1>`
    }, 3000);
}


//responsavel por chamar as funções anteriores retornando o resultado
export function gameResult(game) {
    let resultGameToPlayer = matchResult(game.player.getChoice(), game.CPU.getChoice());
    if (resultGameToPlayer === 'Win') {
        addingScore(game.player, game.CPU)
        return getEndGame(game) || gameWinner(game.player, resultGameToPlayer);
    }
    resultGameToPlayer === 'Lose' ? addingScore(game.CPU, game.player) : undefined;
    getEndGame(game) || gameWinner(game.CPU, resultGameToPlayer);
}
