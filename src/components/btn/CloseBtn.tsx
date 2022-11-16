import { Button } from '../../types/gloable'
interface Props {
    btnData:Button
}
function CloseBtn(props:Props) {
    let { clickHandler } = props.btnData
    
    return (
        <button className='close-btn' onClick={clickHandler}>X</button>
    )
}
export default CloseBtn