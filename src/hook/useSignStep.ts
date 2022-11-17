import { useAppDispatch } from '../store/hooks'
import { useNavigate } from 'react-router-dom';
import { increment, decrement, incrementByAmount } from '../store/signSlice'
export default function useSignStep(){
    //router
    const navigate = useNavigate()
    //Redux
    const dispatch = useAppDispatch()

    //methods
    function addStep(navUrl:string,step:number) {
        dispatch(incrementByAmount(step))
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