import{c,j as e,f as o,g as m,b as d,B as u,d as i}from"./index.3d3bdbf6.js";import{u as y}from"./useDocumentHistory.99c346cd.js";function f(n){let{name:t,documentImg:l}=n.documentHistoryObj;return c("div",{className:"w-full",children:[e("h1",{children:t||"\u6211\u7684\u6587\u4EF6"}),e("img",{className:"w-full",src:l,alt:t})]})}function g(){const{toStep:n}=o(),{deleteDocumentHistory:t}=y(),{downloadImg:l}=m(),a=d(s=>s.documentHistory.documentHistoryArray);return e("main",{className:"text-white flex justify-center",children:e("ul",{className:"documentHistoryList",children:a.length?a.map((s,r)=>c("li",{className:"documentHistory-li",children:[e(f,{documentHistoryObj:s}),c("div",{className:"flex flex-col items-center",children:[e(u,{btnObj:{type:i.SECONDARY,title:"\u4E0B\u8F09",clickHandler:()=>l(s.documentImg)}}),e(u,{btnObj:{type:i.SECONDARY,title:"\u522A\u9664",clickHandler:()=>t(r)}})]})]},r)):c("li",{className:"flex flex-col items-center",children:[e("p",{className:"text-acent",children:"\u60A8\u5C1A\u672A\u7C3D\u7F72\u4EFB\u4F55\u6587\u4EF6"}),e(u,{btnObj:{type:i.PRIMARY,title:"\u7C3D\u7F72\u6587\u4EF6",clickHandler:()=>n("/SignPage/Step1",1)}})]})})})}export{g as default};