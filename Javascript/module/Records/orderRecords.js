import { displayingRecords, recordList } from "./displayingRecords.js";
import { recordUl } from '../../records.js';
export default function onClickOrderRecords() {

    const orderRecordsByVictory = document.querySelector('#orderRecordsByVictory');
    const orderRecordsByName = document.querySelector('#orderRecordsByName');
    const orderRecordsByLose = document.querySelector('#orderRecordsByLose');

    orderRecordsByVictory.addEventListener('click', onClickWin);
    orderRecordsByLose.addEventListener('click', onClickLose);
    orderRecordsByName.addEventListener('click', onClickName);

    function onClickWin() {
        recordList.sort(function (a, b) {
            if (a.win < b.win) {
                return 1;
            }
            if (a.win > b.win) {
                return -1;
            }
            return 0;
        });
        displayingRecords(recordUl);
    }
    function onClickLose() {
        recordList.sort(function (a, b) {
            if (a.lose < b.lose) {
                return 1;
            }
            if (a.lose > b.lose) {
                return -1;
            }
            return 0;
        });
        displayingRecords(recordUl);
    }
    function onClickName() {
        recordList.sort(function (a, b) {
            if (a.player > b.player) {
                return 1;
            }
            if (a.player < b.player) {
                return -1;
            }
            return 0;
        });
        displayingRecords(recordUl);
    }

}