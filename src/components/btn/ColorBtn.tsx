import { Button } from '../../types/gloable'
interface Props {
    btnData:Button
}
function ColorBtn(props:Props) {
    let { clickHandler, color, active } = props.btnData
    return (
        <button className={[active? 'border-4 border-acent opacity-100':'border-primary-100 border-2 opacity-50','circle-btn'].join(' ')} style={{background:`${color}`}} onClick={clickHandler}></button>
    )
}
export default ColorBtn