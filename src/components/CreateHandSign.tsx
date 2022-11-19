import { BtnType } from '../types/gloable'
import { useEffect, useState } from 'react'
import Btn from './btn/Btn'
import SignCanvas from './canvas/SignCanvas'
import useSignCanvas from '../hook/useSignCanvas'
import TheColorPalette from './TheColorPalette'

function CreateHandSign() {
    const { signCanvas,
        ctx,
        setDrawing,
        setStrokeColor,
        clearCanvas,
        handleMouseDown,
        handleMouseMove,
        handleTouchMove,
        handleTouchStart,
        useSign,
        keepInHandSignArray,
    } = useSignCanvas()
    const [canvasSize, setCanvasSize] = useState({
        width: 500,
        height: 200,
    })
    useEffect(() => {
        //初始化
        window.addEventListener('resize', (e) => {
            if (window.innerWidth < 500) {
                setCanvasSize({
                    width: window.innerWidth,
                    height: 200,
                })
                console.log(window.innerWidth)
            } else {
                setCanvasSize({
                    width: 500,
                    height: 200,
                })
                console.log(window.innerWidth)
            }
        })
        //元件銷毀
        return () => {
            window.removeEventListener('resize', () => {
            });
        }
    }, [])
    return (
        <main className='text-white'>
            <section>
                <h1 className="text-lg">建立簽名</h1>
                <section className='w-full flex flex-col'>
                    <h2>手寫板</h2>
                    <TheColorPalette setColor={setStrokeColor} />
                    <SignCanvas signCanvasObj={{
                        width: canvasSize.width,
                        height: canvasSize.height,
                        signCanvas,
                        ctx,
                        setDrawing,
                        handleMouseDown,
                        handleMouseMove,
                        handleTouchMove,
                        handleTouchStart
                    }} />
                    <div className='flex justify-around'>
                        <Btn btnObj={{ type: BtnType.SECONDARY, title: '清除簽名', clickHandler: () => clearCanvas(signCanvas.current!) }} />
                        <Btn btnObj={{ type: BtnType.PRIMARY, title: '使用簽名', clickHandler: useSign }} />
                        <Btn btnObj={{ type: BtnType.SECONDARY, title: '儲存簽名', clickHandler: keepInHandSignArray }} />
                    </div>
                </section>
            </section>
        </main>
    )
}
export default CreateHandSign