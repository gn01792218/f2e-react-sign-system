
import { InputType } from '../types/gloable'
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
                        return (<label className='upload-btn'>
                                    <input className='hidden' type="file" />
                                    選擇檔案
                                </label>)
                    case InputType.IMAGE:
                        return
                }
            })()}
        </div>
    )
}
export default FileUpload