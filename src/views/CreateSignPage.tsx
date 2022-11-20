import { useEffect, useState, useRef } from 'react'
import { BtnType, InputType, Status } from '../types/gloable'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { pushHandsignImg } from '../store/createSignSlice'
import Btn from '../components/btn/Btn'
import Input from '../components/inputComponents/Input'
import SignCanvas from '../components/canvas/SignCanvas'
import MyHandSignList from '../components/MyHandSignList'
import useSignCanvas from '../hook/useSignCanvas'
import TheColorPalette from '../components/TheColorPalette'
import useMsgBox from '../hook/useMsgBox'

function CreateSign() {
    //hook
    const { showMsg } = useMsgBox()

    //基本資料
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [ canvas, setCanvas ] = useState<HTMLCanvasElement | null>(null)
    useEffect(()=>{
        setCanvas(canvasRef.current!)
    },[canvasRef])
    //canvas
    const { 
        ctx, 
        canvasSize,
        setDrawing, 
        setStrokeColor,
        clearCanvas, 
        handleMouseDown, 
        handleMouseMove, 
        handleTouchMove, 
        handleTouchStart, 
        handleUploadImage,
        toImage,
    } = useSignCanvas(canvas!)
    //Redux
    const dispatch = useAppDispatch()
    const handSignArray = useAppSelector(state => state.createSign.handSignArray)

    //function
    function save() {
        dispatch(pushHandsignImg(toImage()))
        showMsg({
            type:Status.SUCCESS,
            title:'簽名訊息',
            message:'保存成功，請查看下方簽名檔列表',
        })
    }
    return (
        <main className='text-white flex justify-center'>
            <section className='flex flex-col items-center'>
                <section className='mb-20 flex flex-col items-center'>
                    <TheColorPalette setColor={setStrokeColor}/>
                    <SignCanvas signCanvasObj={{
                        width:canvasSize.width,
                        height:canvasSize.height,
                        signCanvas:canvasRef,
                        ctx,
                        setDrawing,
                        handleMouseDown,
                        handleMouseMove,
                        handleTouchMove,
                        handleTouchStart
                    }}/>
                    <div className='flex flex-col justify-around lg:flex-row'>
                        <Btn btnObj={{type:BtnType.SECONDARY,title:'清除簽名',clickHandler:()=>clearCanvas(canvas!)}}/>
                        <Input inputObj={{type:InputType.FILE, title:'上傳簽名圖檔', handleOnchange:handleUploadImage}}/>
                        <Btn btnObj={{type:BtnType.PRIMARY,title:'儲存簽名',clickHandler:()=>save()}}/>
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