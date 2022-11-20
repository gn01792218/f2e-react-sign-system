import { BtnType } from '../types/gloable'
import { useEffect, useState, useRef } from 'react'
import Btn from './btn/Btn'
import SignCanvas from './canvas/SignCanvas'
import useSignCanvas from '../hook/useSignCanvas'
import TheColorPalette from './TheColorPalette'

function CreateHandSign() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [ canvas, setCanvas ] = useState<HTMLCanvasElement | null>(null)
    useEffect(()=>{
        setCanvas(canvasRef.current!)
    },[canvasRef])
    const { 
        signCanvas,
        ctx,
        canvasSize,
        setDrawing,
        setStrokeColor,
        clearCanvas,
        handleMouseDown,
        handleMouseMove,
        handleTouchMove,
        handleTouchStart,
        useSign,
        keepInHandSignArray,
    } = useSignCanvas(canvas!)
    
    return (
        <main className='text-white'>
            <section>
                <section className='w-full flex flex-col border-2 p-5'>
                    <TheColorPalette setColor={setStrokeColor} />
                    <div className='mx-auto mb-5'>
                        <SignCanvas signCanvasObj={{
                            width: canvasSize.width,
                            height: canvasSize.height,
                            signCanvas:canvasRef,
                            ctx,
                            setDrawing,
                            handleMouseDown,
                            handleMouseMove,
                            handleTouchMove,
                            handleTouchStart
                        }} />
                    </div>
                    <div className='flex flex-col justify-around items-center lg:flex-row'>
                        <Btn btnObj={{ type: BtnType.SECONDARY, title: '清除簽名', clickHandler: () => clearCanvas(canvas!) }} />
                        <Btn btnObj={{ type: BtnType.PRIMARY, title: '使用簽名', clickHandler: useSign }} />
                        <Btn btnObj={{ type: BtnType.SECONDARY, title: '儲存簽名', clickHandler: keepInHandSignArray }} />
                    </div>
                </section>
            </section>
        </main>
    )
}
export default CreateHandSign