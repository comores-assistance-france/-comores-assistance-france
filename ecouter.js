"use strict";
// Pas de reconnaissance vocale, de microphone, d'enregistrement ni d'envoi de données.
const phrases = ["Bonjour, je voudrais renouveler mon titre de séjour.", "Je ne comprends pas cette lettre. Pouvez-vous m’expliquer ?", "Je voudrais prendre rendez-vous avec un médecin.", "Je voudrais inscrire mon enfant à l’école.", "Je cherche du travail. Pouvez-vous m’aider ?"];
const status = document.getElementById('audio-status');
function stopAudio(){
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  status.textContent='Lecture arrêtée.';
}
document.querySelectorAll('[data-audio-fr]').forEach(button=>{
  button.addEventListener('click',()=>{
    if(!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)){
      status.textContent='La lecture vocale n’est pas disponible sur cet appareil.';
      return;
    }
    const index=Number(button.dataset.audioFr);
    const phrase=phrases[index];
    if(typeof phrase!=='string') return;
    window.speechSynthesis.cancel();
    const utterance=new SpeechSynthesisUtterance(phrase);
    utterance.lang='fr-FR';
    utterance.rate=Number(button.dataset.speed)||0.85;
    utterance.onstart=()=>{status.textContent='Lecture en cours : '+phrase;};
    utterance.onend=()=>{status.textContent='Lecture terminée. Vous pouvez répéter la phrase.';};
    utterance.onerror=()=>{status.textContent='Impossible de lire cette phrase sur cet appareil.';};
    window.speechSynthesis.speak(utterance);
  });
});
document.getElementById('audio-stop').addEventListener('click',stopAudio);
window.addEventListener('pagehide',()=>{if('speechSynthesis' in window)window.speechSynthesis.cancel();});
