import { useRef, useState } from "react"
import { BtnType } from '../../types/gloable'
import Btn from '../btn/Btn'
import useMouse from '../../hook/useMouse'
function SignCanvas() {
    const { getMousePos } = useMouse()
    const signCanvas = useRef<HTMLCanvasElement>(null)
    const ctx = signCanvas.current?.getContext("2d")

    const [drawing,setDrawing] = useState(true)

    //methods
    function handleMouseMove (event:MouseEvent) {
        if(!drawing) return
        let [x,y] = getMousePos(event)
        if(ctx){
            ctx.lineWidth = 2
        }
    }
    function clearCanvas(){
        ctx?.clearRect(0,0,signCanvas.current?.width!,signCanvas.current?.height!)
    }
    return (
        <div>
            <canvas 
                ref={signCanvas} 
                className="signCanvas"
                onMouseMove={handleMouseMove}
                onTouchEnd={()=>setDrawing(false)} //手機觸碰離開時停止畫畫
                onMouseUp={()=>setDrawing(false)}  //滑鼠鬆開時停止畫畫
                onMouseOut={()=>setDrawing(false)} //滑鼠離開canvas區域時，停止畫畫
            >Your browser does not support th canvas element</canvas>
            <Btn btnObj={{type:BtnType.SECONDARY,title:'清除畫布',clickHandler:()=>clearCanvas}}/>
        </div>

    )
}
export default SignCanvas