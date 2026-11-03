"use strict";
const themeEl=document.getElementById('pratique-theme');
const exerciseEl=document.getElementById('pratique-exercice');
const statusEl=document.getElementById('pratique-status');
const scoreEl=document.getElementById('pratique-score');
const startEl=document.getElementById('pratique-start');
const nextEl=document.getElementById('pratique-next');
const restartEl=document.getElementById('pratique-restart');
let questions=[],current=0,correct=0,answered=false;
const themes=[...new Set(situationsFrancais.map(q=>q.theme))];
for(const t of themes){const opt=document.createElement('option');opt.value=t;opt.textContent=t;themeEl.append(opt);}
function say(text){if(!('speechSynthesis' in window)){statusEl.textContent='La lecture vocale n’est pas disponible sur cet appareil.';return;}speechSynthesis.cancel();const utterance=new SpeechSynthesisUtterance(text);utterance.lang='fr-FR';utterance.rate=.85;speechSynthesis.speak(utterance);}
function render(){answered=false;exerciseEl.replaceChildren();const q=questions[current];scoreEl.textContent='Question '+(current+1)+' sur '+questions.length+' · '+correct+' bonne(s) réponse(s)';
const h=document.createElement('h2');h.textContent=q.title;const context=document.createElement('p');context.textContent=q.context;const question=document.createElement('h3');question.textContent=q.question;exerciseEl.append(h,context,question);
const field=document.createElement('fieldset');field.className='french-quiz';const legend=document.createElement('legend');legend.textContent='Choisissez une réponse';field.append(legend);
q.choices.forEach((answer,i)=>{const label=document.createElement('label');label.className='french-answer';const radio=document.createElement('input');radio.type='radio';radio.name='pratique-answer';radio.value=String(i);label.append(radio,document.createTextNode(' '+answer));field.append(label);});exerciseEl.append(field);
const check=document.createElement('button');check.type='button';check.className='primary-btn';check.textContent='Vérifier ma réponse';exerciseEl.append(check);
const feedback=document.createElement('p');feedback.setAttribute('role','status');feedback.setAttribute('aria-live','polite');exerciseEl.append(feedback);
check.addEventListener('click',()=>{if(answered)return;const selected=field.querySelector('input:checked');if(!selected){feedback.textContent='Choisissez une réponse avant de vérifier.';return;}answered=true;const ok=Number(selected.value)===q.answer;if(ok)correct++;feedback.textContent=(ok?'✓ Bravo ! ':'À revoir. Bonne réponse : '+q.choices[q.answer]+'. ')+q.explain;check.disabled=true;field.querySelectorAll('input').forEach(i=>i.disabled=true);
const listen=document.createElement('button');listen.type='button';listen.className='secondary-btn';listen.textContent='🔊 Écouter la phrase utile';listen.addEventListener('click',()=>say(q.phrase));exerciseEl.append(listen);scoreEl.textContent='Question '+(current+1)+' sur '+questions.length+' · '+correct+' bonne(s) réponse(s)';nextEl.hidden=false;nextEl.textContent=current===questions.length-1?'Voir mon résultat':'Question suivante →';});
}
function start(){questions=situationsFrancais.filter(q=>q.theme===themeEl.value);current=0;correct=0;themeEl.disabled=true;startEl.hidden=true;restartEl.hidden=false;nextEl.hidden=true;exerciseEl.hidden=false;statusEl.textContent='';render();}
function next(){if(!answered)return;if(current+1===questions.length){exerciseEl.hidden=true;nextEl.hidden=true;statusEl.textContent='Résultat : '+correct+' / '+questions.length+'. Vous pouvez recommencer ou choisir un autre thème. Aucun résultat n’est envoyé ni enregistré.';return;}current++;nextEl.hidden=true;render();}
function reset(){themeEl.disabled=false;startEl.hidden=false;restartEl.hidden=true;nextEl.hidden=true;exerciseEl.hidden=true;exerciseEl.replaceChildren();scoreEl.textContent='';statusEl.textContent='Choisissez un thème puis commencez.';}
startEl.addEventListener('click',start);nextEl.addEventListener('click',next);restartEl.addEventListener('click',reset);window.addEventListener('pagehide',()=>{'speechSynthesis' in window&&speechSynthesis.cancel();});reset();
