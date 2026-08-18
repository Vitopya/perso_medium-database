# REGISTRE — Série Wobblox et articles Medium suivants

Source de vérité du registre d'écriture, calibré sur l'article 1 (`wobblox-01-se-contredire-tout-seul.md`, version validée du 18/08/2026). Toute session de rédaction commence par lire ce fichier. Il encode les retours du porteur, durement acquis : ne pas re-régler à zéro.

---

## 1 · Le cadre de la série

- **Compte de publication** : https://medium.com/@josephdeffayet
- **Dépôt** : https://github.com/Vitopya/perso_medium-database.git — synchroniser au fil de l'eau, pas en fin de session.
- **Série** : 4 épisodes, chronologiques, autoportants.
  1. *Un jeu sur le Play Store sans être développeur* — conception, 10-24 juin. LIVRÉ.
  2. Le test fermé : 32 inscrits, 35 retours, le retour #23, l'audit à 4/10, l'écart intention/câblage, l'accès production accordé le 20/07. Accroche posée en fin d'épisode 1 : « ce que trente-deux inconnus font à un produit qu'une seule personne avait jugé bon ».
  3. Exister : baseline 1 visiteur/28 jours, passage en gratuit (Google ne met pas en avant les apps payantes), tags, bande-annonce retirée après mesure DOM, assets produits en jouant, repositionnement jeune public sans toucher au code.
  4. Le produit chez les autres : les gels, 4 campagnes de correction, l'instrumentation, le mur O(N²) raconté par sa conséquence (le jeu punissait les joueurs qui montaient haut), le record écrit en direct.
- **Longueur** : 1400-1700 mots par article.
- **Testeurs** : toujours anonymisés (« une testeuse », « le numéro 23 de mon classement »).

## 2 · L'angle — non négociable

**L'IA est assumée et centrale.** Le pitch de la série : un product designer qui n'est pas développeur conçoit, développe et publie un jeu de physique en pilotant Claude Code (nommé une fois par article : « Claude Code, l'agent IA d'Anthropic, piloté depuis VS Code » ; ensuite « l'IA » ou « la machine »).

- La thèse-cadre de la série, posée dans l'épisode 1 : quand fabriquer ne coûte presque plus rien, ce qui reste difficile saute aux yeux — décider ce qui est bon, décider quand c'est fini. Chaque épisode en décline une facette.
- Posture exacte sur le code : « je lis du code, il m'arrive d'en écrire quelques lignes, mais jamais aussi loin ni aussi précisément sans l'IA ». Jamais « je ne sais pas coder » (faux), jamais l'artisan héroïque (faux aussi : les durées honnêtes sont des heures-machine, pas des semaines-homme).
- Les erreurs racontées sont TOUJOURS celles du métier du porteur (exigence mal écrite, priorisation, gouvernance), jamais des maladresses d'ignorant. L'IA exécute tout, y compris les erreurs, avec la même diligence. C'est la ligne « le bilan déplaisant : tout ce qui a raté relevait de mon métier, pas du sien ».

## 3 · Ce que chaque article doit livrer au lecteur

- **Un enjeu dramatisé dès l'ouverture** : fait daté + tension réelle, jamais d'annonce de plan. L'épisode 1 ouvre sur « dépôt vide le 10 juin, jeu jouable le 12 ».
- **2-3 leçons transportables, énoncées sans emballage**, du type : « le feu vert d'une machine vaut ce que vaut la question qu'on lui a posée » ; « un garde-fou se juge à ce qu'il coûte un jour de fatigue ». Une seule leçon développée en paragraphe ; les autres tiennent en une phrase dans le flux.
- **Une pointe d'humour sec par article**, jamais inventée : tirée du réel (« démolir des tours en boucle pour vérifier que c'était drôle »).
- **Une transition contextualisée vers l'épisode suivant** : la dernière scène de l'article EST l'amorce du suivant. Jamais de « dans le prochain article nous verrons ».
- **Exagération autorisée sur les enjeux et le décor** (la cathédrale de compromis numériques), jamais sur les faits. Les chiffres sortent du dépôt et sont vérifiés avant usage. Erreurs déjà commises et corrigées : 4 testeuses ≠ 32 inscrits ≠ 27 exportés ≠ 24 destinataires ; le jeu est sorti PAYANT (0,99 €) le 20/07, gratuit le 25/07 ; la baseline « 1 visiteur/28 jours » mesure la période AVANT publication.

## 4 · La prose — règles dures

### Le tic n°1 à traquer : la juxtaposition par virgules
Trois propositions collées par des virgules sans conjonction (« la gravité faisait son travail, je pouvais jouer, tout tenait »). C'est LE marqueur qui a fait dire « IA written » au porteur. **Maximum une chaîne de ce type par article.** Partout ailleurs : syntaxe réelle — points, « et », « mais », « parce que », « puisque », subordonnées qui portent.

### Interdits absolus (grille humanizer + socle FR combinés)
- Tirets cadratins et demi-cadratins dans le corps du texte : zéro.
- Gras, émojis, listes à puces dans le corps d'article : zéro.
- Adjectifs-signature : crucial, essentiel, véritable, fascinant, révolutionnaire.
- Méta-discours : « il convient de noter », « dans cet article », « en conclusion », « plongeons ».
- Négations parallèles : « non seulement X mais Y », « ce n'est pas X, c'est Y », « pas de X, pas de Y, juste Z ».
- Triplets rhétoriques équilibrés (trois éléments de même longueur). Les casser à deux, ou en série de phrases courtes de longueurs inégales.
- Phrase finale-slogan. La chute décale ou ouvre, elle ne synthétise pas.
- « , et » en jointure de propositions : 1-2 occurrences max par article.
- Annonces cataphoriques (« la voici », « il tient en une question ») : une seule par article.
- Passif sans acteur quand l'acteur est « je ».

### Cadences
- Variation de longueur : sur trois phrases consécutives, écart d'au moins du simple au double. Vérifier sur 3-4 triplets.
- Phrases courtes en série : autorisées 2 fois par article maximum, et seulement quand elles miment le sujet (les visages : « Le bloc du bas dort. Celui du milieu fait le malin. »).
- Questions-réponses courtes pour les bilans (« Le test mal défini ? Une exigence mal écrite. ») plutôt que trois phrases symétriques.
- Paragraphes de longueurs visiblement inégales.

### Registre
- Plumes de calibrage : Triclot (prose technique qui respire, définit sans annoncer), Aubenas (ouverture par le détail concret, « je » qui s'efface), Latour (raconter un objet technique sans cesser de démontrer). PAS Carrère : pas de confession.
- Technique : nommer 2-3 choses précises par article (scripts/, class_name, GDScript, O(N²)…) mais TOUJOURS expliquées par leur conséquence observable, jamais par leur implémentation. « Commits » se dit commits.
- Ni auto-flagellation ni brag masqué. Une erreur ne se raconte que si on peut dire ce qu'elle a coûté et ce qui a changé depuis.

## 5 · Images
2-3 par article, placées dans le texte sous la forme `[IMAGE n — position : description précise. Légende éventuelle.]`. Toujours des captures réelles du jeu ou des assets générés par les harnais du projet (shot_faces, autoplay, planches). Jamais de stock, jamais d'illustration générée décorative. La couverture montre le jeu, pas une métaphore.

## 6 · Processus de production d'un article
1. Vérifier les faits dans le dépôt Wobblox (`docs/growth/JOURNAL.md`, `docs/FREEZE-POSTLAUNCH.md`, `.planning/`, git log) AVANT d'écrire. Aucun chiffre de mémoire.
2. Rédiger sous le socle `writing-expert-referentiels-fr` (lexique, prosodie).
3. Passe `humanizer:humanizer` en grille structurelle (motifs trans-langues : parallélismes, triplets, em dashes, passifs, staccato).
4. Passe anti-virgules : traquer les juxtapositions (grep visuel sur chaque paragraphe).
5. Autocritique à froid : titre dit-il le contenu ? le lecteur apprend-il quelque chose de transportable ? est-ce que ça baille quelque part ? la fin amorce-t-elle la suite naturellement ?
6. Vérifs grep : `—|–|\*\*|non seulement|ce n'est pas .*, c'est` = zéro hit ; compter les « , et ».
7. Livrer, puis commit + push immédiat sur le dépôt.

## 7 · Métadonnées Medium (gabarit)
- Titre : dit le contenu et la tension, sans putaclic (référence : « Un jeu sur le Play Store sans être développeur »).
- Sous-titre : précise l'angle designer + IA + promesse de l'épisode.
- Tags (anglais, 5) : product design, ai, indie game, solo builder, + spécifique épisode.
- Résumé 2-3 phrases, troisième personne.
