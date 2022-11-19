import useImageUtil from '../hook/useImageUtil'
function LandingPage() {
    const { getAssetsFileURL } = useImageUtil()
    return (
        <main className='text-white'>
            這是降落葉面
            <label className=''>
                <img   src={getAssetsFileURL('images/drop.png')} width='64' height='64' alt="color picker" />
                <input className='hidden' type="color"/>
            </label>
        </main>
    )
}
export default LandingPage