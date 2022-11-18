import Routers from './router/Routers'
import TheHeader from './components/TheHeader'
import MsgPopup from './components/modal/MsgBox'
import { Status } from './types/gloable'
import { useAppSelector } from './store/hooks'
function App() {
  window.onerror = function (msg,url,line,error) {
    console.log(msg,url,line,error)
  }
  //Redux
  const showMsgBox = useAppSelector( state => state.msgBox.msgBoxObj )
  return (
    <div className="App">
      <MsgPopup msgBoxObj={{type:Status.SUCCESS,title:showMsgBox.title,message:showMsgBox.message,show:showMsgBox.show}}/>
      <TheHeader/>
      <Routers />
    </div>
  )
}

export default App
