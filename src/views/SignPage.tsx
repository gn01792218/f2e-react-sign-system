import TheSignStepGroup from '../components/TheSignStepGroup'
import { Outlet } from 'react-router-dom'
import { setStepIndecatorDon, updateStepIndecatorActive } from '../store/signSlice'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { useMemo, useEffect } from 'react'

function SignPage() {
    const dispatch = useAppDispatch()
    const currentStep = useAppSelector( state=>state.sign.currentStep)
    const handSignImg = useAppSelector( state => state.createSign.handMadeSignImg)
    const BgSrc = useAppSelector( state => state.createSign.BGImg)
    const stepIndecatorDataArray = useAppSelector( state=>state.sign.stepIndecatorDataArray)

   

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
            <TheSignStepGroup stepIndecatorDataArray={stepIndecatorDataArray}/>
            {/* 子路由渲染 */}
            <Outlet />
        </main>
    )
}
export default SignPage