import { useAppDispatch } from '../store/hooks'
import { useNavigate } from 'react-router-dom';
import { setCurrentStepIndecator } from '../store/signSlice'
export default function useSignStep(){
    //router
    const navigate = useNavigate()
    //Redux
    const dispatch = useAppDispatch()

    //methods
    function toStep(navUrl:string,step:number) {
        dispatch(setCurrentStepIndecator(step))
        navigate(navUrl)
    }
    return {
        //methods
        toStep,
    }
}