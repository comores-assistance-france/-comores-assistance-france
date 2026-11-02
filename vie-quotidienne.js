"use strict";
// Lecture vocale française uniquement, pas de traduction automatique en shikomori.
document.querySelectorAll('[data-speak]').forEach(button=>button.addEventListener('click',()=>{
 if(!('speechSynthesis' in window)){window.alert('La lecture vocale n’est pas disponible sur cet appareil.');return;}
 window.speechSynthesis.cancel();const speech=new SpeechSynthesisUtterance(button.dataset.speak);
 speech.lang='fr-FR';speech.rate=.85;window.speechSynthesis.speak(speech);
}));
document.querySelectorAll('.life-quiz').forEach(form=>form.addEventListener('submit',event=>{
 event.preventDefault();const chosen=form.querySelector('input[name="answer"]:checked');const feedback=form.querySelector('.life-feedback');
 if(!chosen){feedback.textContent='Choisissez une réponse avant de vérifier.';return;}
 const ok=chosen.value===form.dataset.correct;
 feedback.textContent=ok?'✓ Bonne réponse !':'À revoir. La bonne réponse est : '+form.dataset.explain+'.';
 feedback.classList.toggle('life-correct',ok);
}));
