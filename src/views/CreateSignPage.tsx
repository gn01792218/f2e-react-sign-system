import { BtnType, InputType } from '../types/gloable'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { pushHandsignImg } from '../store/createSignSlice'
import Btn from '../components/btn/Btn'
import Input from '../components/inputComponents/Input'
import SignCanvas from '../components/canvas/SignCanvas'
import MyHandSignList from '../components/MyHandSignList'
import useSignCanvas from '../hook/useSignCanvas'
import TheColorPalette from '../components/TheColorPalette'
import useImageUtil from '../hook/useImageUtil'

function CreateSign() {
    const { 
        signCanvas, 
        ctx, 
        setDrawing, 
        setStrokeColor,
        clearCanvas, 
        handleMouseDown, 
        handleMouseMove, 
        handleTouchMove, 
        handleTouchStart, 
        handleUploadImage,
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
            <section className='flex flex-col items-center'>
                <section className='mb-20'>
                    <TheColorPalette setColor={setStrokeColor}/>
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
                    <div className='flex justify-around'>
                        <Btn btnObj={{type:BtnType.SECONDARY,title:'清除簽名',clickHandler:()=>clearCanvas(signCanvas.current!)}}/>
                        <Input inputObj={{type:InputType.FILE, title:'上傳簽名圖檔', handleOnchange:handleUploadImage}}/>
                        <Btn btnObj={{type:BtnType.PRIMARY,title:'儲存簽名',clickHandler:()=>dispatch(pushHandsignImg(toImage()))}}/>
                    </div>
                </section>
                <section className='p-5 border-2'>
                    <h2 className='text-center mb-5'>我的簽名列表</h2>
                    <MyHandSignList handSignArray={handSignArray} showUseBottom={true}/>
                </section>
            </section>
        </main>
    )
}
export default CreateSign