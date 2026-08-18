# Le jeu punissait ceux qui jouaient bien

*Dernier épisode du récit de Wobblox, un jeu de physique Android construit par un product designer et Claude Code. Le jeu est en ligne, gratuit, dans 172 pays. Des inconnus y jouent. Cet épisode raconte cinq campagnes de correction pour un seul symptôme et ce qu'on apprend le jour où son produit vit chez les autres.*

[IMAGE 1 — couverture : capture réelle d'une partie en mode Zen à très haute altitude, la tour serpentant dans un ciel étoilé, le compteur au-dessus de 180 mètres. Recadrée en 1500×750.]

---

Le 27 juillet, un joueur m'a décrit ceci : mode Zen, une tour de 245 mètres, puis d'un coup l'écran qui se fige. Plus aucune réaction au toucher. La musique, elle, continue de jouer, même l'application repliée. Il a dû forcer l'arrêt. Au relancement, son record de hauteur avait disparu.

Un second message est arrivé le lendemain, d'une autre personne, autour de 170 mètres. Même scène, mot pour mot.

Cette signature dit déjà beaucoup à qui sait la lire : quand l'image et le toucher meurent ensemble mais que le son survit, c'est que le fil d'exécution principal est bloqué pendant que celui de l'audio continue sa vie. Le problème, c'est que je ne pouvais rien lire d'autre. Wobblox n'a aucun accès réseau, donc aucune remontée de plantage, aucun log distant, aucun tableau de bord. Mon outil de supervision, c'était la mémoire de deux joueurs de bonne volonté. Toute la suite découle de cette pauvreté instrumentale. C'est le fil de cet épisode : on ne corrige pas ce qu'on ne peut pas voir, on corrige ce qu'on imagine. Parfois longtemps.

## Trois vraies causes, zéro guérison

La première campagne a duré une journée et trouvé trois défauts parfaitement réels. Le moteur physique distribuait son calcul sur un groupe de threads dont le blocage reproduisait exactement les symptômes décrits. Une boucle d'enchaînement de chutes pouvait ne jamais se refermer si un nombre devenait invalide dans la simulation. Et certaines textures d'ambiance se redessinaient entièrement en pleine partie, des centaines de milliers de pixels recalculés d'un coup, de quoi figer l'écran une seconde. Trois correctifs, une mise à jour publiée.

Le gel est revenu.

Deuxième campagne, trois trous de plus, dont un que je trouve encore vertigineux : un nombre peut être fini au sens strict et pourtant absurde. Une coordonnée à moins mille milliards passe un test de validité classique, puis envoie les boucles de jalons du jeu dans un rattrapage de cinquante millions d'itérations. La garde a été réécrite pour vérifier la plausibilité, pas seulement la validité. Troisième campagne, un vrai coupable encore : la nappe sonore qui se déclenche à 200 mètres d'altitude se chargeait d'un bloc, six mégaoctets et demi, sur le fil principal. Corrigé, publié le matin même.

Le soir même, le gel était de retour. À 200 mètres, en plein là où je venais de corriger.

Trois campagnes, sept ou huit défauts réels éliminés, zéro guérison. Il faut s'arrêter sur ce point parce qu'il est contre-intuitif : chaque campagne avait raison. Chaque défaut trouvé existait, méritait sa correction, aurait fini par nuire. Corriger de vrais défauts n'est pourtant pas corriger le défaut. Et l'IA n'y pouvait rien : elle auditait à toute vitesse, mais elle auditait dans la direction que je lui donnais. Trois fois, je lui ai demandé de chercher un accident, un événement ponctuel qui fige le jeu. Trois fois, elle en a trouvé. Le symptôme qui revient après chaque correctif ne dit pas que les correctifs étaient mauvais. Il dit que la famille d'hypothèses est fausse.

## Ce que les joueurs perdaient pendant ce temps

Un détail des premiers rapports méritait sa propre enquête : le record perdu. Un gel est pénible, perdre sa meilleure partie est impardonnable.

L'inventaire a été édifiant. Le record ne s'écrivait sur le disque qu'en fin de partie propre. En mode Zen, qui n'a pas de fin de partie, il ne s'écrivait qu'à la sortie volontaire. Les gains d'une session se versaient au même moment, donc jamais en cas d'arrêt forcé. Rien de tout cela n'était un bug au sens strict : chaque ligne faisait ce qu'elle disait. C'était une conception qui supposait que les parties se terminent bien, écrite à une époque où la seule personne qui jouait savait quitter proprement.

Tout a été réécrit dans l'autre sens. Le record s'écrit désormais en direct, tous les deux mètres de progression. Une photographie de la partie en cours se prend à intervalles réguliers ; si l'application meurt, elle se rejoue au démarrage suivant : record, gains, statistiques, tout survit à n'importe quel arrêt. Au rapport de gel suivant, la même joueuse a précisé d'elle-même : cette fois, les records ont été enregistrés. Le gel n'était pas encore vaincu, mais il avait cessé de voler.

C'est une règle que je garde pour tout ce qui tourne chez les autres : en production, la perte de données n'est pas une conséquence des pannes, c'est un défaut de conception qui attend une panne pour s'exprimer.

## La mesure qui a tout retourné

Pour la quatrième campagne, j'ai changé de méthode : plus d'hypothèses, un instrument. Le jeu a appris à écrire son propre pouls dans le journal du téléphone, quelques chiffres toutes les dix secondes, dont le plus important : la durée de la pire image de la fenêtre écoulée. Avec une précaution qui m'a été soufflée par des années d'ateliers de mesure : la frame qui porte la mesure est exclue de la mesure suivante. Un instrument qui fabrique ce qu'il mesure ne prouve rien.

Puis une vraie partie de Zen, jouée sur un vrai téléphone, en montant le plus haut possible. Les chiffres sont tombés avec une netteté embarrassante. À 58 blocs posés, la pire image coûtait 33 millisecondes. À 105 blocs, 50. À 150 blocs, 64. À 197 blocs, 73. Le coût de chaque image grandissait avec la tour. Le gel n'était pas un accident qui survient. C'était une pente qu'on gravit.

[IMAGE 2 — ici : un graphique sobre tracé depuis ces mesures réelles, blocs en abscisse, millisecondes par image en ordonnée, la courbe d'avant qui grimpe et la ligne plate d'après. Style dépouillé, couleurs de la DA du jeu. Format 1500 px de large.]

Le chronométrage fin a désigné le coupable en une soirée. Pour décider si chaque bloc posé était bien porté par la tour, le code rebalayait tous les autres blocs. Chaque bloc, contre tous les blocs, à chaque image rendue pendant les chutes et les tangages. Vingt-huit blocs : deux millisecondes, invisible. Cent quarante-cinq blocs : quarante-cinq millisecondes, l'écran hoquette. Sur le téléphone d'un joueur, trois à quatre fois moins puissant que le mien, la même passe tenait l'écran figé pendant toute la durée d'un effondrement, plusieurs centaines de millisecondes par image, en boucle. L'écran mort, la musique vivante. Tout y était.

Et voilà pourquoi trois campagnes avaient échoué en ayant raison : elles cherchaient un événement, la cause était une croissance. Voilà aussi pourquoi les rapports parlaient de 170, de 200, de 245 mètres sans jamais s'accorder sur un seuil : il n'y avait pas de seuil, seulement une pente et des téléphones plus ou moins rapides pour la sentir. La conclusion tient en une phrase que je n'oublierai pas : le jeu punissait très exactement les joueurs qui jouaient bien. Plus la tour montait, plus le prix de chaque image montait avec elle.

La correction a réorganisé ce calcul pour ne plus comparer chaque bloc qu'à ses voisins immédiats dans une pile triée. Mêmes décisions, exactement, vérifiées bloc par bloc contre l'ancienne version sur des piles de test. La pire image est retombée à 17 millisecondes, le coût d'une image ordinaire à 60 images par seconde. Elle n'a plus bougé jusqu'à 282 blocs. Le banc d'essai à 600 blocs, qui tournait à 11 images par seconde, est remonté à 60. Un test garde désormais la porte : si une modification réintroduit un balayage complet, il échoue avant toute publication.

## L'épilogue, et la porte rouverte

L'histoire refuse de se finir proprement, et c'est très bien ainsi. Le soir de la publication du correctif, un gel a encore été signalé. Le pouls dans les journaux a prouvé que celui-là était un autre animal : les coûts d'image étaient plats, la tour n'y était pour rien. L'application est repartie seule après 77 minutes, signature d'un calcul unique, fini et démesuré, toujours à l'étude. Entre-temps, le chien de garde ajouté pour le traquer m'a offert sept fausses alertes en une nuit : une application repliée en arrière-plan présente exactement la même signature qu'un gel. Un instrument, là encore, à éduquer avant de le croire.

Le correctif a eu une conséquence que je n'attendais pas et qui referme cette série mieux qu'une morale. Pour tenir la charge des tours géantes, j'avais envisagé de faire disparaître le bas des tours, un compromis de design arraché à la technique. Avec un moteur qui tient 600 blocs sans broncher, ce compromis n'a plus de raison d'être. La question « jusqu'où peut-on monter » est redevenue une question de design, plus une question de moteur.

Le 10 juin, ce dépôt était vide. Aujourd'hui, un jeu de physique vit dans 172 pays, il a survécu à ses premiers inconnus, il écrit son état de santé dans une ligne de journal, et la prochaine fois qu'un joueur me dira que l'écran s'est figé, je saurai où regarder. Sur toute la traversée, l'IA a tenu la fabrication à une vitesse que je n'aurais jamais atteinte. Tout ce qui a réellement décidé du sort du produit, la définition d'un test, la lecture d'un chiffre, le choix d'une famille d'hypothèses, le moment de s'arrêter de deviner et de mesurer, est resté exactement là où c'était avant elle : chez celui qui signe.
