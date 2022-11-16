import { BtnType } from '../types/gloable'
import Btn from '../components/btn/Btn'
import useSignSteps from '../hook/useSignStep'
import useRefreshRedirect from '../hook/useRefreshRedirect'
import CreateHandSign from '../components/CreateHandSign'
import TheMyHandSignListModal from '../components/modal/TheMyHandSignListModal'
import { useAppDispatch } from '../store/hooks'
import { setShowHandSignModal } from '../store/createSignSlice'

function SignPageStep2() {
    const { backStep } = useSignSteps()
    //重刷自動導向到Step1
    useRefreshRedirect('/SignPage/Step1')

    //Redux
    const dispatch = useAppDispatch()
    return (
        <section className='flex flex-col items-center'>
            第二步
            <div className='flex'>
                <Btn btnObj={{type:BtnType.PRIMARY,title:'上一步',clickHandler:()=>backStep('/SignPage/Step1')}}/>
            </div>
           <CreateHandSign />
           <Btn btnObj={{type:BtnType.PRIMARY,title:"查看簽名檔",clickHandler:()=>dispatch(setShowHandSignModal(true))}}/>
           <TheMyHandSignListModal />
        </section>
    )
}
export default SignPageStep2