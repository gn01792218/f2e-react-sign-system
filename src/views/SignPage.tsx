import { useState } from 'react'
import TheSignStepGroup from '../components/TheSignStepGroup'

function SignPage() {
    const [count, setCount] = useState(0)
    return (
        <div className='text-white'>
            <TheSignStepGroup />
        </div>
    )
}
export default SignPage