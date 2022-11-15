import Routers from './router/Routers'
import TheHeader from './components/TheHeader'

function App() {
  window.onerror = function (msg,url,line,error) {
    console.log(msg,url,line,error)
  }
  return (
    <div className="App">
      <TheHeader/>
      <Routers />
    </div>
  )
}

export default App
