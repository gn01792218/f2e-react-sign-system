import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import useImageUtil from "../hook/useImageUtil";
import { useAppSelector } from '../store/hooks'
import { NavItem, ColorMode } from '../types/gloable'
import HeaderMobileMenum from "./HeaderMobileMenum";
import useDarkMode from '../hook/useDarkMode'
import DarkModeButton from "./DarkModeButton";
import HomeIcon from '../components/TheHomeIcon'
function TheHeader() {
    //Redux
    const currentSignStep = useAppSelector((state) => state.sign.currentStep)
    //基本資料
    const navList : NavItem[] = [
        {
            to:`/SignPage/Step${currentSignStep}`,
            name:'開始簽名'
        },
        {
            to:'/CreateSign',
            name:'建立簽名檔'
        },
        {
            to:'/DocumentHistory',
            name:'查看我的文件'
        }
    ]
    const [currentNavName,setCurrentNav] = useState<string>('')
    const [ showMobileMenum, setShowMobileMenum ] = useState<boolean>(false)
    
    //hook
    const { getAssetsFileURL } = useImageUtil()
    const { darkMode ,setDarkMode } = useDarkMode()
    
    return (
        <main className="flex flex-col items-center">
            <section className="hidden flex-col items-center lg:flex">
                <HomeIcon />
                <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode}/>
            </section>
            <nav className="flex justify-center text-white p-5">
                {/* md以上的nav */}
                <ul className="hidden nav flex md:flex">
                    {
                        navList.map(nav=>{
                            return (
                                <li className={[
                                    "relative m-5",
                                    currentNavName === nav.name ? 'active' : ''
                                    ].join(" ")}
                                    onClick={()=>setCurrentNav(nav.name)}
                                    key={nav.name}
                                    >
                                    <Link className="p-5" to={nav.to}>
                                        <p className="text-lg">{nav.name}</p>
                                        <span className="before:absolute before:w-[8px] before:h-[8px] before:top-0 before:left-0 before:border-t-2 before:border-l-2 before:border-acent before:opacity-0 before:transition-all before:duration-500 before:translate-x-[-10px] before:translate-y-[-10px] 
                                                after:absolute after:w-[8px] after:h-[8px] after:top-0 after:right-0 after:border-t-2 after:border-r-2 after:border-acent after:opacity-0 after:transition-all after:duration-500 after:translate-x-[10px] after:translate-y-[-10px]"></span>
                                        <span className="before:absolute before:w-[8px] before:h-[8px] before:bottom-0 before:left-0 before:border-b-2 before:border-l-2 before:border-acent before:opacity-0 before:transition-all before:duration-500 before:translate-x-[-10px] before:translate-y-[10px]
                                                after:absolute after:w-[8px] after:h-[8px] after:bottom-0 after:right-0 after:border-b-2 after:border-r-2 after:border-acent after:opacity-0 after:transition-all after:duration-500 after:translate-x-[10px] after:translate-y-[10px]"></span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* 手機nav漢堡 */}
                <ul className="absolute top-[40px] right-[40px] block md:hidden">
                    <li onClick={()=>setShowMobileMenum(true)}>
                        <img src={getAssetsFileURL('images/hambger.png')} alt="手機漢堡" width={40} height={40}/>
                    </li>
                </ul>
            </nav>
            <HeaderMobileMenum show={showMobileMenum} closeCallback={()=>setShowMobileMenum(false)} darkMode={darkMode} setDarkMode={setDarkMode}/>
        </main>
    )
}
export default TheHeader