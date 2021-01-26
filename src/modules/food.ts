//  定义Food类

class Food {
    element: HTMLElement

    constructor() {
        this.element = document.getElementById('food')
    }

    //  获取food的X坐标
    get X() {
        return this.element.offsetLeft
    }

    //  获取food的Y坐标
    get Y() {
        return this.element.offsetTop
    }

    //  修改食物的位置
    change() {
        //  生成随机位置 
        //  食物位置最小0 最大290 一格为10
        let top = Math.round(Math.random() * 29) * 10
        let left = Math.round(Math.random() * 29) * 10
        this.element.style.left = left + 'px'
        this.element.style.top = top + 'px'
    }
}

export default Food