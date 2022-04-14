import { Records } from "./getRecords.js";
export default function onClickOrderRecords() {

    const orderRecordsByVictory = document.querySelector('#orderRecordsByVictory');
    const orderRecordsByName = document.querySelector('#orderRecordsByName');
    const orderRecordsByLose = document.querySelector('#orderRecordsByLose');

    const recordUl = document.querySelector('#recordList');
    const getRecords = JSON.parse(localStorage.getItem('Records'));

    orderRecordsByVictory.addEventListener('click', onClickWin);
    orderRecordsByLose.addEventListener('click', onClickLose);
    orderRecordsByName.addEventListener('click', onClickName);

    function onClickWin() {
        getRecords.sort(function (a, b) {
            if (a.scoreWin < b.scoreWin) {
                return 1;
            }
            if (a.scoreWin > b.scoreWin) {
                return -1;
            }
            return 0;
        });
        localStorage.setItem('Records', JSON.stringify(getRecords));
        Records(recordUl);
    }
    function onClickLose() {
        getRecords.sort(function (a, b) {
            if (a.scoreLose < b.scoreLose) {
                return 1;
            }
            if (a.scoreLose > b.scoreLose) {
                return -1;
            }
            return 0;
        });
        localStorage.setItem('Records', JSON.stringify(getRecords));
        Records(recordUl);
    }
    function onClickName() {
        getRecords.sort(function (a, b) {
            if (a.player > b.player) {
                return 1;
            }
            if (a.player < b.player) {
                return -1;
            }
            return 0;
        });
        localStorage.setItem('Records', JSON.stringify(getRecords));
        Records(recordUl);
    }

}