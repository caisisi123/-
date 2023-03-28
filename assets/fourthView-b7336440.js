import{C as e,o as t,D as a,F as l,b as s,E as i,G as n}from"./elementPlus-7d720d8f.js";import{u as o,t as r,_ as d}from"./index-a476f0ac.js";import{ae as u,A as f,v as c,o as m,j as p,a4 as v,_ as h,u as g,k as y,a2 as _,Z as b,bo as w,W as x,bt as S,bu as z}from"./vendor-653f54b6.js";const $=""+new URL("img_6-f73fbd91.webp",import.meta.url).href,M=o(),T=["紧急不重要","重要且紧急","不重要不紧急","重要不紧急"],k=[];let E=Array(4).fill(0);E.map(((e,t)=>{E[t]={name:T[t],value:0}}));const D=(()=>{const e=[0,0,0,0];return M.todayData.forEach((t=>{e[t.type]++})),E.forEach(((t,a)=>{e[a]>0&&(t.value=e[a])})),E=E.filter((e=>{if(e.value>0)return k.push(e.name),!0})),E})();M.$onAction((e=>{"pushStore"===e.name&&u((()=>{const t=e.args[0].type;D[t]?D[t].value++:(D[t]={name:T[t],value:0},k.push(T[t])),H.setOption({series:[{name:"count",data:D}],legend:[{data:k,id:1}]})}))}));const L=[],A=[];M.todayData.forEach((e=>{e.focusTime>0&&(A.push({name:e.description,value:e.focusTime}),L.push(e.description))})),M.$onAction((e=>{"updateStoreTime"===e.name&&u((()=>{const t=e.args[0].value,a=A.findIndex((e=>e.name===t.description));-1===a?(A.push({name:t.description,value:e.args[1]}),L.push(t.description)):A[a].value+=e.args[1],H.setOption({series:[{name:"focus",data:A}],legend:[{data:L,id:2}]})}))}));let H=null;const W=o();let j=f(0),I=f(0);W.todayData.length&&W.todayData.forEach((e=>{e.focusTime>0&&(I.value+=e.focusTime,j.value+=e.focusTimes)}));let O=f(0),C=f(0),B=f(0);indexedDB.open("PlanDB",5).onsuccess=function(e){e.target.result.transaction("record","readonly").objectStore("record").getAll().onsuccess=function(e){const t=e.target.result;if(!t.length)return;const a=new Set;t.forEach((e=>{e.focusTime&&(O.value+=e.focusTimes,C.value+=e.focusTime,a.add(e.date))})),B.value=a.size}},W.$onAction((e=>{"updateStoreTime"===e.name&&u((()=>{I.value+=e.args[1],j.value+=1,O.value+=1,C.value+=e.args[1],localStorage.getItem(r)||(B.value+=1,localStorage.setItem(r,`${B.value}`))}))}));const G=e=>(S("data-v-59f0575e"),e=e(),z(),e),P={style:{display:"inline-flex","align-items":"center","font-size":"2rem"}},U={style:{display:"inline-flex","align-items":"center","font-size":"2rem"}},F=G((()=>y("div",{style:{display:"inline-flex","align-items":"center","font-size":"2rem"}}," 总专注天数 ",-1))),R={class:"today_statistic"},V=G((()=>y("p",null,"今日数据",-1))),Z=G((()=>y("div",{style:{display:"inline-flex","align-items":"center","font-size":"2rem","padding-bottom":"1vh"}}," 今日专注时长 ",-1))),q=G((()=>y("div",{style:{display:"inline-flex","align-items":"center","font-size":"2rem","padding-bottom":"1vh"}}," 专注次数 ",-1))),J={class:"barGraph"},K=G((()=>y("div",{class:"divider"},null,-1))),N=G((()=>y("p",null,"今日计划情况",-1))),Q=d({__name:"statistic",setup(o){const r=f();function d(e){let t=`${e}`.padStart(2,"0")+"秒",a=e;return a>=3600?t=`${Math.floor(a/3600)}时${Math.floor(Math.floor(a%3600)/60)}分${Math.floor(a%60)}秒`:a>=60&&(t=`${Math.floor(a/60)}分${a%60}秒`),t}return c((()=>{var e,t;e=r.value,t={width:r.value.offsetWidth,height:r.value.offsetHeight},H=echarts.init(e,null,t),H.setOption({lazyUpdate:!0,title:[{text:"[计划优先级分布]",textStyle:{fontSize:"1.5rem"}},{textStyle:{fontSize:"1.5rem"},text:"[专注时长分布]",top:"50%"}],color:["yellow","pink","skyblue","greenyellow"],legend:[{id:1,data:k,top:"5%",orient:"vertical",left:"3%",itemWidth:10,itemHeight:10,itemStyle:{borderWidth:0},selectedMode:!1,textStyle:{fontSize:"1.3rem"}},{id:2,orient:"vertical",type:"scroll",top:"56%",left:"0",textStyle:{fontSize:"1.5rem"},itemWidth:10,itemHeight:10,data:L}],series:[{type:"pie",radius:["23%","33%"],center:["55%","22%"],top:-10,avoidLabelOverlap:!0,showEmptyCircle:!0,labelLine:{length:"10",length2:"15",align:"center"},label:{formatter:function(e){return 0===e.data.value?"":`${e.data.value}条\n${e.data.name}`},overflow:"breakAll",alignTo:"labelLine",edgeDistance:"10%"},name:"count",data:D,legendHoverLink:!1,emphasis:{scale:!1}},{type:"pie",name:"focus",data:A,legendHoverLink:!1,avoidLabelOverlap:!0,showEmptyCircle:!0,center:["55%","73%"],radius:["23%","33%"],label:{formatter:function(e){let t=e.data.value;if(0===t)return"";let a=t+"秒";return t>=3600?a=`${Math.floor(t/3600)}时${Math.floor(Math.floor(t%3600)/60)}分${Math.floor(t%60)}秒`:t>=60&&(a=`${Math.floor(t/60)}分${t%60}秒`),a+"\n"+e.data.name}},emphasis:{scale:!1}}]})})),window.addEventListener("resize",(()=>{H.resize({width:r.value.offsetWidth,height:r.value.offsetHeight})}),{passive:!0}),(o,u)=>{const f=t,c=a,S=l,z=s,M=i,T=n;return m(),p("div",{class:"wrapper",style:x({borderImageSource:"url("+g($)+")"})},[v(M,{class:"total"},{default:h((()=>[v(z,{span:8},{default:h((()=>[v(S,{value:g(O)},{title:h((()=>[y("div",P,[_(" 专注总次数 "),v(c,{effect:"dark",content:"我专注了的次数",placement:"top"},{default:h((()=>[v(f,{style:{"margin-left":"1vw"},size:"3.5vw"},{default:h((()=>[v(g(e))])),_:1},8,["size"])])),_:1})])])),suffix:h((()=>[_("次")])),_:1},8,["value"])])),_:1}),v(z,{span:8},{default:h((()=>[v(S,{value:g(C),formatter:d},{title:h((()=>[y("div",U,[_(" 专注总时长 "),v(c,{effect:"dark",content:"我所有专注记录的总时长",placement:"top"},{default:h((()=>[v(f,{style:{"margin-left":"1vw"},size:"3.5vw"},{default:h((()=>[v(g(e))])),_:1},8,["size"])])),_:1})])])),_:1},8,["value"])])),_:1}),v(z,{span:8},{default:h((()=>[v(S,{value:g(B)},{title:h((()=>[F])),suffix:h((()=>[_("天")])),_:1},8,["value"])])),_:1})])),_:1}),y("div",R,[V,v(T,{"border-style":"dashed"}),v(M,null,{default:h((()=>[v(z,{span:12},{default:h((()=>[v(S,{value:g(I),formatter:d},{title:h((()=>[Z])),_:1},8,["value"])])),_:1}),v(z,{span:12},{default:h((()=>[v(S,{value:g(j)},{title:h((()=>[q])),suffix:h((()=>[_("次")])),_:1},8,["value"])])),_:1})])),_:1})]),y("div",J,[K,N,v(T,{"border-style":"dashed"}),(m(),b(w,null,[y("div",{class:"pie",ref_key:"pie",ref:r,style:{width:"100%",height:"56vh"}},null,512)],1024))])],4)}}},[["__scopeId","data-v-59f0575e"]]),X={__name:"fourthView",setup:e=>(e,t)=>(m(),b(Q))};export{X as default};
