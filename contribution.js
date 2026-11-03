"use strict";
const form=document.getElementById('contrib-form');
if(form){
  const status=document.getElementById('contrib-status');
  const prepare=()=>{
    const message=document.getElementById('contrib-message').value.trim();
    if(message.length<10){status.textContent='Décrivez votre proposition en au moins dix caractères.';return null;}
    const page=document.getElementById('contrib-page').value.trim();
    const type=document.getElementById('contrib-type').value;
    const recipient=document.getElementById('contrib-to').value;
    const to=recipient==='nassor'?'agreable46@gmail.com':'boinaidifaouilou91@gmail.com';
    const cc=recipient==='both'?'agreable46@gmail.com':'';
    const body='Bonjour,\n\nType : '+type+(page?'\nPage concernée : '+page:'')+'\n\n'+message+'\n\nMerci.';
    return {to,cc,type,body};
  };
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const data=prepare();if(!data)return;
    const url='mailto:'+data.to+'?'+(data.cc?'cc='+encodeURIComponent(data.cc)+'&':'')+'subject='+encodeURIComponent('Contribution Comores Assistance France : '+data.type)+'&body='+encodeURIComponent(data.body);
    status.textContent='Votre messagerie va s’ouvrir. Vérifiez le message avant de l’envoyer. Si rien ne s’ouvre, utilisez « Copier mon message ».';
    window.location.href=url;
  });
  const copy=document.getElementById('contrib-copy');
  if(copy)copy.addEventListener('click',async()=>{
    const data=prepare();if(!data)return;
    const full='À : '+data.to+(data.cc?'\nCc : '+data.cc:'')+'\nObjet : Contribution Comores Assistance France : '+data.type+'\n\n'+data.body;
    try{
      if(!navigator.clipboard || !navigator.clipboard.writeText)throw new Error('Copie indisponible');
      await navigator.clipboard.writeText(full);
      status.textContent='Proposition copiée. Collez-la dans votre messagerie pour l’envoyer.';
    }catch(e){
      const area=document.getElementById('contrib-message');area.focus();area.select();
      status.textContent='Copie automatique indisponible : le texte de votre proposition est sélectionné. Copiez-le avec Ctrl+C (ou Copier sur mobile).';
    }
  });
}
