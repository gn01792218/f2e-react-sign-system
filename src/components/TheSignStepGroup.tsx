import { useMemo, useEffect } from 'react'
import StepIndecator from '../components/StepIndecator'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { setStepIndecatorDon, updateStepIndecatorActive } from '../store/signSlice'
function TheSignStepGroup() {
    //Redux
    const dispatch = useAppDispatch()
    const currentStep = useAppSelector((state)=>state.sign.currentStep)
    const stepIndecatorDataArray = useAppSelector(state => state.sign.stepIndecatorDataArray)

    const handSignImg = useAppSelector(state => state.createSign.handMadeSignImg)
    const BgSrc = useAppSelector(state => state.createSign.BGImg)

    useEffect(()=>{
        dispatch(updateStepIndecatorActive())
    },[currentStep])

    useMemo(()=>{
        if(BgSrc) dispatch(setStepIndecatorDon(0))
    },[BgSrc])

    useMemo(()=>{
        if(handSignImg) dispatch(setStepIndecatorDon(1))
    },[handSignImg])

    return (
        <div className='w-[80%] mx-auto flex justify-around'>
            <StepIndecator 
                indecatorData={stepIndecatorDataArray[0]}
            />
            <StepIndecator 
                indecatorData={stepIndecatorDataArray[1]}
            />
            <StepIndecator 
                indecatorData={stepIndecatorDataArray[2]}
            />
        </div>
    )
}
export default TheSignStepGroup