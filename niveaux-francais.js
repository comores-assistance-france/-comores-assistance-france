"use strict";
// Exercices pédagogiques non certifiants. Aucun compte ni transfert de données.
const frenchLessons = [
  {level:'A1',title:'Se présenter',emoji:'👋',phrases:['Bonjour, je m’appelle Amina.','Je viens des Comores.','J’habite à Marseille.'],question:'Comment dire son nom ?',choices:['Je m’appelle Amina.','Je cherche la gare.','Je suis en retard.'],answer:0,explain:'« Je m’appelle… » permet de se présenter.'},
  {level:'A1',title:'Demander de l’aide',emoji:'🤝',phrases:['Pouvez-vous m’aider, s’il vous plaît ?','Je ne comprends pas.','Pouvez-vous répéter lentement ?'],question:'Que dire si vous ne comprenez pas ?',choices:['Je ne comprends pas.','À demain.','J’ai faim.'],answer:0,explain:'On peut demander de répéter calmement.'},
  {level:'A1',title:'Prendre rendez-vous',emoji:'📅',phrases:['Je voudrais prendre rendez-vous.','C’est quel jour ?','À quelle heure dois-je venir ?'],question:'Quelle question permet de connaître l’heure ?',choices:['C’est où ?','À quelle heure dois-je venir ?','Comment vous appelez-vous ?'],answer:1,explain:'« À quelle heure ? » demande l’heure du rendez-vous.'},
  {level:'A2–B1',title:'Comprendre un justificatif',emoji:'📄',phrases:['Veuillez fournir un justificatif de domicile récent.','Je peux apporter une facture d’électricité.','Quelle est la date limite pour envoyer ce document ?'],question:'Que signifie « fournir un justificatif » ?',choices:['Prendre un médicament.','Présenter un document demandé.','Acheter un billet.'],answer:1,explain:'Un justificatif sert à prouver une information.'},
  {level:'A2–B1',title:'Signaler un changement',emoji:'🏠',phrases:['J’ai déménagé le mois dernier.','Je souhaite déclarer ma nouvelle adresse.','Pouvez-vous mettre mon dossier à jour ?'],question:'Quelle phrase annonce un déménagement ?',choices:['J’ai déménagé le mois dernier.','Je suis en vacances.','Je voudrais un café.'],answer:0,explain:'Déménager signifie changer de logement.'},
  {level:'A2–B1',title:'Parler à un recruteur',emoji:'💼',phrases:['Je cherche un poste de technicien informatique.','J’ai effectué un stage en entreprise.','Je suis disponible pour un entretien.'],question:'Que signifie « disponible pour un entretien » ?',choices:['Je ne veux pas travailler.','Je peux rencontrer le recruteur.','Je dois quitter la ville.'],answer:1,explain:'Un entretien permet d’échanger sur une candidature.'},
  {level:'B2+',title:'Rédiger une demande',emoji:'✉️',phrases:['Je me permets de vous contacter au sujet de mon dossier.','Je vous remercie de bien vouloir examiner ma demande.','Je reste à votre disposition pour tout renseignement complémentaire.'],question:'Quelle formule convient à une lettre administrative ?',choices:['Salut, ça va ?','Je vous remercie de bien vouloir examiner ma demande.','À plus !'],answer:1,explain:'Une demande administrative exige un ton clair et courtois.'},
  {level:'B2+',title:'Présenter des arguments',emoji:'🗣️',phrases:['Cette mesure présente plusieurs avantages.','Cependant, elle pourrait créer des difficultés.','Il serait donc préférable de prévoir une solution adaptée.'],question:'Quel mot introduit une opposition ?',choices:['Cependant','Donc','Également'],answer:0,explain:'« Cependant » marque une nuance ou une opposition.'},
  {level:'B2+',title:'Comprendre une décision',emoji:'⚖️',phrases:['Votre demande a été examinée au regard des pièces transmises.','Vous pouvez former un recours dans le délai indiqué.','Veuillez consulter les voies et délais de recours figurant dans la notification.'],question:'Que faut-il vérifier après une décision défavorable ?',choices:['La météo.','Les voies et délais de recours.','Le menu du restaurant.'],answer:1,explain:'La notification peut préciser comment et quand contester la décision.'},
  {"level": "A1", "title": "À la boulangerie", "emoji": "🥖", "phrases": ["Bonjour, je voudrais une baguette.", "C’est combien, s’il vous plaît ?", "Merci, au revoir !"], "dialogue": ["Client : Bonjour, je voudrais une baguette.", "Vendeuse : Bien sûr, voici votre baguette.", "Client : Merci, au revoir !"], "question": "Que veut acheter le client ?", "choices": ["Une baguette", "Un billet", "Un téléphone"], "answer": 0, "explain": "Le client demande une baguette."},
  {"level": "A1", "title": "Prendre le bus", "emoji": "🚌", "phrases": ["Où est l’arrêt de bus ?", "Ce bus va-t-il à la gare ?", "Je descends au prochain arrêt."], "dialogue": ["Voyageur : Excusez-moi, ce bus va-t-il à la gare ?", "Conductrice : Oui, descendez au troisième arrêt."], "question": "Où souhaite aller le voyageur ?", "choices": ["À l’hôpital", "À la gare", "À l’école"], "answer": 1, "explain": "Il demande si le bus va à la gare."},
  {"level": "A1", "title": "Chez le médecin", "emoji": "🩺", "phrases": ["J’ai mal à la tête.", "Je voudrais prendre rendez-vous.", "Depuis quand avez-vous mal ?"], "dialogue": ["Patient : Bonjour, j’ai mal à la tête.", "Médecin : Depuis quand avez-vous mal ?", "Patient : Depuis hier."], "question": "Depuis quand le patient a-t-il mal ?", "choices": ["Depuis hier", "Depuis un mois", "Depuis ce matin"], "answer": 0, "explain": "Le patient répond « Depuis hier »."},
  {"level": "A2–B1", "title": "Comprendre un rendez-vous", "emoji": "📆", "phrases": ["Votre rendez-vous est fixé au mardi 12 janvier à 10 heures.", "Merci de venir quinze minutes avant.", "Apportez votre convocation."], "dialogue": ["Accueil : Votre rendez-vous est à 10 heures.", "Visiteur : Dois-je arriver en avance ?", "Accueil : Oui, quinze minutes avant."], "question": "À quelle heure faut-il arriver pour un rendez-vous à 10 h ?", "choices": ["À 10 h 30", "À 9 h 45", "À 11 h"], "answer": 1, "explain": "Quinze minutes avant 10 heures, c’est 9 h 45."},
  {"level": "A2–B1", "title": "Expliquer un problème de logement", "emoji": "🔧", "phrases": ["Le chauffage ne fonctionne plus depuis deux jours.", "J’ai prévenu mon propriétaire par écrit.", "Pouvez-vous intervenir rapidement ?"], "dialogue": ["Locataire : Le chauffage ne fonctionne plus.", "Propriétaire : Depuis quand ?", "Locataire : Depuis deux jours."], "question": "Quel est le problème signalé ?", "choices": ["Une fuite de carburant", "Une panne de chauffage", "Une facture de téléphone"], "answer": 1, "explain": "Le chauffage est en panne."},
  {"level": "A2–B1", "title": "Comprendre une offre d’emploi", "emoji": "🧑‍💻", "phrases": ["Le poste est à temps plein.", "Une expérience en assistance informatique est souhaitée.", "Merci d’envoyer votre CV avant vendredi."], "dialogue": ["Recruteuse : Avez-vous déjà travaillé dans le support ?", "Candidat : Oui, j’ai effectué un stage de deux mois.", "Recruteuse : Merci, envoyez votre CV avant vendredi."], "question": "Quel document le candidat doit-il envoyer ?", "choices": ["Son CV", "Un billet de train", "Une ordonnance"], "answer": 0, "explain": "La recruteuse demande un CV."},
  {"level": "B2+", "title": "Argumenter dans une réunion", "emoji": "🗳️", "phrases": ["Je comprends cette proposition, mais j’aimerais soulever une difficulté.", "Nous devrions consulter les personnes concernées avant de décider.", "Un compromis permettrait de préserver le dialogue."], "dialogue": ["Membre A : Nous pouvons décider dès aujourd’hui.", "Membre B : Je propose de consulter les personnes concernées.", "Membre A : Nous pourrions organiser une consultation."], "question": "Quelle solution est proposée pour associer les personnes concernées ?", "choices": ["Une consultation", "Une décision secrète", "Une annulation automatique"], "answer": 0, "explain": "Le dialogue suggère d’organiser une consultation."},
  {"level": "B2+", "title": "Comprendre un courrier complexe", "emoji": "📬", "phrases": ["À défaut de réponse dans le délai indiqué, votre demande pourrait être classée sans suite.", "Veuillez transmettre les justificatifs complémentaires demandés.", "Conservez une copie de vos échanges."], "dialogue": ["Agent : Il manque une pièce justificative à votre dossier.", "Demandeur : Puis-je l’envoyer par le canal indiqué dans le courrier ?", "Agent : Oui, avant la date limite mentionnée."], "question": "Quelle information est essentielle dans le courrier ?", "choices": ["La couleur de l’enveloppe", "La date limite et les pièces demandées", "Le nom du facteur"], "answer": 1, "explain": "Il faut repérer les pièces à fournir et les délais applicables."},
  {"level": "B2+", "title": "Présenter un projet collectif", "emoji": "🌍", "phrases": ["Notre initiative vise à faciliter l’accès à une information fiable.", "Les bénévoles pourront proposer des corrections et des traductions.", "Chaque contribution sera relue avant publication."], "dialogue": ["Coordinatrice : Comment garantir la qualité des contenus ?", "Bénévole : En vérifiant les sources et en faisant relire les traductions.", "Coordinatrice : Très bien, ajoutons une étape de validation."], "question": "Comment l’équipe souhaite-t-elle assurer la fiabilité ?", "choices": ["En publiant sans vérifier", "En vérifiant les sources et les traductions", "En supprimant les retours des visiteurs"], "answer": 1, "explain": "La vérification et la relecture sont nécessaires."}
,
{"level": "A1", "title": "À la pharmacie", "emoji": "💊", "phrases": ["Bonjour, je cherche une pharmacie.", "Je voudrais parler au pharmacien.", "Merci pour votre aide."], "dialogue": ["Client : Bonjour, où est la pharmacie ?", "Passante : Elle est près de la mairie."], "question": "Où se trouve la pharmacie ?", "choices": ["Près de la mairie", "Dans le train", "À la plage"], "answer": 0, "explain": "La passante indique la mairie."},
{"level": "A1", "title": "À l’école", "emoji": "🎒", "phrases": ["Mon enfant est inscrit à l’école.", "À quelle heure commence la classe ?", "Je voudrais rencontrer l’enseignante."], "dialogue": ["Parent : À quelle heure commence la classe ?", "Agent : À huit heures trente."], "question": "À quelle heure commence la classe ?", "choices": ["À 10 h", "À 8 h 30", "À 15 h"], "answer": 1, "explain": "L’agent répond huit heures trente."},
{"level": "A2–B1", "title": "Téléphoner à un service", "emoji": "📞", "phrases": ["Je vous appelle au sujet de mon dossier.", "Pouvez-vous m’indiquer les horaires d’accueil ?", "Je vous remercie pour ces renseignements."], "dialogue": ["Usager : Puis-je venir sans rendez-vous ?", "Agent : Non, il faut réserver un créneau."], "question": "Que doit faire l’usager ?", "choices": ["Prendre rendez-vous", "Venir à minuit", "Envoyer un colis"], "answer": 0, "explain": "L’agent demande de réserver un créneau."},
{"level": "A2–B1", "title": "Décrire une expérience", "emoji": "🧑‍🔧", "phrases": ["J’ai effectué un stage de six semaines.", "J’ai appris à résoudre des problèmes techniques.", "Cette expérience m’a donné confiance."], "dialogue": ["Recruteur : Qu’avez-vous appris pendant le stage ?", "Candidat : J’ai appris à aider les utilisateurs."], "question": "Que décrit le candidat ?", "choices": ["Un voyage", "Une expérience professionnelle", "Un repas"], "answer": 1, "explain": "Il parle de son expérience de stage."},
{"level": "B2+", "title": "Écrire une réclamation courtoise", "emoji": "📝", "phrases": ["Je souhaite signaler une difficulté rencontrée lors de ma démarche.", "Je joins les éléments utiles à la compréhension de ma demande.", "Je vous remercie de m’indiquer les suites qui pourront y être données."], "dialogue": ["Usager : Mon dossier semble incomplet, pourtant j’ai transmis les pièces.", "Agent : Merci de nous préciser la date d’envoi."], "question": "Quelle information demande l’agent ?", "choices": ["La date d’envoi", "Le prix du bus", "Le nom du maire"], "answer": 0, "explain": "La date d’envoi permet de retrouver l’échange."},
{"level": "B2+", "title": "Comparer deux propositions", "emoji": "⚖️", "phrases": ["La première proposition est plus rapide, mais elle coûte davantage.", "La seconde demande plus de temps, en revanche elle est moins chère.", "Nous devons examiner les conséquences de chaque choix."], "dialogue": ["Membre A : La première solution est rapide.", "Membre B : La seconde est plus économique."], "question": "Quelle nuance exprime le dialogue ?", "choices": ["Vitesse et coût", "Couleur et forme", "Sport et météo"], "answer": 0, "explain": "Les deux propositions ont des avantages différents."}
];
const byId = id => document.getElementById(id);
const levelsEl=byId('french-levels'), lessonEl=byId('french-lesson'), statusEl=byId('french-status');
const saveEl=byId('french-save');
const storageKey='caf-francais-progression-v1';
let completed = new Set(), activeLevel='A1', activeIndex=0;
function setStatus(message){statusEl.textContent=message;}
function safeStorage(operation){try{return operation();}catch(_){setStatus('Le stockage local est indisponible sur cet appareil.');return null;}}
function saveIfEnabled(){if(saveEl.checked)safeStorage(()=>localStorage.setItem(storageKey,JSON.stringify([...completed])));}
function speak(text,rate){
 if(!('speechSynthesis' in window)||!('SpeechSynthesisUtterance' in window)){setStatus('La lecture vocale n’est pas disponible sur cet appareil.');return;}
 window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='fr-FR';u.rate=rate;
 u.onerror=()=>setStatus('La lecture vocale ne fonctionne pas sur cet appareil.');
 window.speechSynthesis.speak(u);setStatus('Lecture de la phrase en français.');
}
function renderLevels(){
 levelsEl.replaceChildren();
 for(const level of ['A1','A2–B1','B2+']){
  const btn=document.createElement('button');btn.type='button';btn.className='french-level-btn';btn.setAttribute('aria-pressed',String(level===activeLevel));
  btn.textContent=level+' — '+(level==='A1'?'Débutant':level==='A2–B1'?'Intermédiaire':'Avancé');
  btn.addEventListener('click',()=>{activeLevel=level;activeIndex=frenchLessons.findIndex(x=>x.level===level);renderLevels();renderLesson();});levelsEl.append(btn);
 }
}
function renderLesson(){
 const data=frenchLessons[activeIndex];lessonEl.replaceChildren();setStatus('Progression : '+completed.size+' leçon(s) réussie(s) sur '+frenchLessons.length+'.');
 const h=document.createElement('h2');h.textContent=data.emoji+' '+data.title;lessonEl.append(h);
 const nav=document.createElement('div');nav.className='french-lesson-nav';
 for(const [index,lesson] of frenchLessons.entries())if(lesson.level===activeLevel){
  const btn=document.createElement('button');btn.type='button';btn.className='secondary-btn';btn.textContent=(completed.has(index)?'✓ ':'')+lesson.title;btn.setAttribute('aria-pressed',String(index===activeIndex));
  btn.addEventListener('click',()=>{activeIndex=index;renderLesson();});nav.append(btn);
 }
 lessonEl.append(nav);
 const intro=document.createElement('p');intro.textContent='Écoutez les phrases puis choisissez la bonne réponse.';lessonEl.append(intro);
 for(const phrase of data.phrases){
  const row=document.createElement('div');row.className='french-phrase-row';
  const span=document.createElement('span');span.textContent=phrase;row.append(span);
  for(const [label,rate] of [['Écouter',0.9],['Lentement',0.7]]){
   const btn=document.createElement('button');btn.type='button';btn.className='listen';btn.textContent=label;btn.setAttribute('aria-label',label+' : '+phrase);
   btn.addEventListener('click',()=>speak(phrase,rate));row.append(btn);
  }lessonEl.append(row);
 }
 if(Array.isArray(data.dialogue)){
  const dialogueTitle=document.createElement('h3');dialogueTitle.textContent='Petit dialogue à comprendre';lessonEl.append(dialogueTitle);
  const dialogue=document.createElement('div');dialogue.className='french-dialogue';
  for(const line of data.dialogue){const text=document.createElement('p');text.textContent=line;dialogue.append(text);}
  const listenDialogue=document.createElement('button');listenDialogue.type='button';listenDialogue.className='listen';listenDialogue.textContent='Écouter le dialogue';
  listenDialogue.addEventListener('click',()=>speak(data.dialogue.join(' '),0.82));dialogue.append(listenDialogue);lessonEl.append(dialogue);
 }
 const dict=document.createElement('section');dict.className='dictation-box';const dh=document.createElement('h3');dh.textContent='Écouter et écrire';dict.append(dh);const help=document.createElement('p');help.textContent='Écoutez la première phrase puis essayez de l’écrire. Vous pouvez vérifier sans microphone.';dict.append(help);
 const listen=document.createElement('button');listen.type='button';listen.className='listen';listen.textContent='🔊 Écouter la dictée';listen.addEventListener('click',()=>speak(data.phrases[0],0.8));dict.append(listen);
 const inp=document.createElement('input');inp.type='text';inp.autocomplete='off';inp.setAttribute('aria-label','Écrire la phrase entendue');inp.placeholder='Écrivez ce que vous entendez…';dict.append(inp);
 const verify=document.createElement('button');verify.type='button';verify.className='secondary-btn';verify.textContent='Vérifier la dictée';dict.append(verify);
 const df=document.createElement('p');df.setAttribute('role','status');dict.append(df);verify.addEventListener('click',()=>{const norm=x=>x.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();if(!inp.value.trim()){df.textContent='Écrivez d’abord une proposition.';return;}df.textContent=norm(inp.value)===norm(data.phrases[0])?'Bravo, la phrase est correcte !':'À comparer avec : « '+data.phrases[0]+' »';});lessonEl.append(dict);
 const field=document.createElement('fieldset');field.className='french-quiz';
 const legend=document.createElement('legend');legend.textContent=data.question;field.append(legend);
 data.choices.forEach((choice,index)=>{const label=document.createElement('label');label.className='french-answer';
  const radio=document.createElement('input');radio.type='radio';radio.name='french-answer';radio.value=String(index);label.append(radio,document.createTextNode(' '+choice));field.append(label);
 });lessonEl.append(field);
 const check=document.createElement('button');check.type='button';check.className='primary-btn';check.textContent='Vérifier ma réponse';lessonEl.append(check);
 const feedback=document.createElement('p');feedback.setAttribute('role','status');feedback.setAttribute('aria-live','polite');lessonEl.append(feedback);
 check.addEventListener('click',()=>{
  const selected=field.querySelector('input:checked');if(!selected){feedback.textContent='Choisissez une réponse.';return;}
  const success=Number(selected.value)===data.answer;
  feedback.textContent=(success?'Bravo ! ':'Pas encore. ')+data.explain;
  if(success){completed.add(activeIndex);saveIfEnabled();renderLevels();}
 });
 const next=document.createElement('button');next.type='button';next.className='secondary-btn';next.textContent='Leçon suivante →';
 next.addEventListener('click',()=>{const current=frenchLessons.findIndex(x=>x.level===activeLevel&&x===data);const options=frenchLessons.map((x,i)=>x.level===activeLevel?i:-1).filter(i=>i>=0);activeIndex=options[(options.indexOf(current)+1)%options.length];renderLesson();});lessonEl.append(next);
}
byId('french-restore').addEventListener('click',()=>{
 const raw=safeStorage(()=>localStorage.getItem(storageKey));if(!raw){setStatus('Aucune progression enregistrée sur cet appareil.');return;}
 try{const data=JSON.parse(raw);if(!Array.isArray(data))throw Error();completed=new Set(data.filter(n=>Number.isInteger(n)&&n>=0&&n<frenchLessons.length));saveEl.checked=true;renderLevels();renderLesson();setStatus(completed.size+' exercice(s) réussi(s) retrouvé(s).');}
 catch(_){setStatus('La progression enregistrée est illisible.');}
});
byId('french-reset').addEventListener('click',()=>{completed.clear();saveEl.checked=false;safeReset();renderLevels();renderLesson();setStatus('Progression effacée sur cet appareil.');});
function safeReset(){safeStorage(()=>localStorage.removeItem(storageKey));}
saveEl.addEventListener('change',()=>{if(saveEl.checked){saveIfEnabled();setStatus('Enregistrement local activé. Évitez cette option sur un appareil partagé.');}else{safeStorage(()=>localStorage.removeItem(storageKey));setStatus('Enregistrement désactivé et données locales effacées.');}});
window.addEventListener('pagehide',()=>{if('speechSynthesis' in window)window.speechSynthesis.cancel();});
renderLevels();renderLesson();
