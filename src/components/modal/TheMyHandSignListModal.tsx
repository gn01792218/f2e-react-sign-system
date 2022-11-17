import { Fragment, useMemo } from 'react'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { setShowHandSignModal } from '../../store/createSignSlice'
import { BtnType } from '../../types/gloable'
import Btn from '../btn/Btn'
import MyHandSignList from '../MyHandSignList'
import useSignStep from '../../hook/useSignStep'

function TheMyHandSignList() {
    //hook
    const { addStep } = useSignStep()
    //Redux
    const dispatch = useAppDispatch()
    const handSignArray = useAppSelector(state => state.createSign.handSignArray)
    const show = useAppSelector(state => state.createSign.showHandSignModal)
    const handSignImg = useAppSelector(state => state.createSign.handMadeSignImg)
    useMemo(()=>{
        addStep('/SignPage/Step3')
    },[handSignImg])
    //基本
    function close(){
        dispatch(setShowHandSignModal(false))
    }
    
    return (
        <Fragment>
            {
                show ? (
                    <div className='absolute top-0 w-full h-full flex justify-center bg-black'>
                        <main className='w-1/2 flex flex-col bg-primary-300 relative p-10'>
                            <header className='border-b-2 mb-5'>
                                我的簽名列表
                                <div className='absolute right-[-10px] top-[-30px] max-w-[500px]'>
                                    <Btn btnObj={{type:BtnType.CLOSE,clickHandler:close}}/>
                                </div>
                            </header>
                            <article className=''>
                                <MyHandSignList handSignArray={handSignArray} showUseBottom={true}/>
                                {/* <ul>
                                    {
                                        handSignArray.map((sign, index) => {
                                            return (
                                                <li key={sign}>
                                                    <div className="flex justify-around items-center mb-4">
                                                        <div className='border-2 w-[30%] min-w-[200px]'>
                                                            <img src={sign} alt={`我的簽名${index}`} />
                                                        </div>
                                                        <div className='flex w-[230px] justify-between'>
                                                            <Btn btnObj={{type:BtnType.SECONDARY,title: '使用',clickHandler:()=>dispatch(loadHandMadeSignImg(sign))}}/>
                                                            <Btn btnObj={{type:BtnType.SECONDARY,title: '刪除',clickHandler:()=>deletedSign(index)}}/>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul> */}
                            </article>
                            <footer className=''>

                            </footer>
                        </main>
                    </div> 
                )
                : null 
            }
        </Fragment>
    )
}
export default TheMyHandSignList