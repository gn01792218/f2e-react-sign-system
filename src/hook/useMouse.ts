export default function useMouse(){

    //methods
    function getMousePos(event:React.MouseEvent<HTMLCanvasElement>) {
        return [event.clientX, event.clientY]
    }
    function getTouchPos(event:React.TouchEvent<HTMLCanvasElement>){
        return [event.touches[0].clientX, event.touches[0].clientY]
    }
    function getCanvasMousePos(canvas:HTMLCanvasElement,event:React.MouseEvent<HTMLCanvasElement>) {
        let [x,y] = getMousePos(event)
        let rect = canvas.getBoundingClientRect()
        x -= rect.left
        y -= rect.top
        return [x,y]
    }
    function getCanvasTouchPos(canvas:HTMLCanvasElement,event:React.TouchEvent<HTMLCanvasElement>) {
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