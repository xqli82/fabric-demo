[toc]

# 1.基本介绍

官网API地址:http://fabricjs.com/docs/fabric.Canvas.html
# 2.fabric.Canvas
## 使用
```
const canvas = new fabric.Canvas('canvas id')
```
## 事件
+ object:modified  
>at the end of a transform or any change when statefull is true  
+ object:rotating   
>while an object is being rotated from the control  
+ object:scaling   
>while an object is being scaled by controls
+ object:moving   
>while an object is being dragged
+ object:skewing   
>while an object is being skewed from the controls
+ before:transform   
>before a transform is is started
+ before:selection:cleared
+ selection:cleared
+ selection:updated
+ selection:created
+ path:created   
>after a drawing operation ends and the path is added
+ mouse:down
+ mouse:move  
+ mouse:up  
+ mouse:down:before   
>on mouse down,event: before the inner fabric logic runs
+ mouse:move:before   
>on mouse move,event: before the inner fabric logic runs
+ mouse: up :before   
>on mouse up,event: before the inner fabric logic runs
+ mouse:over
+ mouse:out
+ mouse:dblclick   
>whenever a native dbl click event fires on the canvas.
+ event:dragover
+ event:dragenter
+ event:dragleave
+ event:drop
+ after:render   
>at the end of the render process,event: receives the context in the callback
+ before:render   
>at start the render process, receives the context in the callback the following events are deprecated:event:
+ object:rotated   
>at the end of a rotation transform
+ object:scaled   
>at the end of a scale transform
+ object:moved   
>at the end of translation transform
+ object:skewed   
>at the end of a skew transform
## 主要属性
# 3.fabric.StaticCanvas
## 使用
```
const static_canvas = new fabric.StaticCanvas('canvas id')
```
## 事件
+ before:render
+ after:render
+ canvas:cleared
+ object:added
+ object:removed
