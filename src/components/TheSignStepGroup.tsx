
import StepIndecator from '../components/StepIndecator'
import { Indecator } from '../types/gloable'
interface Props {
    stepIndecatorDataArray:Indecator[]
}
function TheSignStepGroup(props:Props) {
    const { stepIndecatorDataArray} = props

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