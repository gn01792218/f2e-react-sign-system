interface Props {
    handleOnchange:React.ChangeEventHandler<HTMLInputElement>
}
function TextInput(props:Props) {
    const { handleOnchange } = props
    
    return (
            <input className='w-full text-black' type="text" onChange={handleOnchange}/>
    )
}
export default TextInput