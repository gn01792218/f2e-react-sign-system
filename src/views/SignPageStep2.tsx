import { BtnType } from '../types/gloable'
import Btn from '../components/btn/Btn'
import useSign from '../hook/useSign'
function SignPageStep2() {
    const { addStep, backStep } = useSign()
    return (
        <section className='flex flex-col items-center'>
            第二步
            <div className='flex'>
                <Btn btnObj={{type:BtnType.PRIMARY,title:'上一步',clickHandler:()=>backStep('/SignPage/Step1')}}/>
                <Btn btnObj={{type:BtnType.PRIMARY,title:'下一步',clickHandler:()=>addStep('/SignPage/Step3')}}/>
            </div>
        </section>
    )
}
export default SignPageStep2