import { useMemo } from 'react'
import { BtnType, Status } from '../types/gloable'
import Btn from '../components/btn/Btn'
import useSignSteps from '../hook/useSignStep'
import useRefreshRedirect from '../hook/useRefreshRedirect'
import CreateHandSign from '../components/CreateHandSign'
import TheMyHandSignListModal from '../components/modal/TheMyHandSignListModal'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setShowHandSignModal } from '../store/createSignSlice'


function SignPageStep2() {
      //hook
    const { toStep } = useSignSteps()
    //重刷自動導向到Step1
    useRefreshRedirect('/SignPage/Step1')
    
    //Redux
    const dispatch = useAppDispatch()
    
    return (
        <section className='flex flex-col items-center'>
            <div className='flex'>
                <Btn btnObj={{type:BtnType.PRIMARY,title:'上一步',clickHandler:()=>toStep('/SignPage/Step1',1)}}/>
                <Btn btnObj={{type:BtnType.PRIMARY,title:'下一步',clickHandler:()=>toStep('/SignPage/Step3',3)}}/>
            </div>
           <CreateHandSign />
           <Btn btnObj={{type:BtnType.PRIMARY,title:"查看簽名檔",clickHandler:()=>dispatch(setShowHandSignModal(true))}}/>
           <TheMyHandSignListModal />
        </section>
    )
}
export default SignPageStep2