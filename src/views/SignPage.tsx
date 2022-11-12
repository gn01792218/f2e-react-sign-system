import TheSignStepGroup from '../components/TheSignStepGroup'
import { Outlet } from 'react-router-dom'
function SignPage() {
    return (
        <main className='text-white'>
            <TheSignStepGroup />

            {/* 子路由渲染 */}
            <Outlet />
        </main>
    )
}
export default SignPage