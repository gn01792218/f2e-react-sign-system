import { useNavigate, useLocation, NavigateOptions } from 'react-router-dom'
import { useEffect } from 'react'

//此鉤子使用時直接執行即可
//需要傳入參數 url : 要導航的目標路由字串
//          option: replace屬性，預設false，使用navigate(url) ； true則使用 navigate(url,{replace:true})
// 若都不傳參數，則預設為導向首頁
export default function useRefreshRedirect(url:string,option:NavigateOptions = {}){ 
    const navigate = useNavigate()
    const location = useLocation()
    //在window頁面關閉前紀錄location的key值
    window.onbeforeunload = ()=>{
        localStorage.setItem('routeKey',location.key)
        return '資料將不會為您保留'
    }

    //使用effect來確認新頁面的location.key值是否和上一個相同，是的話就代表頁面重整，
    //不是的話就表示從不同頁面造訪
    useEffect(()=>{
        if(localStorage.getItem('routeKey') === location.key) navigate(url,option)
    },[location])
    
    return {
        //methods

    }
}