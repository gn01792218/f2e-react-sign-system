import { Status, PromptType, DocumentHistoryObj } from '../types/gloable'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { pushDocument, deleteDocument } from '../store/documentHistorySlice'
import { setStepIndecatorDon } from '../store/signSlice'
import useMsgBox from './useMsgBox'
import usePrompt from './usePrompt'
import { useCallback, useEffect, useState } from 'react'
export default function useDocumentHistory(){
    //基本資料
    const [ saveDocument, setSaveDocument ] = useState<DocumentHistoryObj>()
    //hook
    const { showMsg } = useMsgBox()
    const { showPrompt, setPromptObj, closePrompt } = usePrompt()
    //Redux
    const dispatch = useAppDispatch()
    const stepIndecatorDataArray = useAppSelector(state => state.sign.stepIndecatorDataArray)
    const documentHistorArray = useAppSelector( state => state.documentHistory.documentHistoryArray)
    const promptValue = useAppSelector( state => state.prompt.promptObj.promptValue)
    useEffect(()=>{
        setSaveDocument({
            name:promptValue as string,
            documentImg:saveDocument?.documentImg as string
        })
    },[promptValue])
    //methods
    function saveDocumentHistory(document:DocumentHistoryObj) {
        setSaveDocument(document)
        //1.先跳出提示框，輸入檔案名稱
        setPromptObj({
            type:PromptType.INPUT,
            title:'保存文件訊息',
            message:'請輸入欲儲存之文件名稱',
            confirmCallback:useCallback(()=>{
                //2.保存文件
                if(documentHistorArray.length > 9) {
                    showMsg({
                        type:Status.ERROR,
                        title:'文件歷史訊息',
                        message:'您只能保存最多10則歷史紀錄'
                    })
                    return
                }
                //取得prompt的input值
                console.log('按下確定時拿到的數值',promptValue)
                document.name = promptValue as string
                dispatch(pushDocument(document))
                if(!stepIndecatorDataArray[2].done) dispatch(setStepIndecatorDon(2))
                closePrompt()
                showMsg({
                    type:Status.SUCCESS,
                    title:'文件歷史訊息',
                    message:'保存成功!'
                })
            },[])
        })
        showPrompt()
    }
    function deleteDocumentHistory(index:number) {
        setPromptObj({
            type:PromptType.NOINPUT,
            title:'警告訊息',
            message:'此操作將永久刪除檔案，確定執行?',
            confirmCallback:()=>{
                dispatch(deleteDocument(index))
                closePrompt()
            }
        })
        showPrompt()
    }

    return {
        //methods
        saveDocumentHistory,
        deleteDocumentHistory,
    }
}