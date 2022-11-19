import { DocumentHistoryObj } from '../types/gloable'
interface Props {
    documentHistoryObj:DocumentHistoryObj
}
function Loading(props:Props) {
    let { name, documentImg} = props.documentHistoryObj
    
    return (
        <div className='w-full'>
            <h1>{name}</h1>
            <img className='w-full'  src={documentImg} alt={name} />
        </div>
    )
}
export default Loading