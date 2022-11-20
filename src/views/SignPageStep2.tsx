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
    const handSignImg = useAppSelector( state => state.createSign.handMadeSignImg)
    return (
        <section className='flex flex-col items-center'>
            <div className='flex flex-col lg:flex-row'>
                <Btn btnObj={{type:BtnType.SECONDARY,title:'重新選取文件',clickHandler:()=>toStep('/SignPage/Step1',1)}}/>
            </div>
            <div className='flex flex-col lg:flex-row'>
                <div className='h-auto border-2 flex items-center justify-center lg:h-[402px]'>
                    <Btn btnObj={{type:BtnType.PRIMARY,title:"從簽名檔列表選取",clickHandler:()=>dispatch(setShowHandSignModal(true))}}/>
                </div>
                <CreateHandSign />
            </div>
            <TheMyHandSignListModal />
        </section>
    )
}
export default SignPageStep2