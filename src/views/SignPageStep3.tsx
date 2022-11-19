import { BtnType } from '../types/gloable'
import Btn from '../components/btn/Btn'
import MergeImageCanvas from '../components/canvas/MergeImageCanvas'
import useSignStep from '../hook/useSignStep'
import useRefreshRedirect from '../hook/useRefreshRedirect'
import useImageMergeCanvas from '../hook/useImageMergeCanvas'
import { useAppSelector } from '../store/hooks'

function SignPageStep3() {
    const { toStep } = useSignStep()
    const { mergeImageCanvasRef, downloadMergeImage } = useImageMergeCanvas()

    //Redux
    const handSignImg = useAppSelector(state => state.createSign.handMadeSignImg)
    const BgSrc = useAppSelector(state => state.createSign.BGImg)
    //重刷自動導向到Step1
    useRefreshRedirect('/SignPage/Step1')
    return (
        <section className='flex flex-col items-center'>
            <div className='flex'>
                <Btn btnObj={{type:BtnType.SECONDARY,title:'重新簽名',clickHandler:()=>toStep('/SignPage/Step2',2)}}/>
            </div>
            <MergeImageCanvas mergeImageCanvasObj={{mergeImageCanvasRef}}/>
            {
                (handSignImg && BgSrc) ? <Btn btnObj={{type:BtnType.PRIMARY,title:'下載文件',clickHandler:downloadMergeImage}}/> 
                :<div className='flex flex-col items-center mt-5'>
                    <p className='text-acent'>您的簽署未完成 : </p>
                    {
                        !handSignImg ? (
                            <div>
                                <p className='text-alert'>*缺少簽名檔: </p>
                                <Btn btnObj={{type:BtnType.PRIMARY,title:'進行簽名',clickHandler:()=>toStep('/SignPage/Step2',2)}}/>
                            </div>
                        ) : null
                    }
                    {
                        !BgSrc ? (
                            <div>
                                <p className='text-alert'>*缺少文件檔案</p>
                                <Btn btnObj={{type:BtnType.PRIMARY,title:'上傳文件',clickHandler:()=>toStep('/SignPage/Step1',1)}}/>
                            </div>
                        ) : null
                    }
                </div>
            }
        </section>
    )
}
export default SignPageStep3