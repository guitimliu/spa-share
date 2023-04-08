import{o as n,c as j,w as x,a as c,b as e,n as _,t as f,d as m,r as V,T as $,e as S,u as B,s as I,f as k,g as h,F as L,h as N,i as g,j as P,k as F,l as R,m as T}from"./index-48e0c36b.js";const D={key:0},z=e("div",{class:"fixed top-0 left-0 h-full w-full bg-black/40"},null,-1),E={class:"fixed top-0 left-0 z-40 flex h-full w-full items-center justify-center"},A={class:"text-18px fw-700 select-none text-black"},O={class:"max-h-70vh p-20px w-full overflow-y-auto bg-white"},U={__name:"Modal",props:{modelValue:{type:Boolean,default:()=>!1},title:{type:String,default:()=>""},width:{type:String,default:()=>""},titleClass:{type:String}},emits:["update:modelValue","closeModal","saveClick"],setup(l,{emit:i}){const t=l,s=()=>{i("update:modelValue",!1)};return(d,p)=>(n(),j($,{name:"fade"},{default:x(()=>[l.modelValue?(n(),c("section",D,[z,e("div",E,[e("div",{class:_(["max-h-90vh rounded-10px relative overflow-hidden bg-white",t.width?`w-${t.width}`:"w-90% md:w-600px"])},[t.title?(n(),c("div",{key:0,class:_(["px-20px py-10px bg-primaryDarkBlue sticky top-0 left-0 flex w-full items-center justify-between",l.titleClass])},[e("h2",A,f(t.title),1),e("img",{onClick:s,class:"w-30px cursor-pointer",src:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e",alt:""})],2)):m("",!0),e("div",O,[V(d.$slots,"default")])],2)])])):m("",!0)]),_:3}))}},q="/spa-share/test.webp";function G(l=0,i=0){let t=(i/l).toFixed(2),s;return t.slice(-1)==="0"?(t=t.slice(0,-1),s=Number(t)*10,s):(s=Number(t)*100,s)}const H={class:"p-4"},J=e("meta",{name:"description",content:"This is a description of the page"},null,-1),K={class:"flex gap-4"},Q=["onClick"],W=["onClick"],X=["onClick"],Y=e("h2",{class:"my-6 text-8 fw-700"},"商品列表",-1),Z={class:"grid grid-cols-3 gap-4"},ee=["onClick"],te={class:"flex flex-col w-full"},se=e("img",{class:"mb-4",src:q,alt:""},null,-1),oe={class:"leading-5 mb-4"},le={class:"flex"},ae={class:"fw-700 text-6 mr-4"},re={class:"self-center text-xs font-bold text-black bg-yellow-300 p-1"},ne=e("table",{class:"w-full border-separate border border-slate-400 ..."},[e("thead",null,[e("tr",null,[e("th",{class:"border border-slate-300 ..."},"State"),e("th",{class:"border border-slate-300 ..."},"City")])]),e("tbody",null,[e("tr",null,[e("td",{class:"border border-slate-300 ..."},"Indiana"),e("td",{class:"border border-slate-300 ..."},"Indianapolis")]),e("tr",null,[e("td",{class:"border border-slate-300 ..."},"Ohio"),e("td",{class:"border border-slate-300 ..."},"Columbus")]),e("tr",null,[e("td",{class:"border border-slate-300 ..."},"Michigan"),e("td",{class:"border border-slate-300 ..."},"Detroit")])])],-1),de=S({__name:"demo",setup(l){const i=B(),{USER_INFO_REF:t}=I(i),s=R(),d=T("$api");async function p(){const{data:a,code:r}=await d.member.getMemberInfo();r===200&&(t.value=a.userInfo)}const u=k(!1);function w(){u.value=!0}const b=k([]);async function v(){const{data:a,code:r}=await d.project.getProjectAll();r===200&&(b.value=a.projectList)}function y(a){s.push({name:"projects",params:{id:a.id}})}return(a,r)=>{const C=U;return n(),c("section",H,[J,e("div",K,[e("button",{onClick:h(p,["prevent"]),class:"relative flex-none text-sm text-center font-semibold text-white py-2.5 px-4 rounded-lg bg-slate-900 dark:bg-sky-500 dark:text-white focus:outline-none hover:bg-slate-700 focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:highlight-white/20 dark:hover:bg-sky-400 dark:focus:ring-2 dark:focus:ring-sky-600 dark:focus:ring-offset-slate-900"}," 獲得使用者資料至 store ",8,Q),e("button",{onClick:h(w,["prevent"]),class:"relative flex-none text-sm text-center font-semibold text-white py-2.5 px-4 rounded-lg bg-slate-900 dark:bg-sky-500 dark:text-white focus:outline-none hover:bg-slate-700 focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:highlight-white/20 dark:hover:bg-sky-400 dark:focus:ring-2 dark:focus:ring-sky-600 dark:focus:ring-offset-slate-900"}," 開啟彈窗 ",8,W),e("button",{onClick:h(v,["prevent"]),class:"relative flex-none text-sm text-center font-semibold text-white py-2.5 px-4 rounded-lg bg-slate-900 dark:bg-sky-500 dark:text-white focus:outline-none hover:bg-slate-700 focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:highlight-white/20 dark:hover:bg-sky-400 dark:focus:ring-2 dark:focus:ring-sky-600 dark:focus:ring-offset-slate-900"}," 獲得商品列表 ",8,X)]),Y,e("div",Z,[(n(!0),c(L,null,N(g(b),(o,M)=>(n(),c("div",{onClick:ie=>y(o),key:M,class:"rounded-xl cursor-pointer"},[e("div",te,[se,e("p",oe,f(o.title),1),e("div",le,[e("p",ae,"NT "+f(o.discountPrice),1),e("p",re,f(g(G)(o.originalPrice,o.discountPrice))+" 折",1)])])],8,ee))),128))]),P(C,{modelValue:g(u),"onUpdate:modelValue":r[0]||(r[0]=o=>F(u)?u.value=o:null),title:"測試彈窗"},{default:x(()=>[ne]),_:1},8,["modelValue"])])}}});export{de as default};
