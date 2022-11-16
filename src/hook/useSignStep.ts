import { useAppDispatch } from '../store/hooks'
import { useNavigate } from 'react-router-dom';
import { increment, decrement } from '../store/signSlice'
export default function useSign(){
    //router
    const navigate = useNavigate()
    //Redux
    const dispatch = useAppDispatch()

    //methods
    function addStep(navUrl:string) {
        dispatch(increment())
        navigate(navUrl)
    }
    function backStep(navUrl:string){
        dispatch(decrement())
        navigate(navUrl)
    }
    return {
        //methods
        addStep,
        backStep,
    }
}