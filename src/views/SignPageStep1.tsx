import Input from '../components/inputComponents/Input'
import Btn from '../components/btn/Btn'
import { InputType, BtnType } from '../types/gloable'
import useSignStep from '../hook/useSignStep'
import useBgCanvas from '../hook/useBgCanvas'
import { useAppSelector } from '../store/hooks'
import BGCanvas from '../components/canvas/BGCanvas'
import { useEffect, useMemo, useRef, useState } from 'react';
function SignPageStep1() {
    //canvas
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [ canvas, setCanvas ] = useState<HTMLCanvasElement | null>(null)
    //Redux
    const BgSrc = useAppSelector(state => state.createSign.BGImg)
    const handSignImg = useAppSelector(state => state.createSign.handMadeSignImg)
    //基本
    const [inputTitle, setInputTitle] = useState('選擇檔案')
    //hook
    const { toStep } = useSignStep()
    const { handleOnchange } = useBgCanvas(canvas!)
    useEffect(()=>{
        setCanvas(canvasRef.current!)
    },[canvasRef])
    useMemo(()=>{
        if(!BgSrc) return
        setInputTitle('重新選擇檔案')
    },[BgSrc])
    
    
    return (
        <main>
            <section className='mt-5'>
                <div className='hidden'>
                    <BGCanvas BGCanvasObj={{BGCanvas:canvasRef}}/>
                </div>
                {
                    BgSrc? <img className='mx-auto max-w-[70%] lg:w-[500px]' src={BgSrc} alt="文件圖檔"/> : null
                }
            </section>
            <section className='flex flex-col items-center'>
                <div className='flex flex-col lg:flex-row'>
                    <Input inputObj={{type:InputType.FILE, title:inputTitle, handleOnchange}}/>
                    {
                        BgSrc && !handSignImg ? 
                        <Btn btnObj={{type:BtnType.PRIMARY,title:'下一步',clickHandler:()=>toStep('/SignPage/Step2',2)}}/> 
                        : null
                    }
                    {
                        BgSrc && handSignImg ? 
                            <div className='flex flex-col lg:flex-row'>
                                <Btn btnObj={{type:BtnType.SECONDARY,title:'進行簽署',clickHandler:()=>toStep('/SignPage/Step2',2)}}/> 
                                <Btn btnObj={{type:BtnType.PRIMARY,title:'合併簽名',clickHandler:()=>toStep('/SignPage/Step3',3)}}/> 
                            </div>
                        : null
                    }
                </div>
            </section>
        </main>
    )
}
export default SignPageStep1