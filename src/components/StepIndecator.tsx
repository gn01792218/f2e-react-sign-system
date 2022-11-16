import { useState } from 'react'
import { Indecator } from '../types/gloable'
interface Props {
    indecatorData:Indecator
}
function StepIndecator(props:Props) {
    let { step, title, active, done } = props.indecatorData
    const [ indecateSize ] = useState(100)
    /**
     * 'done' class 會讓圖片翻轉
     */
    return (
        <div>
            {/* 翻轉體 */}
            <div className='relative perspective-1500' style={{width:indecateSize,height:indecateSize}}>
                {/* 正面 : 圓圈 */}
                <div className={[active? 'bg-primary-500 animate-bounce': 'bg-primary-100',done && !active ? 'done':'',
                        ,active && done ? 'hidden':'',"indecatorStep flipCard rounded-full flex justify-center items-center"].join(' ')}>
                    <p className={[active? 'text-acent': 'text-primary-900','text-[50px]'].join(' ')}>{step}</p>
                </div>
                {/* 背面 : 打勾勾 */}
                <div className={['flipCard indecatorTick', done && !active ? 'done opacity-50':'', active && done ? 'done opacity-100':''].join(" ")}>
                    <svg width={indecateSize} height={indecateSize}>
                        <circle className='circle' fill="none" stroke="#F3AB1E" strokeWidth="8" cx="50" cy="50" r="45"/>
                        <polyline className='tick' fill="none" stroke="#27CAC4" strokeWidth="10" points="24.4,47.68 39.715,70.165 75.82,30.6" 
                        strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            {/* title */}
            <p className={[active? 'text-acent': 'text-white',done && !active? 'text-success':''].join(' ')}>{title}</p>
        </div>
    )
}
export default StepIndecator