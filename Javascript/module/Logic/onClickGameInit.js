export default function onClickGameInit() {
    const username = document.querySelector('#user');
    const switchButtonMatch = document.querySelector('#switchButtonMatch');
    const startGame = document.querySelector('#startGame');
    startGame?.addEventListener('click', () => {
        let playing = {
            player: username.value,
            rounds: switchButtonMatch.checked ? 10 : 5
        }
        localStorage.setItem('playing', JSON.stringify(playing));
    })
}

