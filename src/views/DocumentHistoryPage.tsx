import { BtnType } from '../types/gloable'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import useDocumentHistory from '../hook/useDocumentHistory'
import DocumentHistoryItem from '../components/DocumentHistoryItem'
import Btn from '../components/btn/Btn'
import useSignStep from '../hook/useSignStep'
import useImageUtil from '../hook/useImageUtil'


function DocumentHistoryPage() {
    //hook
    const { toStep } = useSignStep()
    const { deleteDocumentHistory } = useDocumentHistory()
    const { downloadImg } = useImageUtil()

    //Redux
    const dispatch = useAppDispatch()
    const documentHistorArray = useAppSelector( state => state.documentHistory.documentHistoryArray)
    return (
        <main className='text-white flex justify-center'>
            <ul className='documentHistoryList'>
                {   documentHistorArray.length ? 
                    documentHistorArray.map( (item,index) => {
                        return (
                            <li className='documentHistory-li'>
                                <DocumentHistoryItem documentHistoryObj={item}/>
                                <div className='flex justify-center'>
                                    <Btn btnObj={{type:BtnType.SECONDARY,title:'下載',clickHandler:()=>downloadImg(item.documentImg)}}/>
                                    <Btn btnObj={{type:BtnType.SECONDARY,title:'刪除',clickHandler:()=>deleteDocumentHistory(index)}}/>
                                </div>
                            </li>
                        )
                    })
                    :<li>
                        <p className='text-acent'>您尚未簽署任何文件</p>
                        <Btn btnObj={{type:BtnType.PRIMARY,title:'簽署文件',clickHandler:()=>toStep('/SignPage/Step1',1)}}/>
                    </li>
                }
            </ul>
        </main>
    )
}
export default DocumentHistoryPage