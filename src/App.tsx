import Routers from './router/Routers'
import TheHeader from './components/TheHeader'
import Prompt from './components/Prompt'
import MsgBox from './components/MsgBox'
import HomeIcon from './components/TheHomeIcon'
import { Status } from './types/gloable'
import { useAppSelector } from './store/hooks'


function App() {
  //Redux
  const showMsgBox = useAppSelector( state => state.msgBox.msgBoxObj )
  const promptObj = useAppSelector( state => state.prompt.promptObj)
 

  return (
    <div className="App">
      <Prompt promptObj={promptObj}/>
      <MsgBox msgBoxObj={{type:Status.SUCCESS,title:showMsgBox.title,message:showMsgBox.message,show:showMsgBox.show}}/>
      <div>
        <HomeIcon />
        <TheHeader />
      </div>
      <Routers />
    </div>
  )
}

export default App
