
import { InputType } from '../../types/gloable'
import UploadFile from './UploadFile'
import UploadImage from './UploadImage'
interface FileUpload {
    type:InputType,
    handleOnchange:React.ChangeEventHandler<HTMLInputElement>
}
interface Props {
    fileUploadObj:FileUpload
}
function FileUpload(props:Props) {
    const { type, handleOnchange } = props.fileUploadObj
    return (
        <div className='mt-5'>
            {(()=>{
                switch (type) {
                    case InputType.FILE:
                        return <UploadFile handleOnchange={ handleOnchange }/>
                    case InputType.IMAGE:
                        return <UploadImage/>
                }
            })()}
        </div>
    )
}
export default FileUpload