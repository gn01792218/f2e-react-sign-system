import { InputType, BtnType } from '../types/gloable'
import Btn from '../components/btn/Btn'
import FileUpload from '../components/inputComponents/FileUpload'
import SignCanvas from '../components/canvas/SignCanvas'
import useCanvas from '../hook/useCanvas'
import useUtil from '../hook/useUtil'
import { useState } from 'react'
import { fabric } from 'fabric'
function CreateSign() {
    const { signCanvas, ctx, setDrawing, clearCanvas, handleMouseDown, handleMouseMove, handleTouchMove, handleTouchStart } = useCanvas()
    const { downloadImg, converCanvasToImage } = useUtil()
    const [handSignImg,setHandSignImg ] = useState<string>('')  //手寫轉的圖片
    const canvasSize = {
        width:500,
        height:200,
    }
    return (
        <div className='text-white bg-black'>
            <h1 className="text-lg">建立簽名</h1>
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
                    <Btn btnObj={{type:BtnType.PRIMARY,title:'轉化成圖',clickHandler:()=>setHandSignImg(converCanvasToImage(signCanvas.current!))}}/>
                </div>
                {
                    handSignImg? 
                    <div>
                        <img  src={ handSignImg } alt="手繪簽名" width={canvasSize.width} height={canvasSize.height}/> 
                        <Btn btnObj={{type:BtnType.PRIMARY,title:'下載圖片',clickHandler:()=>downloadImg(handSignImg)}}/>
                    </div>
                    
                    : null
                }
            </section>
            <section>
                <h2>上傳圖片</h2>
                <FileUpload fileUploadObj={{type:InputType.PDF}}/>
            </section>
        </div>
    )
}
export default CreateSign