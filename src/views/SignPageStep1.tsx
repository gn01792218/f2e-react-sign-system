import { useAppDispatch } from '../store/hooks'
import { increment } from '../store/signSlice'
import { useNavigate } from 'react-router-dom';
import FileUpload from '../components/FileUpload';
import { InputType } from '../types/gloable'
function SignPageStep1() {
    //router
    const navigate = useNavigate()
    //Redux
    const dispatch = useAppDispatch()
    //methods
    function addStep() {
        dispatch(increment())
        navigate('/SignPage/Step2')
    }
    return (
        <div className='flex flex-col items-center'>
            <FileUpload fileUploadObj={{type:InputType.FILE}}/>
            <button className='brimary-btn mt-5' onClick={addStep}>下一步</button>
        </div>
    )
}
export default SignPageStep1