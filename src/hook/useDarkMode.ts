
import { ColorMode } from '../types/gloable'
import { useMemo, useState } from "react";
export default function usePrompt(){
    //基本變數
    const localstorage = window.localStorage
    const [ darkMode, setDarkMode ] = useState<boolean>(false)
    useMemo(()=>{
        if(darkMode) {
            setColorMode(ColorMode.DARK)
        } else {
            setColorMode(ColorMode.NORMAL)
        }
        getColorMode()
    },[darkMode])
    //methods
    function setColorMode(mode:ColorMode){
        localstorage.setItem('theme',JSON.stringify(mode))
    }
    function getColorMode(){
        //深色模式
        if (JSON.parse(localstorage.getItem('theme') as string) === ColorMode.DARK || (!localstorage.getItem('them') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            //一般模式
            document.documentElement.classList.remove('dark')
        }
    }

    return {
        //data
        darkMode,
        //methods
        setDarkMode,
        setColorMode,
        getColorMode,
    }
}