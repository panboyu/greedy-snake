/**
 * 游戏控制器
 */

import Snake from './snake'
import Food from './food'
import ScoreLevel from './scoreLevel'

class GameControl {
    snake: Snake
    food: Food

    scoreLevel: ScoreLevel  //  计分 记等级

    direction: string = ''  //  方向

    isLive: boolean = true

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scoreLevel = new ScoreLevel(100, 5)

        this.init()
    }

    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))

        this.run()
    }

    keydownHandler(event: KeyboardEvent) {
        //  check按键
        this.direction = event.key
    }

    //  控制snake移动的方法
    run() {
        let X = this.snake.X
        let Y = this.snake.Y

        switch (this.direction) {
            case 'ArrowUp':
                Y -= 10
                break
            case 'ArrowDown':
                Y += 10
                break
            case 'ArrowLeft':
                X -= 10
                break
            case 'ArrowRight':
                X += 10
                break
        }


        this.checkEat(X, Y)

        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch (e) {
            this.isLive = false
            alert('GAME OVER!')
        }

        this.isLive && setTimeout(this.run.bind(this), 100 - (this.scoreLevel.level - 1) * 30)
    }

    //  检查snake是否吃到食物
    checkEat(X: number, Y: number): void {
        if (X === this.food.X && Y === this.food.Y) {
            this.snake.addBody()
            this.food.change()
            this.scoreLevel.addScore()
        }
    }
}

export default GameControl