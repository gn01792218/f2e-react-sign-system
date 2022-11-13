import { BtnType } from '../types/gloable'
import Btn from '../components/btn/Btn'
import MergeImageCanvas from '../components/canvas/MergeImageCanvas'
import useSign from '../hook/useSign'
import useRefreshRedirect from '../hook/useRefreshRedirect'
import useImageMergeCanvas from '../hook/useImageMergeCanvas'
function SignPageStep3() {
    const { backStep } = useSign()
    const { mergeImageCanvasRef, downloadMergeImage } = useImageMergeCanvas()
    //重刷自動導向到Step1
    useRefreshRedirect('/SignPage/Step1')
    return (
        <section className='flex flex-col items-center'>
            第三步
            <div className='flex'>
                <Btn btnObj={{type:BtnType.PRIMARY,title:'上一步',clickHandler:()=>backStep('/SignPage/Step2')}}/>
            </div>
            <MergeImageCanvas mergeImageCanvasObj={{mergeImageCanvasRef}}/>
            <Btn btnObj={{type:BtnType.PRIMARY,title:'下載簽署檔',clickHandler:downloadMergeImage}}/>
        </section>
    )
}
export default SignPageStep3