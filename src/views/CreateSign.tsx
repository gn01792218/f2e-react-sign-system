import { InputType, BtnType } from '../types/gloable'
import Btn from '../components/btn/Btn'
import FileUpload from '../components/inputComponents/FileUpload'
import SignCanvas from '../components/canvas/SignCanvas'
import useCanvas from '../hook/useCanvas'
function CreateSign() {
    const { signCanvas, ctx, setDrawing, clearCanvas, handleMouseDown, handleMouseMove } = useCanvas()
    function createHandmadeSign() {
        
    }
    return (
        <div className='text-white bg-black'>
            <h1 className="text-lg">建立簽名</h1>
            <section>
                <h2>手寫</h2>
                <SignCanvas signCanvasObj={{
                    signCanvas,
                    ctx,
                    setDrawing,
                    handleMouseDown,
                    handleMouseMove,
                }}/>
                <div className='flex'>
                    <Btn btnObj={{type:BtnType.SECONDARY,title:'清除簽名',clickHandler:()=>clearCanvas(signCanvas.current!)}}/>
                    <Btn btnObj={{type:BtnType.PRIMARY,title:'創建簽名',clickHandler:createHandmadeSign}}/>
                </div>
            </section>
            <section>
                <h2>上傳圖片</h2>
                <FileUpload fileUploadObj={{type:InputType.IMAGE}}/>
            </section>
        </div>
    )
}
export default CreateSign