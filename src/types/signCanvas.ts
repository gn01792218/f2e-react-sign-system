export interface SignCanvasObj {
    signCanvas:React.LegacyRef<HTMLCanvasElement>,
    ctx:CanvasRenderingContext2D,
    handleMouseDown:(event: MouseEvent)=>void
    handleMouseMove:(event: MouseEvent)=>void
    handleTouchStart:(event: TouchEvent)=>void
    handleTouchMove:(event: TouchEvent)=>void
    setDrawing:(set:boolean)=>void
}