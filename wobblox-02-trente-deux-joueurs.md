# Ce que trente-deux joueurs ont fait à mon jeu

*Deuxième épisode du récit de Wobblox, un jeu de physique Android conçu et développé par un product designer pilotant Claude Code. Après deux semaines de fabrication, le jeu devait rencontrer d'autres mains que les miennes. Google l'exige d'ailleurs avant d'autoriser la moindre publication. Voici ce qui en est sorti : trente-cinq retours, un audit sévère et le droit de publier.*

[IMAGE 1 — couverture : capture réelle du jeu pendant un effondrement vu par la caméra spectacle, la tour entière visible en train de basculer, le compteur de mètres perdus à l'écran. Format 1500×750.]

---

Pour publier un jeu sur le Play Store quand on est un développeur inconnu, Google impose un rite de passage : un test fermé avec au moins douze testeurs inscrits, actifs en continu pendant quatorze jours. Pas douze installations un jour de lancement. Douze personnes qui gardent le jeu sur leur téléphone deux semaines entières.

J'ai donc fait ce que font tous les développeurs solo du monde : j'ai écrit à ma famille, à mes amis et à d'anciens collègues. Trente-deux personnes se sont inscrites, chacune avec un code à saisir dans une rubrique du Play Store dont personne ne soupçonne l'existence. Le message d'invitation finissait par « pas de désinstall pendant 14 jours » suivi d'un émoji gêné, parce qu'il faut bien assumer ce qu'on demande.

Sur ces trente-deux, quatre ont produit l'essentiel de la matière : trente-cinq observations écrites, envoyées par messages au fil de leurs parties. Ce ratio est la proportion normale d'un test : la plupart des gens jouent sans rien dire, quelques-uns regardent vraiment. Le travail consiste à s'organiser pour que ces quelques-uns suffisent.

## Trente-cinq retours, un tableur et une règle

Mon métier consiste, une bonne partie de l'année, à faire de la recherche utilisateur pour des grands groupes. Je me suis appliqué le protocole que je facture : chaque retour reçoit un numéro, les numéros se regroupent par thème et chaque thème se classe selon ce qu'il bloque. Ce qui empêche de jouer se corrige pendant le test. Ce qui abîme le plaisir se corrige avant la sortie. Le reste attend son tour.

La règle qui donne sa valeur au dispositif tient en une phrase : un retour n'existe que s'il devient adressable. Le numéro 14 a produit un correctif identifiable dans l'historique du code. Ce correctif a produit un test qui interdit à l'erreur de revenir. Trente-cinq observations de proches, traitées ainsi, valent une étude qu'on paie très cher. Les mêmes observations laissées dans un fil de messages valent zéro.

Le premier enseignement est tombé vite. Sept retours sur trente-cinq, venus de trois personnes différentes, visaient le même organe : la caméra. Elle perdait la tour quand celle-ci s'élargissait. Elle cadrait mal le socle en début de partie. Elle se trompait de hauteur au moment de livrer un bloc. Trois testeuses qui ne se connaissent pas décrivaient chacune un symptôme différent du même défaut, ce qui est exactement la manière dont un vrai problème se signale : jamais en un retour propre, toujours en constellation.

## Le retour numéro 23

Puis il y a eu le numéro 23, et celui-là valait le test entier.

Depuis le premier jour, l'intention du jeu tenait en une phrase écrite dans mon document de cadrage : chaque effondrement doit faire rire plutôt que frustrer. C'est le moment signature, celui pour lequel le jeu existe. Le numéro 23 racontait ce que ce moment donnait réellement entre les mains d'une joueuse : la caméra restait cadrée sur le sommet de la tour, l'écran se vidait pendant que les blocs s'écroulaient plus bas, hors champ. Elle tapait l'écran pour vérifier que le jeu n'avait pas planté. Et chaque tap lâchait un bloc au hasard, qui aggravait la chute.

J'avais écrit « l'effondrement doit faire rire ». J'avais fabriqué un effondrement invisible et punitif, qui transformait la panique du joueur en punition supplémentaire. L'inverse exact, terme à terme.

Ce qui me frappe encore, c'est qu'aucun instrument ne pouvait le voir. Mes tests vérifiaient que l'effondrement se déclenchait. Il se déclenchait. L'IA avait câblé ce que j'avais spécifié et ne pouvait pas contester une spécification cohérente. Le défaut ne vivait ni dans le code ni dans l'intention : il vivait entre les deux, dans un angle mort que seule une inconnue en train de paniquer sur son canapé pouvait éclairer.

La correction a occupé le week-end. La caméra a appris trois états distincts : construire, s'effondrer, se remettre. Dès qu'une chute devient irréversible, elle dézoome sur la tour entière, le temps ralentit, un compteur égrène les mètres perdus et l'écran refuse les taps le temps du spectacle. La punition est devenue une scène. C'est aujourd'hui le moment que les gens montrent quand ils font essayer le jeu.

Une autre décision née du test mérite d'être volée. Fallait-il poser le bloc quand le doigt touche l'écran ou quand il le quitte ? Les retours ne s'accordaient pas. Plutôt que trancher, le tutoriel fait désormais essayer les deux gestes, puis demande au joueur lequel il garde ; le choix reste modifiable dans les réglages. On ne tranche pas ce que l'utilisateur peut trancher lui-même, surtout quand chaque camp a raison pour sa propre main.

[IMAGE 2 — ici : deux captures côte à côte du même effondrement. À gauche, le cadrage d'avant : le sommet seul, écran quasi vide. À droite, la caméra spectacle : tour entière, ralenti, compteur de mètres. Format 1500 px de large.]

## Le refus le plus utile

Tous les retours ne demandaient pas une correction. Le plus précieux n'en demandait aucune.

Un testeur m'a écrit, avec une honnêteté que je lui dois encore : ce n'est pas un jeu pour moi, je n'arrive pas à y entrer, même si c'est très propre niveau design. Le but même du jeu, faire tenir une tour en équilibre, ne lui donnait aucune envie.

Le réflexe, quand on reçoit ça sur son propre produit, est d'y lire un problème à régler. On ajouterait un mode, un objectif différent, quelque chose pour le retenir. C'est précisément ce qu'il ne faut pas faire. Ce retour ne décrit pas un défaut, il décrit une frontière : la limite exacte du public. Un jeu d'équilibre ne convertira pas quelqu'un que l'équilibre ennuie. Chaque concession faite pour le retenir diluerait le jeu pour ceux qui l'aiment. J'ai remercié, je n'ai rien changé. Savoir pour qui on ne construit pas est une information de cadrage.

Dans la même veine, une décision a fait l'aller-retour complet. Un matin, j'ai fait ajouter une ombre portée sous les boutons pour les décoller du fond. Le soir même, en la voyant sur téléphone, je l'ai fait retirer. La différence avec une hésitation ordinaire tient à la trace : le retrait est consigné dans le projet comme une règle permanente, avec son motif. Plus personne, ni moi ni la machine, ne repropose cette ombre. Une décision annulée sans trace écrite revient toujours.

## L'audit à 4 sur 10

Une fois la vague de correctifs passée, j'ai fait ce qu'on évite en général de faire sur son propre travail : un audit complet, à froid, avec des notes. Le concept est sorti à 8 sur 10. L'exécution visuelle à 5. L'interface à 4.

Quatre sur dix, sur mon propre terrain. Je conçois des interfaces pour gagner ma vie.

Le détail des reproches m'a réconcilié avec la note, parce qu'il dessinait un motif que je connais par cœur pour le facturer chez mes clients. J'avais défini des tokens de design, l'échelle typographique, les espacements, les couleurs, tout ce qui fait qu'une interface se tient. Le code n'y faisait pas référence une seule fois. À la place, deux douzaines de tailles écrites en dur, au fil des écrans. Trois couleurs de ciel décidées pour accompagner l'altitude dormaient dans un fichier sans qu'aucun shader les consulte. Et le galbe des blocs, censé donner sa matière au jeu entier, se retrouvait réservé aux skins payants par accident : une condition dans le code l'activait seulement si un skin était équipé.

Chaque décision était bonne. Chaque décision existait par écrit. Le produit n'en appliquait presque aucune. En entreprise, ce phénomène porte un nom, la dette de design system, qu'on impute au turnover, aux délais ou à la communication entre équipes. Il n'y avait ici ni turnover, ni équipes : une seule personne et une IA qui exécute tout ce qu'on lui branche. La dette est apparue quand même. L'écart entre l'intention et le câblage n'est pas une maladie d'organisation. C'est la pente naturelle de tout produit dont personne ne vérifie ce lien précis, parce que l'intention non câblée ne se signale jamais : elle ne plante pas, elle ne lève aucune erreur. Elle attend qu'un audit la déterre.

La reconquête a suivi l'ordre du diagnostic : router les tokens, brancher le ciel, offrir le galbe à tous les blocs. Le jeu a changé d'allure en quelques jours sans qu'une seule décision nouvelle soit prise. Tout était déjà décidé depuis des semaines.

[IMAGE 3 — ici : la planche des treize expressions de visages, ou une capture avant/après du branchement des tokens sur un même écran. Format 1500 px de large.]

## Le droit de publier

Le 18 juillet, les tours tremblaient en rafale de blocs et le moteur physique a été remplacé, en une heure, comme prévu au premier jour du projet. Détail que j'aurais aimé lire quelque part avant de commencer : publier des mises à jour pendant le test fermé ne remet pas le compteur des quatorze jours à zéro. Six versions sont parties pendant le test, chacune traçable jusqu'aux retours qui l'avaient motivée. Corriger vite pendant le test compte double : le jeu s'améliore, le dossier d'accès à la production se remplit tout seul. Le 20, Google a accordé l'accès à la production. Le questionnaire d'accès demande d'ailleurs quels retours ont été reçus pendant le test et ce qui en a été fait : le tableur aux trente-cinq numéros a servi une dernière fois.

Un détail administratif dit assez bien où ce récit arrive. La version validée par les testeurs s'appelait 1.3.2 en interne. Pour le public, ce serait la 1.0, une première version, pas une bêta. Mais le compteur technique d'Android n'a pas le droit de redescendre : la « première version » du jeu porte donc, gravé dans ses métadonnées, le numéro 7. Un produit qui sort n'est jamais neuf. Il sort avec son histoire.

Le 20 juillet au soir, Wobblox était en vente à 0,99 € dans 172 pays. Trente-deux personnes de mon entourage y avaient joué. Restait à savoir qui d'autre, sur la planète entière, allait bien pouvoir le trouver. La réponse tient en un chiffre, et ce chiffre est le sujet de l'épisode suivant.
