import{_ as s,r as c,o,c as n,a as r,t as i,F as p,d}from"./index.4cf16285.js";const l=d(" ABOUT "),_={props:{msg:String},setup(a){c(0);const e=document.createElement("script");e.src="https://baike.baidu.com/api/openapi/BaikeLemmaCardApi?appid=379020&bk_key=\u77F3\u69B4&callback=getResultList",document.body.appendChild(e);const t=document.createElement("script");return t.innerHTML=`
    function getResultList(res) {
        console.log("res", res)
    }
`,document.body.appendChild(t),(u,m)=>(o(),n(p,null,[l,r("h1",null,i(a.msg),1)],64))}};var f=s(_,[["__scopeId","data-v-7621ffcb"]]);export{f as default};
