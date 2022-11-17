import TheSignStepGroup from '../components/TheSignStepGroup'
import { Outlet } from 'react-router-dom'
import { setStepIndecatorDon, updateStepIndecatorActive } from '../store/signSlice'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { useMemo, useEffect } from 'react'
import useSignSteps from '../hook/useSignStep'
function SignPage() {
    const dispatch = useAppDispatch()
    const currentStep = useAppSelector( state=>state.sign.currentStep)
    const handSignImg = useAppSelector( state => state.createSign.handMadeSignImg)
    const BgSrc = useAppSelector( state => state.createSign.BGImg)
    const stepIndecatorDataArray = useAppSelector( state=>state.sign.stepIndecatorDataArray)

    //hook
    const { toStep } = useSignSteps()

    useEffect(()=>{
        dispatch(updateStepIndecatorActive())
        console.log('變更active',currentStep)
    },[currentStep])

    useMemo(()=>{
        if(BgSrc) dispatch(setStepIndecatorDon(0))
    },[BgSrc])

    useMemo(()=>{
        console.log('偵測到手簽',handSignImg)
        if(!handSignImg) return
        dispatch(setStepIndecatorDon(1))
        toStep('/SignPage/Step3',3)
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