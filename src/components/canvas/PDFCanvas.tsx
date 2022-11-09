import { PDFObj } from '../../types/pdf'
interface Props {
    pdfObj: PDFObj
}
function PDFCanvas(prop:Props) {
    const { pdfCanvas, width, height } = prop.pdfObj  //外面可決定要顯示幾頁PDF

    return (
            <canvas 
            ref={pdfCanvas} 
            className="signCanvas"
            width={width}
            height={height}
        >Your browser does not support th canvas element</canvas>
    )
}
export default PDFCanvas