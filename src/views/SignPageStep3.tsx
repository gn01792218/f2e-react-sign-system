import { BtnType } from '../types/gloable'
import { useAppDispatch } from '../store/hooks'
import { decrement } from '../store/signSlice'
import { useNavigate } from 'react-router-dom';
import Btn from '../components/btn/Btn'
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
            <Btn btnObj={{type:BtnType.PRIMARY,title:'上一步',clickHandler:backStep}}/>
            </div>
        </div>
    )
}
export default SignPageStep3