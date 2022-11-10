import { MergeImageCanvasObj } from '../../types/canvas'
interface Props {
    mergeImageCanvasObj: MergeImageCanvasObj
}
function MergeImageCanvas(prop:Props) {
    const { mergeImageCanvasRef } = prop.mergeImageCanvasObj  //外面可決定要顯示幾頁PDF

    return (
            <canvas 
            ref={mergeImageCanvasRef} 
        >Your browser does not support th canvas element</canvas>
    )
}
export default MergeImageCanvas