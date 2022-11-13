import { BGCanvasObj  } from '../../types/canvas'

interface Props {
    BGCanvasObj:BGCanvasObj
}
function BGCanvas(props:Props) {
   const { width, height, BGCanvas } = props.BGCanvasObj

    return (
            <canvas 
                ref={BGCanvas} 
                className="signCanvas"
                width={width}
                height={height}
            >Your browser does not support th canvas element</canvas>
    )
}
export default BGCanvas