import{u as x,a as C,b as D,j as a,c as e,S as f,B as s,d as i,p as v,M as A}from"./index.a853a3ae.js";function w(){const{signCanvas:n,ctx:c,setDrawing:l,clearCanvas:h,handleMouseDown:r,handleMouseMove:u,handleTouchMove:d,handleTouchStart:o,toImage:g}=x(),t={width:500,height:200},p=C(),S=D(m=>m.createSign.handSignArray);return a("main",{className:"text-white flex justify-center",children:[e("h1",{className:"text-lg text-center",children:"\u5EFA\u7ACB\u7C3D\u540D"}),a("section",{className:"flex flex-col items-center",children:[a("section",{children:[e(f,{signCanvasObj:{width:t.width,height:t.height,signCanvas:n,ctx:c,setDrawing:l,handleMouseDown:r,handleMouseMove:u,handleTouchMove:d,handleTouchStart:o}}),a("div",{className:"flex",children:[e(s,{btnObj:{type:i.SECONDARY,title:"\u6E05\u9664\u7C3D\u540D",clickHandler:()=>h(n.current)}}),e(s,{btnObj:{type:i.PRIMARY,title:"\u5132\u5B58\u7C3D\u540D",clickHandler:()=>p(v(g()))}})]})]}),e("section",{children:e(A,{handSignArray:S,showUseBottom:!1})})]})]})}export{w as default};