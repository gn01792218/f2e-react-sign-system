import{r as l,j as o,c as t,a as h,b as d,e as g,f as m,s as u,O as S}from"./index.722f278b.js";function p(n){let{step:a,title:c,active:e,done:i}=n.indecatorData;const[s]=l.exports.useState(100);return o("div",{children:[o("div",{className:"relative perspective-1500",style:{width:s,height:s},children:[t("div",{className:[e?"bg-primary-500 animate-bounce":"bg-primary-100",i&&!e?"done":"",,e&&i?"hidden":"","indecatorStep flipCard rounded-full flex justify-center items-center"].join(" "),children:t("p",{className:[e?"text-acent":"text-primary-900","text-[50px]"].join(" "),children:a})}),t("div",{className:["flipCard indecatorTick",i&&!e?"done opacity-50":"",e&&i?"done opacity-100":""].join(" "),children:o("svg",{width:s,height:s,children:[t("circle",{className:"circle",fill:"none",stroke:"#F3AB1E",strokeWidth:"8",cx:"50",cy:"50",r:"45"}),t("polyline",{className:"tick",fill:"none",stroke:"#27CAC4",strokeWidth:"10",points:"24.4,47.68 39.715,70.165 75.82,30.6",strokeLinecap:"round",strokeLinejoin:"round"})]})})]}),t("p",{className:[e?"text-acent":"text-white",i&&!e?"text-success":""].join(" "),children:c})]})}function f(n){const{stepIndecatorDataArray:a}=n;return o("div",{className:"w-[80%] mx-auto flex justify-around",children:[t(p,{indecatorData:a[0]}),t(p,{indecatorData:a[1]}),t(p,{indecatorData:a[2]})]})}function y(){const n=h(),a=d(r=>r.sign.currentStep),c=d(r=>r.createSign.handMadeSignImg),e=d(r=>r.createSign.BGImg),i=d(r=>r.sign.stepIndecatorDataArray),{toStep:s}=g();return l.exports.useEffect(()=>{n(m()),console.log("\u8B8A\u66F4active",a)},[a]),l.exports.useMemo(()=>{e&&n(u(0))},[e]),l.exports.useMemo(()=>{console.log("\u5075\u6E2C\u5230\u624B\u7C3D",c),c&&(n(u(1)),s("/SignPage/Step3",3))},[c]),o("main",{className:"text-white",children:[t(f,{stepIndecatorDataArray:i}),t(S,{})]})}export{y as default};
