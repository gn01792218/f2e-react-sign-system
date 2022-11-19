import { MsgBoxObj } from '../types/gloable'
import { setMsgBox, setMsgBoxShow } from '../store/msgBoxSlice'
import { useAppDispatch } from '../store/hooks'
export default function useMsgBox(){
    const dispatch = useAppDispatch()
    //methods
    function showMsg(msgBox:MsgBoxObj){
        dispatch(setMsgBox(msgBox))
        setTimeout(()=>{
            dispatch(setMsgBoxShow(false))
        },2000)
    }
    return {
        //methods
        showMsg,
    }
}