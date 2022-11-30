# React 線上簽核系統
<div style="display:flex">
    <section style="display:flex;flex-direction: column;margin-right:50px">
        <h2 style="font-weight:bolder">專案說明</h2>
        <p style="font-weight:bold"> 開發環境 : <span style="color: aquamarine ; font-weight:bold"> React(18)+Typscript+Vite </span></p>
        <p style="font-weight:bold"> UI框架 : <span style="color: aqua ; font-weight:bold"> TailwindCss </span></p>
        <p style="font-weight:bold"> 狀態管理 :  <span style="color: aquamarine ; font-weight:bold"> Redux + Redux toolkit </span></p>
        <p style="font-weight:bold"> 路由管理 :  <span style="color: aqua ; font-weight:bold"> react-router-dom (v6) </span></p>
        <p style="font-weight:bold"> 圖片合併及拖拉縮放功能 :  <span style="color: aquamarine ; font-weight:bold"> fabricjs </span></p>
        <p style="font-weight:bold"> PDF檔案管理插件 :  <span style="color: aqua ; font-weight:bold"> react-pdf </span></p>
    </section>
    <section style="display:flex;flex-direction: column">
        <h2 style="font-weight:bolder">專案結構說明</h2>
        <ul>
            <li>dist - 打包資料夾</li>
            <li>src  - 源碼根目錄</li>
            <ul>
                <li>assets     - 靜態資源 (如圖檔)</li>
                <li>components -  元件</li>
                <li>hook       -  客製化鉤子函數</li>
                <li>router     -  路由管理</li>
                <li>store      -  狀態管理(Redux)</li>
                <li>types      -  專案型別宣告及管理</li>
                <li>views      -  容器元件 (如Home)</li>
            </ul>
            <li>tailwind.config.js - 定義專案CSS設計系統的文件</li>
        </ul>
    </section>
</div>

## <span style="font-weight:bolder">專案啟動與打包、部署</span>
### 啟動專案
```
npm i //初次clone專案時，先安裝依賴
npm run dev
```
### 打包
```
npm run build
```
### 部署gh-page
<span style="color: yellow"> 部署請先執行打包動作 </span>

```
git add dist -f
git commit -m '部署'
npm run deploy

```
## <span style="font-weight:bolder">元件使用說明</span>
### <span style="font-weight:bold">元件命名說明</span>
<span style="font-weight:bold">view容器元件</span>
主要為顯示的route的容器元件，以大駝峰路由名稱開頭加 [ Page ]後綴<br>
例如 : http://localhost:3000/f2e-react-sign-system/DocumentHistory<br>
即為-[ DocumentHistoryPage ]
<span style="font-weight:bold">component元件</span>
客製化，且不需props的元件，以[ The ] 為前綴 (例如 : TheHomeIcon、TheHeader、TheSignStepGroup)
其他接受props，且復用性的原件，按造一般命名原則。

### <span style="font-weight:bold">MsgBox元件</span>
MsgBox元件，為[ 全局 ] 元件，在APP.tsx中全局引入 ，並使用Reduex存取資料，<br>
元件使用時只需要呼叫客製 hook-[ useMsgBox ] 即可使用，不必引入元件
```javascript
import { Status } from '../types/gloable'
import useMsgBox from "./useMsgBox"

const { showMsg } = useMsgBox()
showMsg({
    type:Status.SUCCESS,
    title:'簽名訊息',
    message:'成功儲存，請查看您的簽名檔列表',
    duration:500,  //可選項目，預設2000毫秒
})

```
### <span style="font-weight:bold">Prompt元件</span>
Prompt元件，為[ 全局 ] 元件，在APP.tsx中全局引入 ，並使用Reduex存取資料，<br>
元件使用時只需要呼叫客製 hook-[ usePrompt ] 即可使用，不必引入元件<br>
共有兩種Prompt type : <br>
NOINPUT : 一般確認框，無input
INPUT : 帶有使用者輸入的input
```javascript
import { PromptType } from '../types/gloable'
import usePrompt from './usePrompt'

const { showPrompt, setPromptObj, closePrompt } = usePrompt()

//1.NOINPUT : 一般確認框
function deletedSign(num:number){
    setPromptObj({
        type:PromptType.NOINPUT,
        title:'警告訊息',
        message:'此操作將永久刪除檔案，確定執行?',
        confirmCallback:()=>{
            dispatch(deleteHandSign(num))
            closePrompt()
        }
    })
    showPrompt()
}

//2.INPUT : 使用者輸入確認框

```
### <span style="font-weight:bold">Loading元件</span>
Loading元件可客製化樣式，<span style="color: yellow"> 需傳入TailwindCss class字串 </span><br>
props參數:<br>
<span style="font-weight:bold">loading (必填) :</span> 控制loading出現與否<br>
<span style="font-weight:bold">width、height (選填) :</span> 控制大小<br>
<span style="font-weight:bold">strokColor (選填) :</span> 使用" text-顏色 " 控制Loading框框底色<br>
<span style="font-weight:bold">strokfillerColor (選填) :</span> 使用" fill-顏色 " 控制Loading旋轉的顏色
```javascript

//基本使用，傳入loading控制loading出現與否
<Loading loadingObj={{ loading }}/>

//客製化，可更改寬高、loading底色、fill顏色
<Loading loadingObj={{ loading, width:'w-20', height:'h-20', strokColor:'text-yellow-200', strokfillerColor:'fill-red-600' }}/>

```
### <span style="font-weight:bold">Btn元件</span>
由Btn.tsx元件統一管理btn各類元件<br>
使用時只需要傳入type、title、clickHandler<br>
```javascript
<Btn btnObj={{type:BtnType.PRIMARY,title:'下一步',clickHandler:addStep}}/>
```
### <span style="font-weight:bold">Input元件</span>
#### <span style="font-weight:500">上傳類元件</span>
用FileUpload.tsx元件統一管理所有上傳相關的input元件，<br>
使用時只需要傳入input type 和 handleOnchange<br>
title為可選參數( 預設為' 選擇檔案 ' )
使用範例 : 
```javascript
<Input inputObj={{type:InputType.FILE,handleOnchange:uploadImage}}/>
<Input inputObj={{type:InputType.FILE, title:'上傳簽名圖檔', handleOnchange:uploadImage}}/>
```
## <span style="font-weight:bolder">Design System</span>
使用extend的方式，在原有tailwindCss上導入設計系統。如色碼表、字階等等。
詳見專案根目錄下的 <span style="font-weight:bold">[ tailwind.config.js ] <span/>檔案。
## <span style="font-weight:bolder">其他</span>
### 添加函式註解
使用 vs code 內建功能，可以自動對以 function 宣告的函式，自動產生註解格式 <br>
//在想要添加註解的函式上，輸入<span style="font-weight:bold;color: yellow" > /** </span>
```javascript

/**
 * 
 * @param canvas 
 * @param event 
 * @returns 
 */
function getCanvasMousePos(canvas:HTMLCanvasElement,event:React.MouseEvent<HTMLCanvasElement>) {
        let [x,y] = getMousePos(event)
        let rect = canvas.getBoundingClientRect()
        x -= rect.left
        y -= rect.top
        return [x,y]
    }
``` 
## <span style="font-weight:bolder">專案未來規劃與維護</span>
<ul>
    <li>擴展手簽功能  - 例如 : 增加橡皮擦、調整筆畫粗細...等</li>
    <li>加強畫畫版驗證  - 例如 : 判斷使用者沒有劃任何東西時，無法保存和使用。</li>
    <li>新增使用拖曳簽名列表圖片到canvas內，可以直接將簽名檔新增進canvas中</li>
    <li>會員加值功能 - 例如 : 加入會員可獲得更多的文件、簽名檔儲存數...等</li>
    <li>擴展檔案上傳功能 - 例如 : 可拖曳上傳</li>
    <li>擴展fabric功能 - 例如 : 手機端可縮放canvas</li>
    <li>Bug修復 - :</li>
    <ul>
         <li>使用 lazy 動態載入路由，build專案時，會出現報錯</li>
         <li>msgBox元件無法依據Status.type改變顏色</li>
         <li>prompt元件無法正常接收使用者input問題 : A non-serializable value was detected in the state, in the path: `prompt.promptObj.confirmCallback</li>
         <li>警告報錯 : Warning: Cannot update a component (`TheSignStepGroup`) while rendering a different component (`SignPage`). To locate the bad setState() call inside `SignPage`</li>
         <li>取色器手機版本無法顯示問題</li>
    </ul>
</ul>