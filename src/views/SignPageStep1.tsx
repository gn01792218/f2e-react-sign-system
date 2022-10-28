import { useAppDispatch } from '../store/hooks'
import { increment } from '../store/signSlice'

function SignPageStep1() {
    //Redux
    const dispatch = useAppDispatch()
    //methods
    function addStep() {
        dispatch(increment())
    }
    return (
        <div className='flex flex-col items-center'>
            <label className='upload-btn'>
                <input className='hidden' type="file" />
                選擇檔案
            </label>
            <button className='brimary-btn mt-5' onClick={addStep}>下一步</button>
        </div>
    )
}
export default SignPageStep1