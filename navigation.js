"use strict";
(function(){const header=document.querySelector('.site-head .head-inner');if(!header)return;const nav=header.querySelector('nav');if(!nav)return;
nav.classList.add('main-nav');nav.id='navigation-principale';nav.replaceChildren();
const items=[['Démarches','des-comores-vers-la-france.html'],['Français','niveaux-francais.html'],['Examen civique','examen-civique.html'],['Participer','participer.html'],['Recherche','recherche.html'],['Contact','contact.html']];
for(const [name,href] of items){const a=document.createElement('a');a.href=href;a.textContent=name;if(location.pathname.split('/').pop()===href)a.setAttribute('aria-current','page');nav.append(a);}
const read=document.createElement('button');read.type='button';read.className='reading-toggle';read.textContent='Aa Texte +';read.setAttribute('aria-pressed','false');read.setAttribute('aria-label','Activer le mode lecture facile avec texte agrandi');read.addEventListener('click',()=>{const active=document.body.classList.toggle('reading-mode');read.setAttribute('aria-pressed',String(active));read.textContent=active?'Aa Texte normal':'Aa Texte +';});nav.append(read);
const btn=document.createElement('button');btn.type='button';btn.className='nav-toggle';btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-controls',nav.id);btn.textContent='☰ Menu';header.insertBefore(btn,nav);
btn.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');btn.setAttribute('aria-expanded',String(open));btn.textContent=open?'✕ Fermer':'☰ Menu';});
nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('is-open');btn.setAttribute('aria-expanded','false');btn.textContent='☰ Menu';}});
window.addEventListener('resize',()=>{if(window.innerWidth>800){nav.classList.remove('is-open');btn.setAttribute('aria-expanded','false');btn.textContent='☰ Menu';}});
})();
