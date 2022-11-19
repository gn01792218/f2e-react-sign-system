import { BtnType, InputType, PromptType } from '../types/gloable'
import { PromptObj } from '../types/gloable'
import usePrompt from '../hook/usePrompt'
import Btn from '../components/btn/Btn'
import Input from '../components/inputComponents/Input'

interface Props {
    promptObj:PromptObj
}
function Prompt(props:Props) {
    const { type = PromptType.NOINPUT, title, message, show, confirmCallback } = props.promptObj
    const { closePrompt, promptInputChangeCallback  } = usePrompt()
    
    return (
        <section className={[
            'overlay',
            show ? 'flex justify-center items-center' : 'hidden'
            ].join(" ")}>
            <div className='flex flex-col items-center'>
                <h2>{title}</h2>
                <p>{message}</p>
                {
                    type === PromptType.INPUT ? <Input inputObj={{type:InputType.TEXT,handleOnchange:promptInputChangeCallback}}/> 
                    : null
                }
                <div className='w-full flex'>
                <Btn btnObj={{type:BtnType.SECONDARY,title:'取消',clickHandler:closePrompt}}/>
                <Btn btnObj={{type:BtnType.SECONDARY,title:'確認',clickHandler:()=>confirmCallback()}}/>
                </div>
            </div>
        </section >
    )
}
export default Prompt