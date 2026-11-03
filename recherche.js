"use strict";
const input=document.getElementById('query'),list=document.getElementById('search-results'),count=document.getElementById('search-count');
const normalize=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const params=new URLSearchParams(location.search);input.value=(params.get('q')||'').slice(0,120);
function render(){const terms=normalize(input.value).trim().split(/\s+/).filter(Boolean);list.replaceChildren();if(!terms.length){count.textContent='Saisissez un mot pour trouver une page.';return;}
 const matches=searchPages.map(p=>{const title=normalize(p.title),text=normalize(p.desc+' '+p.keywords);const all=title+' '+text;const ok=terms.every(term=>all.includes(term));const score=terms.reduce((s,t)=>s+(title.includes(t)?5:0)+(text.includes(t)?1:0),0);return {...p,ok,score};}).filter(p=>p.ok).sort((a,b)=>b.score-a.score);
 count.textContent=matches.length+' résultat(s) trouvé(s).';if(!matches.length){const x=document.createElement('p');x.textContent='Aucun résultat. Essayez un mot plus simple, par exemple « santé » ou « visa ».';list.append(x);return;}
 matches.forEach(p=>{const a=document.createElement('a');a.className='search-hit';a.href=p.url;const h=document.createElement('strong');h.textContent=p.title;const d=document.createElement('span');d.textContent=p.desc||'Ouvrir cette page du site.';const go=document.createElement('span');go.className='portal-arrow';go.textContent='Ouvrir →';a.append(h,d,go);list.append(a);});}
document.getElementById('site-search').addEventListener('submit',e=>{e.preventDefault();history.replaceState(null,'','recherche.html?q='+encodeURIComponent(input.value));render();});render();
