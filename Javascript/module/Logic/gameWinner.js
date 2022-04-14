export default function gameWinner(player, playResult) {
    let result = document.querySelector('.button-play').querySelector('#result');
    if (playResult !== 'Draw') {
        return result.innerHTML = `<img class='jokenpo-img-result' alt='${player.getChoice()}' src='Img/${player.getChoice()}Win.svg'>
        <h3>${player.getName()}</h3> <h3>É O GANHADOR!</h3>`;
    }
    return result.innerHTML = `<img class='jokenpo-img-result' alt='${player.getChoice()}' src='Img/${player.getChoice()}Draw.svg'>
    <h3>EMPATE</h3>`;
}