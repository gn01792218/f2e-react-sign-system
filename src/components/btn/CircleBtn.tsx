import { Button } from '../../types/gloable'
interface Props {
    btnData:Button
}
function CircleBtn(props:Props) {
    let { clickHandler, color, active } = props.btnData
    return (
        <button className={[active? 'border-2 border-primary-100':'','circle-btn'].join(' ')} style={{background:`${color}`}} onClick={clickHandler}></button>
    )
}
export default CircleBtn