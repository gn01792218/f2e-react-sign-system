import { useMemo, useState } from 'react'
import StepIndecator from '../components/StepIndecator'
import { useAppSelector } from '../store/hooks'
import { Indecator } from '../types/gloable'

function TheSignStepGroup() {
    //Redux
    const currentStep = useAppSelector((state)=>state.sign.currentStep)
    //導覽物件的陣列
    const [stepIndecatorDataArray,setStepIndecatorDataArray] = useState<Indecator[]>([
        {
            step:1,
            title:'上傳簽署檔案',
            active:false,
            done:false
        },
        {
            step:2,
            title:'進行簽署',
            active:false,
            done:false
        },
        {
            step:3,
            title:'完成簽署',
            active:false,
            done:false
        }
    ])
    useMemo(()=>{
        stepIndecatorDataArray.forEach((step)=>{
            step.active = (currentStep === step.step)
            if(!step.active) {
                step.done = false
            }
            if(step.step < currentStep && step.step) {  //把上一個設成完成
                stepIndecatorDataArray[step.step-1].done = true
            }
        })
    },[currentStep])

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