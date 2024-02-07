# Réservation de places de spectacle

Ce projet permet de réserver des places pour un ou plusieurs spectacles en choissisant la date et le nombre de places.

## Fonctionnalités : 
 - Lors du chargement de la page, l'utilisateur doit choisir une date de spectacle et un nombre de place, il ne peut valider sa réservation que si les champs de choix son bien rempli.
 - Le bouton d'ajout n'apparait sur la page que lorsque qu'une date et un nombre de place ont été choisie pour la première réservation.
 - Lorsque qu'une réservation est ajouté avec le bouton d'ajout la date choisie lors sur la réservation précédante est non modifiable (il faut que l'utilisateur supprime sa nouvelle réservation pour pouvoir a          nouveau modifier la date de la réservation précédante).
 - Lorsque qu'une réservation est ajouté avec le bouton d'ajout la date choisie sur la réservation précédante ne peut plus être choisie sur cette nouvelle réservation.
 - Si l'utilisateur a choisi toute les dates de spectacle proposés, le bouton d'ajout de réservation se bloque car il n'y a plus de spectacle a réserver.
 - Si une réservation est supprimée, la date associée a cette réservation est de nouveau dans la liste des dates réservable.
 - Lors de la validation des réservations, un message prévient l'utilisateur que sa réservation a bien été prise en compte.

## Étapes :
 - Création de la page HTML 'de base' (fichier index.html)
 - Stylisation de la page avec index.css
 - Ajout du fichier index.js et de ses fonctionnalités :
    - Ecouteur d'événement sur le bouton d'ajout de formulaires
    - Ajout du formulaire lors du clic (création du div et du form, ajout des options en fonction du tableau options)
    - Bouton de suppression de formulaire pour chaque nouveau formulaire & écouteur d'événements pour suppression
    - fonction updateOptions pour que les options du selecteur soient supprimées de options et ajoutées a removed_options lors d'un ajout de formulaire et inverssement lors de la suppression
    - Désactivation et réactivation des sélecteurs de dates pour les formulaires précédant (lors de l'ajout de formulaire)
    - Désactivation et réactivation du bouton d'ajout de formulaire (si plus d'options dans le tableau options) et réactivation lors de la suppression