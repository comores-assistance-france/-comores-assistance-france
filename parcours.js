"use strict";
(function(){
  const boutons = document.querySelectorAll('[data-speak]');
  boutons.forEach(b => b.addEventListener('click', () => {
    if (!('speechSynthesis' in window)) { b.textContent = 'Lecture vocale indisponible'; return; }
    window.speechSynthesis.cancel();
    const phrase = new SpeechSynthesisUtterance(b.dataset.speak || '');
    phrase.lang = 'fr-FR'; phrase.rate = 0.88;
    window.speechSynthesis.speak(phrase);
  }));
})();
