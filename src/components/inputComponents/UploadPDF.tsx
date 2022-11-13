import { ChangeEvent, ChangeEventHandler } from 'react'
import { useRef } from 'react'
import { pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import PDFCanvas from '../canvas/PDFCanvas'
import useUtil from '../../hook/useUtil'
import { loadPdfImg } from '../../store/createSignSlice'
function UploadPDF() {
    //hook
    const { converCanvasToImage } = useUtil()
    //準備canvas相關
    const pdfCanvas = useRef<HTMLCanvasElement>(null)
    const ctx = pdfCanvas.current?.getContext("2d")! 
    
    //Redux
    const dispatch = useAppDispatch()
    const imgSrc = useAppSelector(state => state.createSign.pdfImg)
    //methods
    const handleUploadFile:ChangeEventHandler<HTMLInputElement> = (event:ChangeEvent<HTMLInputElement>) =>{
        //獲取input檔案
        const file = event.target.files? event.target.files[0] : null
        if(file?.type.includes('image')) return handleUploadImg(file)
        if(file?.type.includes('pdf')) return handleUploadPDF(file)
    }
    const handleUploadImg = (file:File)=>{
        const img = new Image()
        img.onload = () => {
            if(!pdfCanvas.current) return
            //將canvas的大小設置成圖片大小
            pdfCanvas.current.height = img.height
            pdfCanvas.current.width = img.width
            //把圖片畫上canvas
            ctx.drawImage(img,0,0)
        }
        img.src = URL.createObjectURL(file)
        dispatch(loadPdfImg(img.src))
    }
    const handleUploadPDF = (file:File)=>{
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
        <section className='flex flex-col items-center'>
            <label className='upload-btn'>
                <input className='hidden' type="file" onChange={handleUploadFile}/>
                    選擇檔案
            </label>
            <div className='mt-5'>
                <div className='hidden'>
                    <PDFCanvas pdfObj={{pdfCanvas}}/>
                </div>
                {
                    imgSrc? <img className='mx-auto' src={imgSrc} alt="文件圖檔" width='80%'/> : null
                }
            </div>
        </section>
    )
}
export default UploadPDF