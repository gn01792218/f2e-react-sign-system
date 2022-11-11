import { PDFCanvasObj } from '../../types/canvas'
interface Props {
    pdfObj: PDFCanvasObj
}
function PDFCanvas(prop:Props) {
    const { pdfCanvas } = prop.pdfObj  //外面可決定要顯示幾頁PDF

    return (
            <canvas 
            ref={pdfCanvas} 
        >Your browser does not support th canvas element</canvas>
    )
}
export default PDFCanvas