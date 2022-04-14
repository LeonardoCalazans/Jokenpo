import { game } from '../gaming.js'

export default function getRandomChoiceCPU() {
    const jokenpoArray = Object.freeze(['papel', 'pedra', 'tesoura']);
    let random = Math.floor(Math.random() * 3);
    game.CPU.setChoice(jokenpoArray[random]);
}