
import { Fragment } from 'react'
import { InputType } from '../../types/gloable'
import UploadFile from './UploadFile'
import ColorPicker from './ColorPicker'
import TextInput from './TextInput'
interface Input {
    type:InputType,
    title?:string
    active?:boolean,
    handleOnchange:React.ChangeEventHandler<HTMLInputElement>
    handleClick?:React.MouseEventHandler<HTMLInputElement>
}
interface Props {
    inputObj:Input
}
function Input(props:Props) {
    const { type, handleOnchange, handleClick, active, title } = props.inputObj
    return (
        <Fragment>
            {(()=>{
                switch (type) {
                    case InputType.FILE :
                        return <UploadFile title={ title! } handleOnchange={ handleOnchange }/>
                    case InputType.COLOR :
                        return <ColorPicker  handleOnchange={ handleOnchange } handleClick={handleClick!} active={active!}/>
                    case InputType.TEXT :
                        return <TextInput handleOnchange={ handleOnchange }/>
                }
            })()}
        </Fragment>
    )
}
export default Input