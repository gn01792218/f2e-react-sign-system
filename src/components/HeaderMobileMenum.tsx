
import { Fragment } from 'react'
import { useState } from "react";
import useImageUtil from "../hook/useImageUtil";
import { useAppSelector } from '../store/hooks'
import { NavItem } from '../types/gloable'
import { Link } from "react-router-dom";
interface Props {
    show:boolean,
    closeCallback:Function
}
function HeaderMobileMenum(props:Props) {
    const { show, closeCallback } = props
    //hook
    const { getAssetsFileURL } = useImageUtil()
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
    <Fragment>
        {
            show ? 
            <section className={[
                "fixed w-full h-full top-0 p-10 bg-overlay-600 z-[10] transition-opacity duration-500",
                show ? 'opacity-100' : 'opacity-0'
            ].join(" ")}>
                <img className='ml-auto' onClick={()=>closeCallback()} src={getAssetsFileURL('images/close.png')} alt="close" width={40} height={40}/>
                <ul className="h-full flex flex-col items-center justify-start nav md:hidden">
                    {   
                        navList.map(nav=>{
                            return (
                                <li className={[
                                    "relative m-5 w-[150px] flex justify-center",
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
            </section>
            : null
        }
    </Fragment>
    )
}
export default HeaderMobileMenum