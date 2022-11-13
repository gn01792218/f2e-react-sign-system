
interface Props {
    handleOnchange:React.ChangeEventHandler<HTMLInputElement>
}
function UploadFile(props:Props) {
    const { handleOnchange } = props
    
    return (
        <label className='upload-btn'>
            <input className='hidden' type="file" onChange={handleOnchange}/>
                選擇檔案
        </label>
    )
}
export default UploadFile