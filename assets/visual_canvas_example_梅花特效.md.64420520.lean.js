import{C as d}from"./chunks/CBtn.bb193dfe.js";import{d as f,h as _,l as g,p as E,o as y,c as D,G as C,z as v,_ as B,V as A}from"./chunks/framework.b3911a66.js";const x=600,T=600,k=f({__name:"Plum",setup(i){const l=_(),a=g(()=>l.value?l.value.getContext("2d"):null);function e(){a.value.strokeStyle="#000",o({start:{x:x/2,y:T},length:20,theta:-Math.PI/2})}const p=[];function o(s,n=0){if(n>30)return;const F=c(s);m(s),(n<5||Math.random()<.5)&&p.push(()=>o({start:F,length:s.length+(Math.random()*10-5),theta:s.theta-.3*Math.random()},n+1)),(n<5||Math.random()<.5)&&p.push(()=>o({start:F,length:s.length+(Math.random()*10-5),theta:s.theta+.3*Math.random()},n+1))}function b(){const s=[...p];p.length=0,s.forEach(n=>n())}let t=0;function r(){requestAnimationFrame(()=>{t+=1,t%3===0&&b(),r()})}r();function u(s,n){a.value.beginPath(),a.value.moveTo(s.x,s.y),a.value.lineTo(n.x,n.y),a.value.stroke()}function c(s){return{x:s.start.x+s.length*Math.cos(s.theta),y:s.start.y+s.length*Math.sin(s.theta)}}function m(s){u(s.start,c(s))}const h=()=>{a.value.clearRect(0,0,600,600),e()};return E(()=>{e()}),(s,n)=>(y(),D("div",null,[C(d,{onClick:h,text:"重新绘制"}),v("canvas",{ref_key:"canvas",ref:l,width:"600",height:"600"},null,512)]))}});const P=B(k,[["__scopeId","data-v-ecba2400"]]),M=A("",3),q=A("",2),S=JSON.parse('{"title":"梅花特效","description":"","frontmatter":{},"headers":[],"relativePath":"visual/canvas/example/梅花特效.md","filePath":"visual/canvas/example/梅花特效.md","lastUpdated":1688117356000}'),I={name:"visual/canvas/example/梅花特效.md"},V=Object.assign(I,{setup(i){return(l,a)=>(y(),D("div",null,[M,C(P),q]))}});export{S as __pageData,V as default};
