import{B as n,a,I as b}from"./useUtil.1756b16d.js";import{u as S}from"./useSign.ac3b1972.js";import{u as f}from"./useRefreshRedirect.9256c7c1.js";import{u as v,S as B}from"./useSignCanvas.f9e289e4.js";import{r as x,j as c,a as e,b as j}from"./index.f536c156.js";import{I as k}from"./Input.485a5c2a.js";function y(l){const[t,s]=x.exports.useState(0),o=r=>{l.setColor(r.target.value)},i=(r,d)=>{s(d),l.setColor(r)};return c("section",{className:"w-full flex justify-around",children:[e(n,{btnObj:{type:a.CIRCLE,color:"black",clickHandler:()=>i("black",0),active:t===0}}),e(n,{btnObj:{type:a.CIRCLE,color:"yellow",clickHandler:()=>i("yellow",1),active:t===1}}),e(n,{btnObj:{type:a.CIRCLE,color:"blue",clickHandler:()=>i("blue",2),active:t===2}}),e(n,{btnObj:{type:a.CIRCLE,color:"red",clickHandler:()=>i("red",3),active:t===3}}),e(k,{inputObj:{type:b.COLOR,handleOnchange:o,handleClick:()=>s(4),active:t===4}})]})}function D(){const{signCanvas:l,ctx:t,setDrawing:s,setStrokeColor:o,clearCanvas:i,handleMouseDown:r,handleMouseMove:d,handleTouchMove:p,handleTouchStart:C,toImage:g}=v(),h=j(m=>m.createSign.handMadeSignImg),u={width:500,height:200};return e("main",{className:"text-white",children:c("section",{children:[e("h1",{className:"text-lg",children:"\u5EFA\u7ACB\u7C3D\u540D"}),c("section",{className:"w-full flex flex-col",children:[e("h2",{children:"\u624B\u5BEB\u677F"}),e(y,{setColor:o}),e(B,{signCanvasObj:{width:u.width,height:u.height,signCanvas:l,ctx:t,setDrawing:s,handleMouseDown:r,handleMouseMove:d,handleTouchMove:p,handleTouchStart:C}}),c("div",{className:`w-[${u.width}px] h-[${u.height}px]`,children:[e("h2",{children:"\u7C3D\u540D\u9810\u89BD"}),h?e("img",{src:h,alt:"\u624B\u5BEB\u7C3D\u540D"}):null]}),c("div",{className:"flex justify-around",children:[e(n,{btnObj:{type:a.SECONDARY,title:"\u6E05\u9664\u7C3D\u540D",clickHandler:()=>i(l.current)}}),e(n,{btnObj:{type:a.PRIMARY,title:"\u4FDD\u5B58",clickHandler:g}})]})]})]})})}function N(){const{addStep:l,backStep:t}=S();return f("/SignPage/Step1"),c("section",{className:"flex flex-col items-center",children:["\u7B2C\u4E8C\u6B65",c("div",{className:"flex",children:[e(n,{btnObj:{type:a.PRIMARY,title:"\u4E0A\u4E00\u6B65",clickHandler:()=>t("/SignPage/Step1")}}),e(n,{btnObj:{type:a.PRIMARY,title:"\u4E0B\u4E00\u6B65",clickHandler:()=>l("/SignPage/Step3")}})]}),e(D,{})]})}export{N as default};