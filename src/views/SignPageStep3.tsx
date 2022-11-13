import { BtnType } from '../types/gloable'
import Btn from '../components/btn/Btn'
import MergeImageCanvas from '../components/canvas/MergeImageCanvas'
import useSign from '../hook/useSign'
import useRefreshRedirect from '../hook/useRefreshRedirect'
import useImageMergeCanvas from '../hook/useImageMergeCanvas'
import { useAppSelector } from '../store/hooks'

function SignPageStep3() {
    const { backStep } = useSign()
    const { mergeImageCanvasRef, downloadMergeImage } = useImageMergeCanvas()

    //Redux
    const handSignImg = useAppSelector(state => state.createSign.handMadeSignImg)
    const BgSrc = useAppSelector(state => state.createSign.BGImg)
    //重刷自動導向到Step1
    useRefreshRedirect('/SignPage/Step1')
    return (
        <section className='flex flex-col items-center'>
            第三步
            <div className='flex'>
                <Btn btnObj={{type:BtnType.PRIMARY,title:'上一步',clickHandler:()=>backStep('/SignPage/Step2')}}/>
            </div>
            <MergeImageCanvas mergeImageCanvasObj={{mergeImageCanvasRef}}/>
            {
                (handSignImg || BgSrc)? <Btn btnObj={{type:BtnType.PRIMARY,title:'下載文件',clickHandler:downloadMergeImage}}/> :
                <div>
                    <p>您尚未上傳文件及簽名檔</p>
                </div>
            }
        </section>
    )
}
export default SignPageStep3