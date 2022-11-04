export default function useMouse(){

    //methods
    function getMousePos(event:MouseEvent) {
        return [event.clientX,event.clientY]
    }
    function getCanvasMousePos(canvas:HTMLCanvasElement,event:MouseEvent) {
        let [x,y] = getMousePos(event)
        let rect = canvas.getBoundingClientRect()
        x -= rect.left
        y -= rect.top
        console.log(canvas.offsetLeft,canvas.offsetTop,event.offsetX,event.offsetY)
        return [x,y]
    }
    return {
        //methods
        getMousePos,
        getCanvasMousePos,
    }
}