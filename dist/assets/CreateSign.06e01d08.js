import{B as C,a as v,I as w}from"./Btn.c7b04849.js";import{F as D}from"./FileUpload.be4ebadf.js";import{j as i,r as M,a as f}from"./index.c4834833.js";function m(l){const{signCanvas:h,ctx:u,handleMouseDown:e,handleMouseMove:n,handleTouchStart:a,handleTouchMove:r,setDrawing:o}=l.signCanvasObj;return i("div",{children:i("canvas",{ref:h,className:"signCanvas",onMouseDown:e,onMouseMove:n,onTouchStart:a,onTouchMove:r,onTouchEnd:()=>o(!1),onMouseUp:()=>o(!1),onMouseOut:()=>o(!1),children:"Your browser does not support th canvas element"})})}function b(){function l(n){return[n.clientX,n.clientY]}function h(n){return[n.touches[0].clientX,n.touches[0].clientX]}function u(n,a){let[r,o]=l(a),c=n.getBoundingClientRect();return r-=c.left,o-=c.top,[r,o]}function e(n,a){let[r,o]=h(a),c=n.getBoundingClientRect();return r-=c.left,o-=c.top,[r,o]}return{getMousePos:l,getCanvasMousePos:u,getCanvasTouchPos:e}}function y(){var g;const{getCanvasMousePos:l,getCanvasTouchPos:h}=b(),u=M.exports.useRef(null),e=(g=u.current)==null?void 0:g.getContext("2d"),[n,a]=M.exports.useState(!0);function r(t){const s=t.getContext("2d");s==null||s.clearRect(0,0,t.width,t.height)}function o(t){a(!0);let[s,d]=l(u.current,t);e.beginPath(),e.moveTo(s,d),t.preventDefault()}function c(t){if(!n)return;let[s,d]=l(u.current,t);e.lineWidth=2,e.lineCap="round",e.lineJoin="round",e.strokeStyle="yellow",e.shadowBlur=1,e.shadowColor="white",e.lineTo(s,d),e.stroke()}function p(t){a(!0);let[s,d]=h(u.current,t);e.beginPath(),e.moveTo(s,d),t.preventDefault()}function T(t){if(!n)return;let[s,d]=h(u.current,t);e.lineWidth=2,e.lineCap="round",e.lineJoin="round",e.shadowBlur=1,e.shadowColor="black",e.lineTo(s,d),e.stroke()}function x(t){return t.toDataURL()}return{signCanvas:u,ctx:e,setDrawing:a,clearCanvas:r,handleMouseMove:c,handleMouseDown:o,handleTouchStart:p,handleTouchMove:T,converCanvasToImage:x}}function j(){const{signCanvas:l,ctx:h,setDrawing:u,clearCanvas:e,handleMouseDown:n,handleMouseMove:a,handleTouchMove:r,handleTouchStart:o}=y();function c(){}return f("div",{className:"text-white bg-black",children:[i("h1",{className:"text-lg",children:"\u5EFA\u7ACB\u7C3D\u540D"}),f("section",{children:[i("h2",{children:"\u624B\u5BEB"}),i(m,{signCanvasObj:{signCanvas:l,ctx:h,setDrawing:u,handleMouseDown:n,handleMouseMove:a,handleTouchMove:r,handleTouchStart:o}}),f("div",{className:"flex",children:[i(C,{btnObj:{type:v.SECONDARY,title:"\u6E05\u9664\u7C3D\u540D",clickHandler:()=>e(l.current)}}),i(C,{btnObj:{type:v.PRIMARY,title:"\u5275\u5EFA\u7C3D\u540D",clickHandler:c}})]})]}),f("section",{children:[i("h2",{children:"\u4E0A\u50B3\u5716\u7247"}),i(D,{fileUploadObj:{type:w.IMAGE}})]})]})}export{j as default};