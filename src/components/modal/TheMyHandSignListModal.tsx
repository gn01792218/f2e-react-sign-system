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
                    <div className='absolute top-0 w-full min-h-screen flex justify-center bg-overlay'>
                        <main className='w-full flex flex-col primary-bg-gradient relative p-10 lg:w-1/2'>
                            <header className='border-b-2 mb-5'>
                                我的簽名列表
                                <div className='absolute right-0 top-0 max-w-[500px]'>
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