import{a as t,u as r,R as l,j as s,b as h}from"./index-bb854515.js";function x({language:e}){var a;const n=t(),i=r(),o=(a=n.state)==null?void 0:a.job,c=()=>{i(-1)};return l.useEffect(()=>{o||i("/jobs")},[i,o]),o?s.jsxs("div",{className:"JobShowcase",children:[s.jsx("button",{className:"JobShowcase-goback",onClick:c,children:"< back"}),s.jsx("h2",{className:"Title",children:o.company}),s.jsxs("div",{className:"JobShowcase-content",children:[s.jsxs("div",{className:"Book Book_inverted",children:[s.jsx("h3",{className:"JobShowcase-position",children:o.position}),s.jsxs("p",{className:"JobShowcase-dateRange",children:[o.startDate," - ",o.endDate]}),s.jsx("p",{children:o.info[e].description})]}),s.jsx("div",{className:"Book",children:s.jsxs("div",{className:"JobShowcase-info",children:[s.jsxs("p",{children:["Technologies:",s.jsx("br",{}),o.technologies]}),s.jsxs("p",{children:["Responsibilities:",s.jsx("br",{}),o.info[e].responsibilities]}),s.jsxs("p",{children:["Team:",s.jsx("br",{}),o.info[e].team]}),o.info[e].extraInformation&&s.jsxs("p",{children:["Extra Information:",s.jsx("br",{}),o.info[e].extraInformation]})]})})]})]}):s.jsx(h,{})}export{x as default};
