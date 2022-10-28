import TheSignStepGroup from '../components/TheSignStepGroup'
import SignPageStep1 from './SignPageStep1'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { increment } from '../store/signSlice'
function SignPage() {
    //Redux
    const dispatch = useAppDispatch()
    const currentStep = useAppSelector((state)=>state.sign.currentStep)
    //methods
    function addStep() {
        dispatch(increment())
    }
    return (
        <div className='text-white'>
            <TheSignStepGroup />
            {currentStep === 1 ? <SignPageStep1 /> : null}
        </div>
    )
}
export default SignPage