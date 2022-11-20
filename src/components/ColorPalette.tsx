import { useState } from 'react'
import { BtnType, InputType } from '../types/gloable'
import Btn from './btn/Btn'
import Input from './inputComponents/Input'
interface Props {
    setColor:React.Dispatch<React.SetStateAction<string>>
}
function TheColorPalette(props:Props) {
    const [current,setCurrent] = useState(0)
    
    const colorPicker:React.ChangeEventHandler<HTMLInputElement> = (e:React.ChangeEvent<HTMLInputElement>) => {
        props.setColor(e.target.value)
    }
    const click = (color:string,active:number)=>{
        setCurrent(active)
        props.setColor(color)
    }
    return (
        <section className='w-full flex justify-around'>
            {/* CIRCLE 按鈕color是按鈕的背景色； click的時候會設置canvas的顏色 */}
            <Btn btnObj={{ type: BtnType.COLOR, color:'black', clickHandler:()=>click('black',0),active:current === 0}} />
            <Btn btnObj={{ type: BtnType.COLOR, color:'yellow',clickHandler:()=>click('yellow',1),active:current === 1 }} />
            <Btn btnObj={{ type: BtnType.COLOR, color:'blue', clickHandler:()=>click('blue',2), active:current === 2 }} />
            <Btn btnObj={{ type: BtnType.COLOR, color:'red', clickHandler:()=>click('red',3),active:current === 3 }} />
            <Input inputObj={{type:InputType.COLOR, handleOnchange:colorPicker, handleClick:()=>setCurrent(4), active:current === 4 }}/>
        </section>
    )
}
export default TheColorPalette