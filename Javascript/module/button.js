import { gameResult, scoreCPU, scorePlayer, game } from './gaming.js';
import { hidden } from './hiddenButton.js';
import getRandomChoiceCPU from './Logic/getRandomChoiceCPU.js';
import presentationOfPlayerChoices from './Logic/presentationOfPlayerChoices.js';
import hideGame from './Logic/hideGame.js';

const jokenpoButton = document.querySelectorAll('.jokenpo-button');
const jokenpoPedra = jokenpoButton[0];
const jokenpoPapel = jokenpoButton[1];
const jokenpoTesoura = jokenpoButton[2];
const playAgain = document.querySelector('#playAgain');
const play = document.querySelector('#play');
let playerName = document.querySelector('#player').children[0];
playerName.innerHTML = `<h1>${game.player.getName()}</h1>`

play.addEventListener('click', buttonPlayNow);
play.disabled = true;
playAgain.addEventListener('click', buttonPlayAgain);
jokenpoPedra.addEventListener('click', chosenButton);
jokenpoPapel.addEventListener('click', chosenButton);
jokenpoTesoura.addEventListener('click', chosenButton);

function selectedButton() {
    jokenpoButton.forEach((link) => {
        link.querySelector('path').classList.remove('jokenpo-img-active');
        link.classList.remove('activated-jokenpo-button');
    })
}
function disablePlayerChoiceOption() {
    jokenpoButton.forEach((link) => {
        link.disabled ? link.disabled = false : link.disabled = true;
    })
}
//Quando acionado aplica as variaveis dos jogadores. A escolha e o nome do jogador
export function chosenButton(event) {
    selectedButton();
    event.currentTarget.classList.add('activated-jokenpo-button');
    event.currentTarget.querySelector('path').classList.add('jokenpo-img-active');

    game.player.setChoice(event.currentTarget.value);
    if (game.player.getChoice() !== '') {
        play.disabled = false;
    }
}

export function buttonPlayNow() {
    hidden();
    disablePlayerChoiceOption();
    getRandomChoiceCPU();
    presentationOfPlayerChoices(game.player.getChoice(), game.CPU.getChoice());
    //expera a animação acabar para aprensentar o vencedor e atribuir a pontuação
    setTimeout(() => {
        gameResult(game);
        disablePlayerChoiceOption();
    }, 6000);
}

export function buttonPlayAgain() {
    hideGame();
    let round = document.querySelector('#round');
    round.innerHTML = `<h3>ROUND 1</h3>`;
    game.player.setScoreReset();
    game.CPU.setScoreReset();
    scorePlayer.innerText = '';
    scoreCPU.innerText = '';
}
