//  定义记分牌的类

class ScoreLevel {
    score: number
    level: number
    scoreEle: HTMLElement
    levelEle: HTMLElement

    maxLevel: number

    upScore: number

    constructor(maxLevel = 10, upScore = 10) {
        this.score = 0
        this.level = 1
        this.maxLevel = maxLevel
        this.upScore = upScore
        this.scoreEle = document.querySelector('.score')
        this.levelEle = document.querySelector('.level')
    }

    //  设置加分
    addScore() {
        this.scoreEle.innerHTML = ++this.score + ''
        if (this.score % this.upScore === 0) {
            this.levelUp()
        }
    }

    //  升级
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + ''
        }
    }
}

export default ScoreLevel