import { MsgBoxObj } from '../types/gloable'
import { setMsgBox, setMsgBoxShow } from '../store/msgBoxSlice'
import { useAppDispatch } from '../store/hooks'
export default function useMsgBox(){
    const dispatch = useAppDispatch()
    //methods
    function showMsg(msgBox:MsgBoxObj){
        if(!msgBox.duration) msgBox.duration = 3000
        if(!msgBox.show) msgBox.show = true
        dispatch(setMsgBox(msgBox))
        setTimeout(()=>{
            dispatch(setMsgBoxShow(false))
        },msgBox.duration)
    }
    return {
        //methods
        showMsg,
    }
}