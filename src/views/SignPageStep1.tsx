import FileUpload from '../components/inputComponents/FileUpload'
import Btn from '../components/btn/Btn'
import { InputType, BtnType } from '../types/gloable'
import useSign from '../hook/useSign'
import useBgCanvas from '../hook/useBgCanvas'
import { useAppSelector } from '../store/hooks'
import BGCanvas from '../components/canvas/BGCanvas'
import { useEffect, useRef, useState } from 'react';
function SignPageStep1() {
    //canvas
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [ canvas, setCanvas ] = useState<HTMLCanvasElement | null>(null)
    useEffect(()=>{
        setCanvas(canvasRef.current!)
    },[canvasRef])
    //hook
    const { addStep } = useSign()
    const { handleOnchange } = useBgCanvas(canvas!)
    //Redux
    const BgSrc = useAppSelector(state => state.createSign.BGImg)
    return (
        <main>
            <section className='flex flex-col items-center'>
                <Btn btnObj={{type:BtnType.PRIMARY,title:'下一步',clickHandler:()=>addStep('/SignPage/Step2')}}/>
                <FileUpload fileUploadObj={{type:InputType.FILE, handleOnchange}}/>
            </section>
            <section className='mt-5'>
                <div className='hidden'>
                    <BGCanvas BGCanvasObj={{BGCanvas:canvasRef}}/>
                </div>
                {
                    BgSrc? <img className='mx-auto' src={BgSrc} alt="文件圖檔"/> : null
                }
            </section>
        </main>
    )
}
export default SignPageStep1