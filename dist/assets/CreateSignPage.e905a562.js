import{B as i,a as u,u as D}from"./useUtil.9023c952.js";import{u as v,S as B}from"./useSignCanvas.af6d27c1.js";import{j as t,a as e}from"./index.73aa8341.js";function A(){const{signCanvas:s,ctx:l,setDrawing:h,handSignImg:a,clearCanvas:c,handleMouseDown:r,handleMouseMove:d,handleTouchMove:o,handleTouchStart:g,toImage:m}=v(),{downloadImg:C}=D(),n={width:500,height:200};return t("main",{className:"text-white",children:[e("h1",{className:"text-lg",children:"\u5EFA\u7ACB\u7C3D\u540D"}),t("section",{className:"flex",children:[t("section",{children:[e("h2",{children:"\u624B\u5BEB"}),e(B,{signCanvasObj:{width:n.width,height:n.height,signCanvas:s,ctx:l,setDrawing:h,handleMouseDown:r,handleMouseMove:d,handleTouchMove:o,handleTouchStart:g}}),t("div",{className:"flex",children:[e(i,{btnObj:{type:u.SECONDARY,title:"\u6E05\u9664\u7C3D\u540D",clickHandler:()=>c(s.current)}}),e(i,{btnObj:{type:u.PRIMARY,title:"\u8F49\u5316\u6210\u5716",clickHandler:m}})]}),a?t("div",{children:[e("img",{src:a,alt:"\u624B\u7E6A\u7C3D\u540D",width:n.width,height:n.height}),e(i,{btnObj:{type:u.PRIMARY,title:"\u4E0B\u8F09\u5716\u7247",clickHandler:()=>C(a)}})]}):null]}),e("section",{children:e("h2",{children:"\u4E0A\u50B3\u7C3D\u540D\u5716\u7247\u6A94"})})]})]})}export{A as default};
