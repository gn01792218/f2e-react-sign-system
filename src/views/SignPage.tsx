import TheSignStepGroup from '../components/TheSignStepGroup'
import { Outlet, Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { increment } from '../store/signSlice'
function SignPage() {
    //Redux
    const dispatch = useAppDispatch()
    const currentStep = useAppSelector((state)=>state.sign.currentStep)
    //methods
    function addStep() {
        dispatch(increment())
    }
    return (
        <div className='text-white'>
            <TheSignStepGroup />

            {/* 子路由渲染 */}
            <Outlet />
        </div>
    )
}
export default SignPage