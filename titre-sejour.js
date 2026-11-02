"use strict";
// Aucun stockage, aucune transmission : l’état de la liste reste dans cette page.
document.querySelectorAll('[data-speak]').forEach(button=>button.addEventListener('click',()=>{
 if(!('speechSynthesis' in window)){window.alert('Lecture vocale indisponible sur cet appareil.');return;}
 window.speechSynthesis.cancel(); const phrase=new SpeechSynthesisUtterance(button.dataset.speak);
 phrase.lang='fr-FR'; phrase.rate=.85; window.speechSynthesis.speak(phrase);
}));
const checks=[...document.querySelectorAll('.anef-checklist input[type="checkbox"]')];
const progress=document.getElementById('anef-progress');
function updateProgress(){const count=checks.filter(x=>x.checked).length;progress.textContent=`${count} étape${count>1?'s':''} sur ${checks.length} cochée${count>1?'s':''}.`;}
checks.forEach(x=>x.addEventListener('change',updateProgress));
document.getElementById('anef-reset').addEventListener('click',()=>{checks.forEach(x=>x.checked=false);updateProgress();});
document.querySelectorAll('.life-quiz').forEach(form=>form.addEventListener('submit',event=>{
 event.preventDefault();const selected=form.querySelector('input[name="answer"]:checked');const feedback=form.querySelector('.life-feedback');
 if(!selected){feedback.textContent='Choisissez une réponse avant de vérifier.';return;}
 const ok=selected.value===form.dataset.correct;
 feedback.textContent=ok?'✓ Bonne réponse !':'À revoir : '+form.dataset.explain+'.';feedback.classList.toggle('life-correct',ok);
}));
