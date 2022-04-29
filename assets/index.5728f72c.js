import{_ as o,r as c,o as r,c as a,a as n,t as d,F as p,b as i}from"./index.a4dac602.js";const _=i(" ABOUT "),l={props:{msg:String},setup(s){c(0);const e=document.createElement("script");e.src="http://t.weather.sojson.com/api/weather/city/101030100",document.body.appendChild(e);const t=document.createElement("script");return t.innerHTML=`
    function getResultList(res) {
        console.log("res", res)
    }
`,document.body.appendChild(t),(u,m)=>(r(),a(p,null,[_,n("h1",null,d(s.msg),1)],64))}};var h=o(l,[["__scopeId","data-v-7cd71d4a"]]);export{h as default};
