import { useAppDispatch } from '../store/hooks'
import { increment, decrement } from '../store/signSlice'
import { useNavigate } from 'react-router-dom';
function SignPageStep2() {
    //router
    const navigate = useNavigate()
    //Redux
    const dispatch = useAppDispatch()
    //methods
    function backStep(){
        dispatch(decrement())
        navigate('/SignPage/Step1')
    }
    function addStep() {
        dispatch(increment())
        navigate('/SignPage/Step3')
    }
    return (
        <div className='flex flex-col items-center'>
            第二步
            <div className='flex'>
            <button className='brimary-btn mt-5' onClick={backStep}>上一步</button>
            <button className='brimary-btn mt-5' onClick={addStep}>下一步</button>
            </div>
        </div>
    )
}
export default SignPageStep2