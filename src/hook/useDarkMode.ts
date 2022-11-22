
import { useState } from 'react'
import { ColorMode } from '../types/gloable'
export default function usePrompt(){
    const localstorage = window.localStorage
    // const [ themeMode, setThemeMode  ] = useState<ColorMode>(JSON.parse(localstorage.getItem('them') as string))
    //methods
    function setColorMode(mode:ColorMode){
        localstorage.setItem('theme',JSON.stringify(mode))
        // setThemeMode(mode)
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
        // themeMode,
        //methods
        setColorMode,
        getColorMode,
    }
}