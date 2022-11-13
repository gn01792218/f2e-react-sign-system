import { BtnType } from '../../types/gloable'
import Btn from '../btn/Btn'
import SignCanvas from '../canvas/SignCanvas'
import useSignCanvas from '../../hook/useSignCanvas'
import { useAppSelector } from '../../store/hooks'

function CreateHandSign() {
    const { signCanvas, ctx, setDrawing, clearCanvas, handleMouseDown, handleMouseMove, handleTouchMove, handleTouchStart, toImage } = useSignCanvas()
    const signImg = useAppSelector(state => state.createSign.handMadeSignImg)
    const canvasSize = {
        width: 500,
        height: 200,
    }
    return (
        <main className='text-white'>
            <section>
                <h1 className="text-lg">建立簽名</h1>
                <section className='w-full flex flex-col'>
                    <h2>手寫板</h2>
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
                    <div className={`w-[${canvasSize.width}px] h-[${canvasSize.height}px]`}>
                        <h2>簽名預覽</h2>
                        {
                            signImg ? <img src={signImg} alt="手寫簽名" /> : null
                        }
                    </div>
                    <div className='flex justify-around'>
                        <Btn btnObj={{ type: BtnType.SECONDARY, title: '清除簽名', clickHandler: () => clearCanvas(signCanvas.current!) }} />
                        <Btn btnObj={{ type: BtnType.PRIMARY, title: '保存', clickHandler: toImage }} />
                    </div>
                </section>
            </section>
        </main>
    )
}
export default CreateHandSign