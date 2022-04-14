
function newRecord(newGame) {

    const recordNewPlayer = {
        player: newGame.player.getName(),
        rounds: newGame.rounds,
        scoreWin: newGame.player.getScore(),
        scoreLose: newGame.CPU.getScore()
    }

    const itemList = localStorage.getItem('Records')
        ? JSON.parse(localStorage.getItem('Records'))
        : [];

    itemList.push(recordNewPlayer);
    localStorage.setItem('Records', JSON.stringify(itemList));
}

export default newRecord;