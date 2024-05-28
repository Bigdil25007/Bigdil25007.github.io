import{_ as C,u as A,r as i,w,o as R,a as E,b as p,c as m,f as b,g as k,h as y,t as c,d as e,F as $,k as M,n as N,y as H,s as U,A as S,B as j,j as L,p as O,i as V}from"./index-JRHXcbEb.js";const B={fr:{home:{text:"Bilal Oulahal",link:"/fr"},links:[{name:"contacts",path:"/fr/#contact"},{name:"projets",path:"/fr/#projets"},{name:"compétences",path:"/fr/#competences"},{name:"parcours",path:"/fr/#parcours"},{name:"à propos de moi",path:"/fr/#about-me"}]},en:{home:{text:"Bilal Oulahal",link:"/en"},links:[{name:"contacts",path:"/en/#contact"},{name:"projects",path:"/en/#projets"},{name:"skills",path:"/en/#competences"},{name:"career",path:"/en/#parcours"},{name:"About me",path:"/en/#about-me"}]}},z={class:"nav"},D=200,G={__name:"Header",props:{noeffect:{type:Boolean,default:!1}},setup(a){const l=A(),t=i(B[l.params.lang]),r=i(t.value.home);w(()=>l.params.lang,o=>{t.value=B[o],r.value=t.value.home});const d=a,u=i(d.noeffect),h=i("");let s={};const v=o=>{const g=Object.keys(s);return g.find((f,n)=>{const _=s[f],P=s[g[n+1]]||1/0;return o>=_&&o<P})||""},x=()=>{const o=window.scrollY||document.documentElement.scrollTop||document.body.scrollTop;u.value=o>D,h.value=v(o)},q=o=>{const g=o.split("#").pop();return h.value===g?"current":""};return R(()=>{d.noeffect||(document.querySelectorAll(".anchor").forEach(o=>{s[o.id]=o.offsetTop}),window.addEventListener("scroll",x))}),(o,g)=>{const f=E("router-link");return p(),m("header",{class:N({opaque:u.value})},[b(f,{id:"boutonAccueil",to:r.value.link,title:r.value.text},{default:k(()=>[y(c(r.value.text),1)]),_:1},8,["to","title"]),e("ul",z,[(p(!0),m($,null,M(t.value.links,(n,_)=>(p(),m("li",{key:_},[b(f,{to:n.path,class:N(q(n.path))},{default:k(()=>[y(c(n.name),1)]),_:2},1032,["to","class"])]))),128))])],2)}}},we=C(G,[["__scopeId","data-v-cfe692c7"]]),Y=["id"],J={__name:"Anchor",props:{id:{type:String,required:!0},height:{type:String,default:"3.5rem"}},setup(a){return(l,t)=>(p(),m("div",{id:a.id,class:"anchor",style:H({height:a.height})},null,12,Y))}},T=a=>(O("data-v-f4cbd0af"),a=a(),V(),a),K={class:"input-field"},Q={for:"name"},W=T(()=>e("span",{class:"required"},"*",-1)),X=["placeholder"],Z={for:"email"},ee=T(()=>e("span",{class:"required"},"*",-1)),te=["placeholder"],ae={for:"sujet"},se=["placeholder"],ne={class:"send"},oe={for:"name"},le=T(()=>e("span",{class:"required"},"*",-1)),re=["placeholder","maxlength"],ie={class:"char-counter"},ce={key:0,class:"error"},ue={type:"submit"},de={__name:"Contact",props:{content:{type:Object,required:!0}},setup(a){const{content:l}=a,t=i(l.errors),r=i(l.placeholders),d=i(l.labels),u=i(""),h=i(""),s=i(""),v=i(""),x=i(""),q=async f=>{if(!u.value||!h.value||!s.value){g(t.value.fieldRequired);return}if(!o(h.value)){g(t.value.invalidEmail);return}try{(await fetch("api/submit-form",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nom:u.value,email:h.value,sujet:x.value,message:s.value})})).ok?alert(t.value.successMessage):g(t.value.apiError)}catch{g(t.value.apiError)}},o=f=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f),g=f=>{v.value=f,setTimeout(()=>{v.value=""},5e3)};return(f,n)=>(p(),m($,null,[b(J,{id:a.content.id,height:"1rem"},null,8,["id"]),e("section",null,[e("form",{onSubmit:U(q,["prevent"])},[e("div",K,[e("label",Q,[y(c(d.value.name),1),W]),S(e("input",{"onUpdate:modelValue":n[0]||(n[0]=_=>u.value=_),id:"name",type:"text",placeholder:r.value.name,maxlength:"50",required:""},null,8,X),[[j,u.value]]),e("label",Z,[y(c(d.value.email),1),ee]),S(e("input",{"onUpdate:modelValue":n[1]||(n[1]=_=>h.value=_),id:"email",type:"email",placeholder:r.value.email,maxlength:"70",required:""},null,8,te),[[j,h.value]]),e("label",ae,c(d.value.subject),1),S(e("input",{"onUpdate:modelValue":n[2]||(n[2]=_=>x.value=_),id:"sujet",type:"text",placeholder:r.value.subject,maxlength:"90"},null,8,se),[[j,x.value]])]),e("div",ne,[e("label",oe,[y(c(d.value.message),1),le]),S(e("textarea",{"onUpdate:modelValue":n[3]||(n[3]=_=>s.value=_),id:"message",placeholder:r.value.message,maxlength:a.content.charCounter,required:""},null,8,re),[[j,s.value]]),e("div",ie,c(s.value.length)+"/"+c(a.content.charCounter),1),v.value?(p(),m("span",ce,c(v.value),1)):L("",!0),e("button",ue,c(a.content.buttonText),1)])],32)])],64))}},pe=C(de,[["__scopeId","data-v-f4cbd0af"]]),me={class:"languages"},he=["src"],_e={__name:"ChangeLang",props:{path:{type:String,required:!0}},setup(a){const l=a,t=[{lang:"fr",img:"/lang/fr.jpg?url",path:"/fr"},{lang:"en",img:"/lang/en.jpg?url",path:"/en"}],r=d=>d+l.path.substring(3);return(d,u)=>{const h=E("router-link");return p(),m("div",me,[(p(),m($,null,M(t,s=>e("div",{class:"link",key:s.lang},[b(h,{to:r(s.path)},{default:k(()=>[e("img",{src:s.img},null,8,he)]),_:2},1032,["to"])])),64))])}}},ve=C(_e,[["__scopeId","data-v-0b73134d"]]),I={fr:{contactMe:"Contactez-moi !",copyright:"© Copyright 2024 - Bilal Oulahal. Tous droits réservés.",socialNetworks:[{name:"github",url:"https://github.com/Bigdil25007",icon:"/icons/github.png?url"},{name:"linkedin",url:"https://linkedin.com/in/bilal-oulahal",icon:"/icons/linkedin.png?url"}],mentionsLegales:{text:"Mentions légales",to:"/fr/mentions-legales"},planSite:{text:"Plan du site",to:"/fr/plan-site"},form:{id:"contact",placeholders:{name:"Nom",email:"Adresse e-mail",subject:"Objet",message:"Votre message"},labels:{name:"Nom et prénom",email:"Email",subject:"Objet",message:"Message"},errors:{fieldRequired:"Au moins un champ n'a pas été rempli.",invalidEmail:"L'adresse e-mail n'est pas valide.",apiError:"L'API pour stocker le formulaire ne peut pas être implémenté tant que le site est hébergé sur GitHub Pages."},successMessage:"Merci d'avoir rempli ce formulaire, je vous recontacterai dans les plus brefs délais",buttonText:"Me contacter",charCounter:2e3}},en:{contactMe:"Contact me!",copyright:"© Copyright 2024 - Bilal Oulahal. All rights reserved.",socialNetworks:[{name:"github",url:"https://github.com/Bigdil25007",icon:"/icons/github.png?url"},{name:"linkedin",url:"https://linkedin.com/in/bilal-oulahal",icon:"/icons/linkedin.png?url"}],mentionsLegales:{text:"Legal Notice",to:"/en/mentions-legales"},planSite:{text:"Site Map",to:"/en/plan-site"},form:{id:"contact",placeholders:{name:"Name",email:"Email address",subject:"Subject",message:"Your message"},labels:{name:"Full name",email:"Email",subject:"Subject",message:"Message"},errors:{fieldRequired:"At least one field has not been filled.",invalidEmail:"The email address is not valid.",apiError:"The API to store the form cannot be implemented while the site is hosted on GitHub Pages."},successMessage:"Thank you for filling this form, I will contact you as soon as possible.",buttonText:"Contact me",charCounter:2e3}}},F=a=>(O("data-v-403e8bd2"),a=a(),V(),a),ge={key:0,class:"contactSection"},fe=F(()=>e("div",{class:"barre"},null,-1)),be={class:"contacts"},ye=["href"],xe=["src"],ke={class:"subfooter"},Se={class:"pages"},je={class:"wrapper"},Ce=F(()=>e("span",null,"|",-1)),$e={__name:"Footer",props:{disableContact:{type:Boolean,default:!1}},setup(a){const l=A(),t=i(I[l.params.lang]),r=i(l.path);w(()=>l.params.lang,u=>{t.value=I[u]}),w(()=>l.path,u=>{r.value=u});const d=a;return(u,h)=>{const s=E("router-link");return p(),m("footer",null,[d.disableContact?L("",!0):(p(),m("div",ge,[e("span",null,c(t.value.contactMe),1),fe,b(pe,{content:t.value.form},null,8,["content"]),e("div",be,[(p(!0),m($,null,M(t.value.socialNetworks,v=>(p(),m("a",{key:v.name,href:v.url},[e("img",{src:v.icon},null,8,xe)],8,ye))),128))])])),e("div",ke,[b(ve,{path:r.value},null,8,["path"]),e("div",Se,[e("span",null,c(t.value.copyright),1),e("div",je,[b(s,{to:t.value.mentionsLegales.to},{default:k(()=>[y(c(t.value.mentionsLegales.text),1)]),_:1},8,["to"]),Ce,b(s,{to:t.value.planSite.to},{default:k(()=>[y(c(t.value.planSite.text),1)]),_:1},8,["to"])])])])])}}},Ee=C($e,[["__scopeId","data-v-403e8bd2"]]);export{Ee as F,we as H,J as _};