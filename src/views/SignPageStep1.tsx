import { useAppDispatch } from '../store/hooks'
import { increment } from '../store/signSlice'
import { useNavigate } from 'react-router-dom';
import FileUpload from '../components/inputComponents/FileUpload';
import Btn from '../components/btn/Btn'
import { InputType, BtnType } from '../types/gloable'
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
            <Btn btnObj={{type:BtnType.PRIMARY,title:'下一步',clickHandler:addStep}}/>
        </div>
    )
}
export default SignPageStep1