# PRD — Kality Care (ex-Yames)
## Product Requirements Document — Site E-commerce de Matériel Médical au Mali

---

## 1. CONTEXTE ET VISION

**Nom du projet :** Kality Care  
**Anciennement :** Yames / Yama Médical Services  
**Slogan :** Mieux équiper — Plus sauver  
**Localisation :** Bamako, Mali  
**Contact :** +223 72 08 09 37 | contact@kalitycare.com  

**Vision :** Plateforme e-commerce de matériel médical certifié, accessible aux particuliers, pharmacies et cliniques au Mali. Paiement mobile local (Orange Money, Wave), livraison à Bamako.

---

## 2. STACK TECHNIQUE

### Frontend
- HTML5 / CSS3 / JavaScript vanilla (pas de framework)
- Fichier CSS unique : `yames.css`
- Fichier JS unique : `yames.js`
- Pas de build tool, pas de npm côté frontend

### Backend
- Node.js + Express
- MongoDB Atlas (cloud, gratuit M0)
- Mongoose ODM
- CORS, dotenv
- Hébergé sur Render.com

### Services tiers
- Formspree (formulaire contact, gratuit 50 msg/mois)
- Formspree ID à configurer dans Contact.html

---

## 3. STRUCTURE DES FICHIERS

```
project-kalitycare/
├── index.html              # Accueil
├── catalogue.html          # Catalogue avec filtres
├── produit.html            # Page détail produit (?id=X)
├── panier.html             # Panier + infos livraison + paiement
├── commande-confirmee.html # Page de confirmation après commande ← À CRÉER
├── connexion.html          # Connexion compte
├── inscription.html        # Création compte
├── compte.html             # Mon compte + historique commandes
├── apropos.html            # À propos + Qui sommes-nous + Why us
├── Contact.html            # Contact redesigné
├── Professionnels.html     # Page pros (bientôt disponible)
├── admin.html              # Panel admin (protégé par mot de passe)
├── yames.css               # CSS global unique
├── yames.js                # JS global unique
├── logo yames.png          # Logo (à renommer logo-kalitycare.png)
├── img/                    # Images produits et catégories
│   ├── cat-equipement.jpg
│   ├── cat-consommables.jpg
│   └── [id-produit].jpg    # Une image par produit
└── backend/
    ├── server.js
    ├── package.json
    ├── .env                # NE PAS COMMITTER
    └── .gitignore
```

---

## 4. DONNÉES PRODUITS (source de vérité dans yames.js)

Structure de chaque produit :
```javascript
{
    id: Number,             // Identifiant unique
    nom: String,            // Nom commercial français
    prix: Number,           // Prix en FCFA
    image: String,          // Chemin relatif ex: "img/mk01-211c.jpg"
    categorie: String,      // "clinique" ou "consommable"
    promo: Boolean,         // true si en promotion
    stock: Boolean,         // true si disponible
    description: String     // Description commerciale française
}
```

32 produits actifs. Le tableau `const produits = [...]` dans `yames.js` est la **seule source de données produits** — catalogue, accueil, page produit, recherche, filtres lisent tous depuis ce tableau.

---

## 5. FONCTIONNALITÉS EXISTANTES (NE PAS CASSER)

### 5.1 Affichage produits
- `afficherProduits(liste, limite)` : génère les cartes produits dynamiquement
- Accueil : limite à 4 produits (section `.featured-products`)
- Catalogue : tous les produits avec pagination (12 par page, `PRODUITS_PAR_PAGE = 12`)
- Clic sur image/nom → `produit.html?id=X`

### 5.2 Recherche
- Barre de recherche live avec dropdown (fonction `initRechercheLive()`)
- Algorithme de pertinence avec score (fonctions `scorePertinence()` + `distanceLevenshtein()`)
- Entrée/Submit → redirige vers `catalogue.html?q=texte`
- Dans le catalogue : champ `#recherche-nom` lit le paramètre `?q=` au chargement

### 5.3 Filtres catalogue
- Catégories (checkboxes), Prix min/max, Tri, Filtre promo/stock
- Bouton reset → `reinitialiserFiltres()`
- Tout passe par `appliquerFiltres()` + `appliquerFiltresEtResetPage()`

### 5.4 Panier
- Stocké dans `localStorage` (clé : `"panier"`)
- Format : `[{ id: Number, quantite: Number }]`
- Badge `#cart-count` mis à jour sur toutes les pages
- Animation bouton "Ajouter au panier" (vert 0.8s)

### 5.5 Paiement
- Modal avec 4 options : Orange Money, Wave, Carte (bientôt), Liquide
- `confirmerCommande(methode)` : async, envoie au backend + ouvre WhatsApp
- `BACKEND_URL` = URL Render en production

### 5.6 Comptes utilisateurs
- Simulation localStorage (backend réel prévu)
- `inscrireUtilisateur()`, `connecterUtilisateur()`, `deconnecterUtilisateur()`
- `mettreAJourNavCompte()` : change "Connexion" → "Mon compte" dans la nav
- Historique commandes lié à l'email de l'utilisateur connecté

### 5.7 Backend (Node.js + MongoDB)
- `POST /api/commandes` : créer une commande
- `GET /api/admin/commandes` : liste (protégé)
- `PATCH /api/admin/commandes/:numero/statut` : changer statut (protégé)
- `GET /api/admin/stats` : stats globales (protégé)
- Authentification admin : header `x-admin-password`
- Numéro commande auto : `YMS-ANNEExxxx`

### 5.8 Admin panel
- `admin.html` : connexion par mot de passe
- Tableau commandes avec filtres par statut
- Modal de gestion par commande (statut + notes)
- Stats : total, en attente, livrées, CA

---

## 6. FONCTIONNALITÉS À IMPLÉMENTER

### 6.1 RENOMMAGE : Yames → Kality Care [PRIORITÉ 1]
**Partout où l'utilisateur voit "Yames" dans l'interface :**
- Titre des pages HTML (`<title>`)
- Textes dans les sections hero, footer copyright
- Slogan dans le hero : "Kality Care — Mieux équiper, Plus sauver"
- WhatsApp message dans `confirmerCommande` : remplacer "Yames" par "Kality Care"
- Ne PAS renommer les fichiers `.js` et `.css` (garder `yames.js` et `yames.css` pour éviter de casser les liens)
- Ne PAS renommer les variables/fonctions JS internes

### 6.2 FORMULAIRE LIVRAISON INTELLIGENT [PRIORITÉ 1]
**Fichier concerné :** `Panier.html` + `yames.js`

Comportement attendu :
- Le formulaire livraison (#livraison-nom, #livraison-tel, #livraison-adresse, #livraison-email) est CACHÉ par défaut
- Il apparaît UNIQUEMENT quand l'utilisateur clique "Passer au paiement"
- Si l'utilisateur est connecté → pré-remplir automatiquement avec ses données (nom, téléphone, email depuis `getUtilisateurConnecte()` + localStorage utilisateur)
- Validation numéro Mali : doit commencer par +223 ou 00223 ou 7 chiffres commençant par 6, 7, 8 ou 9 → regex : `/^(\+223|00223)?[6-9]\d{7}$/`
- Si numéro invalide → message d'erreur rouge inline sous le champ, bloquer la progression
- Email obligatoire avec validation format standard
- Impossible de passer au paiement si UN SEUL champ obligatoire est vide ou invalide
- Bouton "Passer au paiement" → vérifie le formulaire → si OK ouvre la modal paiement

### 6.3 REDIRECTION AUTOMATIQUE VERS PANIER [PRIORITÉ 1]
**Fichier concerné :** `yames.js` dans le gestionnaire de clic `btn-add-cart`

Comportement :
- Clic "Ajouter au panier" → animation vert 0.8s (garder l'existant)
- Après 0.8s → rediriger automatiquement vers `panier.html`
- Ne PAS ouvrir un nouvel onglet, utiliser `window.location.href = "panier.html"`

### 6.4 PAGE CONFIRMATION COMMANDE [PRIORITÉ 1]
**Nouveau fichier :** `commande-confirmee.html`

Contenu :
- Header nav identique aux autres pages
- Section centrale avec : icône ✅ verte, "Commande confirmée !", numéro de commande (lu depuis `?numero=YMS-XXXX` dans l'URL), récapitulatif (nom client, mode de paiement, montant total), bouton "Voir mes commandes" → compte.html, bouton "Continuer mes achats" → catalogue.html
- Pas de footer spécial, footer standard

Dans `confirmerCommande()` dans `yames.js` : après succès, au lieu de juste vider le panier, rediriger vers `commande-confirmee.html?numero=YMS-XXXX&total=XXXXX&methode=orange`

### 6.5 PHOTOS PRODUITS PLEINE LARGEUR [PRIORITÉ 2]
**Fichier concerné :** `yames.css`

Modifier `.product-card img` :
```css
.product-card img {
    width: 100%;
    height: 180px;          /* augmenter la hauteur */
    object-fit: cover;
    border-radius: 6px 6px 0 0;   /* arrondi seulement en haut */
    background-color: #E6F1FB;
    display: block;
    margin: -12px -12px 0 -12px;  /* compenser le padding de la carte */
    width: calc(100% + 24px);     /* déborder sur les côtés */
}
```

Et `.product-link` qui englobe l'image :
```css
.product-link {
    display: block;
    margin: -12px -12px 10px -12px;
    overflow: hidden;
    border-radius: 6px 6px 0 0;
}
```

---

## 7. RÈGLES ABSOLUES (NE JAMAIS FAIRE)

1. **Ne pas créer de fichier CSS séparé** — tout va dans `yames.css`
2. **Ne pas créer de fichier JS séparé** — tout va dans `yames.js`
3. **Ne pas modifier la structure du tableau `produits`** sans mettre à jour TOUS les endroits qui l'utilisent
4. **Ne pas toucher au backend** sauf si explicitement demandé
5. **Ne pas changer `BACKEND_URL`** — elle est configurée pour Render
6. **Ne pas supprimer `defer`** sur le `<script src="yames.js">` dans les pages HTML
7. **Ne pas utiliser localStorage pour stocker des mots de passe en clair** — la simulation actuelle est temporaire
8. **Ne pas casser la pagination** — `pageActuelleCatalogue` est une variable globale, ne pas la redéclarer avec `let` dans une fonction
9. **Ne pas modifier `admin.html`** sauf si demandé explicitement
10. **Toujours tester** que l'accueil affiche bien 4 produits et le catalogue tous les produits après chaque modification de `afficherProduits()`

---

## 8. VARIABLES GLOBALES JS IMPORTANTES

```javascript
const BACKEND_URL = "https://[url-render].onrender.com"; // URL backend Render
const PRODUITS_PAR_PAGE = 12;                            // Pagination catalogue
let pageActuelleCatalogue = 1;                           // Page courante
const produits = [...];                                  // Tableau produits (source unique)
```

---

## 9. PALETTE DE COULEURS (NE PAS MODIFIER)

```
Bleu principal      : #185FA5
Bleu foncé          : #0C447C
Bleu très foncé     : #042C53
Bleu clair (fond)   : #E6F1FB
Bleu texte clair    : #B5D4F4
Vert WhatsApp       : #25D366
Vert clair (fond)   : #EAF3DE
Vert texte          : #3B6D11
Rouge erreur        : #c0392b
Fond page           : #f5f5f5
Texte principal     : #2C2C2A
Texte secondaire    : #555
Texte gris          : #888
Bordures            : #ddd / #e8e8e8
```

---

## 10. FONCTIONS JS CLÉS — SIGNATURES

```javascript
// Affichage
afficherProduits(listeProduits, limite = null, page = 1)
afficherPanier()
afficherPageProduit()
afficherPageCompte()

// Filtres
appliquerFiltres()
appliquerFiltresEtResetPage()
reinitialiserFiltres()
changerPage(nouvellePage)
afficherPagination(total, pageActuelle, totalPages)

// Panier
getPanier() → Array
savePanier(panier)
ajouterAuPanier(idProduit)
changerQuantite(idProduit, delta)
retirerDuPanier(idProduit)
mettreAJourCompteurPanier(animer = false)

// Paiement
confirmerCommande(methode)           // async
getDetailsPaiement(methode, total)
getTotalPanier() → Number

// Recherche
initRechercheLive()
scorePertinence(texte, nomProduit) → Number
distanceLevenshtein(a, b) → Number

// Comptes
inscrireUtilisateur(nom, telephone, email, motdepasse)
connecterUtilisateur(email, motdepasse)
deconnecterUtilisateur()
getUtilisateurConnecte() → Object|null
mettreAJourNavCompte()
initFormulairesAuth()
enregistrerCommande(panier, methode, total)
```

---

## 11. FORMAT DES COMMANDES BACKEND

```json
{
  "numero": "YMS-20260001",
  "date": "2026-06-27T10:30:00Z",
  "client": {
    "nom": "Nom du client",
    "telephone": "+22372080937",
    "adresse": "Badalabougou, face à la pharmacie",
    "email": "client@email.com"
  },
  "articles": [
    { "id": 1, "nom": "Tensiomètre manuel", "prix": 8000, "quantite": 2, "sousTotal": 16000 }
  ],
  "total": 16000,
  "modePaiement": "Orange Money",
  "statut": "En attente",
  "notes": ""
}
```

Statuts possibles : `"En attente"` | `"Confirmée"` | `"En livraison"` | `"Livrée"` | `"Annulée"`
