import { useAppDispatch, useAppSelector } from '../store/hooks'
import { BtnType, PromptType } from '../types/gloable'
import { deleteHandSign, loadHandMadeSignImg } from '../store/createSignSlice'
import Btn from './btn/Btn'
import useSignSteps from '../hook/useSignStep'
import useImageUtil from '../hook/useImageUtil'
import usePrompt from "../hook/usePrompt"
interface Props {
    handSignArray:string[],
    showUseBottom:boolean,
    callback?:Function
}
function MyHandSignList(props:Props) {
    const { showUseBottom, callback } = props
     //hook
     const { toStep } = useSignSteps()
     const { downloadImg } = useImageUtil()
     const { showPrompt, setPromptObj, closePrompt } = usePrompt()
    //Redux
    const dispatch = useAppDispatch()
    const handSignArray = useAppSelector(state => state.createSign.handSignArray)

    function deletedSign(num:number){
        setPromptObj({
            type:PromptType.NOINPUT,
            title:'警告訊息',
            message:'此操作將永久刪除檔案，確定執行?',
            confirmCallback:()=>{
                dispatch(deleteHandSign(num))
                closePrompt()
            }
        })
        showPrompt()
    }
    return (
        <ul className=''>
        {   handSignArray.length ? 
            handSignArray.map((sign, index) => {
                return (
                    <li className='' key={sign}>
                        <div className="flex flex-col justify-center items-center mb-4 lg:flex-row">
                            <div className='border-2 w-[30%] min-w-[200px] mr-5'>
                                <img src={sign} alt={`我的簽名${index}`} />
                            </div>
                            <div className='flex flex-col'>
                                {
                                    showUseBottom ? 
                                        <Btn btnObj={{type:BtnType.SECONDARY,title: '使用',clickHandler:()=>{
                                            dispatch(loadHandMadeSignImg(sign))
                                            toStep('/SignPage/Step3',3)
                                            if(callback) callback()
                                        }}}/>
                                    : null
                                }
                                <Btn btnObj={{type:BtnType.SECONDARY,title: '下載',clickHandler:()=>downloadImg(sign)}}/>
                                <Btn btnObj={{type:BtnType.SECONDARY,title: '刪除',clickHandler:()=>deletedSign(index)}}/>
                            </div>
                        </div>
                    </li>
                )
            })
            :<p>您尚未新增任何簽名</p>
        }
    </ul>
    )
}
export default MyHandSignList