import { BtnType } from '../types/gloable'
import Btn from '../components/btn/Btn'
import TheSignStepGroup from '../components/TheSignStepGroup'
import MergeImageCanvas from '../components/canvas/MergeImageCanvas'
import { Outlet } from 'react-router-dom'
import { setStepIndecatorDon, updateStepIndecatorActive } from '../store/signSlice'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { useMemo, useEffect } from 'react'
import useImageMergeCanvas from '../hook/useImageMergeCanvas'
import useDocumentHistory from '../hook/useDocumentHistory'

function SignPage() {
    const { mergeImageCanvasRef, downloadMergeImage, mergeCanvasToImage } = useImageMergeCanvas()
    const { saveDocumentHistory } = useDocumentHistory()
    const dispatch = useAppDispatch()
    const currentStep = useAppSelector( state=>state.sign.currentStep)
    const handSignImg = useAppSelector( state => state.createSign.handMadeSignImg)
    const BgSrc = useAppSelector( state => state.createSign.BGImg)
    const currentSignStep = useAppSelector((state) => state.sign.currentStep)

    useEffect(()=>{
        dispatch(updateStepIndecatorActive())
    },[currentStep])

    useMemo(()=>{
        if(BgSrc) dispatch(setStepIndecatorDon(0))
    },[BgSrc])

    //必須要偵測手簽圖檔是否是一樣的，假如是一樣的就不toStep

    useMemo(()=>{
        if(!handSignImg) return
        dispatch(setStepIndecatorDon(1))
    },[handSignImg])

    return (
        <main className='text-white'>
            <TheSignStepGroup />
            <p>{currentSignStep}</p>
            <section className={[
                'w-full flex justify-center',
                currentSignStep === 1 ? 'hidden' : ''
                ].join(" ")}>
                <MergeImageCanvas mergeImageCanvasObj={{mergeImageCanvasRef}}/>
            </section>
            {/* 子路由渲染 */}
            <Outlet />
            {
                (handSignImg && BgSrc) ? 
                <div className='w-full flex flex-col items-center lg:flex-row lg:justify-center'>
                    <Btn btnObj={{type:BtnType.PRIMARY,title:'下載文件',clickHandler:downloadMergeImage}}/> 
                    <Btn btnObj={{type:BtnType.PRIMARY,title:'保存文件',clickHandler:()=>saveDocumentHistory({
                        name:'我的文件',
                        documentImg:mergeCanvasToImage()!
                    })}}/>
                </div>
                :null
            }
        </main>
    )
}
export default SignPage