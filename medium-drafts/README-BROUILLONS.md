# Mise en brouillon sur Medium

Trois pages HTML prêtes à coller, une par épisode. Elles ne servent qu'à ça : les
ouvrir, tout copier, coller dans un brouillon Medium vide. Le texte, les titres de
section, les images et leurs légendes arrivent d'un coup.

## Pourquoi passer par un copier-coller

Le navigateur interne de Claude ne peut pas créer ces brouillons lui-même. Medium
identifie ce navigateur comme Electron et lui refuse l'éditeur côté serveur : la
configuration renvoyée par medium.com contient `supportsDesktopEdit: false` et
`supportsFileAPI: false`, et toute ouverture de `/new-story` est renvoyée vers la
page « Start writing in the Medium app ». Le blocage tient à l'en-tête User-Agent,
qui n'est pas modifiable depuis la page. Il faut donc un vrai Chrome, Edge ou
Firefox, où l'éditeur fonctionne normalement.

Les images passent par une adresse publique plutôt que par le disque : chaque
`<img>` de ces pages pointe vers `raw.githubusercontent.com`, et Medium va les
chercher tout seul au moment du collage. **Le dépôt `perso_medium-database` doit
rester public jusqu'à ce que les trois brouillons soient créés.** Ensuite, les
images vivent chez Medium et le dépôt peut redevenir ce qu'on veut.

## Procédure, à répéter pour chaque épisode

1. Ouvrir `medium-drafts/ep1.html` dans Chrome (double-clic sur le fichier suffit).
2. `Ctrl+A` puis `Ctrl+C`.
3. Aller sur `medium.com/new-story`, cliquer dans la zone de titre, `Ctrl+V`.
4. Attendre que les images finissent de monter. Elles apparaissent d'abord en
   gris, puis se dessinent. Ne pas fermer l'onglet avant.
5. Vérifier trois points : le titre est bien en gros titre, la ligne juste en
   dessous est bien le sous-titre, et le compte d'images est le bon (3 pour les
   épisodes 1 et 2, 2 pour le 3).
6. Fermer l'onglet. Medium enregistre le brouillon tout seul, il apparaît dans
   `medium.com/me/stories/drafts`.

Ne jamais cliquer sur **Publish**. Le brouillon se sauvegarde sans ça.

Si une image ne monte pas, elle se rattrape en glissant le fichier
correspondant depuis le dossier `img/` directement dans le brouillon, à
l'emplacement prévu.

## Métadonnées, épisode par épisode

Le titre et le sous-titre arrivent avec le collage. Le reste se renseigne dans le
panneau qui s'ouvre au moment de publier, ce qui veut dire au moment de publier :
tant que le brouillon dort, garder ces valeurs ici et les saisir le jour J.
Prévoir de vérifier qu'elles ont bien tenu si le panneau a été ouvert puis fermé.

### Épisode 1 — `ep1.html`

- **Titre** : Un jeu sur le Play Store sans être développeur
- **Sous-titre (arrive avec le collage)** : Product designer, j'ai conçu, développé et publié un jeu de physique Android en pilotant Claude Code. Récit en trois épisodes. Celui-ci raconte les deux premières semaines : ce que la machine abat à une vitesse déraisonnable, et ce qu'elle ne décidera jamais à votre place.
- **Sous-titre d'aperçu (plus court, pour la carte et le référencement)** : Product designer, j'ai conçu et publié un jeu de physique Android en pilotant Claude Code. Épisode 1 : deux semaines de fabrication, et ce qu'une IA ne décidera jamais à votre place.
- **Tags** : Product Design, AI, Indie Game Development, Claude, Solo Founder
- **Description de partage** : Un product designer raconte la construction d'un jeu mobile en deux semaines avec un agent IA comme seule équipe. Un test vert qui ne prouvait rien, un garde-fou jamais exécuté qui coûtera un mois, trois directions artistiques en une semaine : ce que le pilotage d'une IA change au métier, et ce qu'il n'en change pas.
- **Image d'aperçu** : la couverture, `ep1-cover.png`, première image de l'article.

### Épisode 2 — `ep2.html`

- **Titre** : Ce que trente-deux joueurs ont fait à mon jeu
- **Sous-titre (arrive avec le collage)** : Deuxième épisode du récit de Wobblox, un jeu de physique Android conçu et développé par un product designer pilotant Claude Code. Après deux semaines de fabrication, le jeu devait rencontrer d'autres mains que les miennes. Google l'exige d'ailleurs avant d'autoriser la moindre publication. Voici ce qui en est sorti : trente-cinq retours, un audit sévère et le droit de publier.
- **Sous-titre d'aperçu** : Google exige un test fermé avant toute publication. Épisode 2 : trente-cinq retours, un audit à 4/10 sur mon propre terrain, et le retour n°23 qui valait le test entier.
- **Tags** : User Research, Product Design, Beta Testing, Google Play, Indie Game Development
- **Description de partage** : Suite du récit d'un jeu mobile construit avec une IA : le passage obligé du test fermé Play Store. Comment trente-cinq retours de proches deviennent un protocole de recherche, pourquoi le retour le plus utile ne demandait aucune correction, et ce qu'un audit sans complaisance révèle quand l'intention et le code divergent.
- **Image d'aperçu** : la couverture, `ep2-cover.png`.

### Épisode 3 — `ep3.html`

- **Titre** : Sortir un jeu que personne n'attend
- **Sous-titre (arrive avec le collage)** : Dernier épisode du récit de Wobblox, un jeu de physique Android construit par un product designer et Claude Code. Le jeu est en ligne dans 172 pays et il ne s'est rien passé. Cet épisode raconte le mois de riposte, sur deux fronts en même temps : devenir trouvable sans dépenser un euro, puis survivre à ses premiers vrais joueurs. Avec les techniques, les chiffres et les contournements qui ont marché.
- **Sous-titre d'aperçu** : Un visiteur sur la fiche en vingt-huit jours. Épisode final : devenir trouvable sans un euro, faire produire les assets par le jeu lui-même, et survivre à ses premiers vrais joueurs.
- **Tags** : App Store Optimization, Indie Game Development, Product Design, AI, Growth
- **Description de partage** : Dernier épisode : le jeu est en ligne et il ne se passe rien. Trois gestes gratuits pour exister sur le Play Store, un pilote automatique qui joue le jeu pour produire captures et bande-annonce, une enquête dans le DOM qui sauve la fiche, et la traque d'un gel qui punissait les meilleurs joueurs. Techniques et chiffres inclus.
- **Image d'aperçu** : la couverture, `ep3-cover.png`.

## Ordre et rythme

Publier 1, puis 2, puis 3, en laissant quatre à sept jours entre deux épisodes.
Chaque article appelle le suivant par sa dernière phrase. Une fois l'épisode 1 en
ligne, ajouter en tête des épisodes 2 et 3 un lien vers le précédent.

## Régénérer les pages

`node medium-drafts/build.js` relit les trois fichiers `.md` du dossier parent et
réécrit les trois HTML. À relancer après toute correction d'un article.
