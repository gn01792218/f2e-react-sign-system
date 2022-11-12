import { InputType, BtnType, LoadingData } from '../types/gloable'
import Btn from '../components/btn/Btn'
import FileUpload from '../components/inputComponents/FileUpload'
import SignCanvas from '../components/canvas/SignCanvas'
import MergeImageCanvas from '../components/canvas/MergeImageCanvas'
import useImageMergeCanvas from '../hook/useImageMergeCanvas'
import useSignCanvas from '../hook/useSignCanvas'
import useUtil from '../hook/useUtil'
import Loading from '../components/Loading'
import { useState } from 'react'
function CreateSign() {
    const { mergeImageCanvasRef } = useImageMergeCanvas()
    const { signCanvas, ctx, setDrawing, handSignImg, clearCanvas, handleMouseDown, handleMouseMove, handleTouchMove, handleTouchStart, toImage } = useSignCanvas()
    const { handleDownloadImg } = useUtil()
    const [ loading, setLoading ] = useState<boolean>(true)
    const canvasSize = {
        width:500,
        height:200,
    }
    return (
        <main className='text-white'>
            <Loading loadingObj={{loading,width:'w-20',height:'h-20',strokColor:'text-yellow-200', strokfillerColor:'fill-red-600'}}/>
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
                        <Btn btnObj={{type:BtnType.PRIMARY,title:'轉化成圖',clickHandler:toImage}}/>
                    </div>
                    {
                        handSignImg? 
                        <div>
                            <img  src={ handSignImg } alt="手繪簽名" width={canvasSize.width} height={canvasSize.height}/> 
                            <Btn btnObj={{type:BtnType.PRIMARY,title:'下載圖片',clickHandler:()=>handleDownloadImg(handSignImg)}}/>
                        </div>
                        : null
                    }
                </section>
                <section>
                    <h2>上傳圖片</h2>
                    <FileUpload fileUploadObj={{type:InputType.PDF}}/>
                </section>
            </section>
            <section>
                最終合併輸出
                <MergeImageCanvas mergeImageCanvasObj={{mergeImageCanvasRef}}/>
            </section>
        </main>
    )
}
export default CreateSign