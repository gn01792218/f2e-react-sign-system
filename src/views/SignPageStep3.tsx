import { useAppDispatch } from '../store/hooks'
import { decrement } from '../store/signSlice'
import { useNavigate } from 'react-router-dom';
function SignPageStep3() {
    //router
    const navigate = useNavigate()
    //Redux
    const dispatch = useAppDispatch()
    //methods
    function backStep(){
        dispatch(decrement())
        navigate('/SignPage/Step2')
    }
    return (
        <div className='flex flex-col items-center'>
            第三步
            <div className='flex'>
            <button className='brimary-btn mt-5' onClick={backStep}>上一步</button>
            </div>
        </div>
    )
}
export default SignPageStep3