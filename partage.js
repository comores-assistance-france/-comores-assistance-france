"use strict";
const copyLinkButton=document.getElementById('copy-site-link');
if(copyLinkButton)copyLinkButton.addEventListener('click',async()=>{
  const url='https://comores-assistance-france.github.io/-comores-assistance-france/';
  const status=document.getElementById('share-status');
  try{
    if(!navigator.clipboard || !navigator.clipboard.writeText)throw new Error('Copie indisponible');
    await navigator.clipboard.writeText(url);
    status.textContent='Lien copié ! Vous pouvez le coller dans un message.';
  }catch(e){
    status.textContent='Sélectionnez et copiez ce lien : '+url;
  }
});
