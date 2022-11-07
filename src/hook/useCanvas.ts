import { useRef, useState } from "react"
import useMouse from './useMouse'
export default function useCanvas() {
    const { getCanvasMousePos, getCanvasTouchPos } = useMouse()

    const signCanvas = useRef<HTMLCanvasElement>(null)
    const ctx = signCanvas.current?.getContext("2d")!

    const [drawing, setDrawing] = useState(true)

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
        ctx.strokeStyle = 'yellow'
        ctx.shadowBlur = 1
        ctx.shadowColor = 'white'
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
        ctx.shadowBlur = 1; // 邊緣模糊，防止直線邊緣出現鋸齒
        ctx.shadowColor = "black"; // 邊緣顏色
        ctx.lineTo(x, y);
        ctx.stroke();
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