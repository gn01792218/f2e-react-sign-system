import StepIndecator from '../components/StepIndecator'

function TheSignStepGroup() {
    return (
        <div className='w-[80%] mx-auto flex justify-around'>
            <StepIndecator 
                indecatorData={{
                    step:1,
                    title:'上傳簽署檔案',
                    active:true,
                    done:false
                }}
            />
            <StepIndecator 
                indecatorData={{
                    step:2,
                    title:'進行簽署',
                    active:false,
                    done:false
                }}
            />
            <StepIndecator 
                indecatorData={{
                    step:3,
                    title:'完成簽署',
                    active:false,
                    done:false
                }}
            />
        </div>
    )
}
export default TheSignStepGroup