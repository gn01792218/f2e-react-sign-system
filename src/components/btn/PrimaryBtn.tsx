import { Button } from '../../types/gloable'
interface Props {
    btnData:Button
}
function PrimaryBtn(props:Props) {
    let { title, clickHandler } = props.btnData
    return (
        <button className='brimary-btn' onClick={clickHandler}>{title}</button>
    )
}
export default PrimaryBtn