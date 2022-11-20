
import { Fragment } from 'react'
import { useAppSelector } from '../store/hooks'
import StepIndecator from '../components/StepIndecator'

function TheSignStepGroup() {
    const stepIndecatorDataArray = useAppSelector( state=>state.sign.stepIndecatorDataArray)

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