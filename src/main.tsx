import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store/index'
import './index.css'
import App from './App'

//統一載入型態
import * as pdf from './types/pdf'
import * as gloableType from './types/gloable'
import * as signCanvas from './types/signCanvas'

//react 18 用法
ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
.render(
    // 給路由+上basename(對應config檔案裡的base)，防止重刷404
    <BrowserRouter basename='/f2e-react-sign-system/'>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
