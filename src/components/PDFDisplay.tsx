import { PDFObj } from '../types/pdf'
import { Document, Page } from 'react-pdf'  //載入插件

import { useAppSelector } from '../store/hooks'
interface Props {
    pdfObj: PDFObj
}
function UploadPDF(prop:Props) {
    const { pageNum } = prop.pdfObj  //外面可決定要顯示幾頁PDF

    //Redux
    const url = useAppSelector((state) => state.sign.currentStep)

    function handleLoadSuccess () {

    }
    return (
        <Document file={url} onLoadSuccess={handleLoadSuccess}>
            <Page pageNumber={pageNum}/>
        </Document>
    )
}
export default UploadPDF