function t(){return e=>new Promise((s,r)=>{fetch(`/assets/${e}.json`).then(n=>n.json()).then(n=>{n?s(n):r(new Error(`Error reading ${e}. Empty data`))}).catch(n=>r(n))})}export{t as u};
