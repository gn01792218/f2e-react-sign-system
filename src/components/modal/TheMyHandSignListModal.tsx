import { ChangeEventHandler, ChangeEvent, Fragment } from 'react'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { setShowHandSignModal, setUserSelectSigImg, deleteHandSign } from '../../store/createSignSlice'
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
    function deletedSign(num:number){
        dispatch(deleteHandSign(num))
    }
    const handleChange :ChangeEventHandler = (event:ChangeEvent<HTMLInputElement>)=>{
        dispatch(setUserSelectSigImg(Number(event.target.value)))
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
                        <section className='bg-primary-300'>
                            <ul>
                                {
                                    handSignArray.map((sign, index) => {
                                        return (
                                            <li key={sign}>
                                                <div className="flex items-center mb-4">
                                                    <input onChange={handleChange} id={`sign-radio-${index}`} type="radio" value={index} name={`sign-radio`} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                    <label htmlFor={`sign-radio-${index}`} className="">
                                                        <img src={sign} alt={`我的簽名${index}`} />
                                                    </label>
                                                    <Btn btnObj={{type:BtnType.SECONDARY,title: '刪除',clickHandler:()=>deletedSign(index)}}/>
                                                </div>
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