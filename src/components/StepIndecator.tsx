import { useEffect, useState } from 'react'
import { Indecator } from '../types/gloable'
interface Props {
    indecatorData:Indecator
}
function StepIndecator(props:Props) {
    let { step, title, active, done } = props.indecatorData
    /**
     * indecatorSize 目前SVG圖的設定，最大size只能到100
     */
    //
    const [ indecatorSize, setIndecatorSize ] = useState(50)
    //監聽螢幕變化
    useEffect(()=>{
        //初始化
        window.addEventListener('resize',()=>{
            if(window.innerWidth < 540) setIndecatorSize(24)
            else setIndecatorSize(50)
        })
        //元件銷毀
        return ()=>{
            window.removeEventListener('resize',()=>{
        });
        }
    },[])
    return (
        <div className={[
            'flex flex-col items-center',
            `w-[${indecatorSize}]`
        ].join(" ")}>
            {/* 翻轉體 */}
            <div className='relative perspective-1500' style={{width:indecatorSize,height:indecatorSize}}>
                {/* 正面 : 圓圈 */}
                <div className={[active? 'animate-bounce bg-primary-900 dark:bg-primary-500': 'border-primary-900 border-2 dark:border-primary-500',done && !active ? 'done':'',
                        ,active && done ? 'hidden':'',"indecatorStep flipCard rounded-full flex justify-center items-center"].join(' ')}>
                    <p className={[active? 'text-acent': 'text-primary-100',`text-[${indecatorSize/2}px]`].join(' ')}>{step}</p>
                </div>
                {/* 背面 : 打勾勾 */}
                <div className={['flipCard indecatorTick', done && !active ? 'done opacity-30':'', active && done ? 'done opacity-100':''].join(" ")}>
                    <svg width={indecatorSize} height={indecatorSize}>
                        <circle className='circle' fill="none" stroke="#F3AB1E" strokeWidth={indecatorSize*0.08} cx={indecatorSize/2} cy={indecatorSize/2} r={indecatorSize/2-4}/>
                        <polyline className='tick' fill="none" stroke="#27CAC4" strokeWidth={indecatorSize*0.1} points=
                        {`${indecatorSize*0.244},${indecatorSize*0.4768} ${indecatorSize*0.39715},${indecatorSize*0.70165} ${indecatorSize*0.7582},${indecatorSize*0.306}`}
                        strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            {/* title */}
            <p className={[active? 'text-acent': 'text-white',done && !active? 'text-success':'','mt-5'].join(' ')}>{title}</p>
        </div>
    )
}
export default StepIndecator