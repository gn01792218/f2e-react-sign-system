import { Indecator } from '../types/gloable'
interface Props {
    loading:boolean
}
function StepIndecator(props:Props) {
    let { loading } = props
    return (
        <div>
            <img className='w-full h-full' src="" alt="" width={50} height={50}/>
        </div>
    )
}
export default StepIndecator