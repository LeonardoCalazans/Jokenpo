import matchResult from "./matchResult.js";

const divChoiceCPU = document.querySelector('#choiceCPU');
const divChoicePlayer = document.querySelector('#choicePlayer');

export default function presentationOfPlayerChoices(chosenPlayer, chosenCPU) {

    let resultGame = matchResult(chosenPlayer, chosenCPU);

    if (resultGame !== 'Draw') {
        chosenPlayer = resultGame === 'Win' ? `${chosenPlayer}Win` : chosenPlayer;
        chosenCPU = resultGame === 'Lose' ? `${chosenCPU}Win` : chosenCPU;
    } else {
        chosenPlayer = `${chosenPlayer}Draw`
        chosenCPU = `${chosenCPU}Draw`
    }

    divChoicePlayer.innerHTML = `<img class='jokenpo-img-result' alt='${chosenPlayer}' src='Img/${chosenPlayer}.svg'>
    <h3>Player</h3>`
    divChoiceCPU.innerHTML = `<img class='jokenpo-img-result' alt='${chosenCPU}' src='Img/${chosenCPU}.svg'>
    <h3>CPU</h3>`
}