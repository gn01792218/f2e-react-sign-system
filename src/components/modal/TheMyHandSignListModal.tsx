import { Fragment } from 'react'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { setShowHandSignModal } from '../../store/createSignSlice'
import { BtnType } from '../../types/gloable'
import Btn from '../btn/Btn'
import MyHandSignList from '../MyHandSignList'

function TheMyHandSignList() {

    //Redux
    const dispatch = useAppDispatch()
    const handSignArray = useAppSelector(state => state.createSign.handSignArray)
    const show = useAppSelector(state => state.createSign.showHandSignModal)
    
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
                                <MyHandSignList handSignArray={handSignArray} showUseBottom={true} callback={close}/>
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