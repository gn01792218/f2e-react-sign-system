import { useRef, useState } from "react"
import useMouse from './useMouse'
export default function useCanvas() {
    const { getCanvasMousePos } = useMouse()

    const signCanvas = useRef<HTMLCanvasElement>(null)
    const ctx = signCanvas.current?.getContext("2d")!

    const [drawing, setDrawing] = useState(true)

    //methods
    function clearCanvas(canvas: HTMLCanvasElement) {
        const ctx = canvas.getContext('2d')
        ctx?.clearRect(0, 0, canvas.width, canvas.height)
    }
    //用滑鼠寫字
    function handleMouseDown(event: MouseEvent) {
        setDrawing(true)
        let [x, y] = getCanvasMousePos(signCanvas.current!, event)
        ctx.beginPath()
        ctx.moveTo(x, y)
        event.preventDefault()
    }
    function handleMouseMove(event: MouseEvent) {
        if (!drawing) return
        let [x, y] = getCanvasMousePos(signCanvas.current!, event)
        ctx.lineWidth = 2
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.strokeStyle = 'yellow'
        ctx.shadowBlur = 1
        ctx.shadowColor = 'white'
        ctx.lineTo(x, y)  //紀錄滑鼠移動到的x,y
        ctx.stroke()  //將兩點連成線的方法
    }
    // 手機寫字
    function handleTouchStart(event: MouseEvent) {

    }
    function handleTouchMove(event: MouseEvent){

    }
    //canvas轉圖片
    function converCanvasToImage(canvas:HTMLCanvasElement) {
        return canvas.toDataURL()
    }
    return {
        //data
        signCanvas,
        ctx,
        //methods
        setDrawing,
        clearCanvas,
        handleMouseMove,
        handleMouseDown,
        handleTouchStart,
        handleTouchMove,
        converCanvasToImage,
    }
}