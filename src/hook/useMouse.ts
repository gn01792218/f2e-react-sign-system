export default function useMouse(){

    //methods
    function getMousePos(event:MouseEvent) {
        return [event.clientX, event.clientY]
    }
    function getTouchPos(event:TouchEvent){
        return [event.touches[0].clientX, event.touches[0].clientX]
    }
    function getCanvasMousePos(canvas:HTMLCanvasElement,event:MouseEvent) {
        let [x,y] = getMousePos(event)
        let rect = canvas.getBoundingClientRect()
        x -= rect.left
        y -= rect.top
        return [x,y]
    }
    function getCanvasTouchPos(canvas:HTMLCanvasElement,event:TouchEvent) {
        let [x,y] = getTouchPos(event)
        let rect = canvas.getBoundingClientRect()
        x -= rect.left
        y -= rect.top
        return [x,y]
    }
    return {
        //methods
        getMousePos,
        getCanvasMousePos,
        getCanvasTouchPos,
    }
}