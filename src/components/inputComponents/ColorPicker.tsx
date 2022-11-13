import drop from '../../assets/images/drop.png'

interface Props {
    active:boolean
    handleOnchange:React.ChangeEventHandler<HTMLInputElement>
    handleClick:React.MouseEventHandler<HTMLInputElement>
}
function ColorPicker(props:Props) {
    const { handleOnchange, handleClick, active } = props
    return (
        <label className=''>
            <img  className={[active? "animate-bounce":"",'w-full'].join(" ")} src={drop} width='64' height='64' alt="color picker" />
            <input className='hidden' type="color" onChange={handleOnchange} onClick={handleClick}/>
        </label>
    )
}
export default ColorPicker