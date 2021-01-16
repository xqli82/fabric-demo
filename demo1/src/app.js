import { fabric } from 'fabric'

export default class app {
    constructor(id,div) {
        this.canvas = new fabric.Canvas(id)
        this.path=undefined
        this.selected=[]
        this.panel=document.querySelector('#panel')
        this.init()
        this.canvas.on('selection:created', (e) => {           
            this.select_set(e)
        })
        this.canvas.on('selection:cleared', (e) => {
            this.select_set(e)
        })
        this.canvas.on('selection:updated', (e) => {
            this.select_set(e)
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
            height: 200,
            name:'rect1'
        })
        this.canvas.add(rect)

        this.path=new fabric.Path('M 0 0 L 200 200 L 100 300 z')
        this.path.set({
            fill:'red',
            stroke:'blue',
            stokeWidth:10,
            name:'path1'
        })
        this.canvas.add(this.path)
    }
    select_set(e){
        
        if(e.selected){
            this.selected=e.selected
        }else{
            this.selected=[]
        }
        let select_name=''
        this.selected.map(item=>{
            select_name+=item.name
        })
        this.panel.innerHTML=select_name
    }
}