export default function matchResult(playerChosen, CPUChosen) {
    if (playerChosen === CPUChosen) {
        return 'Draw';
    }
    if (
        (playerChosen === 'pedra' && CPUChosen === 'tesoura') ||
        (playerChosen === 'tesoura' && CPUChosen === 'papel') ||
        (playerChosen === 'papel' && CPUChosen === 'pedra')
    ) {
        return 'Win';
    }
    return 'Lose';
}