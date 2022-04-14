export default function hideGame() {
    let one = document.querySelector('#player');
    let buttonPlay = document.querySelector('.button-play').querySelector('.play');
    let CPUContainer = document.querySelector('#CPU');
    let playAgain = document.getElementById('playAgain').parentNode;
    one.classList.toggle('m-p-0');
    one.children[1].classList.toggle('hidden');
    CPUContainer.children[1].classList.toggle('hidden');
    buttonPlay.classList.toggle('hidden');
    playAgain.classList.toggle('hidden');
}