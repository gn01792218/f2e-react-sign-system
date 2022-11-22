import { ChangeEventHandler,ChangeEvent } from 'react'
import { PromptObj } from '../types/gloable'
import { setPrompt, setPromptShow, setPromptValue } from '../store/promptSlice '
import { useAppDispatch } from '../store/hooks'
export default function usePrompt(){
    const dispatch = useAppDispatch()
    //methods
    const promptInputChangeCallback :ChangeEventHandler<HTMLInputElement> =(event:ChangeEvent<HTMLInputElement>) =>{
        dispatch(setPromptValue(event.target.value))
    }
    function setPromptObj (prompt:PromptObj) {
        if(!prompt.title) prompt.title = '提示訊息'
        if(!prompt.message) prompt.message = '此操作將造成無法恢復的結果，確定執行?'
        dispatch(setPrompt(prompt))
    }
    function showPrompt(){
        dispatch(setPromptShow(true))
    }
    function closePrompt(){
        dispatch(setPromptShow(false))
    }
    return {
        //methods
        promptInputChangeCallback,
        setPromptObj,
        showPrompt,
        closePrompt,
    }
}