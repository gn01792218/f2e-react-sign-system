import { Fragment } from 'react'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { setShowHandSignModal } from '../../store/createSignSlice'
import Btn from '../btn/Btn'
import { BtnType } from '../../types/gloable'
function TheMyHandSignList() {
    //Redux
    const dispatch = useAppDispatch()
    const handSignArray = useAppSelector((state) => state.createSign.handSignArray)
    const show = useAppSelector((state) => state.createSign.showHandSignModal)
    //基本
    function close(){
        dispatch(setShowHandSignModal(false))
    }
    return (
        <Fragment>
            {
                show ? (
                    <div className='relative w-full h-full'>
                        <section className=''>
                            <div className='absolute max-w-[500px]'>
                                <Btn btnObj={{type:BtnType.CLOSE,clickHandler:close}}/>
                            </div>
                        </section>
                        <section className=''>
                            <ul>
                                {
                                    handSignArray.map((sign, index) => {
                                        return (
                                            <li>
                                                <img src={sign} alt={`我的簽名${index}`} />
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </section>
                        <section className=''>

                        </section>
                    </div> 
                )
                : null 
            }
        </Fragment>
    )
}
export default TheMyHandSignList