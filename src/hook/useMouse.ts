export default function useMouse(){

    //methods
    function getMousePos(event:MouseEvent) {
        return [event.clientX,event.clientY]
    }
    function getCanvasMousePos(canvas:HTMLCanvasElement,event:MouseEvent) {
        let [x,y] = [event.clientX,event.clientY]
        const rect = canvas.getBoundingClientRect()
        x -= rect.left
        y -= rect.top
        return [x,y]
    }
    return {
        //methods
        getMousePos,
        getCanvasMousePos,
    }
}