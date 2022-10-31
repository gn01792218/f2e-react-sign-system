import { Link } from "react-router-dom";
function TheHeader() {
    return (
        <div className='text-white'>
           <nav className="flex justify-center">
            <Link className="mr-5" to="/SignPage/Step1">開始簽名</Link>
            <Link to="/CreateSign">建立簽名檔</Link>
           </nav>
        </div>
    )
}
export default TheHeader