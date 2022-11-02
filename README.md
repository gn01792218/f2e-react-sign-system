## 元件架構說明
### Btn
由Btn元件統一管理btn各類元件<br>
btn元件主要以樣式作為分類，如PrimaryBtn、SecondaryBtn...等<br>
使用時只需要傳入type、title、clickHandler<br>
```javascript
<Btn btnObj={{type:BtnType.PRIMARY,title:'下一步',clickHandler:addStep}}/>
```
### Input
#### 上傳類元件 - FileUpload.tsx
用FileUpload元件統一管理所有上傳相關的input元件，<br>
使用時只需要傳入input type<br>
使用範例 : 
```javascript
<FileUpload fileUploadObj={{type:InputType.FILE}}/>
<FileUpload fileUploadObj={{type:InputType.IMAGE}}/>
```