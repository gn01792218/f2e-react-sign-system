
import { Fragment } from 'react'
import { InputType } from '../../types/gloable'
import UploadFile from './UploadFile'
import ColorPicker from './ColorPicker'
interface Input {
    type:InputType,
    active?:boolean,
    handleOnchange:React.ChangeEventHandler<HTMLInputElement>
    handleClick?:React.MouseEventHandler<HTMLInputElement>
}
interface Props {
    inputObj:Input
}
function Input(props:Props) {
    const { type, handleOnchange, handleClick, active } = props.inputObj
    return (
        <Fragment>
            {(()=>{
                switch (type) {
                    case InputType.FILE:
                        return <UploadFile handleOnchange={ handleOnchange }/>
                    case InputType.COLOR:
                        return <ColorPicker  handleOnchange={ handleOnchange } handleClick={handleClick!} active={active!}/>
                }
            })()}
        </Fragment>
    )
}
export default Input