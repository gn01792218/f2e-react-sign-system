import { BtnType } from '../types/gloable'
import { useAppDispatch } from '../store/hooks'
import { increment, decrement } from '../store/signSlice'
import { useNavigate } from 'react-router-dom';
import Btn from '../components/btn/Btn'
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
                <Btn btnObj={{type:BtnType.PRIMARY,title:'上一步',clickHandler:backStep}}/>
                <Btn btnObj={{type:BtnType.PRIMARY,title:'下一步',clickHandler:addStep}}/>
            </div>
        </div>
    )
}
export default SignPageStep2