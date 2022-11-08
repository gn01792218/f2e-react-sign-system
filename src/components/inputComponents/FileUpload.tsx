
import { InputType } from '../../types/gloable'
import UploadFile from './UploadFile'
import UploadImage from './UploadImage'
import UploadPDF from './UploadPDF'
interface FileUpload {
    type:InputType
}
interface Props {
    fileUploadObj:FileUpload
}
function FileUpload(props:Props) {
    const { type } = props.fileUploadObj
    return (
        <div className='mt-5'>
            {(()=>{
                switch (type) {
                    case InputType.FILE:
                        return <UploadFile/>
                    case InputType.IMAGE:
                        return <UploadImage/>
                    case InputType.PDF:
                        return <UploadPDF/>
                }
            })()}
        </div>
    )
}
export default FileUpload