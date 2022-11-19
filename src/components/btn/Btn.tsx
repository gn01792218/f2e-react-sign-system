import { BtnType, Button } from '../../types/gloable'
import PrimaryBtn from './PrimaryBtn'
import SecondaryBtn from './SecondaryBtn'
import CircleBtn from './ColorBtn'
import Close from './CloseBtn'
interface Props {
    btnObj:Button
}
function Btn(props:Props) {
    const { type = BtnType.PRIMARY, title, clickHandler, color, active } = props.btnObj
    return (
        <div className=''>
            {(()=>{
                switch (type) {
                    case BtnType.PRIMARY :
                        return <PrimaryBtn btnData={{title,clickHandler}} />
                    case BtnType.SECONDARY :
                        return <SecondaryBtn btnData={{title,clickHandler}} />
                    case BtnType.COLOR :
                        return <CircleBtn btnData={{color,clickHandler,active}} />
                    case BtnType.CLOSE :
                        return <Close btnData={{clickHandler}} />
                }
            })()}
        </div>
    )
}
export default Btn