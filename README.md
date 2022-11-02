## 元件說明
### Input元件架構
#### 上傳類元件 - FileUpload.tsx
用FileUpload元件統一管理所有上傳相關的input元件，
使用時，只需要傳入input type
使用範例 : 
``` typscript
<FileUpload fileUploadObj={{type:InputType.FILE}}/>
<FileUpload fileUploadObj={{type:InputType.IMAGE}}/>
```