import { useEffect } from 'react'
import { Status, MsgBoxObj } from '../types/gloable'
import useImageUtil from '../hook/useImageUtil'

interface Props {
    msgBoxObj:MsgBoxObj
}
function MsgPopup(props:Props) {
    const { type, title, message, show } = props.msgBoxObj
    const { getAssetsFileURL } = useImageUtil()
    useEffect(()=>{
        console.log(type,title,message,show)
    })
    return (

            <section className={[
                'message-box',
                show ? 'fade-in':'fade-out hidden',
                type === Status.SUCCESS ? 'bg-primary-200' : '', 
                type === Status.ALERT ? 'bg-primary-900' : '',
                type === Status.ERROR ? 'bg-primary-900' : ''
                ].join(" ")}>
                    <div className='flex justify-center items-center mb-5'>
                        <img src={getAssetsFileURL('images/acent.svg')} alt="提示" width={64} height={64}/>
                        <p>{title}</p>
                    </div>
                    <p className={[
                    type === Status.SUCCESS ? 'text-primary-900' : '', 
                    type === Status.ALERT ? 'text-acent' : '',
                    type === Status.ERROR ? 'text-alert' : ''
                    ].join(" ")}>{message}</p>
        
                </section>
    )
}
export default MsgPopup