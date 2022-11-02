import { BtnType, Button } from '../../types/gloable'
import PrimaryBtn from './PrimaryBtn'
import SecondaryBtn from './SecondaryBtn'
interface Props {
    btnObj:Button
}
function Btn(props:Props) {
    const { type, title, clickHandler } = props.btnObj
    return (
        <div className='mt-5'>
            {(()=>{
                switch (type) {
                    case BtnType.PRIMARY:
                        return <PrimaryBtn btnData={{title:title,clickHandler:clickHandler}}/>
                    case BtnType.SECONDARY:
                        return <SecondaryBtn btnData={{title:title,clickHandler:clickHandler}}/>
                }
            })()}
        </div>
    )
}
export default Btn