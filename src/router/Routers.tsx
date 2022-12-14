import { lazy, Suspense } from 'react'
import { Routes, Route } from "react-router-dom";
import LandingPage from "../views/LandingPage"
import Loading from '../components/Loading';
import SignPageStep1 from '../views/SignPageStep1';
import SignPageStep2 from '../views/SignPageStep2';
import SignPageStep3 from '../views/SignPageStep3';
function Routers() {
    //路遊懶加載
    const CreateSignPage = lazy(()=>import('../views/CreateSignPage'))
    const SignPage = lazy(()=>import('../views/SignPage'))
    const DocumentHistoryPage = lazy(()=>import('../views/DocumentHistoryPage'))
    // const SignPageStep1 = lazy(()=>import(/* @vite-ignore */'../views/SignPageStep1'))
    // const SignPageStep2 = lazy(()=>import(/* @vite-ignore */'../views/SignPageStep2'))
    // const SignPageStep3 = lazy(()=>import(/* @vite-ignore */'../views/SignPageStep3'))
    return (
        <Suspense fallback={
          <div className='w-full flex justify-center items-center'>
            <Loading loadingObj={{loading:true}}/>
          </div>}>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                {/* 巢嵌式子路由 */}
                <Route path="SignPage" element={<SignPage/>}>
                  <Route path="Step1" element={<SignPageStep1/>} />
                  <Route path="Step2" element={<SignPageStep2/>} />
                  <Route path="Step3" element={<SignPageStep3/>} />
                </Route>
                <Route path="CreateSign" element={<CreateSignPage/>} />
                <Route path="DocumentHistory" element={<DocumentHistoryPage />} />
            </Routes>
        </Suspense>
    )
  }
  
export default Routers