import { useEffect, useRef, useState } from "react"
import { Status } from '../types/gloable'
import { fabric } from 'fabric'
import { Canvas } from "fabric/fabric-impl"
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { setStepIndecatorDon } from '../store/signSlice'
import useImageUtil from "./useImageUtil"
import useMsgBox from "./useMsgBox"
export default function useImageMergeCanvas(){
    //Redux
    const dispatch = useAppDispatch()
    const stepIndecatorDataArray = useAppSelector(state => state.sign.stepIndecatorDataArray)
    //hook
    const { downloadImg } = useImageUtil()
    const { showMsg } = useMsgBox()
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
    //下載圖片
    function downloadMergeImage () {
        if(!signImg) showMsg({type:Status.ERROR,title:'簽署未完成',message:'您還缺少簽名'})
        if(!bgImg) showMsg({type:Status.ERROR,title:'簽署未完成',message:'您還缺少文件'})
        if(!signImg || !bgImg) return
        const dataURL = mergeCanvas?.toDataURL({format:"png"})
        downloadImg(dataURL!)
        if(!stepIndecatorDataArray[2].done)dispatch(setStepIndecatorDon(2))
    }
    
    return {
        //data
        mergeImageCanvasRef,

        //methods
        downloadMergeImage,
    }
}