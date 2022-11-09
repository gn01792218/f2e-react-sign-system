import { ChangeEvent, ChangeEventHandler } from 'react'
import { useRef, useState } from 'react'
import { pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import PDFCanvas from '../canvas/PDFCanvas'
import useUtil from '../../hook/useUtil'
import { loadPdfImg } from '../../store/createSignSlice'
import Btn from '../btn/Btn'
import { BtnType } from '../../types/gloable'
function UploadPDF() {
    //hook
    const { converCanvasToImage } = useUtil()
    //準備canvas相關
    const pdfCanvas = useRef<HTMLCanvasElement>(null)
    const ctx = pdfCanvas.current?.getContext("2d")! 
    
    //基本資料
    const { width, height } = {width:500,height:500}
    //Redux
    const dispatch = useAppDispatch()
    const imgSrc = useAppSelector(state => state.createSign.pdfImg)
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
                    //串接第一頁pdf檔案頁面
                    const pageNum = 1
                    pdf.getPage(pageNum).then(page=>{
                        const scale = 1.5
                        const viewport = page.getViewport({scale})
                        //準備canvas
                        if(!pdfCanvas.current) return
                        pdfCanvas.current.height = viewport.height
                        pdfCanvas.current.width = viewport.width
                        //把PDF渲染到canvas上
                        page.render({
                            canvasContext:ctx,
                            viewport:viewport
                        })
                        .promise
                        .then(()=>{
                            let img = converCanvasToImage(pdfCanvas.current!)
                            dispatch(loadPdfImg(img))
                        })
                        .catch(e=>console.log(e))
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
            <div className='mt-5'>
                <PDFCanvas pdfObj={{pdfCanvas,width,height}}/>
                {
                    imgSrc? <img src={imgSrc} alt="pdf產生的圖檔" width='500' height='500'/> : null
                }
                
            </div>
        </div>
    )
}
export default UploadPDF