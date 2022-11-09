import { BtnType } from '../types/gloable'
import Btn from '../components/btn/Btn'
import useSign from '../hook/useSign'
function SignPageStep3() {
    const { backStep } = useSign()
    return (
        <section className='flex flex-col items-center'>
            第三步
            <div className='flex'>
                <Btn btnObj={{type:BtnType.PRIMARY,title:'上一步',clickHandler:()=>backStep('/SignPage/Step2')}}/>
            </div>
        </section>
    )
}
export default SignPageStep3