import { lazy, Suspense } from 'react'
import { Routes, Route } from "react-router-dom";
import LandingPage from "../views/LandingPage"

function Routers() {
    //路遊懶加載
    const CreateSign = lazy(()=>import('../views/CreateSign'))
    const SignPage = lazy(()=>import('../views/SignPage'))
    const SignPageStep1 = lazy(()=>import('../views/SignPageStep1'))
    const SignPageStep2 = lazy(()=>import('../views/SignPageStep2'))
    const SignPageStep3 = lazy(()=>import('../views/SignPageStep3'))
    return (
      <div className="App bg-black">
        <Suspense fallback={<div>Loading</div>}>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                {/* 巢嵌式子路由 */}
                <Route path="/SignPage" element={<SignPage/>}>
                  <Route path="Step1" element={<SignPageStep1/>}/>
                  <Route path="Step2" element={<SignPageStep2/>}/>
                  <Route path="Step3" element={<SignPageStep3/>}/>
                </Route>
                <Route path="CreateSign" element={<CreateSign/>}/>
            </Routes>
        </Suspense>
      </div>
    )
  }
  
export default Routers