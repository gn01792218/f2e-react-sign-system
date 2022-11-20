import Routers from './router/Routers'
import TheHeader from './components/TheHeader'
import Prompt from './components/Prompt'
import MsgBox from './components/MsgBox'
import { Status } from './types/gloable'
import { useAppSelector } from './store/hooks'
import useImageUtil from "./hook/useImageUtil";
function App() {
  window.onerror = function (msg,url,line,error) {
    console.log(msg,url,line,error)
  }
  //hook
  const { getAssetsFileURL } = useImageUtil()
  //Redux
  const showMsgBox = useAppSelector( state => state.msgBox.msgBoxObj )
  const promptObj = useAppSelector( state => state.prompt.promptObj)
  return (
    <div className="App text-white">
      <Prompt promptObj={promptObj}/>
      <MsgBox msgBoxObj={{type:Status.SUCCESS,title:showMsgBox.title,message:showMsgBox.message,show:showMsgBox.show}}/>
      <div>
        <div className="flex flex-col items-center justify-center">
          <img src={getAssetsFileURL('images/icon.png')} width='150' height='150' alt="急急如律令，任意速速簽" />
          <p className='mt-[-20px]'>急急如律令，任意速速簽</p>
        </div>
        <TheHeader/>
      </div>
      <Routers />
    </div>
  )
}

export default App
