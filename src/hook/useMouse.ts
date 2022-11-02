export default function useMouse(){

    //methods
    function getMousePos(event:MouseEvent) {
        return [event.clientX,event.clientY]
    }

    return {
        //methods
        getMousePos
    }
}