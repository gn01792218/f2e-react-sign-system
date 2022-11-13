import { useEffect, useRef, useState } from "react"
import { fabric } from 'fabric'
import { Canvas } from "fabric/fabric-impl"
import { useAppSelector } from '../store/hooks'
export default function useImageMergeCanvas(){
    //合併的canvas
    const mergeImageCanvasRef = useRef<HTMLCanvasElement>(null)
    const [ mergeCanvas, setMergeCanvas ] = useState<Canvas | null>(null)

    // 簽名檔和背景圖
    const signImg = useAppSelector(state=>state.createSign.handMadeSignImg)
    const bgImg = useAppSelector(state=>state.createSign.BGImg)

    // 建立主要canvas
    useEffect(()=>{
        setMergeCanvas(new fabric.Canvas(mergeImageCanvasRef.current))
    },[mergeImageCanvasRef])

    // 合併簽名檔案
    useEffect(()=>{
        if(!mergeCanvas || !signImg) return
        fabric.Image.fromURL(signImg, img=>{
            //使用add方法會把圖檔變成可以縮放的狀態
            mergeCanvas.add(img).renderAll()
        })
    },[mergeCanvas, signImg])

    // 合併背景圖檔案
    useEffect(()=>{
        if(!mergeCanvas || !bgImg) return
        fabric.Image.fromURL(bgImg, img=>{
            mergeCanvas.setBackgroundImage(bgImg,()=>{
                mergeCanvas.renderAll()
                mergeCanvas.setHeight(img.height!);
                mergeCanvas.setWidth(img.width!);
            })
        })
    },[mergeCanvas, bgImg])

    //methods
    // 縮放
    

    return {
        //data
        mergeImageCanvasRef,
    }
}