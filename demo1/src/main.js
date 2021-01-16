import 'v5w-style/css/style.css'
import { fabric } from 'fabric'

const canvas = new fabric.Canvas('canvas')

const rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'red',
    width: 200,
    height: 200
})

// rect.animate('width', '+=200', {
//     onChange: function(){
//         console.log(rect.width)
//     },
//     duration: 2000,
//     easing: fabric.util.ease.easeInBack
// })
rect.on('change',function(){
    console.log(rect.width)
})


canvas.add(rect)

