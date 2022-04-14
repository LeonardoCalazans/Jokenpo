import { scoreCPU } from "../gaming.js";
import { scorePlayer } from "../gaming.js";

export default function addingScore(winner, loser) {
    winner.setScoreWin();
    if (winner.getName() === 'CPU') {
        scoreCPU.innerText = winner.getScore();
        scorePlayer.innerText = loser.getScore();
        return
    }
    scorePlayer.innerText = winner.getScore();
    scoreCPU.innerText = loser.getScore();
}