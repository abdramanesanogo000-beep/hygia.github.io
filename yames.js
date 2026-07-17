// ===========================================
// 1. DONNÉES PRODUITS (source unique pour tout le site)
// ===========================================
const BACKEND_URL = "https://nslookup-cluster1-bydepfo-mongodb-net-1.onrender.com";

const produits = [
    { id: 1,  nom: "Tensiomètre manuel avec stéthoscope",              prix: 15000,  image: "img/tension metre manuel.jpg",                                              categorie: "tensiometre", promo: false, stock: true, description: "Tensiomètre à brassard manuel livré avec stéthoscope monopavillon. Mesure fiable de la pression artérielle sans pile. Idéal pour les cabinets médicaux et pharmacies." },
    { id: 2,  nom: "Tensiomètre électronique automatique",             prix: 25000,  image: "img/tension metre electrique.webp",                                         categorie: "tensiometre", promo: false, stock: true, description: "Tensiomètre numérique automatique pour bras, brassard 22-36 cm. Un appui suffit pour obtenir tension et pouls. Écran large, facile à utiliser à domicile ou en clinique." },
    { id: 3,  nom: "Oxymètre de pouls",                                prix: 10000,  image: "img/oxymetre de puls.webp",                                               categorie: "clinique",    promo: false, stock: true, description: "Pince oxymètre à poser sur le doigt. Mesure la saturation en oxygène (SpO2) et le pouls en quelques secondes. Compact, sans douleur, indispensable pour le suivi respiratoire." },
    { id: 4,  nom: "Chaise médicale pivotante",                        prix: 30000,  image: "img/chaise medicale.avif",                                                  categorie: "clinique",    promo: false, stock: true, description: "Chaise médicale pivotante, hauteur réglable de 44 à 56 cm, assise diamètre 33 cm. Confortable pour un usage prolongé en cabinet médical ou laboratoire." },
    { id: 5,  nom: "Plateau inox carré (instrumentation)",             prix: 10000,  image: "img/plateau care.jpg",                                                      categorie: "clinique",    promo: false, stock: true, description: "Plateau carré en acier inoxydable 304, dimensions 31x24x3,1 cm. Utilisé pour la présentation et la stérilisation des instruments médicaux en cabinet ou clinique." },
    { id: 6,  nom: "Microscope de laboratoire (40x à 1600x)",          prix: 350000, image: "img/microscope biologique.avif",                                            categorie: "clinique",    promo: false, stock: true, description: "Microscope optique professionnel, grossissement de 40x à 1600x (objectifs 4X, 10X, 40XS, 100XS). Livré en coffret. Pour laboratoires, cliniques et formations médicales." },
    { id: 7,  nom: "Centrifugeuse avec minuterie (6 tubes)",           prix: 65000,  image: "img/centrifugeuse.jpg",                                                     categorie: "clinique",    promo: false, stock: true, description: "Centrifugeuse de laboratoire avec minuterie, capacité 6 tubes de 20 ml. Pour la séparation rapide des échantillons sanguins et biologiques." },
    { id: 8,  nom: "Centrifugeuse électrique haute vitesse (12 tubes)",prix: 112000, image: "img/centrifugeuse electrique.png",                                          categorie: "clinique",    promo: false, stock: true, description: "Centrifugeuse électrique 12 tubes de 20 ml, vitesse jusqu'à 4000 tr/min avec affichage digital. Pour laboratoires à fort volume d'analyses. Compatible 110V/220V." },
    { id: 9,  nom: "Agitateur orbital de laboratoire",                 prix: 120000, image: "img/agitateur de laboratoire.png",                                         categorie: "clinique",    promo: false, stock: true, description: "Agitateur orbital vitesse réglable de 0 à 210 tr/min, minuterie 0-15 min ou mode continu. Pour le mélange homogène d'échantillons biologiques en laboratoire." },
    { id: 10, nom: "Lecteur d'hémoglobine portable Mission HB",      prix: 150000, image: "img/lecteur d'hemoglobine mission hb.jpg",                                  categorie: "clinique",    promo: false, stock: true, description: "Appareil portable de mesure du taux d'hémoglobine. Résultat en 15 secondes à partir de 10 µl de sang, sans réactif liquide. Idéal pour le dépistage rapide de l'anémie." },
    { id: 11, nom: "Bandelettes Mission HB (boîte de 50)",             prix: 35000,  image: "img/compteur d'hemoglobine mission hb.webp",                                categorie: "consommable", promo: false, stock: true, description: "Boîte de 50 bandelettes pour analyseur d'hémoglobine Mission HB. Pour un dépistage rapide et fiable du taux d'hémoglobine en clinique ou laboratoire." },
    { id: 12, nom: "Lecteur d'hémoglobine URIT H12",                 prix: 55000,  image: "img/lecteur d'hemoglobine urit12.png",                                      categorie: "clinique",    promo: false, stock: true, description: "Appareil de mesure du taux d'hémoglobine URIT H12, précis et fiable. Conçu pour un usage régulier en clinique ou laboratoire d'analyses médicales." },
    { id: 13, nom: "Bandelettes URIT H12 (boîte de 50)",               prix: 25000,  image: "img/compteur d'hemoglobine urit12.png",                                     categorie: "consommable", promo: false, stock: true, description: "Boîte de 1O0 bandelettes compatibles avec l'analyseur URIT H12. Pour mesurer rapidement le taux d'hémoglobine en laboratoire ou en clinique." },
    { id: 14, nom: "Bandelettes urinaires 10 paramètres (URS-10A)",    prix: 10000,  image: "img/bandelette de test d'urine.jpg",                                        categorie: "consommable", promo: false, stock: true, description: "Bandelettes réactives pour analyse d'urine, 10 paramètres (glucose, protéines, pH, sang, leucocytes...). Résultat rapide pour le dépistage en clinique ou pharmacie." },
    { id: 15, nom: "Bandelettes urinaires 3 paramètres (URS-3T)",      prix: 6000,   image: "img/bandelette de test d'urine.jpg",                                        categorie: "consommable", promo: false, stock: true, description: "Bandelettes réactives pour analyse d'urine, 3 paramètres essentiels. Solution économique pour un dépistage rapide en cabinet médical ou pharmacie." },
    { id: 16, nom: "Pèse-personne mécanique médical",                  prix: 35000,  image: "img/pese-personne balance.jpg",                                             categorie: "clinique",    promo: false, stock: true, description: "Balance mécanique pour cabinet médical (28,5x42,5x8,5 cm). Robuste, précise, sans pile nécessaire. Vendue par lot de 3 unités." },
    { id: 17, nom: "Pèse-bébé avec toise intégrée",                    prix: 115000, image: "img/tapis de mesure pour bebe.jpg",                                         categorie: "clinique",    promo: false, stock: true, description: "Balance pour nourrisson avec toise intégrée, capacité 20 kg, précision 10 g. Indispensable pour le suivi de croissance en pédiatrie, maternité ou centre de santé." },
    { id: 18, nom: "Toise souple bébé (PVC)",                          prix: 25000,  image: "img/regle pour bebe.png",                                                   categorie: "clinique", promo: false, stock: true, description: "Mètre ruban souple en PVC pour mesurer la taille des nourrissons, de 20 à 99 cm. Léger, facile à désinfecter, idéal pour le suivi pédiatrique." },
    { id: 19, nom: "Attelle de nuit (S/M/L)",                          prix: 20000,  image: "img/Orthèse de la cheville et du pied.jpg",                                 categorie: "clinique",    promo: false, stock: true, description: "Attelle orthopédique de nuit disponible en tailles S, M et L. Maintien et immobilisation du pied pendant le repos pour une rééducation confortable." },
    { id: 20, nom: "Abaisse-langue en bois (boîte de 50)",             prix: 3500,   image: "img/tongue depressore.png",                                                 categorie: "consommable", promo: false, stock: true, description: "Boîte de 50 abaisse-langues en bois (150x18x1,6 mm). Consommable à usage unique pour consultations en cabinet, clinique ou pharmacie." },
    { id: 21, nom: "Kit de pinces chirurgicales (10 pièces)",          prix: 40000,  image: "img/kit de ciseaux de churirgie.png",                                       categorie: "clinique",    promo: false, stock: true, description: "Set de 10 pinces chirurgicales pour soins et interventions en clinique. Outils essentiels pour tout bloc de soins ou salle d'opération." },
    { id: 22, nom: "Lames de bistouri n°23 (boîte de 100)",            prix: 8000,   image: "img/surirgicale blade.webp",                                                categorie: "consommable", promo: false, stock: true, description: "Boîte de 100 lames de bistouri en acier carbone, taille n°23. Stériles, à usage unique, pour interventions chirurgicales et soins en clinique." },
    { id: 23, nom: "Ballon de réanimation pédiatrique",                prix: 20000,  image: "img/respirateur manuel.webp",                                               categorie: "clinique",    promo: false, stock: true, description: "Ballon auto-gonflable (BAVU) en PVC, taille pédiatrique, livré en coffret. Matériel d'urgence pour la ventilation manuelle des enfants en détresse respiratoire." },
    { id: 24, nom: "Ballon de réanimation adulte",                     prix: 20000,  image: "img/respirateur manuel.webp",                                               categorie: "clinique",    promo: false, stock: true, description: "Ballon auto-gonflable (BAVU) en PVC, taille adulte, livré en coffret. Indispensable pour la ventilation manuelle en réanimation et premiers secours." },
    { id: 25, nom: "Tambour de stérilisation 170mm",                   prix: 15000,  image: "img/tambours de sterilisation.avif",                                        categorie: "clinique",    promo: false, stock: true, description: "Tambour métallique de stérilisation, diamètre 170 mm. Pour le stockage stérile de compresses et consommables médicaux en clinique ou bloc opératoire." },
    { id: 26, nom: "Tambour de stérilisation 200mm",                   prix: 18500,  image: "img/tambours de sterilisation.avif",                                        categorie: "clinique",    promo: false, stock: true, description: "Tambour métallique de stérilisation, diamètre 200 mm. Format plus grand pour un stockage stérile en volume en clinique ou bloc opératoire." },
    { id: 27, nom: "Portoir à tubes à essai (50 puits)",               prix: 6000,   image: "img/support a tube a essaie.webp",                                          categorie: "clinique",    promo: false, stock: true, description: "Râtelier pour tubes à essai de 12-13 mm, 50 emplacements. Pour une organisation rapide et sécurisée des échantillons en laboratoire d'analyses." },
    { id: 28, nom: "Coton hydrophile (rouleau 100g)",                  prix: 2500,   image: "img/cotton en rouleau.webp",                                               categorie: "consommable", promo: false, stock: true, description: "Rouleau de coton hydrophile 100g (format 6x15). Consommable essentiel pour soins, pansements et désinfection en clinique, pharmacie ou à domicile." },
    { id: 29, nom: "Test rapide Toxoplasmose",                         prix: 1500,   image: "img/test rapide accurate.png",                                              categorie: "consommable", promo: false, stock: true, description: "Test de dépistage rapide de la toxoplasmose sur sang total, sérum ou plasma. Résultat en quelques minutes, sans équipement spécial. Pour cliniques et laboratoires." },
    { id: 30, nom: "Test rapide Rubéole IgG/IgM",                      prix: 1500,   image: "img/test rapide accurate.png",                                              categorie: "consommable", promo: false, stock: true, description: "Test de dépistage rapide de la rubéole (IgG et IgM) sur sérum ou plasma. Outil de diagnostic essentiel pour le suivi prénatal et les cliniques." },
    { id: 31, nom: "Test rapide Paludisme PF/PV",                      prix: 1500,   image: "img/test rapide accurate.png",                                              categorie: "consommable", promo: false, stock: true, description: "Test de dépistage rapide du paludisme (Plasmodium falciparum et vivax) sur sang total. Résultat fiable en minutes, adapté au contexte malien." },
    { id: 32, nom: "Mannequin pédagogique d'accouchement",             prix: 550000, image: "img/manequin d'accouchement.jpg",                                           categorie: "clinique",    promo: false, stock: true, description: "Modèle anatomique de simulation pour la formation aux techniques d'accouchement. Destiné aux écoles de santé, centres de formation de sages-femmes et structures médicales." },
    { id: 33, nom: "Modèle anatomique du système urogénital masculin", prix: 40000,  image: "img/Modèle de système urogénital masculin.jpg",                             categorie: "clinique",    promo: false, stock: true, description: "Modèle anatomique détaillé du système urogénital masculin, en coupe. Support pédagogique idéal pour l'enseignement médical, les écoles de santé et les cabinets d'urologie." },
    { id: 34, nom: "Modèle anatomique larynx, cœur et poumons",        prix: 200000, image: "img/humain anatomique médical larynx cardiaque et pulmonaire modèle larynx l'exercice modèle.avif", categorie: "clinique", promo: false, stock: true, description: "Modèle anatomique du larynx, du cœur et des poumons, conçu pour l'exercice et la formation médicale. Idéal pour l'enseignement en écoles de santé et cliniques pédagogiques." },
    { id: 35, nom: "Trousse portable d'injection intramusculaire",     prix: 25000,  image: "img/Trousse de pratique d'injection intramusculaire portable.webp",         categorie: "clinique",    promo: false, stock: true, description: "Trousse portable pour la pratique de l'injection intramusculaire. Outil de formation pratique destiné aux étudiants en santé et au personnel infirmier en apprentissage." },

];

// Index id -> produit pour des recherches en O(1) (évite les .find() en boucle)
const produitsById = new Map(produits.map(p => [p.id, p]));
function getProduitById(id) {
    return produitsById.get(id);
}

// Échappe les caractères HTML sensibles avant insertion via innerHTML
// (protège contre l'injection si une donnée venait à contenir du HTML/JS)
function escapeHtml(valeur) {
    return String(valeur)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

// Libellés affichés pour chaque mode de paiement (source unique, évite la duplication)
const MODES_PAIEMENT_LABELS = {
    orange: "Orange Money",
    wave: "Wave",
    carte: "Carte bancaire",
    livraison: "À la livraison"
};

// Notification non bloquante (remplace les alert() bloquants)
function afficherToast(message, type = "info") {
    let toast = document.getElementById("site-toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "site-toast";
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.className = `site-toast ${type}`;
    void toast.offsetWidth;
    toast.classList.add("show");
    clearTimeout(toast._timeoutId);
    toast._timeoutId = setTimeout(() => toast.classList.remove("show"), 3200);
}

// ===========================================
// 2. AFFICHAGE DES PRODUITS (accueil / catalogue)
// ===========================================
const PRODUITS_PAR_PAGE = 12;
const PROMO_CODE = "HYGIA";
const PROMO_PERCENT = 5;
const PROMO_VALID_DAYS = 14;
const BAMAKO_SHIPPING = 1000;
const PROMO_APPLIED_KEY = "couponApplique";
const PROMO_USAGE_KEY = "couponUsage";
const PROMO_POPUP_KEY = "promoPopupSeen";
let lastCouponFeedback = { message: "", type: "" };

const promoEndDate = new Date();
promoEndDate.setDate(promoEndDate.getDate() + PROMO_VALID_DAYS);

function isPromoActive() {
    return new Date() <= promoEndDate;
}

function getPromoMessage() {
    return `Livraison gratuite + ${PROMO_PERCENT}% de réduction avec le code ${PROMO_CODE}`;
}

function getClientCouponKey() {
    const utilisateur = getUtilisateurConnecte();
    if (utilisateur && utilisateur.email) {
        return utilisateur.email;
    }

    let deviceKey = localStorage.getItem("couponDeviceKey");
    if (!deviceKey) {
        deviceKey = `guest-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
        localStorage.setItem("couponDeviceKey", deviceKey);
    }
    return deviceKey;
}

function getCouponUsageMap() {
    const raw = localStorage.getItem(PROMO_USAGE_KEY);
    return raw ? JSON.parse(raw) : {};
}

function setCouponUsageMap(data) {
    localStorage.setItem(PROMO_USAGE_KEY, JSON.stringify(data));
}

function isCouponAlreadyUsed() {
    const usage = getCouponUsageMap();
    return !!usage[getClientCouponKey()];
}

function markCouponAsUsed() {
    const usage = getCouponUsageMap();
    usage[getClientCouponKey()] = true;
    setCouponUsageMap(usage);
}

function getAppliedCoupon() {
    return localStorage.getItem(PROMO_APPLIED_KEY) || "";
}

function setAppliedCoupon(code) {
    localStorage.setItem(PROMO_APPLIED_KEY, code.toUpperCase());
}

function clearAppliedCoupon() {
    localStorage.removeItem(PROMO_APPLIED_KEY);
}

const PARTNER_COUPON_KEY = "partenaireCoupon";

function getPartnerCoupon() {
    const raw = localStorage.getItem(PARTNER_COUPON_KEY);
    if (!raw) return null;
    try { return JSON.parse(raw); } catch { return null; }
}

// Animation de chargement Sypha (overlay global)
function showSyphaLoader(text = "Chargement...") {
    let overlay = document.getElementById("sypha-overlay");
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "sypha-overlay";
        overlay.className = "sypha-overlay";
        overlay.innerHTML = `
            <div class="sypha-loader"></div>
            <div class="sypha-text">${text}</div>
        `;
        document.body.appendChild(overlay);
    } else {
        overlay.querySelector(".sypha-text").textContent = text;
        overlay.classList.remove("hidden");
    }
}

function hideSyphaLoader() {
    const overlay = document.getElementById("sypha-overlay");
    if (overlay) overlay.classList.add("hidden");
}

function setPartnerCoupon(code, reduction) {
    localStorage.setItem(PARTNER_COUPON_KEY, JSON.stringify({ code: code.toUpperCase(), reduction }));
}

function clearPartnerCoupon() {
    localStorage.removeItem(PARTNER_COUPON_KEY);
}

function resetCouponUI() {
    clearPartnerCoupon();
    clearAppliedCoupon();
    lastCouponFeedback = { message: "", type: "" };
    const couponInput = document.getElementById("coupon-input");
    if (couponInput) couponInput.value = "";
}

async function validerCodePartenaire(code) {
    try {
        const res = await fetch(`${BACKEND_URL}/api/verifier-code-promo`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code })
        });
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("Erreur validation code partenaire :", err);
        return { valide: false };
    }
}

function setCouponFeedback(message, type = "info") {
    lastCouponFeedback = { message, type };
}

function applyCoupon(code) {
    const normalizedCode = code.trim().toUpperCase();

    if (!normalizedCode) {
        setCouponFeedback("Veuillez saisir un code promo.", "error");
        clearAppliedCoupon();
        return { success: false, message: "Veuillez saisir un code promo." };
    }

    if (!isPromoActive()) {
        setCouponFeedback("La promotion est terminée.", "error");
        clearAppliedCoupon();
        return { success: false, message: "La promotion est terminée." };
    }

    if (normalizedCode !== PROMO_CODE) {
        setCouponFeedback("Ce code promo n'existe pas.", "error");
        clearAppliedCoupon();
        return { success: false, message: "Ce code promo n'existe pas." };
    }

    if (isCouponAlreadyUsed()) {
        setCouponFeedback("Ce code a déjà été utilisé pour votre compte ou appareil.", "error");
        clearAppliedCoupon();
        return { success: false, message: "Ce code a déjà été utilisé pour votre compte ou appareil." };
    }

    setAppliedCoupon(normalizedCode);
    setCouponFeedback(`Code ${normalizedCode} appliqué avec succès ! Réduction de ${PROMO_PERCENT}%.`, "success");

    return {
        success: true,
        message: `Code ${normalizedCode} appliqué avec succès ! Réduction de ${PROMO_PERCENT}%.`
    };
}

function getPanierSubtotal() {
    const panier = getPanier();
    let subtotal = 0;

    panier.forEach(item => {
        const produit = getProduitById(item.id);
        if (produit) {
            subtotal += produit.prix * item.quantite;
        }
    });

    return subtotal;
}

function getCartTotals() {
    const subtotal = getPanierSubtotal();
    const zoneSelected = Boolean(document.getElementById("livraison-zone")?.value?.trim());

    const partnerCoupon = getPartnerCoupon();
    if (partnerCoupon) {
        const discount = Math.floor(subtotal * partnerCoupon.reduction / 100);
        const shipping = 0;
        const total = Math.max(0, subtotal - discount);
        return {
            subtotal,
            discount,
            shipping,
            shippingPending: false,
            total,
            couponApplied: true,
            partnerCoupon
        };
    }

    const couponApplied = getAppliedCoupon() === PROMO_CODE && isPromoActive();
    const discount = couponApplied ? Math.floor(subtotal * PROMO_PERCENT / 100) : 0;
    const shipping = zoneSelected && !couponApplied ? BAMAKO_SHIPPING : 0;
    const total = Math.max(0, subtotal - discount + shipping);

    return {
        subtotal,
        discount,
        shipping,
        shippingPending: !zoneSelected && !couponApplied,
        total,
        couponApplied,
        partnerCoupon: null
    };
}

function createPromoBanner() {
    if (document.getElementById("promo-banner")) return;

    const banner = document.createElement("div");
    banner.id = "promo-banner";
    banner.innerHTML = `
        <span>🎉 ${getPromoMessage()} · Offre valable 2 semaines</span>
        <button id="promo-banner-close" aria-label="Fermer la promotion">✕</button>
    `;
    document.body.prepend(banner);

    const closeButton = document.getElementById("promo-banner-close");
    if (closeButton) {
        closeButton.addEventListener("click", () => banner.remove());
    }
}

function createPromoPopup() {
    if (document.getElementById("promo-popup-overlay") || localStorage.getItem(PROMO_POPUP_KEY) === "true") return;

    const overlay = document.createElement("div");
    overlay.id = "promo-popup-overlay";
    overlay.className = "promo-popup-overlay";

    overlay.innerHTML = `
        <div class="promo-popup">
            <button class="promo-popup-close" aria-label="Fermer la promotion">✕</button>
            <p class="promo-popup-label">Promotion spéciale</p>
            <h3>${getPromoMessage()}</h3>
            <p>Utilisez le code <strong>${PROMO_CODE}</strong> pour obtenir 5% de réduction et une livraison gratuite. Cette offre est valable pour les 2 prochaines semaines.</p>
            <button class="promo-popup-btn">J’ai compris</button>
        </div>
    `;

    document.body.appendChild(overlay);

    const closeBtn = overlay.querySelector(".promo-popup-close");
    const confirmBtn = overlay.querySelector(".promo-popup-btn");

    const closePopup = () => {
        overlay.remove();
        localStorage.setItem(PROMO_POPUP_KEY, "true");
    };

    closeBtn.addEventListener("click", closePopup);
    confirmBtn.addEventListener("click", closePopup);
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closePopup();
    });
}

function initPromoSystem() {
    createPromoBanner();
    createPromoPopup();
}

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
            <img src="${escapeHtml(produit.image)}" alt="${escapeHtml(produit.nom)}">
            <h3>${escapeHtml(produit.nom)}</h3>
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
function afficherPagination(_totalProduits, pageActuelle, totalPages) {
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
    appliquerFiltres(false);

    // remonte en haut de la grille pour le confort de lecture
    document.getElementById("product-container").scrollIntoView({ behavior: "smooth", block: "start" });
}

// ===========================================
// 3. FILTRES & TRI (catalogue uniquement)
// ===========================================
function normaliserTexte(texte) {
    return texte
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

function appliquerFiltres(reinitialiserPage = false) {
    if (reinitialiserPage) {
        pageActuelleCatalogue = 1;
    }

    let resultat = [...produits];

    const rechercheInput = document.getElementById("recherche-nom") || document.getElementById("search-input");
    const texteRecherche = rechercheInput ? normaliserTexte(rechercheInput.value) : "";

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

    const filtreProduitActif = document.querySelector(".filter-box-btn.active")?.dataset.produitFilter || "tous";

    if (filtreProduitActif === "promo") {
        resultat = resultat.filter(produit => produit.promo);
    }

    if (filtreProduitActif === "stock") {
        resultat = resultat.filter(produit => produit.stock !== false);
    }

    const prixMinInput = document.getElementById("prix-min");
    const prixMaxInput = document.getElementById("prix-max");

    const prixMin = prixMinInput && prixMinInput.value !== "" ? Number(prixMinInput.value) : null;
    const prixMax = prixMaxInput && prixMaxInput.value !== "" ? Number(prixMaxInput.value) : null;

    const prixMinAutorise = Math.min(...resultat.map(p => p.prix));
    const prixMaxAutorise = Math.max(...resultat.map(p => p.prix));

    if (prixMin !== null) {
        const minValide = Math.max(prixMinAutorise, prixMin);
        if (minValide !== prixMin) {
            if (prixMinInput) prixMinInput.value = String(minValide);
        }
        resultat = resultat.filter(produit => produit.prix >= minValide);
    }

    if (prixMax !== null) {
        const maxValide = Math.min(prixMaxAutorise, prixMax);
        if (maxValide !== prixMax) {
            if (prixMaxInput) prixMaxInput.value = String(maxValide);
        }
        resultat = resultat.filter(produit => produit.prix <= maxValide);
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
    const rechercheInput = document.getElementById("recherche-nom") || document.getElementById("search-input");
    if (rechercheInput) rechercheInput.value = "";

    document.querySelectorAll(".filter-categorie").forEach(checkbox => checkbox.checked = false);

    const prixMinInput = document.getElementById("prix-min");
    const prixMaxInput = document.getElementById("prix-max");
    if (prixMinInput) prixMinInput.value = "";
    if (prixMaxInput) prixMaxInput.value = "";

    const triSelect = document.getElementById("tri-select");
    if (triSelect) triSelect.value = "defaut";

    document.querySelectorAll(".filter-box-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    const btnTous = document.querySelector('.filter-box-btn[data-produit-filter="tous"]');
    if (btnTous) btnTous.classList.add("active");

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
    const produit = getProduitById(idProduit);
    if (!produit) return;

    const itemExistant = panier.find(item => item.id === idProduit);

    if (itemExistant) {
        itemExistant.quantite += 1;
    } else {
        panier.push({ id: produit.id, quantite: 1 });
    }

    savePanier(panier);
    mettreAJourCompteurPanier(true);
    
    // Afficher l'overlay de récapitulatif
    afficherOverlayAjoutPanier(produit);
}

function afficherOverlayAjoutPanier(produit) {
    // Créer l'overlay s'il n'existe pas
    let overlay = document.getElementById("cart-overlay");
    let backdrop = document.getElementById("cart-overlay-backdrop");
    
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "cart-overlay";
        overlay.className = "cart-overlay";
        
        backdrop = document.createElement("div");
        backdrop.id = "cart-overlay-backdrop";
        backdrop.className = "cart-overlay-backdrop";
        
        document.body.appendChild(backdrop);
        document.body.appendChild(overlay);
        
        // Gestionnaire de fermeture
        backdrop.addEventListener("click", fermerOverlayAjoutPanier);
    }
    
    // Calculer le total du panier
    const panier = getPanier();
    const totals = getCartTotals();
    
    // Mettre à jour le contenu
    overlay.innerHTML = `
        <div class="cart-overlay-header">
            <h3>Produit ajouté au panier</h3>
            <button class="cart-overlay-close" id="cart-overlay-close-btn">×</button>
        </div>
        <div class="cart-overlay-content">
            <div class="cart-overlay-product">
                <img src="${escapeHtml(produit.image)}" alt="${escapeHtml(produit.nom)}">
                <div class="cart-overlay-product-info">
                    <h4>${escapeHtml(produit.nom)}</h4>
                    <p>${produit.prix.toLocaleString()} FCFA</p>
                </div>
            </div>
            <p style="text-align: center; color: #666; font-size: 14px;">
                ${panier.length} article${panier.length > 1 ? 's' : ''} dans votre panier
            </p>
            <p style="text-align: center; font-weight: bold; color: #185FA5; font-size: 16px; margin-top: 8px;">
                Total: ${totals.total.toLocaleString()} FCFA
            </p>
        </div>
        <div class="cart-overlay-footer">
            <div class="cart-overlay-actions">
                <button class="cart-overlay-btn-primary" id="cart-overlay-go-to-cart">
                    Aller au panier
                </button>
                <button class="cart-overlay-btn-secondary" id="cart-overlay-continue-shopping">
                    Continuer mes achats
                </button>
            </div>
        </div>
    `;
    
    // Ajouter les gestionnaires d'événements
    document.getElementById("cart-overlay-close-btn").addEventListener("click", fermerOverlayAjoutPanier);
    document.getElementById("cart-overlay-go-to-cart").addEventListener("click", () => {
        window.location.href = "panier.html";
    });
    document.getElementById("cart-overlay-continue-shopping").addEventListener("click", fermerOverlayAjoutPanier);
    
    // Ouvrir l'overlay
    setTimeout(() => {
        overlay.classList.add("open");
        backdrop.classList.add("open");
    }, 10);
}

function fermerOverlayAjoutPanier() {
    const overlay = document.getElementById("cart-overlay");
    const backdrop = document.getElementById("cart-overlay-backdrop");
    
    if (overlay) overlay.classList.remove("open");
    if (backdrop) backdrop.classList.remove("open");
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

function mettreAJourResumePanier() {
    const couponMessage = document.getElementById("coupon-message");
    const totalAmount = document.getElementById("total-amount");
    const subtotalAmount = document.getElementById("subtotal-amount");
    const discountAmount = document.getElementById("discount-amount");
    const shippingAmount = document.getElementById("shipping-amount");

    const totals = getCartTotals();

    if (subtotalAmount) subtotalAmount.textContent = totals.subtotal.toLocaleString() + " FCFA";
    if (discountAmount) {
        discountAmount.textContent = totals.discount > 0 ? `-${totals.discount.toLocaleString()} FCFA` : "0 FCFA";
    }
    if (shippingAmount) {
        shippingAmount.textContent = totals.shippingPending
            ? "À calculer"
            : totals.shipping === 0
                ? "Gratuite"
                : `${totals.shipping.toLocaleString()} FCFA`;
    }
    if (totalAmount) totalAmount.textContent = totals.total.toLocaleString() + " FCFA";

    if (couponMessage) {
        if (lastCouponFeedback.message) {
            couponMessage.textContent = lastCouponFeedback.message;
            couponMessage.className = "coupon-message " + (lastCouponFeedback.type === "success" ? "success" : "error");
        } else if (totals.partnerCoupon) {
            couponMessage.textContent = `Code partenaire ${totals.partnerCoupon.code} appliqué : ${totals.partnerCoupon.reduction}% de réduction + livraison gratuite.`;
            couponMessage.className = "coupon-message success";
        } else if (totals.couponApplied) {
            couponMessage.textContent = `Code ${PROMO_CODE} appliqué : ${PROMO_PERCENT}% de réduction + livraison gratuite.`;
            couponMessage.className = "coupon-message success";
        } else if (!isPromoActive()) {
            couponMessage.textContent = "La promotion est terminée.";
            couponMessage.className = "coupon-message error";
        } else {
            couponMessage.textContent = `${getPromoMessage()} · Le code est valable 2 semaines.`;
            couponMessage.className = "coupon-message";
        }
    }
}

function afficherPanier() {
    const container = document.getElementById("panier-container");
    if (!container) return;

    const panier = getPanier();

    container.innerHTML = "";

    if (panier.length === 0) {
        container.innerHTML = "<p class='panier-vide'>Votre panier est vide pour le moment.</p>";
        mettreAJourResumePanier();
        return;
    }

    let total = 0;

    panier.forEach(item => {
        const produit = getProduitById(item.id);
        if (!produit) return;

        const sousTotal = produit.prix * item.quantite;
        total += sousTotal;

        const div = document.createElement("div");
        div.className = "panier-item";

        div.innerHTML = `
            <img src="${escapeHtml(produit.image)}" alt="${escapeHtml(produit.nom)}">
            <div class="panier-item-info">
                <h3>${escapeHtml(produit.nom)}</h3>
                <p class="price-unit">${produit.prix.toLocaleString()} FCFA / unité</p>
            </div>
            <div class="panier-qty">
                <button class="btn-moins" data-id="${produit.id}">-</button>
                <span>${item.quantite}</span>
                <button class="btn-plus" data-id="${produit.id}">+</button>
            </div>
            <div class="panier-item-total">${sousTotal.toLocaleString()} FCFA</div>
            <button class="btn-remove" data-id="${produit.id}" title="Retirer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
            </button>
        `;

        container.appendChild(div);
    });

    mettreAJourResumePanier();

    // Pré-remplir le formulaire livraison si l'utilisateur est connecté
    const utilisateur = getUtilisateurConnecte();
    if (utilisateur) {
        const nomInput = document.getElementById("livraison-nom");
        const emailInput = document.getElementById("livraison-email");
        const telInput = document.getElementById("livraison-tel");

        if (nomInput && !nomInput.value) nomInput.value = utilisateur.nom || "";
        if (emailInput && !emailInput.value) emailInput.value = utilisateur.email || "";

        if (telInput && !telInput.value && utilisateur.telephone) {
            telInput.value = utilisateur.telephone;
        }
    }
}

// ===========================================
// GESTION DE LA MODALE DE PAIEMENT
// ===========================================

function getDetailsPaiement(methode, total) {
    const libelles = {
        orange: "Orange Money",
        wave: "Wave",
        carte: "Carte bancaire Visa / Mastercard",
        livraison: "À la livraison"
    };
    const logos = {
        orange: "img/logo Orange.png",
        wave: "img/logo wave.png",
        carte: "img/logo visa-mastercard.png",
        livraison: "img/delivery-truck.png"
    };

    if (methode === "livraison") {
        return `
            <div style="text-align:center; padding: 10px 0;">
                <div style="font-size:42px; margin-bottom:10px;">🚚</div>
                <p style="font-size:14px; color:#555; margin-bottom:12px;">
                    Vous avez choisi de payer <strong>${total.toLocaleString()} FCFA</strong>
                    à la livraison de votre commande.
                </p>
                <p style="font-size:12px; color:#888;">
                    Préparez le montant exact. Notre livreur vous contactera avant l'envoi.
                </p>
                <button class="btn-confirmer" style="margin-top:14px;">
                    Confirmer ma commande
                </button>
            </div>
        `;
    }

    const logo = logos[methode] ? `<img src="${logos[methode]}" alt="${libelles[methode]}" style="height:36px;object-fit:contain;margin-bottom:10px;">` : "";
    return `
        <div style="text-align:center; padding: 10px 0;">
            ${logo}
            <p style="font-size:14px; color:#555; margin-bottom:12px;">
                Vous allez être redirigé vers la page de paiement sécurisée
                PayTech pour régler <strong>${total.toLocaleString()} FCFA</strong>
                par <strong>${libelles[methode] || methode}</strong>.
            </p>
            <p style="font-size:12px; color:#888;">
                🔒 Paiement 100% sécurisé — vos données bancaires ne
                transitent jamais par nos serveurs.
            </p>
            <button class="btn-confirmer" style="margin-top:14px;">
                Procéder au paiement →
            </button>
        </div>
    `;
}

function getTotalPanier() {
    return getCartTotals().total;
}

function validerFormulaireLivraison() {
    let valide = true;

    const nom = document.getElementById("livraison-nom");
    const tel = document.getElementById("livraison-tel");
    const adresse = document.getElementById("livraison-adresse");
    const email = document.getElementById("livraison-email");
    const zone = document.getElementById("livraison-zone");

    function setError(input, errorId, message) {
        input.classList.add("input-error");
        input.classList.remove("input-ok");
        const err = document.getElementById(errorId);
        if (err) err.textContent = message;
        valide = false;
    }

    function setOk(input, errorId) {
        input.classList.remove("input-error");
        input.classList.add("input-ok");
        const err = document.getElementById(errorId);
        if (err) err.textContent = "";
    }

    if (!nom || nom.value.trim().length < 2) {
        setError(nom, "error-nom", "Veuillez entrer votre nom complet.");
    } else {
        setOk(nom, "error-nom");
    }

    const telRegex = /^(\+223|00223)?[6-9]\d{7}$/;
    if (!tel || !telRegex.test(tel.value.trim().replace(/\s/g, ""))) {
        setError(tel, "error-tel", "Numéro invalide. Format Mali attendu : +223 7X XXX XXX ou 8 chiffres.");
    } else {
        setOk(tel, "error-tel");
    }

    if (!adresse || adresse.value.trim().length < 5) {
        setError(adresse, "error-adresse", "Veuillez entrer votre adresse de livraison.");
    } else {
        setOk(adresse, "error-adresse");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.value.trim())) {
        setError(email, "error-email", "Veuillez entrer une adresse email valide.");
    } else {
        setOk(email, "error-email");
    }

    if (!zone || !zone.value.trim()) {
        setError(zone, "error-zone", "Veuillez sélectionner votre commune / zone à Bamako.");
    } else {
        setOk(zone, "error-zone");
    }

    return valide;
}

async function confirmerCommande(methode) {
    const panier = getPanier();
    if (panier.length === 0) return;

    const nomClient = document.getElementById("livraison-nom")
        ?.value?.trim() || "";
    const telClient = document.getElementById("livraison-tel")
        ?.value?.trim() || "";
    const adresseClient = document.getElementById("livraison-adresse")
        ?.value?.trim() || "";
    const emailClient = document.getElementById("livraison-email")
        ?.value?.trim() || "";
    const zoneClient = document.getElementById("livraison-zone")
        ?.value?.trim() || "";

    const articles = panier.map(item => {
        const produit = produits.find(p => p.id === item.id);
        return {
            id: produit.id,
            nom: produit.nom,
            prix: produit.prix,
            quantite: item.quantite,
            sousTotal: produit.prix * item.quantite
        };
    });

    const sousTotalArticles = articles.reduce((sum, a) => sum + a.sousTotal, 0);
    const totals = getCartTotals();
    const partnerCoupon = getPartnerCoupon();
    const isLivraison = methode === "livraison";

    // Feedback visuel sur le bouton + loader Sypha
    const btnConfirmer = document.querySelector(".btn-confirmer");
    if (btnConfirmer) {
        btnConfirmer.textContent = isLivraison
            ? "⏳ Validation de votre commande..."
            : "⏳ Redirection vers le paiement...";
        btnConfirmer.disabled = true;
    }
    showSyphaLoader(isLivraison ? "Validation de votre commande..." : "Redirection vers le paiement...");

    // ÉTAPE 1 : Créer la commande dans MongoDB
    let numeroCommande = "";
    try {
        const payload = {
            client: {
                nom: nomClient,
                telephone: telClient,
                adresse: adresseClient,
                commune: zoneClient,
                email: emailClient || getUtilisateurConnecte()?.email || ""
            },
            articles,
            total: totals.total,
            sousTotal: sousTotalArticles,
            shipping: totals.shipping,
            modePaiement: MODES_PAIEMENT_LABELS[methode] || methode
        };
        if (partnerCoupon) {
            payload.codePromoPartenaire = partnerCoupon.code;
        }

        const res = await fetch(`${BACKEND_URL}/api/commandes`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        const data = await res.json();
        numeroCommande = data.numero || "";

        if (!numeroCommande) {
            throw new Error("Numéro de commande non reçu");
        }

        // Le code promo/créateur a été utilisé pour cette commande : on le vide
        if (totals.couponApplied) {
            markCouponAsUsed();
        }
        resetCouponUI();
    } catch (err) {
        console.warn("Impossible de créer la commande:", err);
        hideSyphaLoader();
        alert("Impossible d'enregistrer la commande. Veuillez réessayer.");
        if (btnConfirmer) {
            btnConfirmer.textContent = "Confirmer ma commande";
            btnConfirmer.disabled = false;
        }
        return;
    }

    // Paiement à la livraison : pas d'appel PayTech, on confirme directement
    if (isLivraison) {
        enregistrerCommande(panier, methode, totals.total);
        savePanier([]);
        mettreAJourCompteurPanier();
        window.location.href = `commande-confirmee.html?numero=${numeroCommande}`;
        return;
    }

    // ÉTAPE 2 : Initier le paiement PayTech
    try {
        const res = await fetch(`${BACKEND_URL}/api/paiement/initier`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                commande_id: numeroCommande,
                montant: Math.round(totals.total),
                client: {
                    nom: nomClient,
                    telephone: telClient,
                    adresse: adresseClient,
                    email: emailClient || ""
                },
                methode: methode
            })
        });

        const data = await res.json();

        if (data.succes && data.redirect_url) {
            // Sauvegarder dans l'historique local avant redirection
            enregistrerCommande(panier, methode, totals.total);
            savePanier([]);
            mettreAJourCompteurPanier();

            // Rediriger vers la page de paiement PayTech
            window.location.href = data.redirect_url;
            return;

        } else {
            hideSyphaLoader();
            alert(
                "Impossible d'initialiser le paiement.\n" +
                "Veuillez réessayer ou nous contacter sur WhatsApp."
            );
            if (btnConfirmer) {
                btnConfirmer.textContent = "Confirmer ma commande";
                btnConfirmer.disabled = false;
            }
        }

    } catch (err) {
        hideSyphaLoader();
        console.error("Erreur PayTech:", err);
        alert(
            "Le service de paiement est temporairement indisponible.\n" +
            "Veuillez réessayer dans quelques instants."
        );
        if (btnConfirmer) {
            btnConfirmer.textContent = "Confirmer ma commande";
            btnConfirmer.disabled = false;
        }
    }
}

// ===========================================
// PAGE DÉTAIL PRODUIT (produit.html?id=X)
// ===========================================
function afficherPageProduit() {
    const container = document.getElementById("produit-detail");
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));
    const produit = getProduitById(id);

    if (!produit) {
        container.innerHTML = "<p class='no-result'>Produit introuvable.</p>";
        return;
    }

    document.title = produit.nom + " — Hygia";

    container.innerHTML = `
        <div class="produit-detail-image">
            <img src="${escapeHtml(produit.image)}" alt="${escapeHtml(produit.nom)}">
        </div>
        <div class="produit-detail-info">
            <h1>${escapeHtml(produit.nom)}</h1>
            <p class="produit-detail-price">${produit.prix.toLocaleString()} FCFA</p>
            <p class="produit-detail-description">${escapeHtml(produit.description)}</p>

            <button class="btn-add-cart" data-id="${produit.id}">Ajouter au panier</button>

            <section class="avantages-yames">
                <h3>Les Avantages de Hygia</h3>
                <div class="avantages-yames-list">
                    <div class="avantage-item">
                        <span class="avantage-icon icon-truck"></span>
                        <span>Livraison rapide</span>
                    </div>
                    <div class="avantage-item">
                        <span class="avantage-icon icon-shield"></span>
                        <span>Garantie fiable</span>
                    </div>
                    <div class="avantage-item">
                        <span class="avantage-icon icon-check"></span>
                        <span>Produits certifiés</span>
                    </div>
                </div>
            </section>
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
                        <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.nom)}">
                        <h3>${escapeHtml(p.nom)}</h3>
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
// Note : la double boucle est la programmation dynamique standard de cet algorithme
// (remplissage d'une matrice a.length x b.length), pas une recherche indexable via Map/Set.
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
// Calcule un score de pertinence entre le texte tapé et le nom d'un produit
// Plus le score est élevé, plus le produit est pertinent. 0 = on élimine.
function scorePertinence(texte, nomProduit) {
    const t = normaliserTexte(texte);
    const nom = normaliserTexte(nomProduit);

    if (t === "") return 0;

    // 1. correspondance exacte du nom entier
    if (nom === t) return 100;

    // 2. le nom commence par le texte tapé
    if (nom.startsWith(t)) return 90;

    // 3. un des mots du nom commence par le texte tapé
    const mots = nom.split(/\s+/);
    if (mots.some(mot => mot.startsWith(t))) return 80;

    // 4. le texte tapé apparaît n'importe où dans le nom (mot collé, ex: "metre")
    if (nom.includes(t)) return 70;

    // 5. tolérance aux fautes de frappe — seulement si le texte tapé est assez long
    // (sinon "te" ou "th" matcherait n'importe quoi par hasard)
    if (t.length >= 3) {
        let meilleureDistance = Infinity;

        mots.forEach(mot => {
            const dist = distanceLevenshtein(t, mot);
            if (dist < meilleureDistance) meilleureDistance = dist;
        });

        // tolérance stricte : 1 erreur pour 4-6 lettres, 2 erreurs max au-delà
        const seuil = t.length <= 6 ? 1 : 2;

        if (meilleureDistance <= seuil) {
            return Math.max(20, 50 - meilleureDistance * 10);
        }
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
                    <img src="${escapeHtml(produit.image)}" alt="${escapeHtml(produit.nom)}">
                    <div class="search-result-info">
                        <div class="nom">${escapeHtml(produit.nom)}</div>
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

    input.closest("form").addEventListener("submit", (e) => {
        e.preventDefault();
        const texte = input.value.trim();
        if (texte !== "") {
            window.location.href = "catalogue.html?q=" + encodeURIComponent(texte);
        }
    });
}

// ===========================================
// SYSTÈME DE COMPTES (API backend Hygia)
// ===========================================

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

async function inscrireUtilisateur(nom, telephone, email, motdepasse) {
    showSyphaLoader("Création de votre compte...");
    try {
        const response = await fetch(`${BACKEND_URL}/api/auth/inscription`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nom, telephone, email, motdepasse })
        });

        const data = await response.json();

        if (data.succes && data.utilisateur) {
            setUtilisateurConnecte({
                nom: data.utilisateur.nom,
                email: data.utilisateur.email,
                telephone: telephone
            });
            return { succes: true, message: data.message || "Compte créé avec succès !" };
        }

        return { succes: false, message: data.erreur || "Erreur lors de la création du compte." };
    } catch (error) {
        console.error("Erreur inscription :", error);
        return { succes: false, message: "Impossible de créer le compte. Vérifiez votre connexion." };
    } finally {
        hideSyphaLoader();
    }
}

async function connecterUtilisateur(email, motdepasse) {
    showSyphaLoader("Connexion en cours...");
    try {
        const response = await fetch(`${BACKEND_URL}/api/auth/connexion`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, motdepasse })
        });

        const data = await response.json();

        if (data.succes && data.utilisateur) {
            setUtilisateurConnecte({
                nom: data.utilisateur.nom,
                email: data.utilisateur.email,
                telephone: data.utilisateur.telephone || ""
            });
            return { succes: true, message: data.message || "Connexion réussie !" };
        }

        return { succes: false, message: data.erreur || "Email ou mot de passe incorrect." };
    } catch (error) {
        console.error("Erreur connexion :", error);
        return { succes: false, message: "Impossible de se connecter. Vérifiez votre connexion." };
    } finally {
        hideSyphaLoader();
    }
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

// Affiche le résultat d'une action d'authentification (inscription/connexion)
// et redirige vers le compte en cas de succès. Factorisé pour éviter la duplication.
function afficherResultatAuth(resultat, messageEl) {
    messageEl.textContent = resultat.message;
    messageEl.className = "auth-message " + (resultat.succes ? "success" : "error");

    if (resultat.succes) {
        setTimeout(() => {
            window.location.href = "compte.html";
        }, 800);
    }
}

function initFormulairesAuth() {
    const formInscription = document.getElementById("form-inscription");
    const formConnexion = document.getElementById("form-connexion");
    const message = document.getElementById("auth-message");

    if (formInscription) {
        formInscription.addEventListener("submit", async (e) => {
            e.preventDefault();

            const nom = document.getElementById("nom").value.trim();
            const telephone = document.getElementById("telephone").value.trim();
            const email = document.getElementById("email").value.trim();
            const motdepasse = document.getElementById("password").value;

            const resultat = await inscrireUtilisateur(nom, telephone, email, motdepasse);
            afficherResultatAuth(resultat, message);
        });
    }

    if (formConnexion) {
        formConnexion.addEventListener("submit", async (e) => {
            e.preventDefault();

            const email = document.getElementById("email").value.trim();
            const motdepasse = document.getElementById("password").value;

            const resultat = await connecterUtilisateur(email, motdepasse);
            afficherResultatAuth(resultat, message);
        });
    }
}

function getInitials(nom) {
    if (!nom) return "—";
    const parts = nom.trim().split(" ").filter(Boolean);
    if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return parts[0].slice(0, 2).toUpperCase();
}

function afficherMessageCompte(elementId, message, type) {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.textContent = message;
    el.className = `compte-message ${type}`;
}

function cacherMessageCompte(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.className = "compte-message";
    el.textContent = "";
}

function initFormulairesCompte(utilisateur) {
    const btnModifier = document.getElementById("btn-modifier-profil");
    const btnChangerPassword = document.getElementById("btn-changer-password");
    const formProfilCard = document.getElementById("form-profil-card");
    const formPasswordCard = document.getElementById("form-password-card");
    const formProfil = document.getElementById("form-profil");
    const formPassword = document.getElementById("form-password");
    const btnAnnulerProfil = document.getElementById("btn-annuler-profil");
    const btnAnnulerPassword = document.getElementById("btn-annuler-password");

    function fermerFormulaires() {
        if (formProfilCard) formProfilCard.classList.remove("active");
        if (formPasswordCard) formPasswordCard.classList.remove("active");
        if (btnModifier) btnModifier.style.display = "";
        if (btnChangerPassword) btnChangerPassword.style.display = "";
        cacherMessageCompte("profil-message");
        cacherMessageCompte("password-message");
    }

    if (btnModifier && formProfilCard) {
        btnModifier.addEventListener("click", () => {
            document.getElementById("profil-nom").value = utilisateur.nom || "";
            document.getElementById("profil-telephone").value = utilisateur.telephone || "";
            document.getElementById("profil-motdepasse").value = "";
            cacherMessageCompte("profil-message");
            formProfilCard.classList.add("active");
            formPasswordCard.classList.remove("active");
            if (btnChangerPassword) btnChangerPassword.style.display = "";
        });
    }

    if (btnChangerPassword && formPasswordCard) {
        btnChangerPassword.addEventListener("click", () => {
            formPassword.reset();
            cacherMessageCompte("password-message");
            formPasswordCard.classList.add("active");
            formProfilCard.classList.remove("active");
            if (btnModifier) btnModifier.style.display = "";
        });
    }

    if (btnAnnulerProfil) btnAnnulerProfil.addEventListener("click", fermerFormulaires);
    if (btnAnnulerPassword) btnAnnulerPassword.addEventListener("click", fermerFormulaires);

    if (formProfil) {
        formProfil.addEventListener("submit", async (e) => {
            e.preventDefault();
            cacherMessageCompte("profil-message");
            showSyphaLoader("Mise à jour du profil...");

            const nom = document.getElementById("profil-nom").value.trim();
            const telephone = document.getElementById("profil-telephone").value.trim();
            const motdepasse = document.getElementById("profil-motdepasse").value;

            try {
                const response = await fetch(`${BACKEND_URL}/api/auth/profil`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: utilisateur.email,
                        motdepasse,
                        nom,
                        telephone
                    })
                });

                const data = await response.json();

                if (data.succes) {
                    // Mettre à jour l'utilisateur en localStorage
                    const misAJour = {
                        ...utilisateur,
                        nom: data.utilisateur.nom,
                        telephone: data.utilisateur.telephone
                    };
                    setUtilisateurConnecte(misAJour);

                    // Mettre à jour l'affichage
                    document.getElementById("compte-nom").textContent = "Bonjour, " + misAJour.nom;
                    document.getElementById("compte-avatar").textContent = getInitials(misAJour.nom);
                    document.getElementById("info-nom").textContent = misAJour.nom || "—";
                    document.getElementById("info-telephone").textContent = misAJour.telephone || "—";

                    afficherMessageCompte("profil-message", data.message, "success");
                    setTimeout(fermerFormulaires, 1500);
                } else {
                    afficherMessageCompte("profil-message", data.erreur || "Erreur lors de la mise à jour.", "error");
                }
            } catch (error) {
                console.error("Erreur mise à jour profil :", error);
                afficherMessageCompte("profil-message", "Erreur réseau. Vérifiez votre connexion.", "error");
            } finally {
                hideSyphaLoader();
            }
        });
    }

    if (formPassword) {
        formPassword.addEventListener("submit", async (e) => {
            e.preventDefault();
            cacherMessageCompte("password-message");

            const ancien = document.getElementById("password-ancien").value;
            const nouveau = document.getElementById("password-nouveau").value;
            const confirmation = document.getElementById("password-confirmation").value;

            if (nouveau !== confirmation) {
                afficherMessageCompte("password-message", "Les nouveaux mots de passe ne correspondent pas.", "error");
                return;
            }

            if (nouveau.length < 6) {
                afficherMessageCompte("password-message", "Le mot de passe doit contenir au moins 6 caractères.", "error");
                return;
            }

            showSyphaLoader("Modification du mot de passe...");
            try {
                const response = await fetch(`${BACKEND_URL}/api/auth/motdepasse`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: utilisateur.email,
                        ancienMotdepasse: ancien,
                        nouveauMotdepasse: nouveau
                    })
                });

                const data = await response.json();

                if (data.succes) {
                    afficherMessageCompte("password-message", data.message, "success");
                    formPassword.reset();
                    setTimeout(fermerFormulaires, 1500);
                } else {
                    afficherMessageCompte("password-message", data.erreur || "Erreur lors du changement.", "error");
                }
            } catch (error) {
                console.error("Erreur changement mot de passe :", error);
                afficherMessageCompte("password-message", "Erreur réseau. Vérifiez votre connexion.", "error");
            } finally {
                hideSyphaLoader();
            }
        });
    }
}

function afficherOnglet(onglet, btnClique) {
    document.querySelectorAll(".compte-tab-panel").forEach(p => p.classList.remove("active"));
    document.querySelectorAll(".compte-tab-btn").forEach(b => b.classList.remove("active"));
    const panel = document.getElementById("tab-" + onglet);
    if (panel) panel.classList.add("active");
    if (btnClique) btnClique.classList.add("active");
}

async function afficherPageCompte() {
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

    // Avatar : initiales du nom
    const avatarEl = document.getElementById("compte-avatar");
    if (avatarEl) {
        avatarEl.textContent = getInitials(utilisateur.nom);
    }

    document.getElementById("compte-nom").textContent = "Bonjour, " + utilisateur.nom;
    document.getElementById("compte-email").textContent = utilisateur.email;

    // Infos profil
    const infoNom = document.getElementById("info-nom");
    const infoEmail = document.getElementById("info-email");
    const infoTel = document.getElementById("info-telephone");
    if (infoNom) infoNom.textContent = utilisateur.nom || "—";
    if (infoEmail) infoEmail.textContent = utilisateur.email || "—";

    // Récupérer le téléphone depuis le profil connecté
    if (infoTel) {
        infoTel.textContent = utilisateur.telephone || "—";
    }

    const btnDeco = document.getElementById("btn-deconnexion");
    if (btnDeco) {
        btnDeco.addEventListener("click", () => {
            deconnecterUtilisateur();
            window.location.href = "index.html";
        });
    }

    // Initialiser les formulaires de modification de profil et mot de passe
    initFormulairesCompte(utilisateur);

    const btnSupprimer = document.getElementById("btn-supprimer-compte");
    if (btnSupprimer) {
        btnSupprimer.addEventListener("click", async () => {
            const confirmé = window.confirm("Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.");
            if (!confirmé) return;

            const motdepasse = window.prompt("Veuillez entrer votre mot de passe pour confirmer la suppression :");
            if (!motdepasse) return;

            showSyphaLoader("Suppression du compte...");
            try {
                const response = await fetch(`${BACKEND_URL}/api/auth/supprimer`, {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: utilisateur.email, motdepasse })
                });

                const data = await response.json();

                if (data.succes) {
                    deconnecterUtilisateur();
                    afficherToast("Votre compte a été supprimé.", "info");
                    setTimeout(() => { window.location.href = "index.html"; }, 1200);
                } else {
                    afficherToast(data.erreur || "Impossible de supprimer le compte.", "error");
                }
            } catch (error) {
                console.error("Erreur suppression compte :", error);
                afficherToast("Erreur réseau lors de la suppression.", "error");
            } finally {
                hideSyphaLoader();
            }
        });
    }

    const historiqueContainer = document.getElementById("historique-commandes");
    if (!historiqueContainer) return;

    historiqueContainer.innerHTML = `<div style="text-align:center;padding:30px;color:#888;font-size:14px;">Chargement de vos commandes...</div>`;

    const statutClasse = (s) => {
        if (!s) return "en-attente";
        const val = s.toLowerCase();
        if (val.includes("livr")) return "livree";
        if (val.includes("pay")) return "confirmee";
        if (val.includes("annul")) return "annulee";
        return "en-attente";
    };

    const iconeMode = (mode) => {
        if (!mode) return "💳";
        const m = mode.toLowerCase();
        if (m.includes("orange")) return "🟠";
        if (m.includes("wave")) return "🔵";
        if (m.includes("livraison")) return "�";
        return "�";
    };

    showSyphaLoader("Chargement de vos commandes...");
    try {
        const res = await fetch(`${BACKEND_URL}/api/mes-commandes?email=${encodeURIComponent(utilisateur.email)}`);
        const data = await res.json();

        const commandes = (data.succes && data.commandes) ? data.commandes : [];

        // Stats
        const statCmds = document.getElementById("stat-total-cmds");
        const statDerniere = document.getElementById("stat-derniere");
        if (statCmds) statCmds.textContent = commandes.length;
        if (statDerniere && commandes.length > 0) {
            const d = new Date(commandes[0].date);
            statDerniere.textContent = d.toLocaleDateString("fr-FR");
        }

        if (commandes.length === 0) {
            historiqueContainer.innerHTML = `
                <div class="historique-vide">
                    <div class="vide-icon">📦</div>
                    <p>Vous n'avez pas encore passé de commande.</p>
                    <a href="catalogue.html">Découvrir le catalogue</a>
                </div>`;
            return;
        }

        historiqueContainer.innerHTML = "";
        commandes.forEach((commande) => {
            const div = document.createElement("div");
            div.className = "commande-card";
            const date = new Date(commande.date).toLocaleDateString("fr-FR");
            const itemsHtml = commande.articles.map(a => `
                <div class="article-ligne">
                    <span class="art-nom">${escapeHtml(a.nom)}</span>
                    <span class="art-qty">x${a.quantite}</span>
                </div>`).join("");

            div.innerHTML = `
                <div class="commande-card-header">
                    <span class="cmd-num">Commande ${escapeHtml(commande.numero)}</span>
                    <span class="cmd-date">📅 ${date}</span>
                    <span class="statut-badge ${statutClasse(commande.statut)}">${escapeHtml(commande.statut || "En attente")}</span>
                </div>
                <div class="commande-card-body">
                    <div class="commande-articles">${itemsHtml}</div>
                </div>
                <div class="commande-card-footer">
                    <span class="commande-mode-paiement">${iconeMode(commande.modePaiement)} ${escapeHtml(commande.modePaiement || "—")}</span>
                    <span class="commande-total-amount">${(commande.total || 0).toLocaleString()} FCFA</span>
                </div>`;

            historiqueContainer.appendChild(div);
        });
    } catch (err) {
        console.error("Erreur chargement commandes :", err);
        historiqueContainer.innerHTML = `<div style="text-align:center;padding:30px;color:#c0392b;font-size:14px;">Impossible de charger vos commandes.</div>`;
    } finally {
        hideSyphaLoader();
    }
}

function enregistrerCommande(panier, methode, total) {
    const utilisateur = getUtilisateurConnecte();
    if (!utilisateur) return;

    const historique = JSON.parse(localStorage.getItem("historiqueCommandes") || "[]");

    const articles = panier.map(item => {
        const produit = getProduitById(item.id);
        return { nom: produit ? produit.nom : "Produit", quantite: item.quantite };
    });

    historique.push({
        email: utilisateur.email,
        date: new Date().toLocaleDateString("fr-FR"),
        statut: "En attente",
        articles: articles,
        modePaiement: MODES_PAIEMENT_LABELS[methode] || methode,
        total: total
    });

    localStorage.setItem("historiqueCommandes", JSON.stringify(historique));
}

// ===========================================
// 5. INITIALISATION AU CHARGEMENT DE LA PAGE
// ===========================================
function initPasswordToggles() {
    document.querySelectorAll('input[type="password"]').forEach(input => {
        if (input.parentElement?.classList.contains("password-field")) return;

        const wrapper = document.createElement("div");
        wrapper.className = "password-field";
        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);

        const button = document.createElement("button");
        button.type = "button";
        button.className = "password-toggle";
        button.setAttribute("aria-label", "Afficher le mot de passe");
        button.setAttribute("aria-pressed", "false");
        button.innerHTML = '<svg class="eye-open" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg><svg class="eye-closed" viewBox="0 0 24 24" aria-hidden="true"><path d="m3 3 18 18"/><path d="M10.6 6.2A11 11 0 0 1 12 6c6.5 0 10 6 10 6a18 18 0 0 1-2.1 2.8M6.5 6.5C3.6 8.4 2 12 2 12s3.5 6 10 6c1.8 0 3.3-.5 4.6-1.2M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>';
        wrapper.appendChild(button);

        button.addEventListener("click", () => {
            const visible = input.type === "text";
            input.type = visible ? "password" : "text";
            button.setAttribute("aria-label", visible ? "Afficher le mot de passe" : "Masquer le mot de passe");
            button.setAttribute("aria-pressed", String(!visible));
            wrapper.classList.toggle("password-visible", !visible);
            input.focus();
        });
    });
}

function initMobileMenu() {
    const nav = document.querySelector("nav");
    const navCenter = document.querySelector(".nav-center");
    const navLeft = document.querySelector(".nav-left");
    if (!nav || !navCenter || !navLeft) return;

    const toggle = document.createElement("button");
    toggle.className = "nav-toggle";
    toggle.setAttribute("aria-label", "Menu");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = "<span class='bar'></span><span class='bar'></span><span class='bar'></span>";
    navLeft.insertBefore(toggle, navLeft.firstChild);

    const openMenu = () => {
        navCenter.classList.add("open");
        toggle.setAttribute("aria-expanded", "true");
    };

    const closeMenu = () => {
        navCenter.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
    };

    let closeTimer = null;

    toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        if (navCenter.classList.contains("open")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Survol du hamburger : afficher le menu
    toggle.addEventListener("mouseenter", () => {
        clearTimeout(closeTimer);
        openMenu();
    });

    toggle.addEventListener("mouseleave", () => {
        closeTimer = setTimeout(closeMenu, 200);
    });

    navCenter.addEventListener("mouseenter", () => {
        clearTimeout(closeTimer);
    });

    navCenter.addEventListener("mouseleave", () => {
        closeTimer = setTimeout(closeMenu, 200);
    });

    navCenter.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });

    document.addEventListener("click", (e) => {
        if (navCenter.classList.contains("open") && !nav.contains(e.target)) {
            closeMenu();
        }
    });
}

// Animations d'apparition (accueil et à propos)
function initScrollReveal() {
    if (!document.querySelector(".hero, .apropos-hero")) return;

    const selectors = [
        "main > section", "main > div",
        ".category-item", ".why-item", ".valeur-card", ".why-card", ".stat-bloc",
        ".apropos-preview-texte", ".apropos-preview-img", ".qui-texte", ".qui-image"
    ];

    const elements = [];
    selectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
            if (el.classList.contains("reveal")) return;
            if (el.tagName === "SCRIPT" || el.tagName === "STYLE") return;
            el.classList.add("reveal");
            const parent = el.parentElement;
            const delay = parent ? Array.from(parent.children).indexOf(el) * 0.08 : 0;
            el.style.transitionDelay = `${delay}s`;
            elements.push(el);
        });
    });

    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    elements.forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {

    initPromoSystem();
    initPasswordToggles();
    initMobileMenu();
    initScrollReveal();

    if (document.getElementById("coupon-input")) {
        resetCouponUI();
    }

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

    const confNumero = document.getElementById("conf-numero");
    if (confNumero) {
        const params = new URLSearchParams(window.location.search);
        const numero = params.get("numero") || "—";
        const total = Number(params.get("total")) || 0;
        const methode = params.get("methode") || "—";
        const nom = params.get("nom") || "—";

        confNumero.textContent = numero;
        document.getElementById("conf-nom").textContent = nom;
        document.getElementById("conf-methode").textContent = methode;
        document.getElementById("conf-total").textContent = total.toLocaleString() + " FCFA";
    }

    // --- Filtres catalogue ---
    const rechercheNom = document.getElementById("recherche-nom") || document.getElementById("search-input");
    const filtresCategorie = document.querySelectorAll(".filter-categorie");
    const prixMin = document.getElementById("prix-min");
    const prixMax = document.getElementById("prix-max");
    const triSelect = document.getElementById("tri-select");
    const produitFilterButtons = document.querySelectorAll(".filter-box-btn");
    const resetBtn = document.getElementById("reset-filtres");

    // Pré-filtre depuis l'URL (?categorie= venant de l'accueil)
    const urlParams = new URLSearchParams(window.location.search);
    const categorieUrl = urlParams.get("categorie");
    if (categorieUrl && filtresCategorie.length > 0) {
        filtresCategorie.forEach(checkbox => {
            if (checkbox.value === categorieUrl) checkbox.checked = true;
        });
        appliquerFiltres(true);
    }

    if (rechercheNom) {
        const params = new URLSearchParams(window.location.search);
        const q = params.get("q");
        if (q) {
            rechercheNom.value = q;
            appliquerFiltres(true);
        }

        rechercheNom.addEventListener("input", () => appliquerFiltres(true));
    }

    filtresCategorie.forEach(checkbox => {
        checkbox.addEventListener("change", () => appliquerFiltres(true));
    });

    if (prixMin) prixMin.addEventListener("input", () => appliquerFiltres(true));
    if (prixMax) prixMax.addEventListener("input", () => appliquerFiltres(true));
    if (triSelect) triSelect.addEventListener("change", () => appliquerFiltres(false));
    produitFilterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            produitFilterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            appliquerFiltres();
        });
    });
    if (resetBtn) resetBtn.addEventListener("click", reinitialiserFiltres);

    // --- Clics globaux (ajout panier, +/-, suppression) ---
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-add-cart")) {
            const id = Number(e.target.dataset.id);
            ajouterAuPanier(id);

            const btn = e.target;
            btn.textContent = "✓ Ajouté !";
            btn.classList.add("added");
            btn.disabled = true;

            setTimeout(() => {
                btn.textContent = "Ajouter au panier";
                btn.classList.remove("added");
                btn.disabled = false;
            }, 2000);
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
    const zoneLivraison = document.getElementById("livraison-zone");

    if (zoneLivraison) {
        zoneLivraison.addEventListener("change", mettreAJourResumePanier);
    }

    if (btnPaiement) {
        const livraisonForm = document.getElementById("livraison-form");

        btnPaiement.addEventListener("click", () => {
            const panier = getPanier();
            if (panier.length === 0) {
                afficherToast("Votre panier est vide.", "error");
                return;
            }

            // Étape 1 : afficher le formulaire et changer le bouton en "Payer"
            if (livraisonForm && livraisonForm.style.display === "none") {
                livraisonForm.style.display = "block";
                livraisonForm.scrollIntoView({ behavior: "smooth" });
                btnPaiement.textContent = "Payer";
                btnPaiement.dataset.etape = "payer";
                return;
            }

            // Étape 2 : valider le formulaire et ouvrir le modal
            if (!validerFormulaireLivraison()) {
                livraisonForm.scrollIntoView({ behavior: "smooth" });
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
            if (!["orange", "wave", "carte", "livraison"].includes(methode)) return;

            const total = getTotalPanier();

            paymentDetails.innerHTML = getDetailsPaiement(methode, total);
            paymentDetails.classList.add("active");

            const btnConfirmer = paymentDetails.querySelector(".btn-confirmer");
            if (btnConfirmer) {
                btnConfirmer.addEventListener("click", () => confirmerCommande(methode));
            }
        });
    });

    const couponInput = document.getElementById("coupon-input");
    const couponButton = document.getElementById("coupon-button");
    const couponMessage = document.getElementById("coupon-message");

    if (couponButton && couponInput) {
        couponButton.addEventListener("click", async () => {
            const code = couponInput.value.trim();
            const normalise = code.toUpperCase();

            // Animation du bouton
            couponButton.classList.remove("coupon-button-anim");
            void couponButton.offsetWidth;
            couponButton.classList.add("coupon-button-anim");

            // On efface d'abord tout ancien code partenaire
            clearPartnerCoupon();
            clearAppliedCoupon();

            // Vérifier si c'est un code partenaire actif
            const validationPartenaire = await validerCodePartenaire(code);
            if (validationPartenaire.valide) {
                setPartnerCoupon(code, validationPartenaire.reduction);
                lastCouponFeedback = {
                    message: `Code partenaire ${normalise} appliqué : ${validationPartenaire.reduction}% de réduction + livraison gratuite.`,
                    type: "success"
                };
                afficherPanier();
                animerCouponApplique(true, true);
                return;
            }

            // Sinon fallback sur le code promo interne HYGIA
            const resultat = applyCoupon(code);
            lastCouponFeedback = {
                message: resultat.message,
                type: resultat.success ? "success" : "error"
            };
            if (!resultat.success) {
                clearAppliedCoupon();
            }
            afficherPanier();
            animerCouponApplique(resultat.success, resultat.success);
        });
    }

    function animerCouponApplique(success, animateDiscount) {
        const couponMessage = document.getElementById("coupon-message");
        const discountAmount = document.getElementById("discount-amount");

        if (couponMessage) {
            couponMessage.classList.remove("coupon-message-anim");
            void couponMessage.offsetWidth;
            couponMessage.classList.add("coupon-message-anim");
            setTimeout(() => couponMessage.classList.remove("coupon-message-anim"), 420);
        }

        if (animateDiscount && discountAmount) {
            discountAmount.classList.remove("discount-anim");
            void discountAmount.offsetWidth;
            discountAmount.classList.add("discount-anim");
            setTimeout(() => discountAmount.classList.remove("discount-anim"), 520);
        }
    }

    if (couponInput) {
        couponInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                couponButton?.click();
            }
        });

        window.addEventListener("pagehide", resetCouponUI);
        window.addEventListener("pageshow", (event) => {
            if (event.persisted) {
                resetCouponUI();
                afficherPanier();
            }
        });
    }

});

const form = document.getElementById("contact-form");
if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        showSyphaLoader("Envoi de votre message...");
        const data = new FormData(form);
        try {
            const res = await fetch(form.action, {
                method: "POST",
                body: data,
                headers: { "Accept": "application/json" }
            });
            if (res.ok) {
                form.reset();
                document.getElementById("form-success").style.display = "block";
            } else {
                afficherToast("Erreur lors de l'envoi. Contactez-nous sur WhatsApp.", "error");
            }
        } catch {
            afficherToast("Erreur réseau. Contactez-nous sur WhatsApp au +223 72 08 09 37.", "error");
        } finally {
            hideSyphaLoader();
        }
    });
}