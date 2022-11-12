import { BtnType } from '../types/gloable'
import Btn from '../components/btn/Btn'
import useSign from '../hook/useSign'
import useRefreshRedirect from '../hook/useRefreshRedirect'
function SignPageStep3() {
    const { backStep } = useSign()
    //重刷自動導向到Step1
    useRefreshRedirect('/SignPage/Step1')
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