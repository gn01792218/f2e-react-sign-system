import { Status, DocumentHistoryObj } from '../types/gloable'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { pushDocument, deleteDocument } from '../store/documentHistorySlice'
import { setStepIndecatorDon } from '../store/signSlice'
import useMsgBox from './useMsgBox'
export default function useDocumentHistory(){
    //hook
    const { showMsg } = useMsgBox()
    //Redux
    const dispatch = useAppDispatch()
    const stepIndecatorDataArray = useAppSelector(state => state.sign.stepIndecatorDataArray)
    const documentHistorArray = useAppSelector( state => state.documentHistory.documentHistoryArray)
    //methods
    function saveDocumentHistory(document:DocumentHistoryObj) {
        if(documentHistorArray.length > 9) {
            showMsg({
                type:Status.ERROR,
                title:'文件歷史訊息',
                message:'您只能保存最多10則歷史紀錄'
            })
            return
        }
        dispatch(pushDocument(document))
        if(!stepIndecatorDataArray[2].done) dispatch(setStepIndecatorDon(2))
        showMsg({
            type:Status.SUCCESS,
            title:'文件歷史訊息',
            message:'保存成功!'
        })
    }
    function deleteDocumentHistory(index:number) {
        dispatch(deleteDocument(index))
    }

    return {
        //methods
        saveDocumentHistory,
        deleteDocumentHistory,
    }
}