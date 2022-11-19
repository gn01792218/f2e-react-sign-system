import { useEffect } from 'react'
import { Status, MsgBoxObj } from '../../types/gloable'

interface Props {
    msgBoxObj:MsgBoxObj
}
function MsgPopup(props:Props) {
    const { type, title, message, show } = props.msgBoxObj
    useEffect(()=>{
        console.log(type,title,message,show)
    })
    return (
        <section className={[
            'message-box-wrap',
            show ? 'flex justify-center items-center' : 'hidden'
            ].join(" ")}>
            <div className={[
                'message-box',
                show ? 'fade-in':'fade-out',
                type === Status.SUCCESS ? 'bg-primary-500' : '', 
                type === Status.ALERT ? 'bg-primary-900' : '',
                type === Status.ERROR ? 'bg-primary-900' : ''
                ].join(" ")}>
                    <p>{title}</p>
                    <p className={[
                    type === Status.SUCCESS ? 'text-success' : '', 
                    type === Status.ALERT ? 'text-acent' : '',
                    type === Status.ERROR ? 'text-alert' : ''
                    ].join(" ")}>{message}</p>
        
                </div>
        </section >
    )
}
export default MsgPopup