import { MouseEventHandler, TouchEventHandler } from "react"
export interface SignCanvasObj {
    signCanvas:React.LegacyRef<HTMLCanvasElement>,
    ctx:CanvasRenderingContext2D,
    handleMouseDown:MouseEventHandler<HTMLCanvasElement>,
    handleMouseMove:MouseEventHandler<HTMLCanvasElement>,
    handleTouchStart:TouchEventHandler<HTMLCanvasElement>,
    handleTouchMove:TouchEventHandler<HTMLCanvasElement>,
    setDrawing:(set:boolean)=>void
}