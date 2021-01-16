import { fabric } from 'fabric'

export default class app {
    constructor(id) {
        this.canvas = new fabric.Canvas(id)
        this.init()
        this.canvas.on('before:render', (e) => {
            console.log('mouse down')
            console.log(e)
        })
    }
    init() {
        this.shape()
    }
    shape() {
        const rect = new fabric.Rect({
            left: 200,
            top: 200,
            fill: 'red',
            width: 200,
            height: 200
        })
        this.canvas.add(rect)
    }
}