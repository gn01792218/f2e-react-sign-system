import { useAppDispatch, useAppSelector } from '../store/hooks'
import { BtnType } from '../types/gloable'
import { deleteHandSign, loadHandMadeSignImg } from '../store/createSignSlice'
import Btn from './btn/Btn'
import { useEffect } from 'react'
interface Props {
    handSignArray:string[],
    showUseBottom:boolean,
}
function MyHandSignList(props:Props) {
    const { showUseBottom } = props

    //Redux
    const dispatch = useAppDispatch()
    const handSignArray = useAppSelector(state => state.createSign.handSignArray)

    function deletedSign(num:number){
        dispatch(deleteHandSign(num))
    }
    return (
        <ul>
        {
            handSignArray.map((sign, index) => {
                return (
                    <li key={sign}>
                        <div className="flex justify-around items-center mb-4">
                            <div className='border-2 w-[30%] min-w-[200px]'>
                                <img src={sign} alt={`我的簽名${index}`} />
                            </div>
                            <div className='flex w-[230px] justify-between'>
                                {
                                    showUseBottom ? 
                                    <Btn btnObj={{type:BtnType.SECONDARY,title: '使用',clickHandler:()=>dispatch(loadHandMadeSignImg(sign))}}/>
                                    : null
                                }
                                <Btn btnObj={{type:BtnType.SECONDARY,title: '刪除',clickHandler:()=>deletedSign(index)}}/>
                            </div>
                        </div>
                    </li>
                )
            })
        }
    </ul>
    )
}
export default MyHandSignList