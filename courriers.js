"use strict";
document.querySelectorAll('[data-speak]').forEach(button => {
  button.addEventListener('click', () => {
    if (!('speechSynthesis' in window)) { alert('La lecture vocale n’est pas disponible dans ce navigateur.'); return; }
    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(button.dataset.speak);
    speech.lang = 'fr-FR'; speech.rate = 0.83;
    window.speechSynthesis.speak(speech);
  });
});
const check = document.getElementById('letter-check');
check?.addEventListener('click', () => {
  const choice = document.querySelector('input[name="courrier-quiz"]:checked');
  const result = document.getElementById('letter-result');
  if (!choice) { result.textContent = 'Choisissez une réponse avant de vérifier.'; return; }
  result.textContent = choice.value === 'b' ? 'Bravo ! Vérifiez aussi les documents demandés.' : 'Essaie encore : une convocation donne les informations d’un rendez-vous.';
});
