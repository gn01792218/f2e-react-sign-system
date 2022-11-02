import { Button } from '../../types/gloable'
interface Props {
    btnData:Button
}
function SecondaryBtn(props:Props) {
    let { title, clickHandler } = props.btnData
    return (
        <button className='brimary-btn mt-5' onClick={clickHandler}>{title}</button>
    )
}
export default SecondaryBtn