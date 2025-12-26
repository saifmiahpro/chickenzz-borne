# Audit & Plan de Sauvetage : Menu TV Chickenzz

Ce document est une analyse critique de l'état actuel du projet et définit une feuille de route stricte pour atteindre le niveau de qualité "Chicken Street / KFC Récent" attendu, sans coder, juste en structurant la vision.

---

## 1. Diagnostic : Pourquoi "C'est pas beau" ?

Après analyse de l'historique et du rendu actuel (Version "Freestyle Final"), voici les problèmes visuels majeurs identifiés :

*   **Le Background "Vide" :** Le fond actuel (noir + lignes grises + rayon jaune) fait "fond d'écran par défaut". Il manque de matière, de texture. Il absorbe les produits au lieu de les sublimer. Il fait "froid".
*   **L'Effet "Clipart" :** Les buckets flottent dans le vide sans ombre portée réaliste au sol. On dirait qu'ils sont collés sur l'écran, ils ne sont pas "posés" dans un décor. Ça casse l'immersion.
*   **Discordance Graphique :**
    *   La **Sidebar** est très "Tableau/Liste" (Rigide, Pro).
    *   Le **Stage (Droite)** est très "Zig-Zag/Freestyle" (Chaotique).
    *   Les deux ne communiquent pas. On a l'impression d'avoir deux sites web différents collés l'un à côté de l'autre.
*   **Animation "PowerPoint" :** Les transitions actuelles (Slide In / Slide Out) sont trop basiques. Les grandes enseignes utilisent des *masques*, des *décalages de calques* (le texte bouge à une vitesse différente de l'image) pour donner un effet luxueux.

---

## 2. Inventaire : Ce qu'on GARDE absolument

Ces éléments sont validés et constituent la colonne vertébrale du projet :

1.  **Layout Split-Screen 30/70 :** Sidebar à gauche, Show à droite. C'est le standard ergonomique TV.
2.  **La Sidebar (Contenu) :** La liste Tex-Mex, le header "TEX MEX", le footer "Frites/Potatoes". La structure est bonne.
3.  **La Lisibilité Produit :** La liste verticale à puces (3 Wings, 2 Tenders...) est parfaite pour la compréhension client.
4.  **Zéro "Case" :** Pas de grille, pas de boîtes qui enferment les buckets. On veut de l'air.
5.  **Logo XXL & Halal :** Le logo rond sans marge (plein cadre) et le sceau Halal Or doivent rester proéminents.
6.  **Format 16:9 Natif :** Le conteneur 1920x1080 fixe est impératif pour la TV.

---

## 3. Le Plan de Bataille : 4 Étapes pour Réussir

Nous allons reconstruire le design couche par couche.

### ÉTAPE 1 : Refonte du Background (L'Atmosphère)
Le noir pur est interdit. Il faut créer un "Univers".
*   **Action :** Remplacer le fond abstrait par un **Fond Texturé "Premium"**.
    *   *Option A (Urbain) :* Un mur de béton sombre lissé avec un éclairage "Spot" chaud.
    *   *Option B (Chaleureux) :* Un dégradé très subtil "Charbon vers Orange Profond" pour réchauffer le poulet.
*   **Objectif :** Que le fond fasse "Restaurant", pas "Informatique".

### ÉTAPE 2 : Ancrage des Produits (La Physique)
Les produits ne doivent plus voler.
*   **Action :** Créer un "Sol" virtuel ou une forte **Ombre Portée (Drop Shadow)** sous les buckets.
*   **Action :** Utiliser la profondeur de champ. Les éléments doivent avoir l'air d'être à des distances différentes (Texte derrière, Bucket devant, Prix encore plus devant).

### ÉTAPE 3 : Typographie & Badges (Le Style)
Harmoniser les polices entre la gauche et la droite.
*   **Action :** Uniformiser les polices (Anton/Oswald partout).
*   **Action :** Refaire la "Bulle Prix". Le rond rouge est efficace mais un peu agressif. Peut-être essayer un style "Tampon Encreur" ou "Étiquette Urbaine" (jaune et noir) qui colle mieux au logo.

### ÉTAPE 4 : Animation "Broadcast" (Le Mouvement)
Abandonner le "Slide" simple.
*   **Action :** Utiliser la technique du **"Mask Reveal"**. L'image ne bouge pas de gauche à droite, elle se "dévoile" (comme un store qui s'ouvre). C'est beaucoup plus chic.
*   **Action :** Pour la "Vue Globale", au lieu de les éparpiller, on va les faire arriver en **Formation Serrée** (comme une équipe de super-héros), très impactant.

---

## 4. Conclusion & Prochaine Action

**Le problème actuel n'est pas le code, c'est la Direction Artistique.** Nous avons essayé d'être "Fun" et "Sérieux" en même temps, ce qui a créé un mélange confus.

**La solution :** Adopter le style **"STREET CHIC"**. Sombre, Texturé, Doré, avec des mouvements secs et précis.

Si tu valides ce plan (notamment le changement de Background et l'ancrage des produits), je peux coder cette nouvelle version "Street Chic" directement.
