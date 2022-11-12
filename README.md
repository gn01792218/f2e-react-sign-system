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
git subtree push --prefix dist origin gh-pages

```
## <span style="font-weight:bolder">元件架構說明</span>
### <span style="font-weight:bold">Loading元件</span>
Loading元件可客製化樣式，需傳入TailwindCss class字串<br>
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
## <span style="font-weight:bolder">Design System</span>
使用extend的方式，在原有tailwindCss上導入設計系統。如色碼表、字階等等。
詳見專案根目錄下的 <span style="font-weight:bold">[ tailwind.config.js ] <span/>檔案。