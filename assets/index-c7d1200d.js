import{a as n,u as i,R as l,j as e,b as j}from"./index-76aec75c.js";function d({language:c}){var t;const a=n(),o=i(),s=(t=a.state)==null?void 0:t.project,r=()=>{o(-1)};return l.useEffect(()=>{s||o("/projects")},[o,s]),s?e.jsxs("div",{className:"ProjectShowcase",children:[e.jsx("button",{className:"ProjectShowcase-goback",onClick:r,children:"< back"}),e.jsx("h2",{className:"Title",children:s.title}),e.jsxs("div",{className:"ProjectShowcase-content",children:[e.jsx("div",{className:"Book Book_inverted",children:e.jsx("p",{children:s.description[c]})}),e.jsxs("div",{className:"Book",children:[e.jsxs("p",{children:["Technologies:",e.jsx("br",{}),s.technologies]}),e.jsxs("div",{className:"ProjectShowcase-buttons",children:[s.implementation&&e.jsx("a",{className:"Button",target:"_blank",rel:"noopener noreferrer",href:s.implementation,children:"View"}),s.repository&&e.jsx("a",{className:"Button",target:"_blank",rel:"noopener noreferrer",href:s.repository,children:"Repository"})]})]})]})]}):e.jsx(j,{})}export{d as default};
