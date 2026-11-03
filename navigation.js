"use strict";
(function(){
 const header=document.querySelector('.site-head .head-inner');if(!header)return;const nav=header.querySelector('nav');if(!nav)return;
 nav.classList.add('main-nav');nav.id='navigation-principale';nav.replaceChildren();
 const items=[['Commencer ici','premiers-pas-france.html'],['Démarches','des-comores-vers-la-france.html'],['Français','niveaux-francais.html'],['Examen civique','examen-civique.html'],['Participer','participer.html'],['Recherche','recherche.html'],['Mes favoris','favoris.html'],['Contact','contact.html']];
 const current=location.pathname.split('/').pop()||'index.html';
 for(const [name,href] of items){const a=document.createElement('a');a.href=href;a.textContent=name;if(current===href)a.setAttribute('aria-current','page');nav.append(a);}
 const read=document.createElement('button');read.type='button';read.className='reading-toggle';read.setAttribute('aria-label','Activer ou désactiver le texte agrandi');
 function readingOn(){try{return sessionStorage.getItem('caf-reading-mode')==='on';}catch(_){return false;}}
 function updateReading(active){document.body.classList.toggle('reading-mode',active);read.setAttribute('aria-pressed',String(active));read.textContent=active?'Aa Texte normal':'Aa Texte +';}
 updateReading(readingOn());read.addEventListener('click',()=>{const active=!document.body.classList.contains('reading-mode');updateReading(active);try{sessionStorage.setItem('caf-reading-mode',active?'on':'off');}catch(_){}});nav.append(read);
 const btn=document.createElement('button');btn.type='button';btn.className='nav-toggle';btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-controls',nav.id);btn.textContent='☰ Menu';header.insertBefore(btn,nav);
 function closeMenu(){nav.classList.remove('is-open');btn.setAttribute('aria-expanded','false');btn.textContent='☰ Menu';}
 btn.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');btn.setAttribute('aria-expanded',String(open));btn.textContent=open?'✕ Fermer':'☰ Menu';});
 nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
 window.addEventListener('resize',()=>{if(window.innerWidth>1120)closeMenu();});
 document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
 const main=document.querySelector('main');
 if(main&&current!=='index.html'){
 const crumbs=document.createElement('nav');crumbs.className='site-breadcrumb wrap';crumbs.setAttribute('aria-label','Fil d’Ariane');
 const home=document.createElement('a');home.href='index.html';home.textContent='Accueil';
 const sep=document.createElement('span');sep.textContent=' › ';sep.setAttribute('aria-hidden','true');
 const last=document.createElement('span');last.setAttribute('aria-current','page');const title=document.title.split(' — ')[0];last.textContent=title;
 crumbs.append(home,sep,last);main.insertBefore(crumbs,main.firstChild);
 }
 const up=document.createElement('button');up.type='button';up.className='back-to-top';up.textContent='↑ Haut de page';up.setAttribute('aria-label','Revenir en haut de la page');up.hidden=true;document.body.append(up);
 function updateUp(){up.hidden=window.scrollY<420;}
 up.addEventListener('click',()=>{window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});});
 window.addEventListener('scroll',updateUp,{passive:true});updateUp();
})();
