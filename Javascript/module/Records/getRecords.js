export function Records(recordUl) {
    recordUl.innerHTML = '';
    const getRecords = JSON.parse(localStorage.getItem('Records'));
    getRecords.map(({ player, rounds, scoreLose, scoreWin }, index) => {
        setTimeout(() => {
            recordUl.innerHTML = recordUl.innerHTML +
                `<li class="container records" style="animation: show-right ${index}s forwards">
                <div class="player-rounds">
                    <h2 class="player-name-z-index">${player}</h2>
                    <span class="rounds">${rounds}</span>
                </div>
                <div class="scoreboard">
                    <h2>${scoreWin}</h2>
                    <h2>${scoreLose}</h2>
                </div>
            </li>`;
        }, 1000);
    });
}

export default function InitGetRecords() {
    const recordUl = document.querySelector('#recordList');
    Records(recordUl);
}