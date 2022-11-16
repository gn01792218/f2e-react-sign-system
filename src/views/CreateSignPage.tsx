import { BtnType } from '../types/gloable'
import Btn from '../components/btn/Btn'
import SignCanvas from '../components/canvas/SignCanvas'
import useSignCanvas from '../hook/useSignCanvas'
import useImageUtil from '../hook/useImageUtil'
function CreateSign() {
    const { signCanvas, ctx, setDrawing, handSignImg, clearCanvas, handleMouseDown, handleMouseMove, handleTouchMove, handleTouchStart, useSign } = useSignCanvas()
    const { downloadImg } = useImageUtil()
    const canvasSize = {
        width:500,
        height:200,
    }
    return (
        <main className='text-white'>
            <h1 className="text-lg">建立簽名</h1>
            <section className='flex'>
                <section>
                    <h2>手寫</h2>
                    <SignCanvas signCanvasObj={{
                        width:canvasSize.width,
                        height:canvasSize.height,
                        signCanvas,
                        ctx,
                        setDrawing,
                        handleMouseDown,
                        handleMouseMove,
                        handleTouchMove,
                        handleTouchStart
                    }}/>
                    <div className='flex'>
                        <Btn btnObj={{type:BtnType.SECONDARY,title:'清除簽名',clickHandler:()=>clearCanvas(signCanvas.current!)}}/>
                        <Btn btnObj={{type:BtnType.PRIMARY,title:'使用簽名',clickHandler:useSign}}/>
                    </div>
                </section>
                <section>
                    <h2>上傳簽名圖片檔</h2>
                    
                </section>
            </section>
        </main>
    )
}
export default CreateSign