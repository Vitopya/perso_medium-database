# Sortir un jeu que personne n'attend

*Dernier épisode du récit de Wobblox, un jeu de physique Android construit par un product designer et Claude Code. Le jeu est en ligne dans 172 pays et il ne s'est rien passé. Cet épisode raconte le mois de riposte, sur deux fronts en même temps : devenir trouvable sans dépenser un euro, puis survivre à ses premiers vrais joueurs. Avec les techniques, les chiffres et les contournements qui ont marché.*

[IMAGE 1 — couverture : capture réelle d'une partie à haute altitude, la tour serpentant dans le ciel étoilé. 1500×750.]

---

Cinq jours après la sortie, le rapport d'acquisition de la console Google affichait ceci : un visiteur sur la fiche en vingt-huit jours, zéro installation venue du magasin. Les seize appareils actifs étaient mes testeurs.

Ce chiffre est la donnée d'entrée de tout lancement sans budget. Mieux vaut la connaître avant de s'épuiser au mauvais endroit : personne n'attend un jeu de plus. Le monde des stores est indifférent bien plus qu'hostile ; l'indifférence, elle, se travaille. Mon réflexe de designer était d'améliorer la fiche, les captures, les textes. C'est le problème qu'on sait traiter, donc celui qu'on voit. Mais un taux de conversion multiplie un trafic. Multiplier zéro, soigneusement, donne zéro.

Il restait donc un mois à jouer sur deux fronts à la fois, avec une contrainte qui écrasait toutes les autres : une heure de temps humain par semaine. Ce qui suit est la liste de ce qui a marché.

## Trois gestes gratuits pour devenir trouvable

Le premier levier ne demandait qu'un clic, mais un clic définitif. Le jeu était en vente à 0,99 €, or Google l'écrit noir sur blanc : les applications payantes sont exclues de l'essentiel des surfaces de recommandation. Pour un jeu sans notoriété, ces surfaces sont le seul canal qui existe. La console prévient que la conversion en gratuit est irréversible, on ne revient jamais au payant. J'ai vérifié le raisonnement deux fois, cliqué une seule, puis consigné le pourquoi dans un journal de bord pour le jour où je me le redemanderai. Règle : une décision irréversible se paie en vérification avant, jamais en regret après.

Le deuxième levier était une erreur de taxonomie. Le Play Store range chaque jeu sur des étagères de comparaison construites à partir de ses tags ; ces étagères nourrissent les recommandations « jeux similaires ». Parmi mes tags traînait « Jeu d'alignement », le terme consacré des match-3. Wobblox empilait des blocs au rayon des jeux d'alignement de bonbons : le système de recommandation en tirait des conclusions logiques et fausses. Tag remplacé par celui du rayon des concurrents directs. J'ai aussi laissé un emplacement vide sur les cinq possibles, parce que le candidat restant m'aurait comparé au rayon hyper-casual, le plus saturé du magasin. Un tag juste mais mal situé coûte plus cher qu'une case vide : un tag de store est un choix de rayonnage, il décide à qui vous serez comparé.

Le troisième levier tenait dans un champ de formulaire. Le titre est le champ le plus pondéré du référencement d'un store, il autorise trente caractères et le mien en utilisait sept : « Wobblox », un mot que personne au monde ne tape. Devenu « Wobblox : Tour de Blocs ». Aucun de ces trois gestes n'a demandé une ligne de code. Tous relèvent du même métier que les écrans : de l'architecture d'information, appliquée à une surface qui ne nous appartient pas.

## Le jeu devient son propre studio de production

Une fiche a besoin de captures et de clips. La méthode habituelle consiste à jouer en enregistrant l'écran, puis à trier des heures de rushes. Avec une heure par semaine, c'était perdu d'avance. La réponse est devenue mon outil préféré du projet : un pilote automatique, écrit par l'IA, qui joue au jeu par les mêmes commandes que le joueur. Il place les blocs, il construit des tours élaborées, il provoque des effondrements sur demande. Tout ce qu'il produit sort de la vraie physique du vrai jeu.

Ce pilote a des options qui en disent long sur la manière de travailler avec une IA : forcer un décor, forcer une construction large, capturer un panneau d'interface en train de défiler. La bande-annonce a suivi le même principe, poussé d'un cran : le cahier des charges du montage, dix plans, des quotas d'altitude et d'effondrements, l'interdiction que deux plans voisins se ressemblent, est devenu un programme. Une fonction de contrôle refuse tout montage non conforme. Un cahier des charges qu'on relit à l'œil se viole en silence ; un cahier des charges exécutable proteste tout seul.

Dernier raffinement, mon préféré : comment choisir, dans un clip de sept cents images, la fenêtre où la tour s'effondre vraiment ? À l'œil, on la rate, c'est documenté deux fois dans mon journal de production. La sélection est donc passée à une mesure d'énergie de mouvement entre images successives, avec une subtilité qui a valeur de leçon : un bloc qui atterrit produit le même pic qu'une tour qui s'effondre. Un impact fait un pic bref ; un effondrement fait un pic qui dure. Le détecteur travaille donc sur une moyenne glissante. Quand l'œil doit choisir parmi des milliers d'images, on ne discipline pas l'œil, on le remplace par un capteur.

[IMAGE 2 — ici : grille de quatre captures produites par le pilote automatique, dont une tour élaborée et un effondrement. Format 1500 px de large.]

## Mesurer où vit le pixel

Un exemple de cette hygiène de mesure, sur un terrain inattendu. L'image de présentation de la fiche, refaite avec soin depuis les assets du moteur, s'affichait floue sur la fiche publique. Le réflexe aurait été de refaire l'image. L'inspecteur du navigateur a montré autre chose : le bandeau affiché n'était pas mon image. Tant qu'une bande-annonce est rattachée à une fiche, le Play Store affiche à sa place la miniature YouTube de la vidéo, une vignette de 480 pixels étirée d'un facteur trois. Mon image n'apparaissait nulle part. Aucun réglage ne le change. Vérification sur les fiches de quelques géants : pas de vidéo rattachée, bandeau net.

La bande-annonce m'avait coûté des jours. Je l'ai retirée le soir même : sur une fiche à zéro visiteur, une vidéo que personne ne lance vaut moins qu'un bandeau net que tout le monde voit. La technique à retenir dépasse les stores : quand un rendu déçoit, ouvrir l'inspecteur et mesurer ce qui est réellement servi avant de refaire l'asset. Le DOM est un outil de designer, y compris chez les autres.

## Pendant ce temps, le jeu gelait

Le front d'en face s'est ouvert le 27 juillet. Un joueur, mode Zen, 245 mètres : écran figé, toucher mort, musique toujours vivante. Un second message le lendemain, autour de 170 mètres, mot pour mot. Cette signature se lit : quand l'image meurt et que le son survit, le fil d'exécution principal est bloqué. Et je ne pouvais rien lire d'autre, parce que Wobblox n'a aucun accès réseau, donc aucune remontée de plantage. Mon outil de supervision était la mémoire de deux joueurs.

Trois campagnes de correction ont suivi, menées tambour battant avec l'IA en auditeur. Elles ont trouvé sept défauts parfaitement réels, du groupe de threads capable de bloquer le moteur jusqu'à cette trouvaille que je garde en réserve pour les dîners : un nombre peut être fini au sens du test standard et valoir moins mille milliards, ce qui envoyait une boucle de jalons dans cinquante millions d'itérations. Les gardes vérifient désormais la plausibilité, pas la validité. Chaque campagne a publié son correctif. Le gel est revenu trois fois.

C'est la leçon de diagnostic la plus chère du projet : corriger de vrais défauts n'est pas corriger le défaut, et un symptôme qui survit aux correctifs ne dit pas que les correctifs étaient mauvais, il dit que la famille d'hypothèses est fausse. L'IA cherchait vite, mais elle cherchait où je pointais : trois fois je lui ai demandé un accident, trois fois elle en a trouvé un.

Entre deux campagnes, un chantier discret a changé la nature du problème : le blindage des données. Le record ne s'écrivait qu'en fin de partie propre, donc un gel le volait. Réécrit en écriture continue, tous les deux mètres, avec une photographie de la partie rejouée au démarrage si l'application meurt. Au rapport de gel suivant, la joueuse l'a noté d'elle-même : cette fois, les records ont été enregistrés. Le bug n'était pas vaincu, il avait cessé de voler. En production, la perte de données est un défaut de conception qui attend sa panne.

## Construire l'instrument, puis frapper une fois

Pour la quatrième campagne, j'ai arrêté les hypothèses et construit un instrument. Le jeu écrit désormais son pouls dans le journal du téléphone : toutes les dix secondes, quelques chiffres, dont la durée de la pire image de la fenêtre. Avec une précaution d'artisan : la frame qui porte la mesure est exclue de la mesure suivante, parce qu'un instrument qui fabrique ce qu'il mesure ne prouve rien.

Une vraie partie sur un vrai téléphone a suffi. À 58 blocs, la pire image coûtait 33 millisecondes. À 105 blocs, 50. À 150, 64. À 197, 73. Aucun accident nulle part : une pente. Le chronométrage fin a désigné le coupable en une soirée : pour décider si un bloc était porté par la tour, le code comparait chaque bloc à tous les autres, à chaque image pendant les chutes. Multiplier les blocs par cinq multipliait le coût par vingt-quatre. Sur un téléphone modeste, l'écran restait figé pendant toute la durée d'un effondrement. Et tout s'expliquait d'un coup, y compris l'absence de seuil dans les rapports : 170, 200, 245 mètres, il n'y avait pas de seuil, seulement une pente et des téléphones plus ou moins rapides pour la sentir. Le jeu punissait très exactement les joueurs qui jouaient bien.

La correction tient en une idée simple : les blocs vivent dans une pile triée, un bloc ne se compare qu'à ses voisins immédiats. Mêmes décisions, vérifiées bloc par bloc contre l'ancienne version. La pire image est retombée à 17 millisecondes et n'a plus bougé jusqu'à 282 blocs ; le banc d'essai à 600 blocs est passé de 11 à 60 images par seconde. Puis le geste qui transforme une victoire en acquis : un test garde la porte : si quelqu'un réintroduit un jour un balayage complet, il échoue avant toute publication. Chaque cause corrigée du projet a fini ainsi, en gate. Un bug corrigé sans test de garde n'est pas corrigé, il est en sursis.

Ce correctif a payé un bonus inattendu : pour tenir les tours géantes, j'avais envisagé de faire disparaître le bas des tours, un compromis de design arraché par la technique. Plus besoin. La question « jusqu'où peut-on monter » est redevenue une question de design. Les bonnes corrections de performance rendent des libertés qu'on avait cédées sans s'en apercevoir.

## Le coup le plus rentable n'a rien produit

La meilleure décision du mois n'a pas touché une ligne de code. En remplissant les formulaires de conformité, l'inventaire m'a sauté aux yeux : sans l'avoir cherché, Wobblox était un des jeux les plus propres du magasin pour un enfant. Aucune publicité, aucun achat, aucun compte, aucune collecte, pas même un accès Internet. Or il existe une étagère où ces propriétés sont exactement ce que des gens cherchent avec l'intention d'installer : les parents qui tapent « jeu gratuit sans pub pour enfant ». Sur l'étagère des jeux d'empilement, Wobblox est le millième entrant. Sur celle-là, un des rares candidats qui tient la promesse. Huit exigences de la politique Familles de Google, huit déjà satisfaites, zéro développement.

Un piège attendait au coin, et l'éviter vaut la peine d'être raconté : cocher « conçu pour les enfants » sur la chaîne YouTube semblait cohérent avec ce virage. Cette case coupe les commentaires, les notifications et l'essentiel de la distribution des vidéos. Cette case engage une qualification légale du contenu ; la cible marketing se joue ailleurs. Les vidéos restent grand public ; le jeune public se gagne dans le magasin. Tout le repositionnement tient dans ce geste : le produit disait déjà la vérité, il restait à la dire à l'endroit où quelqu'un la cherche.

## Solde de tout compte

Le 10 juin, un dépôt vide. Aujourd'hui : un jeu gratuit dans 172 pays, une fiche qui porte le bon nom sur les bonnes étagères, des assets que le jeu produit lui-même, un moteur qui tient 600 blocs, des sauvegardes qui survivent à tout, un produit qui écrit son état de santé dans une ligne de journal lisible en dix secondes. La prochaine panne se diagnostiquera en une ligne au lieu d'un mois.

L'IA a fourni la vitesse, du premier commit au pilote automatique ; sans elle rien de tout cela n'existerait. Ce qui a décidé du sort du produit est resté de bout en bout du même côté : écrire la bonne exigence, choisir la bonne étagère, refuser la bonne hypothèse, construire l'instrument avant de conclure. C'était vrai dans un open space, ça reste vrai seul à sa table avec une machine brillante. Le métier n'a pas rétréci. Il s'est juste retrouvé, pour la première fois, sans personne d'autre à qui le déléguer.
