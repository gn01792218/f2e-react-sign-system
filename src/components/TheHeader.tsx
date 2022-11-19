import { Link } from "react-router-dom";
import { useAppSelector } from '../store/hooks'
function TheHeader() {
    //Redux
    const currentSignStep = useAppSelector((state) => state.sign.currentStep)
    return (
        <nav className="flex justify-center text-white p-5">
            <Link className="mr-5" to={`/SignPage/Step${currentSignStep}`}>開始簽名</Link>
            <Link className="mr-5" to="/CreateSign">建立簽名檔</Link>
            <Link to="/DocumentHistory">查看我的文件</Link>
        </nav>
    )
}
export default TheHeader