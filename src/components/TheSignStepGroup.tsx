
import { Fragment } from 'react'
import StepIndecator from '../components/StepIndecator'
import { Indecator } from '../types/gloable'
interface Props {
    stepIndecatorDataArray:Indecator[]
}
function TheSignStepGroup(props:Props) {
    const { stepIndecatorDataArray } = props

    return (
        <Fragment>
            {
                stepIndecatorDataArray.length ? 
                <ul className='w-[80%] mx-auto flex justify-around'>
                    {
                        stepIndecatorDataArray.map(indecator => {
                            return (
                                <li key={indecator.step}>
                                    <StepIndecator 
                                    indecatorData={indecator}
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
                :null
            }
        
        </Fragment>
    )
}
export default TheSignStepGroup