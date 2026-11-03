"use strict";
const situationsFrancais = [
  {
    "theme": "Courses et transports",
    "title": "À la boulangerie",
    "context": "La vendeuse demande : « Vous désirez autre chose ? »",
    "question": "Que répond-on si on a terminé ?",
    "choices": [
      "Non merci, c’est tout.",
      "Je suis malade.",
      "Je ne sais pas lire."
    ],
    "answer": 0,
    "explain": "« Non merci, c’est tout » termine poliment la commande.",
    "phrase": "Non merci, c’est tout."
  },
  {
    "theme": "Courses et transports",
    "title": "Trouver un arrêt",
    "context": "Vous cherchez le bus pour aller à la gare.",
    "question": "Quelle question poser ?",
    "choices": [
      "À quelle heure est le médecin ?",
      "Excusez-moi, ce bus va-t-il à la gare ?",
      "Je voudrais un rendez-vous à la CAF."
    ],
    "answer": 1,
    "explain": "On demande si le bus dessert la gare.",
    "phrase": "Excusez-moi, ce bus va-t-il à la gare ?"
  },
  {
    "theme": "Courses et transports",
    "title": "Acheter un billet",
    "context": "L’agent vous dit : « Aller simple ou aller-retour ? »",
    "question": "Que signifie « aller-retour » ?",
    "choices": [
      "Un trajet uniquement à l’aller.",
      "Un trajet aller et un trajet retour.",
      "Un billet gratuit."
    ],
    "answer": 1,
    "explain": "Un aller-retour permet de voyager à l’aller puis au retour.",
    "phrase": "Je voudrais un aller-retour, s’il vous plaît."
  },
  {
    "theme": "Santé et école",
    "title": "Prendre un rendez-vous médical",
    "context": "Le secrétariat vous propose jeudi à 14 heures.",
    "question": "Comment confirmer ?",
    "choices": [
      "Oui, jeudi à 14 heures me convient.",
      "Je n’ai pas de carte.",
      "Je viens des Comores."
    ],
    "answer": 0,
    "explain": "La réponse confirme clairement le jour et l’heure.",
    "phrase": "Oui, jeudi à 14 heures me convient."
  },
  {
    "theme": "Santé et école",
    "title": "Décrire un symptôme",
    "context": "Le médecin demande : « Depuis quand avez-vous mal ? »",
    "question": "Quelle réponse précise la durée ?",
    "choices": [
      "À gauche.",
      "Depuis trois jours.",
      "Dans mon sac."
    ],
    "answer": 1,
    "explain": "« Depuis trois jours » indique quand le problème a commencé.",
    "phrase": "J’ai mal depuis trois jours."
  },
  {
    "theme": "Santé et école",
    "title": "À l’école",
    "context": "Vous souhaitez parler avec l’enseignant de votre enfant.",
    "question": "Que pouvez-vous demander ?",
    "choices": [
      "Puis-je prendre rendez-vous avec l’enseignant ?",
      "Où est la gare ?",
      "Je voudrais un café."
    ],
    "answer": 0,
    "explain": "La phrase permet de demander un rendez-vous scolaire.",
    "phrase": "Puis-je prendre rendez-vous avec l’enseignant ?"
  },
  {
    "theme": "Démarches",
    "title": "Comprendre un courrier",
    "context": "Le courrier indique « Réponse attendue avant le 15 mai ».",
    "question": "Quelle information faut-il retenir ?",
    "choices": [
      "Le numéro du bus.",
      "La date limite.",
      "Le nom du voisin."
    ],
    "answer": 1,
    "explain": "Une date limite est importante pour organiser sa réponse.",
    "phrase": "Quelle est la date limite pour répondre ?"
  },
  {
    "theme": "Démarches",
    "title": "Document manquant",
    "context": "L’agent indique qu’il manque une pièce à votre dossier.",
    "question": "Quelle question est utile ?",
    "choices": [
      "Quel document manque-t-il, s’il vous plaît ?",
      "Combien coûte un croissant ?",
      "Où se trouve la plage ?"
    ],
    "answer": 0,
    "explain": "Demander le nom du document permet de compléter le dossier.",
    "phrase": "Quel document manque-t-il, s’il vous plaît ?"
  },
  {
    "theme": "Démarches",
    "title": "Comprendre une consigne",
    "context": "Une administration demande de « joindre une copie ».",
    "question": "Que devez-vous faire ?",
    "choices": [
      "Envoyer un exemplaire du document demandé.",
      "Appeler un taxi.",
      "Changer de ville."
    ],
    "answer": 0,
    "explain": "Joindre une copie signifie ajouter une reproduction du document demandé.",
    "phrase": "Je vais joindre une copie du document."
  },
  {
    "theme": "Travail et logement",
    "title": "Se présenter à un entretien",
    "context": "La recruteuse demande : « Quand êtes-vous disponible ? »",
    "question": "Quelle réponse convient ?",
    "choices": [
      "Je suis disponible dès lundi.",
      "J’ai perdu mes clés.",
      "Il pleut aujourd’hui."
    ],
    "answer": 0,
    "explain": "On précise sa disponibilité pour le travail.",
    "phrase": "Je suis disponible dès lundi."
  },
  {
    "theme": "Travail et logement",
    "title": "Signaler une panne",
    "context": "Le chauffage de votre logement ne fonctionne plus.",
    "question": "Quelle phrase est claire ?",
    "choices": [
      "Le chauffage est en panne depuis hier.",
      "Je prends le bus.",
      "Le livre est rouge."
    ],
    "answer": 0,
    "explain": "La phrase décrit le problème et depuis quand il existe.",
    "phrase": "Le chauffage est en panne depuis hier."
  },
  {
    "theme": "Travail et logement",
    "title": "Demander un justificatif",
    "context": "Vous devez obtenir une attestation de loyer.",
    "question": "Quelle phrase utiliser ?",
    "choices": [
      "Je cherche une pharmacie.",
      "Pourriez-vous me fournir une attestation de loyer ?",
      "Je pars en vacances."
    ],
    "answer": 1,
    "explain": "On formule une demande polie et précise.",
    "phrase": "Pourriez-vous me fournir une attestation de loyer ?"
  }
];
