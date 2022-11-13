import { MouseEventHandler, TouchEventHandler } from "react"
export interface MergeImageCanvasObj {
    mergeImageCanvasRef:React.LegacyRef<HTMLCanvasElement>,
    width?:number,
    height?:number
}

export interface BGCanvasObj {
    BGCanvas:React.LegacyRef<HTMLCanvasElement>,
    width?:number,
    height?:number
}

export interface SignCanvasObj {
    width:number,
    height:number,
    signCanvas:React.LegacyRef<HTMLCanvasElement>,
    ctx:CanvasRenderingContext2D,
    handleMouseDown:MouseEventHandler<HTMLCanvasElement>,
    handleMouseMove:MouseEventHandler<HTMLCanvasElement>,
    handleTouchStart:TouchEventHandler<HTMLCanvasElement>,
    handleTouchMove:TouchEventHandler<HTMLCanvasElement>,
    setDrawing:(set:boolean)=>void
}