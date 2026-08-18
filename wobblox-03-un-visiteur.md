# Un visiteur en vingt-huit jours

*Troisième épisode du récit de Wobblox, un jeu de physique Android construit par un product designer et Claude Code. Le jeu est en ligne, en vente dans 172 pays. Cet épisode raconte la partie dont personne ne parle dans les récits de création : exister. Une fiche que personne ne voit, une décision irréversible, une bande-annonce qui sabotait tout et un repositionnement qui n'a pas touché une ligne de code.*

[IMAGE 1 — couverture : l'image de présentation du Play Store, la tour de cinq blocs dont les visages racontent la montée, du bloc endormi en bas au bloc paniqué au sommet. Recadrée en 1500×750.]

---

Cinq jours après la sortie, je me suis connecté à la console Google pour relever les compteurs. Le rapport d'acquisition couvre une fenêtre glissante de vingt-huit jours. Visiteurs de la fiche : un. Une personne, un seul jour, début juillet. Installations venues du magasin : zéro.

La fenêtre couvrait pour l'essentiel la période du test fermé, il fallait donc la lire pour ce qu'elle disait : pendant un mois où la fiche était en ligne et trouvable, un seul être humain l'avait croisée, probablement par accident. La sortie publique du 20 juillet n'y avait rien changé. Les seize appareils actifs que montrait l'autre rapport étaient mes testeurs.

Mon premier réflexe a été celui de mon métier : améliorer la fiche. Retravailler les captures, réécrire la description, soigner la conversion. C'est le problème qu'un designer sait traiter, donc c'est le problème qu'il voit. Le chiffre disait autre chose. Un taux de conversion s'applique à un trafic. Multiplier zéro ne donne rien, quel que soit le soin mis dans la multiplication. Avant de rendre la vitrine convaincante, il fallait qu'une rue passe devant.

## Le prix, réglé en un dialogue définitif

La première décision du jour ne demandait aucun talent, seulement d'accepter son caractère définitif. Le jeu était en vente à 0,99 €. Google l'écrit sans détour dans sa documentation : les applications payantes ne sont pas mises en avant, et une bonne partie des surfaces de recommandation leur est fermée. Pour un jeu sans le moindre canal de trafic, le prix n'était pas une source de revenus. C'était un mur entre le jeu et le seul apporteur d'audience disponible.

La console affiche alors un dialogue que je relis encore : convertir en application gratuite est irréversible, vous ne pourrez plus jamais la rendre payante. J'ai confirmé. C'est un genre de décision que le travail en organisation ne m'avait jamais fait rencontrer sous cette forme nue : pas de test préalable, pas de retour arrière, un clic qui ferme une porte pour toujours. On vérifie deux fois son raisonnement, puis on clique, puis on note dans un journal pourquoi on l'a fait, pour le jour où on se le redemandera.

## Une étagère se choisit comme un rayonnage

La deuxième décision relevait cette fois pleinement du design, sauf qu'elle ne ressemblait à aucun écran. Le Play Store range chaque jeu sur des étagères de comparaison à partir de ses tags, et ces étagères alimentent les recommandations « jeux similaires », le seul canal de découverte qui fonctionne sans notoriété. Parmi mes tags figurait « Jeu d'alignement ». Le terme désigne les jeux où l'on aligne trois objets identiques. Wobblox est un jeu d'empilement. Ce tag rangeait donc le jeu au rayon des match-3, où il ne ressemblait à rien de ce qui l'entourait. Le système de recommandation en tirait les conclusions.

Je l'ai remplacé par le tag du rayon où vivent les concurrents directs, les jeux de blocs à empiler. J'ai aussi laissé un emplacement vide sur les cinq disponibles : le tag restant, celui de l'hyper-casual, décrivait bien le format des sessions mais aurait comparé le jeu au rayon le plus saturé du magasin. Un tag juste mais mal situé coûte plus cher qu'un emplacement vide.

Même logique sur le nom. Le champ le plus pondéré du référencement du magasin est le titre, limité à trente caractères. Le mien en utilisait sept : « Wobblox », un mot que personne au monde ne tape. Il est devenu « Wobblox : Tour de Blocs ». Ce ne sont pas des gestes de marketeur, ce sont des gestes d'architecture de l'information appliqués à la surface d'un tiers. Le rayonnage, l'étiquette, le libellé. Le métier est le même, l'écran n'est pas à nous.

## La bande-annonce qui rendait tout flou

Restait un mystère plus retors. J'avais refait l'image de présentation de la fiche, celle qui s'affiche en bandeau au sommet. Refaite proprement : les blocs rendus par le moteur du jeu lui-même, les visages comme sujet, une tour de cinq émotions qui se lit de bas en haut, du bloc endormi au bloc paniqué. Une image dont j'étais content.

Et le porteur de mauvaise nouvelle a été mon propre téléphone : sur la fiche publique, le bandeau était flou. Pixellisé, indigne de ce qui avait été produit.

Plutôt que d'accuser l'image, j'ai ouvert l'inspecteur du navigateur sur la fiche publique et mesuré ce qui s'affichait réellement. Le bandeau n'était pas mon image. C'était la miniature YouTube de la bande-annonce, une vignette de 480 pixels sur 360, bandes noires comprises, que le Play Store étirait jusqu'à 830 pixels sur 466. Un agrandissement d'un facteur trois en surface, sur le premier élément que voit chaque visiteur. Mon image de présentation, elle, n'apparaissait nulle part : tant qu'une vidéo est rattachée à une fiche, le web du Play Store la remplace par la miniature de la vidéo. Aucun réglage ne le change. J'ai vérifié les fiches de quelques géants du secteur : aucune vidéo rattachée, bandeau net servi depuis leur image. Le facteur discriminant était la vidéo elle-même.

La bande-annonce m'avait coûté des jours de production. Je l'ai retirée de la fiche le soir même. Sur une fiche à zéro visiteur, une vidéo que personne ne lance rapporte moins qu'un bandeau net que tout le monde voit. La leçon vaut au-delà des magasins d'applications : quand un rendu déçoit, mesurer où vit réellement le pixel avant de refaire l'asset. L'inspecteur DOM est un outil de designer, y compris sur les surfaces qu'on ne possède pas.

[IMAGE 2 — ici : côte à côte, la miniature YouTube 480×270 agrandie telle que la servait le Play Store, et l'image de présentation nette qui la remplace. Format 1500 px de large.]

## Changer de rayon sans toucher au produit

La dernière décision de cette période est celle dont je suis le plus fier, parce qu'elle n'a rien produit. Pas une ligne de code, pas un écran.

En dressant l'inventaire du jeu pour la conformité, un fait m'a sauté aux yeux : Wobblox était déjà, techniquement, un des jeux les plus propres du magasin pour un enfant. Classé tous publics, sans publicité, sans achat intégré, sans compte, sans collecte de données, sans même un accès à Internet. Une seule autorisation Android, la vibration. Rien de tout cela n'avait été construit pour les enfants. C'était l'effet de bord d'un projet sans budget marketing et sans infrastructure.

Or il existe une étagère où ces propriétés sont exactement ce que des gens cherchent : les parents qui tapent « jeu gratuit sans pub pour enfant ». Sur l'étagère des jeux d'empilement, Wobblox est le millième entrant derrière des clones financés. Sur celle-là, il est un des rares candidats qui tient la promesse. La déclaration du public cible dans la console, la confrontation aux huit exigences de la politique Familles de Google : huit sur huit déjà satisfaites, zéro développement nécessaire. Le repositionnement n'a rien fabriqué. Il a dit ce qui était déjà vrai, à l'endroit où quelqu'un le cherche.

Un piège symétrique attendait au tournant, pour la petite histoire : cocher « conçu pour les enfants » sur la chaîne YouTube aurait semblé cohérent, sauf que cette case coupe les commentaires, les notifications et l'essentiel de la distribution des vidéos. La désignation est une déclaration légale sur le contenu, pas un choix de cible. Les vidéos d'un jeu de physique grand public n'en relèvent pas. Le public jeune se gagne dans le magasin, pas sur YouTube.

## Ce que ces trois semaines ont pesé

Ma contrainte la plus dure sur cette période n'était ni l'argent ni la technique. C'était une enveloppe d'une heure par semaine de temps humain disponible, qui obligeait à trier chaque geste selon un critère unique : est-ce que ce geste peut amener ne serait-ce qu'un joueur. L'IA a encaissé le reste, les textes de fiche mesurés au caractère près, les captures produites par un pilote automatique qui joue réellement au jeu au lieu de mettre en scène des images.

Et pendant que je fabriquais des rues vers la vitrine, les premiers joueurs venus d'ailleurs ont fini par pousser la porte. Deux d'entre eux m'ont écrit à un jour d'intervalle, en des termes presque identiques : en pleine partie, très haut dans une tour, l'écran s'est figé. Le toucher ne répondait plus. La musique, elle, continuait de jouer. Le dernier épisode de ce récit raconte le mois qu'a duré cette phrase.
