'use strict';
// Les phrases proviennent directement du HTML. Aucune traduction shikomori automatique.
const practicalStatus=document.getElementById('practical-status');
document.querySelectorAll('[data-practical-speak]').forEach(button=>{
 button.addEventListener('click',()=>{
  const phrase=button.closest('.beginner-phrase')?.querySelector('.beginner-text')?.textContent?.trim();
  if(!phrase)return;
  if(!('speechSynthesis' in window)){
   if(practicalStatus)practicalStatus.textContent='La lecture vocale n’est pas disponible sur cet appareil.';
   return;
  }
  window.speechSynthesis.cancel();
  const utterance=new SpeechSynthesisUtterance(phrase);
  utterance.lang='fr-FR';
  utterance.rate=Number(button.dataset.rate)||.85;
  window.speechSynthesis.speak(utterance);
  if(practicalStatus)practicalStatus.textContent='Lecture : '+phrase;
 });
});
const answers=[1,0,1,1,0,1];
document.querySelectorAll('[data-practical-check]').forEach(button=>button.addEventListener('click',()=>{
 const quiz=button.closest('[data-practical-quiz]');
 const index=Number(button.dataset.practicalCheck);
 const checked=quiz?.querySelector('input:checked');
 const feedback=quiz?.querySelector('.beginner-feedback');
 if(!feedback)return;
 if(!checked){feedback.textContent='Choisissez une réponse.';return;}
 const ok=Number(checked.value)===answers[index];
 const labels=quiz.querySelectorAll('label');
 feedback.textContent=ok?'✓ Bonne réponse !':'À revoir. Bonne réponse : '+labels[answers[index]].textContent.trim();
 feedback.classList.toggle('life-correct',ok);
}));
document.getElementById('practical-stop')?.addEventListener('click',()=>{
 if('speechSynthesis' in window)window.speechSynthesis.cancel();
 if(practicalStatus)practicalStatus.textContent='Lecture arrêtée.';
});
