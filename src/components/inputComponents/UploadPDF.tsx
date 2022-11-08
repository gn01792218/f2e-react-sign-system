import { useRef, useState } from 'react'
import { pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import FileUpload from './FileUpload'
function UploadPDF() {
    //準備canvas相關
    const pdfCanvas = useRef<HTMLCanvasElement>(null)
    const ctx = pdfCanvas.current?.getContext("2d")! 
    
    //基本資料
    const [src, setSrc] = useState<string>('')

    //Redux
    const dispatch = useAppDispatch()

    //methods
    function handleUploadImg(event:FileUpload){

    }
    function handleUploadPDF(event:FileUpload){
        
    }

    return (
        <label className='upload-btn'>
            <input className='hidden' type="file" />
                選擇檔案
        </label>
    )
}
export default UploadPDF