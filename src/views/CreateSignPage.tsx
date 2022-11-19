import { BtnType } from '../types/gloable'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { pushHandsignImg } from '../store/createSignSlice'
import Btn from '../components/btn/Btn'
import SignCanvas from '../components/canvas/SignCanvas'
import MyHandSignList from '../components/MyHandSignList'
import useSignCanvas from '../hook/useSignCanvas'
function CreateSign() {
    const { 
        signCanvas, 
        ctx, 
        setDrawing, 
        clearCanvas, 
        handleMouseDown, 
        handleMouseMove, 
        handleTouchMove, 
        handleTouchStart, 
        toImage,
    } = useSignCanvas()
    const canvasSize = {
        width:500,
        height:200,
    }
    //Redux
    const dispatch = useAppDispatch()
    const handSignArray = useAppSelector(state => state.createSign.handSignArray)
    return (
        <main className='text-white flex justify-center'>
            <h1 className="text-lg text-center">建立簽名</h1>
            <section className='flex flex-col items-center'>
                <section>
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
                        <Btn btnObj={{type:BtnType.PRIMARY,title:'儲存簽名',clickHandler:()=>dispatch(pushHandsignImg(toImage()))}}/>
                    </div>
                </section>
                <section>
                    <MyHandSignList handSignArray={handSignArray} showUseBottom={true}/>
                </section>
            </section>
        </main>
    )
}
export default CreateSign