import { Indecator } from '../types/gloable'
interface Props {
    indecatorData:Indecator
}
function StepIndecator(props:Props) {
    let { step, title, active, done } = props.indecatorData
    return (
        <div className="flex flex-col items-center">  
            <div className={[active? 'bg-blue-500 animate-bounce': 'bg-green-300',"w-[100px] h-[100px]  rounded-full flex justify-center items-center"].join(' ')}>
                <p className={[active? 'text-yellow-300': 'text-white','text-[50px]'].join(' ')}>{step}</p>
            </div>
            <p className={[active? 'text-yellow-300': 'text-white'].join(' ')}>{title}</p>
        </div>
    )
}
export default StepIndecator