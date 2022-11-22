import { useNavigate } from "react-router-dom";
import useImageUtil from "../hook/useImageUtil";

function HomeIcon() {
    //hook
  const { getAssetsFileURL } = useImageUtil()
  const navigate = useNavigate()
    return (
        <div className="flex flex-col items-center justify-center cursor-pointer" onClick={()=>navigate('/')}>
          <img src={getAssetsFileURL('images/icon.png')} width='150' height='150' alt="急急如律令，任意速速簽" />
          <p className='mt-[-20px] text-gray-900 font-extrabold dark:text-gray-500'>急急如律令，任意速速簽</p>
        </div>
    )
}
export default HomeIcon