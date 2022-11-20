import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from '../store/hooks'
import { NavItem } from '../types/gloable'
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
    return (
        <nav className="flex justify-center text-white p-5">
            <ul className="nav flex">
                {
                    navList.map(nav=>{
                        return (
                            <li className={[
                                "relative m-5",
                                currentNavName === nav.name ? 'active' : ''
                                ].join(" ")}
                                onClick={()=>setCurrentNav(nav.name)}
                                >
                                <Link className="p-5" to={nav.to}>
                                    {nav.name}
                                    <span className="before:absolute before:w-[8px] before:h-[8px] before:top-0 before:left-0 before:border-t-2 before:border-l-2 before:border-acent before:opacity-0 before:transition-all before:duration-500 before:translate-x-[-10px] before:translate-y-[-10px] 
                                            after:absolute after:w-[8px] after:h-[8px] after:top-0 after:right-0 after:border-t-2 after:border-r-2 after:border-acent after:opacity-0 after:transition-all after:duration-500 after:translate-x-[10px] after:translate-y-[-10px]"></span>
                                    <span className="before:absolute before:w-[8px] before:h-[8px] before:bottom-0 before:left-0 before:border-b-2 before:border-l-2 before:border-acent before:opacity-0 before:transition-all before:duration-500 before:translate-x-[-10px] before:translate-y-[10px]
                                            after:absolute after:w-[8px] after:h-[8px] after:bottom-0 after:right-0 after:border-b-2 after:border-r-2 after:border-acent after:opacity-0 after:transition-all after:duration-500 after:translate-x-[10px] after:translate-y-[10px]"></span>
                                </Link>
                            </li>
                        )
                    })
                }
                {/* <li className="relative m-5">
                    <Link className="px-2 py-1" to={`/SignPage/Step${currentSignStep}`}>
                        開始簽名
                        <span className="before:absolute before:w-[8px] before:h-[8px] before:top-0 before:left-0 before:border-t-2 before:border-l-2 before:border-acent before:opacity-0 before:transition-all before:duration-500 before:translate-x-[-10px] before:translate-y-[-10px] 
                                after:absolute after:w-[8px] after:h-[8px] after:top-0 after:right-0 after:border-t-2 after:border-r-2 after:border-acent after:opacity-0 after:transition-all after:duration-500 after:translate-x-[10px] after:translate-y-[-10px]"></span>
                         <span className="before:absolute before:w-[8px] before:h-[8px] before:bottom-0 before:left-0 before:border-b-2 before:border-l-2 before:border-acent before:opacity-0 before:transition-all before:duration-500 before:translate-x-[-10px] before:translate-y-[10px]
                                after:absolute after:w-[8px] after:h-[8px] after:bottom-0 after:right-0 after:border-b-2 after:border-r-2 after:border-acent after:opacity-0 after:transition-all after:duration-500 after:translate-x-[10px] after:translate-y-[10px]"></span>
                    </Link>
                </li> */}
                {/* <Link className="mr-5" to="/CreateSign">建立簽名檔</Link>
                <Link to="/DocumentHistory">查看我的文件</Link> */}
            </ul>
        </nav>
    )
}
export default TheHeader