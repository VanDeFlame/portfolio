import{r,_ as i,j as e,T as o}from"./index-9d69718e.js";const x=r.lazy(()=>i(()=>import("./ProfileEn-26d41cf0.js"),["assets/ProfileEn-26d41cf0.js","assets/index-9d69718e.js","assets/index-86ca08e5.css"])),c=r.lazy(()=>i(()=>import("./ProfileEs-bec76d8e.js"),["assets/ProfileEs-bec76d8e.js","assets/index-9d69718e.js","assets/index-86ca08e5.css"]));function n({lang:t}){return t==="en"?e.jsx(x,{}):e.jsx(c,{})}function l({language:t,assetsFolder:s}){return e.jsxs("div",{className:"AboutMe",children:[e.jsx("h2",{className:"Title",children:"About Me"}),e.jsxs("ul",{className:"AboutMe-effects",children:[e.jsx("li",{children:e.jsx(o,{text:"Van de Flame",subtext:"Alexis Jauge",src:s+"/name_tag.webp"})}),e.jsxs("li",{children:[t==="en"&&e.jsx(o,{text:"20 y/o",subtext:"August 27th",src:s+"/cake.webp"}),t==="es"&&e.jsx(o,{text:"20 años",subtext:"27 de Agosto",src:s+"/cake.webp"})]}),e.jsx("li",{children:e.jsx(o,{text:"Argentina",subtext:"Río Negro",src:s+"/compass.webp"})})]}),e.jsx(n,{lang:t})]})}export{l as default};