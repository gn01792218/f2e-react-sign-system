interface Indecator{
    step:number,
    title:string,
    active:boolean,
    done:boolean
}
interface Props {
    indecatorData:Indecator
}
function StepIndecator(props:Props) {
    let { step, title, active, done } = props.indecatorData
    return (
        <div className="flex flex-col items-center">  
            <div className={[active? 'bg-blue-500': 'bg-green-300',"w-[100px] h-[100px]  rounded-full flex justify-center items-center"].join(' ')}>
                <p className="text-[50px]">{step}</p>
            </div>
            <p className="">{title}</p>
        </div>
    )
}
export default StepIndecator