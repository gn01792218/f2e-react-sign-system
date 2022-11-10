# React 線上簽核系統
## <span style="font-weight:bolder">專案說明</span>
### 開發環境 : <span style="color: aquamarine ; font-weight:bold"> React(18)+Typscript+Vite </span>
### UI框架 : <span style="color: aqua ; font-weight:bold"> TailwindCss </span>
### 狀態管理 :  <span style="color: aquamarine ; font-weight:bold"> Redux + Redux toolkit </span>
### 路由管理 :  <span style="color: aqua ; font-weight:bold"> react-router-dom (v6) </span>
### 圖片合併及拖拉縮放功能 :  <span style="color: aquamarine ; font-weight:bold"> fabricjs </span>
### PDF檔案管理插件 :  <span style="color: aqua ; font-weight:bold"> react-pdf </span>
## <span style="font-weight:bolder">元件架構說明</span>
### <span style="font-weight:bold">Btn元件</span>
由Btn.tsx元件統一管理btn各類元件<br>
btn元件主要以樣式作為分類，如PrimaryBtn、SecondaryBtn...等<br>
使用時只需要傳入type、title、clickHandler<br>
```javascript
<Btn btnObj={{type:BtnType.PRIMARY,title:'下一步',clickHandler:addStep}}/>
```
### <span style="font-weight:bold">Input元件</span>
#### <span style="font-weight:500">上傳類元件</span>
用FileUpload.tsx元件統一管理所有上傳相關的input元件，<br>
使用時只需要傳入input type<br>
使用範例 : 
```javascript
<FileUpload fileUploadObj={{type:InputType.FILE}}/>
<FileUpload fileUploadObj={{type:InputType.IMAGE}}/>
```