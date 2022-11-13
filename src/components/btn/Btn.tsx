import { BtnType, Button } from '../../types/gloable'
import PrimaryBtn from './PrimaryBtn'
import SecondaryBtn from './SecondaryBtn'
import CircleBtn from './CircleBtn'
interface Props {
    btnObj:Button
}
function Btn(props:Props) {
    const { type = BtnType.PRIMARY, title, clickHandler, color, active } = props.btnObj
    return (
        <div className='mt-5'>
            {(()=>{
                switch (type) {
                    case BtnType.PRIMARY:
                        return <PrimaryBtn btnData={{title,clickHandler}}/>
                    case BtnType.SECONDARY:
                        return <SecondaryBtn btnData={{title,clickHandler}}/>
                    case BtnType.CIRCLE:
                        return <CircleBtn btnData={{color,clickHandler,active}}/>
                }
            })()}
        </div>
    )
}
export default Btn