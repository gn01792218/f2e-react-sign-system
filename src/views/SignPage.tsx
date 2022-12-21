import TheSignStepGroup from '../components/TheSignStepGroup'
import MergeImageCanvas from '../components/canvas/MergeImageCanvas'
import { Outlet } from 'react-router-dom'
import { setStepIndecatorDon, updateStepIndecatorActive } from '../store/signSlice'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { useMemo, useEffect } from 'react'
import useImageMergeCanvas from '../hook/useImageMergeCanvas'

function SignPage() {
    const { mergeImageCanvasRef } = useImageMergeCanvas()
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
        </main>
    )
}
export default SignPage