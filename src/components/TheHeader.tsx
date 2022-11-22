import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useImageUtil from "../hook/useImageUtil";
import { useAppSelector } from '../store/hooks'
import { NavItem, ColorMode } from '../types/gloable'
import HeaderMobileMenum from "./HeaderMobileMenum";
import useDarkMode from '../hook/useDarkMode'
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
    const [ darkMode, setDarkMode ] = useState<boolean>(false)
    //hook
    const { getAssetsFileURL } = useImageUtil()
    const { setColorMode, getColorMode } = useDarkMode()
    useEffect(()=>{
        getColorMode()
        if(darkMode) setColorMode(ColorMode.DARK)
        else setColorMode(ColorMode.NORMAL)
    },[darkMode])
    return (
        <Fragment>
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
                    <li>
                        <label className="inline-flex relative items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" onChange={()=>{setDarkMode(!darkMode)}}/>
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">深色模式切換</span>
                        </label>
                        {/* <button className="dark:bg-primary-100 bg-primary-900" onClick={()=>setDarkMode(!darkMode)}>深色模式切換</button> */}
                    </li>
                </ul>
                {/* 手機nav漢堡 */}
                <ul className="absolute top-[40px] right-[40px] block md:hidden">
                    <li onClick={()=>setShowMobileMenum(true)}>
                        <img src={getAssetsFileURL('images/hambger.png')} alt="手機漢堡" width={40} height={40}/>
                    </li>
                </ul>
            </nav>
            <HeaderMobileMenum show={showMobileMenum} closeCallback={()=>setShowMobileMenum(false)}/>
        </Fragment>
    )
}
export default TheHeader