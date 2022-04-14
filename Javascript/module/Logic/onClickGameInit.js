export default function onClickGameInit() {
    const username = document.querySelector('#user');
    const switchButtonMatch = document.querySelector('#switchButtonMatch');
    const startGame = document.querySelector('#startGame');

    startGame?.addEventListener('click', onClick);
    function onClick() {
        if (username.value === '') {
            let userSpan = document.querySelector('#userSpan');
            return userSpan.innerHTML = `<p>Por favor, insira um apelido</p>`;
        }
        const rounds = switchButtonMatch.checked ? 10 : 5;
        const router = window.location.href = `http://127.0.0.1:5500/gamePlay.html?username=${username.value}?rounds=${rounds}`;

        return router;
    }
}

