
import { useRef } from 'react'
import { ChangeEvent, ChangeEventHandler } from 'react'
import { useAppDispatch } from '../store/hooks'
import useImageUtil from './useImageUtil'
import { loadBGImg } from '../store/createSignSlice'
import { pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

/**
 * useBgCanvas
 * @Auth Jacky Houng
 * 此 hook 目標為將上傳的檔案轉成圖檔，並儲存到Redux
 */
export default function useBgCanvas(bgCanvas:HTMLCanvasElement){
    //hook
    const { converCanvasToImage, checkImageSize } = useImageUtil()

    //canvas
    //準備canvas相關
    const ctx = bgCanvas?.getContext("2d")! 

    //Redux
    const dispatch = useAppDispatch()

    //methods
    const handleOnchange:ChangeEventHandler<HTMLInputElement> = (event:ChangeEvent<HTMLInputElement>) =>{
        //獲取input檔案
        const file = event.target.files? event.target.files[0] : null
        if(file?.type.includes('image')) return storeImage(file)
        if(file?.type.includes('pdf')) return storePDFImage(file)
    }
    const storeImage = (file:File)=>{
        if(!checkImageSize(file.size)) return
        const img = new Image()
        img.onload = () => {
            if(!bgCanvas) return
            //將canvas的大小設置成圖片大小
            bgCanvas.height = img.height
            bgCanvas.width = img.width
            //把圖片畫上canvas
            ctx.drawImage(img,0,0)
        }
        img.src = URL.createObjectURL(file)
        dispatch(loadBGImg(img.src))
    }
    const storePDFImage = (file:File)=>{
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
                        const scale = 1
                        const viewport = page.getViewport({scale})
                        //1.準備canvas
                        if(!bgCanvas) return
                        bgCanvas.height = viewport.height
                        bgCanvas.width = viewport.width
                        //2.把PDF渲染到canvas上
                        page.render({
                            canvasContext:ctx,
                            viewport:viewport
                        })
                        .promise
                        .then(()=>{
                            //3.再把canvas轉成圖片
                            let img = converCanvasToImage(bgCanvas!)
                            dispatch(loadBGImg(img))
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

        //讀取二進制檔案，完成時觸發onload事件
        fileReader.readAsArrayBuffer(file)
    }
    return {
        //datd
        bgCanvas,
        //methods
        handleOnchange,
    }
}