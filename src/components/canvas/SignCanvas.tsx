import { SignCanvasObj } from '../../types/signCanvas'
interface Props {
    signCanvasObj:SignCanvasObj
}
function SignCanvas(props:Props) {
   const { signCanvas, ctx, handleMouseDown, handleMouseMove, setDrawing } = props.signCanvasObj

    return (
        <div>
            <canvas 
                ref={signCanvas} 
                className="signCanvas"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onTouchEnd={()=>setDrawing(false)} //手機觸碰離開時停止畫畫
                onMouseUp={()=>setDrawing(false)}  //滑鼠鬆開時停止畫畫
                onMouseOut={()=>setDrawing(false)} //滑鼠離開canvas區域時，停止畫畫
            >Your browser does not support th canvas element</canvas>
        </div>

    )
}
export default SignCanvas