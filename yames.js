// ===========================================
// 1. DONNÉES PRODUITS (source unique pour tout le site)
// ===========================================
const produits = [
    { id: 1, nom: "Tensiomètre numérique", prix: 15000, image: "paysage8.jpg", categorie: "tensiometre", description: "Tensiomètre numérique automatique pour bras, idéal pour un usage à domicile ou en clinique. Mesure précise de la pression artérielle et du pouls, écran large et facile à lire, mémoire pour plusieurs utilisateurs." },
    { id: 2, nom: "Thermomètre infrarouge", prix: 8000, image: "img/thermometre.jpg", categorie: "thermometre", description: "Thermomètre infrarouge sans contact, mesure la température en quelques secondes. Adapté aux enfants comme aux adultes, idéal pour les familles, cliniques et pharmacies." },
    { id: 3, nom: "Stéthoscope professionnel", prix: 45000, image: "img/stethoscope.jpg", categorie: "clinique", description: "Stéthoscope de qualité professionnelle, double pavillon pour adultes et enfants. Excellente acoustique pour l'auscultation cardiaque et pulmonaire, conçu pour un usage clinique intensif." },
    { id: 4, nom: "Kit de premiers soins", prix: 22000, image: "img/kit-soins.jpg", categorie: "consommable", description: "Kit complet de premiers soins comprenant pansements, compresses, antiseptique, ciseaux et bandages. Indispensable pour la maison, le bureau, ou le véhicule." },
    { id: 5, nom: "Tensiomètre manuel", prix: 12000, image: "img/tensiometre-manuel.jpg", categorie: "tensiometre", description: "Tensiomètre manuel à brassard avec stéthoscope intégré. Solution fiable et économique pour la mesure de la pression artérielle en cabinet médical." },
    { id: 6, nom: "Thermomètre digital", prix: 5000, image: "img/thermometre-digital.jpg", categorie: "thermometre", description: "Thermomètre digital classique, lecture rapide et précise. Compact, résistant et facile à utiliser au quotidien." },
    { id: 7, nom: "Lit médical", prix: 300000, image: "img/lit-medical.jpg", categorie: "clinique", description: "Lit médical réglable avec barrières de sécurité, idéal pour cliniques, hôpitaux et soins à domicile. Structure robuste et confortable pour le patient." },
    { id: 8, nom: "Boîte de gants jetables", prix: 8500, image: "img/gants.jpg", categorie: "consommable", description: "Boîte de gants jetables en nitrile, non poudrés, adaptés à un usage médical et hygiénique. Protection fiable pour le personnel soignant et les particuliers." },
    { id: 9, nom: "Tensiomètre numérique", prix: 15000, image: "img/tensiometre.jpg", categorie: "tensiometre", description: "Tensiomètre numérique automatique pour bras, idéal pour un usage à domicile ou en clinique. Mesure précise de la pression artérielle et du pouls, écran large et facile à lire, mémoire pour plusieurs utilisateurs." },
    { id: 10, nom: "Tensiomètre numérique", prix: 15000, image: "img/tensiometre.jpg", categorie: "tensiometre", description: "Tensiomètre numérique automatique pour bras, idéal pour un usage à domicile ou en clinique. Mesure précise de la pression artérielle et du pouls, écran large et facile à lire, mémoire pour plusieurs utilisateurs." },
    { id: 11, nom: "Tensiomètre numérique", prix: 15000, image: "img/tensiometre.jpg", categorie: "tensiometre", description: "Tensiomètre numérique automatique pour bras, idéal pour un usage à domicile ou en clinique. Mesure précise de la pression artérielle et du pouls, écran large et facile à lire, mémoire pour plusieurs utilisateurs." },
    { id: 12, nom: "Tensiomètre numérique", prix: 15000, image: "img/tensiometre.jpg", categorie: "tensiometre", description: "Tensiomètre numérique automatique pour bras, idéal pour un usage à domicile ou en clinique. Mesure précise de la pression artérielle et du pouls, écran large et facile à lire, mémoire pour plusieurs utilisateurs." },
    { id: 13, nom: "Tensiomètre numérique", prix: 15000, image: "img/tensiometre.jpg", categorie: "tensiometre", description: "Tensiomètre numérique automatique pour bras, idéal pour un usage à domicile ou en clinique. Mesure précise de la pression artérielle et du pouls, écran large et facile à lire, mémoire pour plusieurs utilisateurs." },
];

// ===========================================
// 2. AFFICHAGE DES PRODUITS (accueil / catalogue)
// ===========================================
const PRODUITS_PAR_PAGE = 12;

function afficherProduits(listeProduits, limite = null, page = 1) {
    const container = document.getElementById("product-container");
    if (!container) return;

    container.innerHTML = "";

    let liste = listeProduits;
    let totalPages = 1;

    if (limite) {
        // accueil : on coupe juste à "limite" produits, pas de pagination
        liste = listeProduits.slice(0, limite);
    } else {
        // catalogue : pagination
        totalPages = Math.ceil(listeProduits.length / PRODUITS_PAR_PAGE);
        const debut = (page - 1) * PRODUITS_PAR_PAGE;
        liste = listeProduits.slice(debut, debut + PRODUITS_PAR_PAGE);
    }

    if (liste.length === 0) {
        container.innerHTML = "<p class='no-result'>Aucun produit ne correspond à votre recherche.</p>";
    } else {
        liste.forEach(produit => {
            const card = document.createElement("div");
            card.className = "product-card";

            card.innerHTML = `
          <a href="produit.html?id=${produit.id}" class="product-link">
            <img src="${produit.image}" alt="${produit.nom}">
            <h3>${produit.nom}</h3>
          </a>
          <p class="price">${produit.prix.toLocaleString()} FCFA</p>
          <button class="btn-add-cart" data-id="${produit.id}">Ajouter au panier</button>
        `;

            container.appendChild(card);
        });
    }

    // affiche les boutons de pagination uniquement si pas de limite (catalogue)
    if (!limite) {
        afficherPagination(listeProduits.length, page, totalPages);
    }
}

// Génère les boutons de pagination (Précédent, numéros, Suivant)
function afficherPagination(totalProduits, pageActuelle, totalPages) {
    let paginationContainer = document.getElementById("pagination-container");

    // crée le conteneur s'il n'existe pas encore
    if (!paginationContainer) {
        paginationContainer = document.createElement("div");
        paginationContainer.id = "pagination-container";
        paginationContainer.className = "pagination";
        const productContainer = document.getElementById("product-container");
        productContainer.insertAdjacentElement("afterend", paginationContainer);
    }

    paginationContainer.innerHTML = "";

    // pas besoin de pagination s'il y a une seule page
    if (totalPages <= 1) return;

    // bouton "Précédent"
    const btnPrev = document.createElement("button");
    btnPrev.textContent = "← Précédent";
    btnPrev.className = "pagination-btn";
    btnPrev.disabled = pageActuelle === 1;
    btnPrev.addEventListener("click", () => changerPage(pageActuelle - 1));
    paginationContainer.appendChild(btnPrev);

    // boutons numérotés
    for (let i = 1; i <= totalPages; i++) {
        const btnPage = document.createElement("button");
        btnPage.textContent = i;
        btnPage.className = "pagination-btn" + (i === pageActuelle ? " active" : "");
        btnPage.addEventListener("click", () => changerPage(i));
        paginationContainer.appendChild(btnPage);
    }

    // bouton "Suivant"
    const btnNext = document.createElement("button");
    btnNext.textContent = "Suivant →";
    btnNext.className = "pagination-btn";
    btnNext.disabled = pageActuelle === totalPages;
    btnNext.addEventListener("click", () => changerPage(pageActuelle + 1));
    paginationContainer.appendChild(btnNext);
}

// Variable globale pour mémoriser la page actuelle
let pageActuelleCatalogue = 1;

// Change de page et réaffiche les produits avec les filtres actuels
function changerPage(nouvellePage) {
    pageActuelleCatalogue = nouvellePage;
    appliquerFiltres();

    // remonte en haut de la grille pour le confort de lecture
    document.getElementById("product-container").scrollIntoView({ behavior: "smooth", block: "start" });
}

// ===========================================
// 3. FILTRES & TRI (catalogue uniquement)
// ===========================================
function appliquerFiltres() {
    function appliquerFiltresEtResetPage() {
        pageActuelleCatalogue = 1;
        appliquerFiltres();
    }
    let resultat = [...produits];

    const rechercheInput = document.getElementById("recherche-nom");
    const texteRecherche = rechercheInput ? rechercheInput.value.trim().toLowerCase() : "";

    if (texteRecherche !== "") {
        resultat = resultat
            .map(p => ({ produit: p, score: scorePertinence(texteRecherche, p.nom) }))
            .filter(r => r.score > 0)
            .sort((a, b) => b.score - a.score)
            .map(r => r.produit);
    }

    const categoriesCochees = Array.from(
        document.querySelectorAll(".filter-categorie:checked")
    ).map(checkbox => checkbox.value);

    if (categoriesCochees.length > 0) {
        resultat = resultat.filter(produit => categoriesCochees.includes(produit.categorie));
    }

    const prixMinInput = document.getElementById("prix-min");
    const prixMaxInput = document.getElementById("prix-max");

    const prixMin = prixMinInput && prixMinInput.value !== "" ? Number(prixMinInput.value) : null;
    const prixMax = prixMaxInput && prixMaxInput.value !== "" ? Number(prixMaxInput.value) : null;

    if (prixMin !== null) {
        resultat = resultat.filter(produit => produit.prix >= prixMin);
    }
    if (prixMax !== null) {
        resultat = resultat.filter(produit => produit.prix <= prixMax);
    }

    const triSelect = document.getElementById("tri-select");
    const tri = triSelect ? triSelect.value : "defaut";

    if (tri === "prix-asc") {
        resultat.sort((a, b) => a.prix - b.prix);
    } else if (tri === "prix-desc") {
        resultat.sort((a, b) => b.prix - a.prix);
    } else if (tri === "nom-asc") {
        resultat.sort((a, b) => a.nom.localeCompare(b.nom));
    }

    afficherProduits(resultat, null, pageActuelleCatalogue);
}

function reinitialiserFiltres() {
    pageActuelleCatalogue = 1;
    const rechercheInput = document.getElementById("recherche-nom");
    if (rechercheInput) rechercheInput.value = "";

    document.querySelectorAll(".filter-categorie").forEach(checkbox => checkbox.checked = false);

    const prixMinInput = document.getElementById("prix-min");
    const prixMaxInput = document.getElementById("prix-max");
    if (prixMinInput) prixMinInput.value = "";
    if (prixMaxInput) prixMaxInput.value = "";

    const triSelect = document.getElementById("tri-select");
    if (triSelect) triSelect.value = "defaut";

    afficherProduits(produits);
}

// ===========================================
// 4. SYSTÈME DE PANIER (avec localStorage)
// ===========================================

function getPanier() {
    const panier = localStorage.getItem("panier");
    return panier ? JSON.parse(panier) : [];
}

function savePanier(panier) {
    localStorage.setItem("panier", JSON.stringify(panier));
}

function ajouterAuPanier(idProduit) {
    const panier = getPanier();
    const produit = produits.find(p => p.id === idProduit);
    if (!produit) return;

    const itemExistant = panier.find(item => item.id === idProduit);

    if (itemExistant) {
        itemExistant.quantite += 1;
    } else {
        panier.push({ id: produit.id, quantite: 1 });
    }

    savePanier(panier);
    mettreAJourCompteurPanier(true);
}

function mettreAJourCompteurPanier(animer = false) {
    const compteurs = document.querySelectorAll("#cart-count");
    if (compteurs.length === 0) return;

    const panier = getPanier();
    const totalArticles = panier.reduce((total, item) => total + item.quantite, 0);

    compteurs.forEach(compteur => {
        compteur.textContent = totalArticles;

        if (totalArticles === 0) {
            compteur.style.display = "none";
        } else {
            compteur.style.display = "inline-block";
        }

        if (animer) {
            compteur.classList.remove("bump");
            void compteur.offsetWidth;
            compteur.classList.add("bump");
        }
    });
}

function changerQuantite(idProduit, delta) {
    let panier = getPanier();
    const item = panier.find(item => item.id === idProduit);
    if (!item) return;

    item.quantite += delta;

    if (item.quantite <= 0) {
        panier = panier.filter(item => item.id !== idProduit);
    }

    savePanier(panier);
    afficherPanier();
    mettreAJourCompteurPanier();
}

function retirerDuPanier(idProduit) {
    let panier = getPanier();
    panier = panier.filter(item => item.id !== idProduit);
    savePanier(panier);
    afficherPanier();
    mettreAJourCompteurPanier();
}

function afficherPanier() {
    const container = document.getElementById("panier-container");
    if (!container) return;

    const panier = getPanier();
    const totalAmount = document.getElementById("total-amount");

    container.innerHTML = "";

    if (panier.length === 0) {
        container.innerHTML = "<p class='panier-vide'>Votre panier est vide pour le moment.</p>";
        if (totalAmount) totalAmount.textContent = "0 FCFA";
        return;
    }

    let total = 0;

    panier.forEach(item => {
        const produit = produits.find(p => p.id === item.id);
        if (!produit) return;

        const sousTotal = produit.prix * item.quantite;
        total += sousTotal;

        const div = document.createElement("div");
        div.className = "panier-item";

        div.innerHTML = `
            <img src="${produit.image}" alt="${produit.nom}">
            <div class="panier-item-info">
                <h3>${produit.nom}</h3>
                <p class="price-unit">${produit.prix.toLocaleString()} FCFA / unité</p>
            </div>
            <div class="panier-qty">
                <button class="btn-moins" data-id="${produit.id}">-</button>
                <span>${item.quantite}</span>
                <button class="btn-plus" data-id="${produit.id}">+</button>
            </div>
            <div class="panier-item-total">${sousTotal.toLocaleString()} FCFA</div>
            <button class="btn-remove" data-id="${produit.id}">🗑️</button>
        `;

        container.appendChild(div);
    });

    if (totalAmount) totalAmount.textContent = total.toLocaleString() + " FCFA";
}

// ===========================================
// GESTION DE LA MODALE DE PAIEMENT
// ===========================================

function getDetailsPaiement(methode, total) {
    switch (methode) {
        case "orange":
            return `
                <p>Envoyez <strong>${total.toLocaleString()} FCFA</strong> au numéro Orange Money :</p>
                <p><strong>+223 72 08 09 37</strong></p>
                <p>Puis cliquez sur "Confirmer ma commande" et envoyez-nous la capture du paiement par WhatsApp.</p>
                <button class="btn-confirmer">Confirmer ma commande</button>
            `;
        case "wave":
            return `
                <p>Envoyez <strong>${total.toLocaleString()} FCFA</strong> via Wave au numéro :</p>
                <p><strong>+223 72 08 09 37</strong></p>
                <p>Puis cliquez sur "Confirmer ma commande" et envoyez-nous la capture du paiement par WhatsApp.</p>
                <button class="btn-confirmer">Confirmer ma commande</button>
            `;
        case "carte":
            return `
                <p>Le paiement par carte bancaire sera bientôt disponible directement sur le site.</p>
                <p>En attendant, vous pouvez choisir Orange Money, Wave, ou le paiement en liquide à la livraison.</p>
            `;
        case "liquide":
            return `
                <p>Vous payerez <strong>${total.toLocaleString()} FCFA</strong> en liquide directement au livreur lors de la réception de votre commande.</p>
                <button class="btn-confirmer">Confirmer ma commande</button>
            `;
        default:
            return "";
    }
}

function getTotalPanier() {
    const panier = getPanier();
    let total = 0;
    panier.forEach(item => {
        const produit = produits.find(p => p.id === item.id);
        if (produit) total += produit.prix * item.quantite;
    });
    return total;
}

function confirmerCommande(methode) {
    const panier = getPanier();
    if (panier.length === 0) return;

    let message = "Bonjour, je confirme ma commande :%0A";
    let total = 0;

    panier.forEach(item => {
        const produit = produits.find(p => p.id === item.id);
        if (!produit) return;
        const sousTotal = produit.prix * item.quantite;
        total += sousTotal;
        message += `- ${produit.nom} x${item.quantite} (${sousTotal.toLocaleString()} FCFA)%0A`;
    });

    const noms = {
        orange: "Orange Money",
        wave: "Wave",
        liquide: "Paiement en liquide à la livraison"
    };

    message += `%0AMode de paiement : ${noms[methode] || methode}`;
    message += `%0ATotal : ${total.toLocaleString()} FCFA`;

    window.open(`https://wa.me/22372080937?text=${message}`, "_blank");

    enregistrerCommande(panier, methode, total);

    savePanier([]);
    afficherPanier();
    mettreAJourCompteurPanier();
    document.getElementById("modal-paiement").classList.remove("active");
}

// ===========================================
// PAGE DÉTAIL PRODUIT (produit.html?id=X)
// ===========================================
function afficherPageProduit() {
    const container = document.getElementById("produit-detail");
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));
    const produit = produits.find(p => p.id === id);

    if (!produit) {
        container.innerHTML = "<p class='no-result'>Produit introuvable.</p>";
        return;
    }

    document.title = produit.nom + " - Yames";

    container.innerHTML = `
        <div class="produit-detail-image">
            <img src="${produit.image}" alt="${produit.nom}">
        </div>
        <div class="produit-detail-info">
            <h1>${produit.nom}</h1>
            <p class="produit-detail-price">${produit.prix.toLocaleString()} FCFA</p>
            <p class="produit-detail-description">${produit.description}</p>
            <button class="btn-add-cart" data-id="${produit.id}">Ajouter au panier</button>
        </div>
    `;

    const similairesContainer = document.getElementById("produits-similaires");
    if (similairesContainer) {
        const similaires = produits.filter(p => p.categorie === produit.categorie && p.id !== produit.id);

        if (similaires.length === 0) {
            similairesContainer.closest("section").style.display = "none";
        } else {
            similaires.slice(0, 4).forEach(p => {
                const card = document.createElement("div");
                card.className = "product-card";
                card.innerHTML = `
                    <a href="produit.html?id=${p.id}" class="product-link">
                        <img src="${p.image}" alt="${p.nom}">
                        <h3>${p.nom}</h3>
                    </a>
                    <p class="price">${p.prix.toLocaleString()} FCFA</p>
                    <button class="btn-add-cart" data-id="${p.id}">Ajouter au panier</button>
                `;
                similairesContainer.appendChild(card);
            });
        }
    }
}
// ===========================================
// RECHERCHE LIVE (dans la barre de recherche)
// ===========================================

// Calcule la distance de Levenshtein entre deux chaînes
// (= nombre de modifications pour passer de l'une à l'autre)
function distanceLevenshtein(a, b) {
    const matrice = [];

    for (let i = 0; i <= a.length; i++) matrice[i] = [i];
    for (let j = 0; j <= b.length; j++) matrice[0][j] = j;

    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            if (a[i - 1] === b[j - 1]) {
                matrice[i][j] = matrice[i - 1][j - 1];
            } else {
                matrice[i][j] = Math.min(
                    matrice[i - 1][j - 1] + 1, // substitution
                    matrice[i][j - 1] + 1,     // insertion
                    matrice[i - 1][j] + 1      // suppression
                );
            }
        }
    }

    return matrice[a.length][b.length];
}

// Calcule un score de pertinence entre le texte tapé et le nom d'un produit
// Plus le score est élevé, plus le produit est pertinent
function scorePertinence(texte, nomProduit) {
    const t = texte.toLowerCase().trim();
    const nom = nomProduit.toLowerCase();

    if (t === "") return 0;

    // 1. correspondance exacte du nom entier
    if (nom === t) return 100;

    // 2. le nom commence par le texte tapé
    if (nom.startsWith(t)) return 90;

    // 3. un des mots du nom commence par le texte tapé
    const mots = nom.split(" ");
    if (mots.some(mot => mot.startsWith(t))) return 80;

    // 4. le texte tapé apparaît n'importe où dans le nom
    if (nom.includes(t)) return 70;

    // 5. tolérance aux fautes de frappe (distance de Levenshtein)
    // on compare le texte tapé au mot le plus proche du nom
    let meilleureDistance = Infinity;
    mots.forEach(mot => {
        const dist = distanceLevenshtein(t, mot.slice(0, t.length + 2));
        if (dist < meilleureDistance) meilleureDistance = dist;
    });

    // on accepte seulement si la faute de frappe est "raisonnable"
    // (max 2 caractères de différence pour des mots courts, 3 pour les longs)
    const seuil = t.length <= 4 ? 1 : t.length <= 7 ? 2 : 3;

    if (meilleureDistance <= seuil) {
        return 60 - meilleureDistance * 10; // 50, 40 ou 30 selon la distance
    }

    // aucune correspondance acceptable
    return 0;
}

function initRechercheLive() {
    const input = document.getElementById("search-input");
    if (!input) return;

    let resultsBox = document.querySelector(".search-results");
    if (!resultsBox) {
        resultsBox = document.createElement("div");
        resultsBox.className = "search-results";
        input.closest("form").appendChild(resultsBox);
    }

    input.addEventListener("input", () => {
        const texte = input.value.trim().toLowerCase();

        if (texte === "") {
            resultsBox.classList.remove("active");
            resultsBox.innerHTML = "";
            return;
        }

        // on calcule un score pour chaque produit, on élimine les scores nuls,
        // puis on trie du plus pertinent au moins pertinent
        const resultats = produits
            .map(p => ({ produit: p, score: scorePertinence(texte, p.nom) }))
            .filter(r => r.score > 0)
            .sort((a, b) => b.score - a.score)
            .map(r => r.produit);

        resultsBox.innerHTML = "";

        if (resultats.length === 0) {
            resultsBox.innerHTML = "<div class='search-no-result'>Aucun produit trouvé</div>";
        } else {
            resultats.slice(0, 6).forEach(produit => {
                const item = document.createElement("a");
                item.className = "search-result-item";
                item.href = `produit.html?id=${produit.id}`;

                item.innerHTML = `
                    <img src="${produit.image}" alt="${produit.nom}">
                    <div class="search-result-info">
                        <div class="nom">${produit.nom}</div>
                        <div class="prix">${produit.prix.toLocaleString()} FCFA</div>
                    </div>
                `;

                resultsBox.appendChild(item);
            });
        }

        resultsBox.classList.add("active");
    });

    document.addEventListener("click", (e) => {
        if (!input.closest("form").contains(e.target)) {
            resultsBox.classList.remove("active");
        }
    });


    // Entrée ou clic sur 🔍 → redirige vers le catalogue filtré par ce texte
    input.closest("form").addEventListener("submit", (e) => {
        e.preventDefault();
        const texte = input.value.trim();
        if (texte !== "") {
            window.location.href = "catalogue.html?q=" + encodeURIComponent(texte);
        }
    });
}

// ===========================================
// SYSTÈME DE COMPTES (SIMULATION localStorage)
// ⚠️ À remplacer par de vrais appels API quand le backend sera prêt.
// ===========================================

function getUtilisateurs() {
    const data = localStorage.getItem("utilisateurs");
    return data ? JSON.parse(data) : [];
}

function saveUtilisateurs(utilisateurs) {
    localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));
}

function getUtilisateurConnecte() {
    const data = localStorage.getItem("utilisateurConnecte");
    return data ? JSON.parse(data) : null;
}

function setUtilisateurConnecte(utilisateur) {
    localStorage.setItem("utilisateurConnecte", JSON.stringify(utilisateur));
}

function deconnecterUtilisateur() {
    localStorage.removeItem("utilisateurConnecte");
}

function inscrireUtilisateur(nom, telephone, email, motdepasse) {
    const utilisateurs = getUtilisateurs();

    const existe = utilisateurs.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existe) {
        return { succes: false, message: "Un compte existe déjà avec cet email." };
    }

    const nouvelUtilisateur = { nom, telephone, email, motdepasse };
    utilisateurs.push(nouvelUtilisateur);
    saveUtilisateurs(utilisateurs);

    setUtilisateurConnecte({ nom, email });

    return { succes: true, message: "Compte créé avec succès !" };
}

function connecterUtilisateur(email, motdepasse) {
    const utilisateurs = getUtilisateurs();
    const utilisateur = utilisateurs.find(u => u.email.toLowerCase() === email.toLowerCase() && u.motdepasse === motdepasse);

    if (!utilisateur) {
        return { succes: false, message: "Email ou mot de passe incorrect." };
    }

    setUtilisateurConnecte({ nom: utilisateur.nom, email: utilisateur.email });
    return { succes: true, message: "Connexion réussie !" };
}

function mettreAJourNavCompte() {
    const liens = document.querySelectorAll(".nav-compte-link");
    if (liens.length === 0) return;

    const utilisateur = getUtilisateurConnecte();

    liens.forEach(lien => {
        if (utilisateur) {
            lien.textContent = "Mon compte";
            lien.href = "compte.html";
        } else {
            lien.textContent = "Connexion";
            lien.href = "connexion.html";
        }
    });
}

function initFormulairesAuth() {
    const formInscription = document.getElementById("form-inscription");
    const formConnexion = document.getElementById("form-connexion");
    const message = document.getElementById("auth-message");

    if (formInscription) {
        formInscription.addEventListener("submit", (e) => {
            e.preventDefault();

            const nom = document.getElementById("nom").value.trim();
            const telephone = document.getElementById("telephone").value.trim();
            const email = document.getElementById("email").value.trim();
            const motdepasse = document.getElementById("password").value;

            const resultat = inscrireUtilisateur(nom, telephone, email, motdepasse);

            message.textContent = resultat.message;
            message.className = "auth-message " + (resultat.succes ? "success" : "error");

            if (resultat.succes) {
                setTimeout(() => {
                    window.location.href = "compte.html";
                }, 800);
            }
        });
    }

    if (formConnexion) {
        formConnexion.addEventListener("submit", (e) => {
            e.preventDefault();

            const email = document.getElementById("email").value.trim();
            const motdepasse = document.getElementById("password").value;

            const resultat = connecterUtilisateur(email, motdepasse);

            message.textContent = resultat.message;
            message.className = "auth-message " + (resultat.succes ? "success" : "error");

            if (resultat.succes) {
                setTimeout(() => {
                    window.location.href = "compte.html";
                }, 800);
            }
        });
    }
}

function afficherPageCompte() {
    const blocConnecte = document.getElementById("compte-connecte");
    const blocNonConnecte = document.getElementById("compte-non-connecte");
    if (!blocConnecte || !blocNonConnecte) return;

    const utilisateur = getUtilisateurConnecte();

    if (!utilisateur) {
        blocNonConnecte.style.display = "block";
        blocConnecte.style.display = "none";
        return;
    }

    blocNonConnecte.style.display = "none";
    blocConnecte.style.display = "block";

    document.getElementById("compte-nom").textContent = "Bonjour, " + utilisateur.nom;
    document.getElementById("compte-email").textContent = utilisateur.email;

    const btnDeco = document.getElementById("btn-deconnexion");
    if (btnDeco) {
        btnDeco.addEventListener("click", () => {
            deconnecterUtilisateur();
            window.location.href = "index.html";
        });
    }

    const historiqueContainer = document.getElementById("historique-commandes");
    const historique = JSON.parse(localStorage.getItem("historiqueCommandes") || "[]");

    const commandesUtilisateur = historique.filter(cmd => cmd.email === utilisateur.email);

    if (commandesUtilisateur.length === 0) {
        historiqueContainer.innerHTML = "<p class='historique-vide'>Vous n'avez pas encore de commande.</p>";
        return;
    }

    historiqueContainer.innerHTML = "";
    commandesUtilisateur.slice().reverse().forEach(commande => {
        const div = document.createElement("div");
        div.className = "commande-card";

        const itemsHtml = commande.articles.map(a => `${a.nom} x${a.quantite}`).join("<br>");

        div.innerHTML = `
            <div class="commande-header">
                <span>${commande.date}</span>
                <span class="commande-statut">${commande.statut}</span>
            </div>
            <div class="commande-items">${itemsHtml}</div>
            <div class="commande-total">${commande.total.toLocaleString()} FCFA</div>
        `;

        historiqueContainer.appendChild(div);
    });
}

function enregistrerCommande(panier, methode, total) {
    const utilisateur = getUtilisateurConnecte();
    if (!utilisateur) return;

    const historique = JSON.parse(localStorage.getItem("historiqueCommandes") || "[]");

    const noms = {
        orange: "Orange Money",
        wave: "Wave",
        liquide: "Paiement en liquide à la livraison"
    };

    const articles = panier.map(item => {
        const produit = produits.find(p => p.id === item.id);
        return { nom: produit ? produit.nom : "Produit", quantite: item.quantite };
    });

    historique.push({
        email: utilisateur.email,
        date: new Date().toLocaleDateString("fr-FR"),
        statut: "En attente",
        articles: articles,
        modePaiement: noms[methode] || methode,
        total: total
    });

    localStorage.setItem("historiqueCommandes", JSON.stringify(historique));
}

// ===========================================
// 5. INITIALISATION AU CHARGEMENT DE LA PAGE
// ===========================================
document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("product-container");

    const estAccueil = container && container.closest(".featured-products");
    const limite = estAccueil ? 4 : null;

    afficherProduits(produits, limite);
    afficherPanier();
    afficherPageProduit();
    mettreAJourCompteurPanier();
    initRechercheLive();
    mettreAJourNavCompte();
    initFormulairesAuth();
    afficherPageCompte();

    // --- Filtres catalogue ---
    const rechercheNom = document.getElementById("recherche-nom");
    const filtresCategorie = document.querySelectorAll(".filter-categorie");
    const prixMin = document.getElementById("prix-min");
    const prixMax = document.getElementById("prix-max");
    const triSelect = document.getElementById("tri-select");
    const resetBtn = document.getElementById("reset-filtres");

    if (rechercheNom) {
        const params = new URLSearchParams(window.location.search);
        const q = params.get("q");
        if (q) {
            rechercheNom.value = q;
            appliquerFiltres();
        }

        rechercheNom.addEventListener("input", appliquerFiltres);
    }

    filtresCategorie.forEach(checkbox => {
        checkbox.addEventListener("change", appliquerFiltres);
    });

    if (prixMin) prixMin.addEventListener("input", appliquerFiltres);
    if (prixMax) prixMax.addEventListener("input", appliquerFiltres);
    if (triSelect) triSelect.addEventListener("change", appliquerFiltres);
    if (resetBtn) resetBtn.addEventListener("click", reinitialiserFiltres);

    // --- Clics globaux (ajout panier, +/-, suppression) ---
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-add-cart")) {
            const id = Number(e.target.dataset.id);
            ajouterAuPanier(id);

            const btn = e.target;
            const texteOriginal = btn.textContent;
            btn.textContent = "✓ Ajouté !";
            btn.classList.add("added");
            btn.disabled = true;

            setTimeout(() => {
                btn.textContent = texteOriginal;
                btn.classList.remove("added");
                btn.disabled = false;
            }, 800);
        }

        if (e.target.classList.contains("btn-plus")) {
            const id = Number(e.target.dataset.id);
            changerQuantite(id, 1);
        }

        if (e.target.classList.contains("btn-moins")) {
            const id = Number(e.target.dataset.id);
            changerQuantite(id, -1);
        }

        if (e.target.classList.contains("btn-remove")) {
            const id = Number(e.target.dataset.id);
            retirerDuPanier(id);
        }
    });

    // --- Modal de paiement ---
    const btnPaiement = document.getElementById("btn-paiement");
    const modal = document.getElementById("modal-paiement");
    const closeModal = document.getElementById("close-modal");
    const paymentDetails = document.getElementById("payment-details");

    if (btnPaiement) {
        btnPaiement.addEventListener("click", () => {
            const panier = getPanier();
            if (panier.length === 0) {
                alert("Votre panier est vide.");
                return;
            }
            modal.classList.add("active");
        });
    }

    if (closeModal) {
        closeModal.addEventListener("click", () => {
            modal.classList.remove("active");
            paymentDetails.classList.remove("active");
            paymentDetails.innerHTML = "";
            document.querySelectorAll(".payment-option").forEach(btn => btn.classList.remove("selected"));
        });
    }

    document.querySelectorAll(".payment-option").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".payment-option").forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");

            const methode = btn.dataset.method;
            const total = getTotalPanier();

            paymentDetails.innerHTML = getDetailsPaiement(methode, total);
            paymentDetails.classList.add("active");

            const btnConfirmer = paymentDetails.querySelector(".btn-confirmer");
            if (btnConfirmer) {
                btnConfirmer.addEventListener("click", () => confirmerCommande(methode));
            }
        });
    });

});