import FileUpload from '../components/inputComponents/FileUpload';
import Btn from '../components/btn/Btn'
import { InputType, BtnType } from '../types/gloable'
import useSign from '../hook/useSign'
function SignPageStep1() {
    const { addStep } = useSign()
    return (
        <section className='flex flex-col items-center'>
            <FileUpload fileUploadObj={{type:InputType.FILE}}/>
            <Btn btnObj={{type:BtnType.PRIMARY,title:'下一步',clickHandler:()=>addStep('/SignPage/Step2')}}/>
        </section>
    )
}
export default SignPageStep1