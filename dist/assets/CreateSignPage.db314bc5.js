import{u as y,r as t,a as b,b as j,c as M,j as e,d as s,T as w,S as E,B as c,e as l,I,f as N,M as F,p as O,g as T}from"./index.898ccf0a.js";function R(){const{showMsg:i}=y(),a=t.exports.useRef(null),[n,o]=t.exports.useState(null);t.exports.useEffect(()=>{o(a.current)},[a]);const{ctx:r,canvasSize:u,setDrawing:h,setStrokeColor:d,clearCanvas:p,handleMouseDown:g,handleMouseMove:C,handleTouchMove:f,handleTouchStart:m,handleUploadImage:x,toImage:D}=b(n),S=j(),v=M(B=>B.createSign.handSignArray);function A(){S(O(D())),i({type:T.SUCCESS,title:"\u7C3D\u540D\u8A0A\u606F",message:"\u4FDD\u5B58\u6210\u529F\uFF0C\u8ACB\u67E5\u770B\u4E0B\u65B9\u7C3D\u540D\u6A94\u5217\u8868"})}return e("main",{className:"text-white flex justify-center",children:s("section",{className:"flex flex-col items-center",children:[s("section",{className:"mb-20 flex flex-col items-center",children:[e(w,{setColor:d}),e(E,{signCanvasObj:{width:u.width,height:u.height,signCanvas:a,ctx:r,setDrawing:h,handleMouseDown:g,handleMouseMove:C,handleTouchMove:f,handleTouchStart:m}}),s("div",{className:"flex flex-col justify-around lg:flex-row",children:[e(c,{btnObj:{type:l.SECONDARY,title:"\u6E05\u9664\u7C3D\u540D",clickHandler:()=>p(n)}}),e(I,{inputObj:{type:N.FILE,title:"\u4E0A\u50B3\u7C3D\u540D\u5716\u6A94",handleOnchange:x}}),e(c,{btnObj:{type:l.PRIMARY,title:"\u5132\u5B58\u7C3D\u540D",clickHandler:()=>A()}})]})]}),s("section",{className:"p-5 border-2",children:[e("h2",{className:"text-center mb-5",children:"\u6211\u7684\u7C3D\u540D\u5217\u8868"}),e(F,{handSignArray:v,showUseBottom:!0})]})]})})}export{R as default};
