"use strict";
// Exercices locaux : aucune collecte, aucun micro, aucun transfert de données.
const lessons = [{"phrases": ["Bonjour !", "Je m’appelle Amina.", "Merci beaucoup.", "Au revoir !"], "correct": 1, "explanation": "« Merci beaucoup » sert à remercier."}, {"phrases": ["Zéro, un, deux, trois.", "Quatre, cinq, six.", "Sept, huit, neuf, dix.", "J’ai deux enfants."], "correct": 1, "explanation": "Après six vient sept."}, {"phrases": ["Lundi, mardi, mercredi.", "Jeudi, vendredi.", "Samedi, dimanche.", "J’ai rendez-vous lundi."], "correct": 0, "explanation": "Après mardi vient mercredi."}, {"phrases": ["Je voudrais un rendez-vous, s’il vous plaît.", "C’est quel jour ?", "C’est à quelle heure ?", "Pouvez-vous répéter, s’il vous plaît ?"], "correct": 1, "explanation": "« C’est à quelle heure ? » sert à demander l’heure."}, {"phrases": ["Je ne comprends pas.", "Parlez plus lentement, s’il vous plaît.", "Pouvez-vous m’aider ?", "Où est l’accueil ?"], "correct": 0, "explanation": "Demander de parler plus lentement peut aider à mieux comprendre."}];
const status = document.getElementById('beginner-status');
document.querySelectorAll('[data-speak]').forEach(button=>button.addEventListener('click',()=>{
  if(!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)){
    status.textContent='La lecture vocale n’est pas disponible sur cet appareil.';return;
  }
  const [li,pi]=button.dataset.speak.split('-').map(Number);
  const phrase=lessons[li]?.phrases[pi]; if(!phrase)return;
  window.speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(phrase);u.lang='fr-FR';u.rate=Number(button.dataset.rate)||0.85;
  u.onstart=()=>{status.textContent='Lecture en cours : '+phrase;};
  u.onend=()=>{status.textContent='Lecture terminée. Répétez la phrase à voix haute.';};
  u.onerror=()=>{status.textContent='Impossible de lire cette phrase sur cet appareil.';};
  window.speechSynthesis.speak(u);
}));
document.querySelectorAll('[data-check]').forEach(button=>button.addEventListener('click',()=>{
  const i=Number(button.dataset.check), quiz=button.closest('.beginner-quiz');
  const selected=quiz.querySelector('input:checked'), feedback=quiz.querySelector('.beginner-feedback');
  if(!selected){feedback.textContent='Choisissez une réponse avant de vérifier.';return;}
  feedback.textContent=(Number(selected.value)===lessons[i].correct?'Bravo ! ':'Pas encore. ')+lessons[i].explanation;
}));
document.getElementById('beginner-stop').addEventListener('click',()=>{
  if('speechSynthesis' in window)window.speechSynthesis.cancel();status.textContent='Lecture arrêtée.';
});
window.addEventListener('pagehide',()=>{if('speechSynthesis' in window)window.speechSynthesis.cancel();});
