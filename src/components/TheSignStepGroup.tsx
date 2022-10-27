import { useMemo, useState } from 'react'
import StepIndecator from '../components/StepIndecator'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { increment, incrementByAmount } from '../store/signSlice'
import { Indecator } from '../types/gloable'

function TheSignStepGroup() {
    //Redux
    const dispatch = useAppDispatch()
    const currentStep = useAppSelector((state)=>state.sign.currentStep)
    //導覽物件的陣列
    const [stepIndecatorDataArray,setStepIndecatorDataArray] = useState<Indecator[]>([
        {
            step:1,
            title:'上傳簽署檔案',
            active:(currentStep === 1),
            done:false
        },
        {
            step:2,
            title:'進行簽署',
            active:(currentStep === 2),
            done:false
        },
        {
            step:3,
            title:'完成簽署',
            active:(currentStep === 3),
            done:false
        }
    ])
    useMemo(()=>{
        stepIndecatorDataArray.forEach((step,index)=>{
            step.active = (currentStep === index+1)
        })
    },[currentStep])
    //methods
    function addStep() {
        dispatch(increment())
    }
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
            <button className='w-[100px] border-white border-2' onClick={addStep}>++</button>
        </div>
    )
}
export default TheSignStepGroup