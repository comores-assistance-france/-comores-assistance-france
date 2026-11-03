"use strict";
const form=document.getElementById('contrib-form');if(form)form.addEventListener('submit',e=>{e.preventDefault();const message=document.getElementById('contrib-message').value.trim();const status=document.getElementById('contrib-status');if(message.length<10){status.textContent='Décrivez votre proposition en au moins dix caractères.';return;}
const recipient=document.getElementById('contrib-to').value;const to=recipient==='nassor'?'agreable46@gmail.com':'boinaidifaouilou91@gmail.com';const cc=recipient==='both'?'agreable46@gmail.com':'';const type=document.getElementById('contrib-type').value;
const url='mailto:'+to+'?'+(cc?'cc='+encodeURIComponent(cc)+'&':'')+'subject='+encodeURIComponent('Contribution CAF : '+type)+'&body='+encodeURIComponent('Bonjour,\n\n'+message+'\n\nMerci.');
status.textContent='Votre messagerie va s’ouvrir. Vérifiez le destinataire et le texte avant d’envoyer.';window.location.href=url;
});
