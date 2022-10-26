import { useState } from 'react'
import StepIndecator from '../components/StepIndecator'

function TheSignStepGroup() {
    const [stepIndecatorDataArray,setStepIndecatorDataArray] = useState([
        {
            step:1,
            title:'上傳簽署檔案',
            active:true,
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