import { lazy, Suspense } from 'react'
import { Routes, Route } from "react-router-dom";
import LandingPage from "../views/LandingPage"

function Routers() {
    //路遊懶加載
    const CreateSign = lazy(()=>import('../views/CreateSign'))
    const SignPage = lazy(()=>import('../views/SignPage'))
    return (
      <div className="App bg-black">
        <Suspense fallback={<div>Loading</div>}>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/SignPage" element={<SignPage/>}/>
                <Route path="/CreateSign" element={<CreateSign/>}/>
            </Routes>
        </Suspense>
      </div>
    )
  }
  
export default Routers