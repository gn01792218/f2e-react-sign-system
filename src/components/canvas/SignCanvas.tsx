import { SignCanvasObj } from '../../types/canvas'

interface Props {
    signCanvasObj:SignCanvasObj
}
function SignCanvas(props:Props) {
   const { width, height, signCanvas, handleMouseDown, handleMouseMove, handleTouchStart, handleTouchMove, setDrawing } = props.signCanvasObj

    return (
            <canvas 
                ref={signCanvas} 
                className="signCanvas"
                width={width}
                height={height}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={()=>setDrawing(false)} //手機觸碰離開時停止畫畫
                onMouseUp={()=>setDrawing(false)}  //滑鼠鬆開時停止畫畫
                onMouseOut={()=>setDrawing(false)} //滑鼠離開canvas區域時，停止畫畫
            >Your browser does not support th canvas element</canvas>
    )
}
export default SignCanvas