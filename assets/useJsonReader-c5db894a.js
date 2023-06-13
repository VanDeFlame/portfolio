function t(){return o=>new Promise((e,r)=>{fetch(`portfolio/assets/${o}.json`).then(n=>n.json()).then(n=>{n?e(n):r(new Error(`Error reading ${o}. Empty data`))}).catch(n=>r(n))})}export{t as u};
