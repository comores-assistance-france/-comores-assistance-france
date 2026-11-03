"use strict";
/* Favoris manuels : aucune page n'est enregistrée sans clic. */
(function(){
 const KEY='caf-guides-favoris-v1';
 const titles={"ame-soins.html":"AME : se soigner en France","atelier-shikomori.html":"20 phrases à traduire en shikomori","autres-demarches.html":"D’autres démarches à comprendre","caf.html":"CAF et aides familiales","courriers-administratifs.html":"Comprendre les courriers administratifs","des-comores-vers-la-france.html":"Des Comores vers la France","ecole.html":"École et vie familiale","ecouter.html":"Écouter, répéter, prendre confiance.","emploi.html":"France Travail et emploi","etudes-comores-france.html":"Étudier en France depuis les Comores","examen-civique.html":"Préparer l’examen civique","francais-debutant.html":"Apprendre le français depuis zéro.","francais-pratique.html":"Parler français dans la vie quotidienne","lecons-sejour.html":"Mieux comprendre la France, avancer ensemble.","logement.html":"Logement et démarches","mariage-comores-france.html":"Mariage aux Comores : quelles démarches pour vivre en France ?","mes-etapes.html":"Ma situation, mes premières étapes","niveaux-francais.html":"Le français en trois niveaux","parcours-demarches.html":"Ma situation, mes démarches","questions-frequentes.html":"Vos questions, des réponses simples","revision-civique.html":"Examen civique : réviser par thème","sante.html":"Assurance maladie et santé","services-ateliers.html":"Services et ateliers","soins-depuis-comores.html":"Venir en France pour recevoir des soins","titre-sejour.html":"Comprendre le titre de séjour et l’ANEF","travailler-depuis-comores.html":"Travailler en France depuis les Comores","vie-quotidienne.html":"La vie quotidienne en français facile","visite-familiale.html":"Inviter un proche des Comores"};
 const valid=new Set(Object.keys(titles));
 const current=location.pathname.split('/').pop()||'index.html';
 function load(){try{const value=JSON.parse(localStorage.getItem(KEY)||'[]');return Array.isArray(value)?value.filter(x=>typeof x==='string'&&valid.has(x)).filter((x,i,a)=>a.indexOf(x)===i):[];}catch(_){return [];}}
 function save(items){try{localStorage.setItem(KEY,JSON.stringify(items));return true;}catch(_){return false;}}
 function status(el,msg){el.textContent=msg;}
 if(valid.has(current)){
  const heading=document.querySelector('main h1');
  if(heading){
   const bar=document.createElement('div');bar.className='guide-actions';
   const favorite=document.createElement('button');favorite.type='button';favorite.className='guide-action';
   const share=document.createElement('button');share.type='button';share.className='guide-action';share.textContent='↗ Partager cette page';
   const link=document.createElement('a');link.href='favoris.html';link.className='guide-action';link.textContent='Voir mes favoris';
   const info=document.createElement('span');info.className='guide-action-status';info.setAttribute('role','status');info.setAttribute('aria-live','polite');
   function update(){const chosen=load().includes(current);favorite.textContent=chosen?'★ Retirer des favoris':'☆ Garder ce guide';favorite.setAttribute('aria-pressed',String(chosen));}
   favorite.addEventListener('click',()=>{const items=load();const chosen=items.includes(current);const next=chosen?items.filter(x=>x!==current):[...items,current];if(save(next)){update();status(info,chosen?'Guide retiré de vos favoris.':'Guide enregistré sur cet appareil.');}else status(info,'Enregistrement indisponible dans ce navigateur.');});
   share.addEventListener('click',async()=>{const url=new URL(current,location.href).href;
    try{if(navigator.share){await navigator.share({title:document.title,url});status(info,'Lien prêt à être partagé.');return;}
     if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(url);status(info,'Lien de cette page copié.');return;}}
    catch(e){if(e.name==='AbortError')return;}
    const field=document.createElement('input');field.type='text';field.readOnly=true;field.value=url;field.className='guide-copy-field';field.setAttribute('aria-label','Lien de la page à copier');info.replaceChildren(document.createTextNode('Sélectionnez puis copiez ce lien : '),field);field.focus();field.select();
   });
   bar.append(favorite,share,link,info);heading.insertAdjacentElement('afterend',bar);update();
  }
 }
 const list=document.getElementById('favorite-list');
 if(list){
  const count=document.getElementById('favorite-count');
  const clear=document.getElementById('favorite-clear');
  function render(){list.replaceChildren();const items=load();count.textContent=items.length?`${items.length} guide(s) enregistré(s) sur cet appareil.`:'Vous n’avez pas encore enregistré de guide.';clear.hidden=!items.length;
   if(!items.length){const p=document.createElement('p');p.textContent='Ouvrez un guide et choisissez « Garder ce guide » pour le retrouver ici.';list.append(p);return;}
   for(const id of items){const card=document.createElement('div');card.className='favorite-card';const a=document.createElement('a');a.href=id;a.textContent=titles[id];const b=document.createElement('button');b.type='button';b.className='guide-action';b.textContent='Retirer';b.setAttribute('aria-label','Retirer '+titles[id]);b.addEventListener('click',()=>{if(save(load().filter(x=>x!==id)))render();else count.textContent='Suppression indisponible dans ce navigateur.';});card.append(a,b);list.append(card);}
  }
  clear.addEventListener('click',()=>{if(save([]))render();else count.textContent='Suppression indisponible dans ce navigateur.';});render();
 }
})();
