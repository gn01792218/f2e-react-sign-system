import { useRef, useState, ChangeEventHandler, ChangeEvent } from "react"
import { Status } from '../types/gloable'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import useMouse from './useMouse'
import useImageUtil from './useImageUtil'
import useSignSteps from '../hook/useSignStep'
import useMsgBox from "./useMsgBox"
import { pushHandsignImg, loadHandMadeSignImg } from '../store/createSignSlice'
import { setStepIndecatorDon } from '../store/signSlice'


export default function useHandSignCanvas() {
    // 基本資料
    const { getCanvasMousePos, getCanvasTouchPos } = useMouse()
    const signCanvas = useRef<HTMLCanvasElement>(null)
    const ctx = signCanvas.current?.getContext("2d")!

    const [drawing, setDrawing] = useState(false)
    const [strokeColor, setStrokeColor ] = useState('black')

    // hook
    const { converCanvasToImage, checkImageSize } = useImageUtil()
    const { toStep } = useSignSteps()
    const { showMsg } = useMsgBox()
    // Redux
    const dispatch = useAppDispatch()
    const MyHandSignArray = useAppSelector( state => state.createSign.handSignArray)
    //methods
    function clearCanvas(canvas: HTMLCanvasElement) {
        const ctx = canvas.getContext('2d')
        ctx?.clearRect(0, 0, canvas.width, canvas.height)
    }
    //用滑鼠寫字
    function handleMouseDown(event: React.MouseEvent<HTMLCanvasElement>) {
        setDrawing(true)
        let [x, y] = getCanvasMousePos(signCanvas.current!, event)
        if(!ctx) return
        ctx.beginPath()
        ctx.moveTo(x, y)
        event.preventDefault()
    }
    function handleMouseMove(event: React.MouseEvent<HTMLCanvasElement>) {
        if (!drawing) return
        let [x, y] = getCanvasMousePos(signCanvas.current!, event)
        if(!ctx) return
        ctx.lineWidth = 2
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.strokeStyle = strokeColor
        ctx.shadowBlur = 1
        // ctx.shadowColor = 'white'
        ctx.lineTo(x, y)  //紀錄滑鼠移動到的x,y
        ctx.stroke()  //將兩點連成線的方法
    }
    // 手機寫字
    function handleTouchStart(event: React.TouchEvent<HTMLCanvasElement>) {
        setDrawing(true)
        let [x, y] = getCanvasTouchPos(signCanvas.current!, event)
        if(!ctx) return
        ctx.beginPath()
        ctx.moveTo(x, y)
        event.preventDefault()
    }
    function handleTouchMove(event: React.TouchEvent<HTMLCanvasElement>){
        if (!drawing) return
        let [x, y] = getCanvasTouchPos(signCanvas.current!, event)
        if(!ctx) return
        ctx.lineWidth = 2;
        ctx.lineCap = "round"; // 繪制圓形的結束線帽
        ctx.lineJoin = "round"; // 兩條線條交匯時，建立圓形邊角
        ctx.strokeStyle = strokeColor
        ctx.shadowBlur = 1; // 邊緣模糊，防止直線邊緣出現鋸齒
        ctx.shadowColor = "black"; // 邊緣顏色
        ctx.lineTo(x, y);
        ctx.stroke();
    }
    //上傳圖片
    const handleUploadImage:ChangeEventHandler<HTMLInputElement> = (event:ChangeEvent<HTMLInputElement>) =>{
            //獲取input檔案
            const file = event.target.files? event.target.files[0] : null
            if(!file?.type.includes('image')) {
                showMsg({
                    type:Status.ERROR,
                    title:'上傳檔案訊息',
                    message:'您上傳的並非圖檔'
                })
                return
            }
            if(!checkImageSize(file?.size!)) return
            const img = new Image()
            img.onload = () => {
                if(!signCanvas.current) return
                //將canvas的大小設置成圖片大小
                signCanvas.current.height = img.height
                signCanvas.current.width = img.width
                //把圖片畫上canvas
                ctx.drawImage(img,0,0)
            }
            img.src = URL.createObjectURL(file!)
            dispatch(loadHandMadeSignImg(img.src))
    }

    //轉化成圖
    function toImage() {
        return converCanvasToImage(signCanvas.current!)
    }
    function keepInHandSignArray() {
        if(MyHandSignArray.length > 4) {
            showMsg({
                type:Status.ERROR,
                title:'簽名訊息',
                message:'無法儲存，最多只能存取五張簽名',
            })
            return
        }
        dispatch(pushHandsignImg(toImage()))
        showMsg({
            type:Status.SUCCESS,
            title:'簽名訊息',
            message:'成功儲存，請查看您的簽名檔列表',
        })
    }
    //使用簽名
    function useSign(){
        dispatch(setStepIndecatorDon(1))
        dispatch(loadHandMadeSignImg(toImage()))
        toStep('/SignPage/Step3',3)
    }

    return {
        //data
        signCanvas,
        ctx,
        //methods
        setStrokeColor,
        setDrawing,
        clearCanvas,
        handleMouseMove,
        handleMouseDown,
        handleTouchStart,
        handleTouchMove,
        handleUploadImage,
        useSign, //導出給MyHandSignModal使用
        keepInHandSignArray,
        toImage,  //導出給CreateSignPage使用
    }
}