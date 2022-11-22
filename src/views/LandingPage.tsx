import { useNavigate } from 'react-router-dom'
import useImageUtil from '../hook/useImageUtil'
import useSignStep from '../hook/useSignStep'
function LandingPage() {
    const { getAssetsFileURL } = useImageUtil()
    const { toStep } = useSignStep()
    const navigate = useNavigate()
    return (
        <main className='text-white flex flex-col justify-center items-center lg:flex-row lg:h-[600px] dark:bg-white'>
            <section className='landingPage-card' onClick={()=>toStep('/SignPage/Step1',1)}>
                <img src={getAssetsFileURL('images/sign.png')} alt="開始簽名" />
                <h2>開始簽名</h2>
            </section>
            <section className='landingPage-card' onClick={()=>navigate('/CreateSign')}>
                <img src={getAssetsFileURL('images/plusSign.png')} alt="建立簽名檔案" />
                <h2>建立簽名檔案</h2>
            </section>
        </main>
    )
}
export default LandingPage