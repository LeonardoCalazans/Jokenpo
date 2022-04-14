import postRecords from "../Firestore/postRecords.js";

function newRecord(newGame) {

    const recordNewPlayer = {
        player: newGame.player.getName(),
        rounds: newGame.rounds,
        win: newGame.player.getScore(),
        lose: newGame.CPU.getScore()
    }

    postRecords(recordNewPlayer);
}

export default newRecord;