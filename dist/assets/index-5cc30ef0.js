(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();let b,w,S,W=Object,E=Object.getPrototypeOf,T=(t,e,o,r)=>(t??(setTimeout(o,r),new Set)).add(e),B={get val(){return this.t},set val(t){let e=this,o=e.t;t!==o&&(e.l===o?w=T(w,e,K):t===e.l&&w.delete(e),e.t=t,e.o.forEach(r=>r(t,o)))},onnew(t){this.o.push(t)}},j=E(B),F=t=>t.nodeType?t:new Text(t),_=(t,...e)=>(e.flat(1/0).forEach(o=>t.appendChild(E(o)===B?O(o,r=>r):F(o))),t),J=new Proxy((t,...e)=>{let[o,...r]=E(e[0]??0)===j?e:[{},...e],n=document.createElement(t);for(let[s,a]of W.entries(o)){let i=n[s]!==b?c=>n[s]=c:c=>n.setAttribute(s,c);E(a)===B?O(a,c=>(i(c),n)):E(a)===j?O(...a.deps,(...c)=>(i(a.f(...c)),n)):i(a)}return _(n,...r)},{get:(t,e)=>t.bind(b,e)}),k=t=>t.i=t.i.filter(e=>{var o;return(o=e.u)==null?void 0:o.isConnected}),K=()=>{let t=[...w];w=b;for(let e of new Set(t.flatMap(k))){let{_:o,u:r}=e,n=e.g(...o.map(s=>s.t),r,...o.map(s=>s.l));n!==r&&(n!=b?r.replaceWith(e.u=F(n)):(r.remove(),e.u=b))}for(let e of t)e.l=e.t},O=(...t)=>{let e=t.pop(),o=e(...t.map(n=>n.t));if(o==b)return[];let r={_:t,u:F(o),g:e};for(let n of t)S=T(S,n,()=>(S.forEach(k),S=b),1e3),n.i.push(r);return r.u};const y={add:_,tags:J,state:t=>({__proto__:B,t,l:t,i:[],o:[]}),bind:O},v={theme:{textColor:"midnightblue",bgColor:"bisque"},classes:{h1:"blueBisque",isTrue:"accepted",isFalse:"denied",footer:"footer",btnDiv:"btnDiv"}};function L(t){var e,o="";for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}function Y(t){const{van:e}=t,{dialog:o}=e.tags;return function(n){const{id:s,idContent:a,states:i=[],content:c}=n,l=c({ctx:t,id:s,idContent:a,states:i}),u=o({id:s},l);return u.addEventListener("click",f=>{f.target.id===s&&(i.map(m=>m.val=null),u.close())}),()=>u}}function I(t){const{van:e,objStr:o}=t,{button:r}=e.tags;return function(s,...a){const{fullWidth:i,label:c,primary:l,accent:u,raised:f,disabled:m,ripple:g,...p}=s;return r({class:o({fullWidth:i,disabled:m,raised:f,ripple:g,primary:l,accent:u}),...p},a)}}function M(t){const{van:e,objStr:o,classes:r}=t,{footer:n}=e.tags;return function(a,...i){const{optClass:c}=a;return n({class:o({[r.footer]:!0,[c]:c})},i)}}const z=t=>{const e=document.getElementsByTagName("output")[0];e.value=t},G=({ctx:t,...e})=>{const{van:o}=t,{form:r,label:n,input:s,br:a,p:i}=o.tags,c=o.state("text"),l=I(t),u=M(t),{id:f,idContent:m,states:[g,p]}=e;return r({id:m,onsubmit:d=>{d.preventDefault();const D=new FormData(d.target),h=Object.fromEntries(D);z(JSON.stringify(h,null,"	")),document.getElementById(m).reset(),document.getElementById(f).close(),g.val="",p.val=10,c.val="password"}},n("Enter your password",s({id:"password",name:"password",type:c,value:g,onchange:d=>g.val=d.target.value})),a(),n("Show password",s({id:"pwdbox",name:"pwdbox",type:"checkbox",onchange:d=>d.target.checked?c.val="text":c.val="password"})),a(),n("Test the slider",s({id:"slide",type:"range",min:0,max:100,name:"slide",value:p,oninput:d=>p.val=d.target.value})),a(),i("You selected: ",p),a(),u({},l({primary:!0,raised:!0},"Submit")))};function Q(t){const{van:e,objStr:o,classes:r}=t,{header:n,h1:s}=e.tags;return function(i,...c){const{optClass:l}=i;return n(s({class:o({[r.h1]:!0,[l]:l})},c))}}const R=({ctx:t,...e})=>{const{van:o,classes:r}=t,{article:n,label:s,input:a,div:i}=o.tags,{id:c,idContent:l,states:u}=e,[f,...m]=u,g=M(t),p=Q(t),C=I(t),d=(h,H)=>C({accent:!0,raised:!0,ripple:!0,onclick:()=>{H.val=!1,document.getElementById(h).close()}},"close"),D=h=>C({primary:!0,raised:!0,onclick:()=>{document.getElementById(h).close()}},"Accept");return i({id:l},p({},"My beauty"),n(s(a({type:"checkbox",id:"agreement",name:"agreement",checked:f,onchange:h=>f.val=h.target.checked}),"I agree with the terms and conditions")),g({},d(c,f),D(c)))};v.van=y;v.objStr=L;const{br:x,output:U,span:V,div:A}=y.tags,X=y.state(""),Z=y.state(10),N=y.state(!1),$=t=>{const e=I(t);return({id:o,label:r})=>e({primary:!0,raised:!0,onclick:()=>document.getElementById(o).showModal()},r)},tt=t=>e=>{const o=s=>s?"I agreed with the terms and conditions":"I denied the terms and conditions",{classes:{isTrue:r,isFalse:n}}=t;return y.bind(e,s=>V({class:L({[r]:s===!0,[n]:s===!1})},o(s)))},P=$(v),et=tt(v),q=Y(v),nt=q({id:"d1",idContent:"c1",states:[N],content:R}),ot=q({id:"d2",idContent:"f1",states:[X,Z],content:G});y.add(document.body,A({class:v.classes.btnDiv},P({id:"d2",label:"Open the form"}),ot(),U({id:"output"})),x(),A({class:v.classes.btnDiv},P({id:"d1",label:"Agreement check"})),nt(),x(),et(N));