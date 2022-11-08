import { ChangeEvent, ChangeEventHandler } from 'react'
import { useRef, useState } from 'react'
import { pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import PDFCanvas from '../canvas/PDFCanvas'
function UploadPDF() {
    //準備canvas相關
    const pdfCanvas = useRef<HTMLCanvasElement>(null)
    const ctx = pdfCanvas.current?.getContext("2d")! 
    
    //基本資料
    const [src, setSrc] = useState<string>('')
    const { width, height } = {width:100,height:100}
    //Redux
    const dispatch = useAppDispatch()

    //methods
    const handleUploadImg:ChangeEventHandler<HTMLInputElement> = (event:ChangeEvent<HTMLInputElement>)=>{

    }
    const handleUploadPDF:ChangeEventHandler<HTMLInputElement> = (event:ChangeEvent<HTMLInputElement>)=>{
        //獲取input檔案
        const file = event.target.files? event.target.files[0] : null
        if(file?.type !== 'application/pdf') return
        //開始檔案讀取
        let fileReader = new FileReader()
        
        fileReader.onload = function () {
            const pdfData = new Uint8Array(this.result as ArrayBufferLike)
            const res = pdfjs.getDocument({data:pdfData})
            res.promise.then(
                //成功
                function success(pdf){
                    console.log('取得文件')
                    //串接第一頁pdf檔案頁面
                    const pageNum = 1
                    pdf.getPage(pageNum).then(page=>{
                        console.log('頁面載入')
                        const scale = 1.5
                        const viewport = page.getViewport({scale})
                        //準備canvas
                        if(!pdfCanvas.current) return
                        pdfCanvas.current.height = viewport.height
                        pdfCanvas.current.width = viewport.width
                        //把PDF渲染到canvas上
                        const renderTask = page.render({
                            canvasContext:ctx,
                            viewport:viewport
                        })
                        renderTask.promise.then(()=>{
                            console.log("PDF渲染!")
                        })
                    })
                },
                //失敗
                function fail(err){
                    console.log(err)
                }
            )
        }
        fileReader.readAsArrayBuffer(file)
    }

    return (
        <div>
            <label className='upload-btn'>
                <input className='hidden' type="file" onChange={handleUploadPDF}/>
                    選擇檔案
            </label>
            <PDFCanvas pdfObj={{pdfCanvas,width,height}}/>
        </div>
    )
}
export default UploadPDF