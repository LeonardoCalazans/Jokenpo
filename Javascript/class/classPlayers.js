export default class Player {
    constructor(name) {
      this.name = name
      this.choice
      this.score = 0;
    }

    getName() {
      return this.name
    }
    setChoice(valor) {
      this.choice = valor
    }
    getChoice() {
      return this.choice
    }
    setScoreWin() {
      this.score++
    }
    setScoreReset() {
        this.score = 0;
    }
    getScore() {
        return this.score
    }
}
