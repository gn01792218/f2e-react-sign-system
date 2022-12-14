import { Button } from '../../types/gloable'
interface Props {
    btnData:Button
}
function SecondaryBtn(props:Props) {
    let { title, clickHandler } = props.btnData
    return (
        <button className='secndary-btn' onClick={clickHandler}>{title}</button>
    )
}
export default SecondaryBtn