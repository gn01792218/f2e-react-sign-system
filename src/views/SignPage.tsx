import TheSignStepGroup from '../components/TheSignStepGroup'
import { Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { increment } from '../store/signSlice'
import { useNavigate } from 'react-router-dom';
function SignPage() {
    //router
    const navigate = useNavigate()
    //Redux
    const dispatch = useAppDispatch()
    const currentSignStep = useAppSelector((state) => state.sign.currentStep)
    //methods
    function addStep() {
        dispatch(increment())
    }
    return (
        <main className='text-white'>
            <TheSignStepGroup />

            {/* 子路由渲染 */}
            <Outlet />
        </main>
    )
}
export default SignPage