import{_ as a}from"./index.4cf16285.js";const c={setup(n){const e=document.createElement("script");e.src="https://baike.baidu.com/api/openapi/BaikeLemmaCardApi?appid=379020&bk_key=\u77F3\u69B4&callback=getResultList",document.body.appendChild(e);const t=document.createElement("script");return t.innerHTML=`
        function getResultList(res) {
            console.log("res", res)
        }
    `,document.body.appendChild(t),(o,p)=>"TIAnqi"}};var s=a(c,[["__scopeId","data-v-7ba65a60"]]);export{s as default};
