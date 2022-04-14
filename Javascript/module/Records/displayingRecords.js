import getRecords from "../Firestore/getRecords.js";

export const recordList = await getRecords();

export function displayingRecords(recordUl) {
    recordUl.innerHTML = '';
    recordList.map(({ player, rounds, lose, win }, index) => {
        setTimeout(() => {
            recordUl.innerHTML = recordUl.innerHTML +
                `<li class="container records" style="animation: show-right ${index}s forwards">
                <div class="player-rounds">
                    <h2 class="player-name-z-index">${player}</h2>
                    <span class="rounds">${rounds}</span>
                </div>
                <div class="scoreboard">
                    <h2>${win}</h2>
                    <h2>${lose}</h2>
                </div>
            </li>`;
        }, 1000);
    });
}