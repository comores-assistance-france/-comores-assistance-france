"use strict";
// L'atelier n'envoie rien et ne conserve rien dans le navigateur.
const copyButton=document.getElementById('translation-copy');
const printButton=document.getElementById('translation-print');
const status=document.getElementById('translation-status');
function buildText(){
 const lines=['Comores Assistance France — propositions de traduction shikomori','Variante / relecture : à préciser',''];
 let filled=0;
 for(let i=1;i<=20;i++){
  const input=document.getElementById('sh-'+i),note=document.getElementById('note-'+i);
  if(!input)continue;
  const value=input.value.trim(),remark=note?.value.trim()||'';
  if(value)filled++;
  lines.push(String(i).padStart(2,'0')+'. FR : '+input.dataset.french);
  lines.push('   Shikomori : '+(value||'[à traduire]'));
  if(remark)lines.push('   Prononciation / remarque : '+remark);
  lines.push('');
 }
 return {text:lines.join('\n'),filled};
}
copyButton.addEventListener('click',async()=>{
 const {text,filled}=buildText();
 if(!filled){status.textContent='Écrivez au moins une traduction avant de copier.';return;}
 try{
  if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(text);}
  else{
   const temp=document.createElement('textarea');temp.value=text;temp.style.position='fixed';temp.style.opacity='0';document.body.append(temp);temp.select();
   const ok=document.execCommand('copy');temp.remove();if(!ok)throw new Error('Copie non disponible');
  }
  status.textContent=filled+' proposition(s) copiée(s). Collez-les dans un e-mail si vous souhaitez les transmettre.';
 }catch(_){status.textContent='La copie automatique est bloquée. Sélectionnez vos réponses et copiez-les manuellement.';}
});
printButton.addEventListener('click',()=>window.print());
