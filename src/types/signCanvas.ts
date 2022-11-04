export interface SignCanvasObj {
    signCanvas:React.LegacyRef<HTMLCanvasElement>,
    ctx:CanvasRenderingContext2D,
    handleMouseDown:(event: MouseEvent)=>void
    handleMouseMove:(event: MouseEvent)=>void
    setDrawing:(set:boolean)=>void
}