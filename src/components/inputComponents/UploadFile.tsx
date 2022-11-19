interface Props {
    handleOnchange:React.ChangeEventHandler<HTMLInputElement>
    title:string
}
function UploadFile(props:Props) {
    const { handleOnchange, title = '選擇檔案' } = props
    
    return (
        <label className='upload-btn'>
            <input className='hidden' type="file" onChange={handleOnchange}/>
                {title}
        </label>
    )
}
export default UploadFile