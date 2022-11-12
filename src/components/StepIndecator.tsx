import { Indecator } from '../types/gloable'
interface Props {
    indecatorData:Indecator
}
function StepIndecator(props:Props) {
    let { step, title, active, done } = props.indecatorData
    return (
        <div className="flex flex-col items-center">  
            <div className={[active? 'bg-primary-500 animate-bounce': 'bg-primary-100',done && !active? 'bg-success':'',"w-[100px] h-[100px]  rounded-full flex justify-center items-center"].join(' ')}>
                <p className={[active? 'text-acent': 'text-primary-900','text-[50px]'].join(' ')}>{step}</p>
            </div>
            <p className={[active? 'text-acent': 'text-white'].join(' ')}>{title}</p>
        </div>
    )
}
export default StepIndecator