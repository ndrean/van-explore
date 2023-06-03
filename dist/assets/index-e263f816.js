(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();let g,v,O,q=Object,w=Object.getPrototypeOf,k=(t,e,n,r)=>(t??(setTimeout(n,r),new Set)).add(e),C={get val(){return this.t},set val(t){let e=this,n=e.t;t!==n&&(e.l===n?v=k(v,e,W):t===e.l&&v.delete(e),e.t=t,e.o.forEach(r=>r(t,n)))},onnew(t){this.o.push(t)}},j=w(C),x=t=>t.nodeType?t:new Text(t),D=(t,...e)=>(e.flat(1/0).forEach(n=>t.appendChild(w(n)===C?B(n,r=>r):x(n))),t),H=new Proxy((t,...e)=>{let[n,...r]=w(e[0]??0)===j?e:[{},...e],o=document.createElement(t);for(let[s,a]of q.entries(n)){let i=o[s]!==g?c=>o[s]=c:c=>o.setAttribute(s,c);w(a)===C?B(a,c=>(i(c),o)):w(a)===j?B(...a.deps,(...c)=>(i(a.f(...c)),o)):i(a)}return D(o,...r)},{get:(t,e)=>t.bind(g,e)}),P=t=>t.i=t.i.filter(e=>{var n;return(n=e.u)==null?void 0:n.isConnected}),W=()=>{let t=[...v];v=g;for(let e of new Set(t.flatMap(P))){let{_:n,u:r}=e,o=e.g(...n.map(s=>s.t),r,...n.map(s=>s.l));o!==r&&(o!=g?r.replaceWith(e.u=x(o)):(r.remove(),e.u=g))}for(let e of t)e.l=e.t},B=(...t)=>{let e=t.pop(),n=e(...t.map(o=>o.t));if(n==g)return[];let r={_:t,u:x(n),g:e};for(let o of t)O=k(O,o,()=>(O.forEach(P),O=g),1e3),o.i.push(r);return r.u};const h={add:D,tags:H,state:t=>({__proto__:C,t,l:t,i:[],o:[]}),bind:B},b={theme:{textColor:"midnightblue",bgColor:"bisque"},classes:{h1:"blueBisque",isTrue:"accepted",isFalse:"denied",footer:"footer"}};function _(t){var e,n="";for(e in t)t[e]&&(n&&(n+=" "),n+=e);return n}const A=({ctx:t,...e})=>{const{van:n}=t,{div:r,dialog:o}=n.tags,{id:s,idContent:a,inside:i,states:c=[],content:l}=e,p=l({van:n,ctx:t,id:s,idContent:a,states:c}),d=o({id:s},r({id:i},p));return d.addEventListener("click",m=>{m.target.id===s&&(c.map(f=>f.val=null),d.close())}),d},L=t=>{const e=document.getElementsByTagName("output")[0];e.value=t},J=({ctx:t,...e})=>{const{van:n}=t,{form:r,label:o,input:s,br:a,button:i,p:c}=n.tags,l=n.state("text"),{id:p,idContent:d,states:[m,f]}=e;return r({id:d,onsubmit:u=>{u.preventDefault();const S=new FormData(u.target),F=Object.fromEntries(S);L(JSON.stringify(F,null,"	")),document.getElementById(d).reset(),document.getElementById(p).close(),m.val="",f.val=10,l.val="password"}},o("enter your name",s({id:"password",name:"password",type:l,value:m,onchange:u=>m.val=u.target.value})),a(),o("show password",s({id:"pwdbox",name:"pwdbox",type:"checkbox",onchange:u=>u.target.checked?l.val="text":l.val="password"})),a(),c(m),a(),o("slider",s({id:"slide",type:"range",min:0,max:100,name:"slide",value:f,oninput:u=>f.val=u.target.value})),a(),c(f),a(),i("submit"))};function K(t){const{van:e,objStr:n,classes:r}=t,{footer:o}=e.tags;return function(a,...i){const{optClass:c}=a;return o({class:n({[r.footer]:!0,[c]:c})},i)}}function z(t){const{van:e,objStr:n,classes:r}=t,{header:o,h1:s}=e.tags;return function(i,...c){const{optClass:l}=i;return o(s({class:n({[r.h1]:!0,[l]:l})},c))}}function M(t){const{van:e,objStr:n}=t,{button:r}=e.tags;return function(s,...a){const{fullWidth:i,label:c,primary:l,accent:p,raised:d,disabled:m,ripple:f,...E}=s;return r({class:n({fullWidth:i,disabled:m,raised:d,ripple:f,primary:l,accent:p}),...E},a)}}const G=({ctx:t,...e})=>{const{van:n,classes:r}=t,{article:o,label:s,input:a,div:i}=n.tags,{id:c,idContent:l,states:p}=e,[d,...m]=p,f=K(t),E=z(t),u=M(t),S=(y,N)=>u({accent:!0,raised:!0,ripple:!0,onclick:()=>{N.val=!1,document.getElementById(y).close()}},"close"),F=y=>u({primary:!0,raised:!0,onclick:()=>{document.getElementById(y).close()}},"Accept");return i({id:l},E({},"My beauty"),o(s(a({type:"checkbox",id:"agreement",name:"agreement",checked:d,onchange:y=>d.val=y.target.checked}),"I agree with the terms and conditions")),f({},S(c,d),F(c)))};b.van=h;b.objStr=_;const{br:I,output:Q,span:R,h4:at,h1:ct}=h.tags,U=h.state(""),V=h.state(10),T=h.state(!1),X=t=>{const e=M(t);return(n,r)=>e({primary:!0,raised:!0,onclick:()=>document.getElementById(n).showModal()},r)},Y=t=>e=>{const n=s=>s?"I agreed with the terms and conditions":"I denied the terms and conditions",{classes:{isTrue:r,isFalse:o}}=t;return h.bind(e,s=>R({class:_({[r]:s===!0,[o]:s===!1})},n(s)))};function Z(t){return()=>A({ctx:t,id:"d1",idContent:"c1",inside:"inside1",states:[T],content:G})}const $=t=>{const e=M(t);return(n,r)=>e({primary:!0,raised:!0,onclick:()=>{L(""),document.getElementById(n).showModal()}},r)};function tt(t){return()=>A({ctx:t,id:"d2",idContent:"f1",inside:"inside2",states:[U,V],content:J})}const et=X(b),nt=Y(b),ot=$(b),st=Z(b),rt=tt(b);h.add(document.body,ot("d2","Open the form"),rt(),I(),Q(),I(),et("d1","Agreement check"),st(),I(),nt(T));