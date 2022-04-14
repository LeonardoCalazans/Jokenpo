//Função para esconder e mostrar o btn jogar, carrocel e resultado REFATORAR
const div = document.querySelector('.button-play');
const buttonPlay = div.querySelector('.play');
const loadingResult = div.querySelector('.loading-result');
const result = div.querySelector('#result');
const divChoices = document.querySelector('#choices');

export function hidden() {
    buttonPlay.classList.toggle('hidden');
    loadingResult.classList.toggle('hidden');
    setTimeout(() => {
        loadingResult.classList.toggle('hidden');
        divChoices.classList.toggle('hidden');
        setTimeout(() => {
            divChoices.classList.toggle('hidden');
            result.classList.toggle('hidden');
            setTimeout(() => {
                result.classList.toggle('hidden');
                buttonPlay.classList.toggle('hidden');
            }, 3000)
        }, 3000)
    }, 3000)
}