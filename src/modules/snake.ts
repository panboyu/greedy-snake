/**
 * 定义snake类
 *
 */

class Snake {
    element: HTMLElement
    head: HTMLElement
    bodies: HTMLCollection

    constructor() {
        this.element = document.getElementById('snake')
        this.head = document.querySelector('#snake>div')
        this.bodies = document.getElementById('snake').getElementsByTagName('div')
    }

    //  获取蛇头坐标
    get X() {
        return this.head.offsetLeft
    }

    get Y() {
        return this.head.offsetTop
    }

    set X(value: number) {
        if (this.X === value) return
        //  判断撞墙
        if (value < 0 || value > 290) {
            throw Error('撞墙')
        }

        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if (value > this.X) {
                value = this.X - 10
            } else {
                value = this.X + 10
            }
        }

        this.moveBody()

        this.head.style.left = value + 'px'

        this.checkHeadBody()
    }

    set Y(value: number) {
        if (this.Y === value) return
        if (value < 0 || value > 290) {
            throw Error('撞墙')
        }

        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if (value > this.Y) {
                value = this.Y - 10
            } else {
                value = this.Y + 10
            }
        }

        this.moveBody()

        this.head.style.top = value + 'px'

        this.checkHeadBody()
    }

    //  吃食物增加身体
    addBody() {
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }

    //  添加一个身体移动
    moveBody() {
        //  后一节设置为前一节的位置
        //  遍历所有的body
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    checkHeadBody() {
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error('撞到自己')
            }
        }
    }
}

export default Snake