// Base de données produits Chickenzz

// Options globales
const VIANDES = [
    { id: 'cordon_bleu', name: 'Cordon Bleu' },
    { id: 'tikka', name: 'Poulet Tikka' },
    { id: 'kebab', name: 'Kebab' },
    { id: 'steak', name: 'Steak' },
    { id: 'kefta', name: 'Kefta' },
    { id: 'tenders', name: 'Tenders' },
    { id: 'merguez', name: 'Merguez' },
    { id: 'nuggets', name: 'Nuggets' }
];

const SAUCES = [
    { id: 'blanche', name: 'Blanche' },
    { id: 'bresilienne', name: 'Brésilienne' },
    { id: 'poivre', name: 'Poivre' },
    { id: 'ketchup', name: 'Ketchup' },
    { id: 'harissa', name: 'Harissa' },
    { id: 'curry', name: 'Curry' },
    { id: 'biggy', name: 'Biggy' },
    { id: 'barbecue', name: 'Barbecue' },
    { id: 'mayonnaise', name: 'Mayonnaise' },
    { id: 'andalouse', name: 'Andalouse' },
    { id: 'samourai', name: 'Samouraï' },
    { id: 'moutarde', name: 'Moutarde' },
    { id: 'marocaine', name: 'Marocaine' },
    { id: 'algerienne', name: 'Algérienne' },
    { id: 'miami', name: 'Miami' }
];

const BOISSONS_33 = [
    { id: 'oasis_tropical', name: 'Oasis Tropical' },
    { id: 'oasis_pcf', name: 'Oasis Pomme Cassis Framboise' },
    { id: 'oasis_ff', name: 'Oasis Fraise Framboise' },
    { id: 'dada_peche', name: 'Dada Pêche' },
    { id: 'dada_melon', name: 'Dada Melon' },
    { id: 'dada_litchi', name: 'Dada Litchi' },
    { id: 'dada_cerise', name: 'Dada Cerise' },
    { id: 'dada_fraise', name: 'Dada Fraise' },
    { id: '7up', name: '7Up' },
    { id: '7up_mojito', name: '7Up Mojito' },
    { id: 'sprite', name: 'Sprite' },
    { id: 'orangina', name: 'Orangina' },
    { id: 'fanta_orange', name: 'Fanta Orange' },
    { id: 'fanta_citron', name: 'Fanta Citron' },
    { id: 'fanta_dragon', name: 'Fanta Fruit du Dragon' },
    { id: 'hawaii', name: 'Hawaii' },
    { id: 'schweppes_agrum', name: 'Schweppes Agrum' },
    { id: 'pepsi', name: 'Pepsi' },
    { id: 'pepsi_max', name: 'Pepsi Max' },
    { id: 'eau', name: 'Eau' }
];

const PAINS = [
    { id: 'naan_nature', name: 'Naan Nature' },
    { id: 'naan_fromage', name: 'Naan Fromage' },
    { id: 'pain_rond', name: 'Pain Rond' },
    { id: 'galette', name: 'Galette' }
];

const GRATINS = [
    { id: 'lardon', name: 'Lardon' },
    { id: 'cheddar', name: 'Cheddar' },
    { id: 'raclette', name: 'Raclette' },
    { id: 'chevre', name: 'Chèvre' },
    { id: 'chevre_miel', name: 'Chèvre Miel' },
    { id: 'bacon', name: 'Bacon' },
    { id: 'olives', name: 'Olives' },
    { id: 'poivrons', name: 'Poivrons' },
    { id: 'mozzarella', name: 'Mozzarella' }
];

const SUPPLEMENTS = [
    { id: 'supp_cheddar', name: 'Cheddar', price: 1.00 },
    { id: 'supp_raclette', name: 'Raclette', price: 1.50 },
    { id: 'supp_chevre', name: 'Chèvre', price: 1.50 },
    { id: 'supp_boursin', name: 'Boursin', price: 1.50 },
    { id: 'supp_oeuf', name: 'Œuf', price: 1.00 },
    { id: 'supp_bacon', name: 'Bacon', price: 1.50 }
];

// Viandes supplémentaires (choix de viande à +1.50€)
const VIANDES_SUPP = VIANDES.map(v => ({ ...v, price: 1.50 }));

// Éléments qu'on peut retirer - SANDWICHS (salade, tomate, oignon)
const RETRAITS_SANDWICH = [
    { id: 'sans_salade', name: 'Sans Salade' },
    { id: 'sans_tomate', name: 'Sans Tomate' },
    { id: 'sans_oignon', name: 'Sans Oignon' }
];

// Éléments qu'on peut retirer - TACOS (uniquement sauce fromagère)
const RETRAITS_TACOS = [
    { id: 'sans_sauce_fromagere', name: 'Sans Sauce Fromagère' }
];

// Catégories
const CATEGORIES = [
    { id: 'offres', name: 'Nos Offres', image: 'img/chickenzz-logo.webp', isHighlight: true },
    { id: 'tacos', name: 'Tacos', image: 'img/tacos.webp' },
    { id: 'naans', name: 'Naans', image: 'img/naan-royal.webp' },
    { id: 'sandwichs', name: 'Sandwichs', image: 'img/sandwich-deco-pain-rond.webp' },
    { id: 'buckets', name: 'Buckets', image: 'img/bucket-1.webp' },
    { id: 'assiettes', name: 'Assiettes', image: 'img/assiette-1-viande.webp' },
    { id: 'bowls', name: 'Bowls', image: 'img/classique-bowl.webp' },
    { id: 'boxes', name: 'Boxes', image: 'img/single-box.webp' },
    { id: 'burgers', name: 'Burgers', image: 'img/smash-burger.webp' },
    { id: 'poutines', name: 'Poutines', image: 'img/poutine.webp' },
    { id: 'tex_mex', name: 'Tex Mex', image: 'img/korean-wings.webp' },
    { id: 'frites', name: 'Frites', image: 'img/frite-boisson.webp' },
    { id: 'salades', name: 'Salades', image: 'img/salade.webp' },
    { id: 'desserts', name: 'Desserts', image: 'img/panini-nutella.webp' },
    { id: 'boissons', name: 'Boissons', image: 'img/frite-boisson.webp' },
    { id: 'enfant', name: 'Menu Enfant', image: 'img/chickenzz-logo.webp' }
];

// Produits
const PRODUCTS = [
    // ==================== NOS OFFRES ====================
    {
        id: 'offre_crousty_bowl',
        category: 'offres',
        name: 'Crousty Bowl',
        description: 'Tenders, Sweet Chili, Oignons Frits',
        image: 'img/classique-bowl.webp',
        type: 'bowl',
        hasBuilder: true,
        isPromo: true,
        promoLabel: '-30%',
        sizes: [
            { id: 'M', name: 'M', price: 6.90, originalPrice: 9.90 },
            { id: 'XL', name: 'XL', price: 11.90, originalPrice: 14.90 }
        ]
    },
    {
        id: 'offre_bucket_1',
        category: 'offres',
        name: 'Bucket 1',
        description: '3 Wings + 2 Tenders + Frites + Boisson',
        image: 'img/bucket-1.webp',
        price: 7.90,
        type: 'bucket',
        hasBuilder: true,
        isPromo: true,
        promoLabel: 'BON PLAN',
        includesFrites: true,
        includesBoisson: true
    },
    {
        id: 'offre_single_box',
        category: 'offres',
        name: 'Single Box',
        description: '1 Burger + 2 Mozza Sticks + Frites Cheddar + Sauce',
        image: 'img/single-box.webp',
        price: 9.90,
        type: 'box',
        hasBuilder: true,
        isPromo: true,
        promoLabel: 'BON PLAN'
    },
    {
        id: 'offre_mega_box',
        category: 'offres',
        name: 'Mega Box',
        description: '1 Burger + 4 Mozza Sticks + Tenders dés + Frites Cheddar + Sauce',
        image: 'img/mega-box.webp',
        price: 11.90,
        type: 'box',
        hasBuilder: true,
        isPromo: true,
        promoLabel: 'BON PLAN'
    },

    // ==================== TACOS ====================
    // COMPOSE EN PREMIER
    {
        id: 'tacos_custom',
        category: 'tacos',
        name: 'Tacos',
        displayName: 'Compose ton Tacos',
        description: 'Choisis ta taille, tes viandes et tes sauces',
        image: 'img/tacos.webp',
        type: 'tacos',
        hasBuilder: true,
        isCustom: true,
        sizes: [
            { id: 'S', name: 'S', price: 6.90, meatCount: 1 },
            { id: 'M', name: 'M', price: 7.90, meatCount: 2 },
            { id: 'L', name: 'L', price: 10.90, meatCount: 3 },
            { id: 'XL', name: 'XL', price: 14.90, meatCount: 4 }
        ]
    },
    // TACOS SPÉCIAUX
    {
        id: 'tacos_spicy',
        category: 'tacos',
        name: 'Tacos Spicy',
        description: 'Kefta, Tikka, Cheddar, Chili-Thaï',
        image: 'img/spicy.webp',
        type: 'tacos',
        hasBuilder: true,
        isSpecial: true,
        defaultIngredients: 'Kefta, Tikka • Cheddar • Chili-Thaï',
        sizes: [
            { id: 'M', name: 'M', price: 9.90, meatCount: 2 },
            { id: 'L', name: 'L', price: 12.90, meatCount: 3 },
            { id: 'XL', name: 'XL', price: 15.90, meatCount: 4 }
        ]
    },
    {
        id: 'tacos_crispy',
        category: 'tacos',
        name: 'Tacos Crispy',
        description: 'Tenders, Oignon Frit, Miel',
        image: 'img/crispy.webp',
        type: 'tacos',
        hasBuilder: true,
        isSpecial: true,
        defaultIngredients: 'Tenders • Oignon Frit, Miel',
        sizes: [
            { id: 'M', name: 'M', price: 9.90, meatCount: 2 },
            { id: 'L', name: 'L', price: 12.90, meatCount: 3 },
            { id: 'XL', name: 'XL', price: 15.90, meatCount: 4 }
        ]
    },
    {
        id: 'tacos_chef',
        category: 'tacos',
        name: 'Tacos Chef',
        description: 'C. Bleu, Tenders, Boursin, Miami',
        image: 'img/chef.webp',
        type: 'tacos',
        hasBuilder: true,
        isSpecial: true,
        defaultIngredients: 'Cordon Bleu, Tenders • Boursin, Miami',
        sizes: [
            { id: 'M', name: 'M', price: 9.90, meatCount: 2 },
            { id: 'L', name: 'L', price: 12.90, meatCount: 3 },
            { id: 'XL', name: 'XL', price: 15.90, meatCount: 4 }
        ]
    },
    {
        id: 'tacos_chevre',
        category: 'tacos',
        name: 'Tacos Chèvre',
        description: 'Tenders, Steak, Œuf, Chèvre',
        image: 'img/chevre.webp',
        type: 'tacos',
        hasBuilder: true,
        isSpecial: true,
        defaultIngredients: 'Tenders, Steak • Chèvre • Œuf',
        sizes: [
            { id: 'M', name: 'M', price: 9.90, meatCount: 2 },
            { id: 'L', name: 'L', price: 12.90, meatCount: 3 },
            { id: 'XL', name: 'XL', price: 15.90, meatCount: 4 }
        ]
    },
    {
        id: 'tacos_oriental',
        category: 'tacos',
        name: 'Tacos Oriental',
        description: 'Kebab, Tenders, Raclette, Algérienne',
        image: 'img/oriental.webp',
        type: 'tacos',
        hasBuilder: true,
        isSpecial: true,
        defaultIngredients: 'Kebab, Tenders • Algérienne • Raclette',
        sizes: [
            { id: 'M', name: 'M', price: 9.90, meatCount: 2 },
            { id: 'L', name: 'L', price: 12.90, meatCount: 3 },
            { id: 'XL', name: 'XL', price: 15.90, meatCount: 4 }
        ]
    },

    // ==================== NAANS ====================
    // COMPOSE EN PREMIER
    {
        id: 'naan_sandwich_link',
        category: 'naans',
        name: 'Compose ton Sandwich',
        description: 'Pain, viande, sauce au choix',
        image: 'img/sandwich-deco-pain-rond.webp',
        price: 7.90,
        type: 'sandwich',
        hasBuilder: true,
        isCustom: true
    },
    // NAANS SPÉCIAUX
    {
        id: 'naan_royal',
        category: 'naans',
        name: 'Naan Royal',
        description: 'Poulet Tikka, Tenders, Cheddar, Oignons Frits',
        image: 'img/naan-royal.webp',
        price: 9.50,
        type: 'naan',
        hasBuilder: true,
        isSpecial: true,
        defaultIngredients: 'Poulet Tikka, Tenders • Cheddar, Oignons Frits'
    },
    {
        id: 'naan_cheesy',
        category: 'naans',
        name: 'Naan Cheesy',
        description: 'Steak, Cordon Bleu, Raclette, Sauce Fromage',
        image: 'img/naan-cheesy.webp',
        price: 10.00,
        type: 'naan',
        hasBuilder: true,
        isSpecial: true,
        defaultIngredients: 'Steak, Cordon Bleu • Sauce Fromage • Raclette'
    },
    {
        id: 'naan_spicy',
        category: 'naans',
        name: 'Naan Spicy',
        description: 'Tikka, Kefta, Sauce Algérienne',
        image: 'img/naan-spicy.webp',
        price: 9.50,
        type: 'naan',
        hasBuilder: true,
        isSpecial: true,
        defaultIngredients: 'Tikka, Kefta • Algérienne'
    },
    {
        id: 'naan_mexicain',
        category: 'naans',
        name: 'Naan Mexicain',
        description: 'Poulet Tikka, Tenders, Chili-Thaï',
        image: 'img/naan-mexicain.webp',
        price: 9.50,
        type: 'naan',
        hasBuilder: true,
        isSpecial: true,
        defaultIngredients: 'Poulet Tikka, Tenders • Chili-Thaï'
    },

    // ==================== SANDWICHS ====================
    {
        id: 'sandwich',
        category: 'sandwichs',
        name: 'Sandwich',
        description: 'Compose ton sandwich',
        image: 'img/sandwich-deco-pain-rond.webp',
        price: 7.90,
        type: 'sandwich',
        hasBuilder: true
    },

    // ==================== BUCKETS ====================
    {
        id: 'bucket_1',
        category: 'buckets',
        name: 'Bucket 1',
        description: '3 Wings + 2 Tenders + Frites + Boisson',
        image: 'img/bucket-1.webp',
        price: 7.90,
        type: 'bucket',
        hasBuilder: true,
        includesFrites: true,
        includesBoisson: true
    },
    {
        id: 'bucket_2',
        category: 'buckets',
        name: 'Bucket 2',
        description: '5 Wings + 3 Tenders + Frites + Boisson',
        image: 'img/bucket-2.webp',
        price: 9.90,
        type: 'bucket',
        hasBuilder: true,
        includesFrites: true,
        includesBoisson: true
    },
    {
        id: 'bucket_3',
        category: 'buckets',
        name: 'Bucket 3',
        description: '7 Wings + 5 Tenders + 4 Mozza + 2 Frites + 2 Boissons',
        image: 'img/bucket-3.webp',
        price: 18.90,
        type: 'bucket',
        hasBuilder: true,
        includesFrites: true,
        includesBoisson: true
    },
    {
        id: 'bucket_4',
        category: 'buckets',
        name: 'Bucket 4',
        description: '8 Tenders + 8 Wings + 6 Mozza + 10 Rings + 3 Frites',
        image: 'img/bucket-4.webp',
        price: 28.90,
        type: 'bucket',
        hasBuilder: true,
        includesFrites: true
    },
    {
        id: 'korean_bucket',
        category: 'buckets',
        name: 'Korean Bucket',
        description: '4 Wings + 4 Tenders + Frites + Boisson 33cl',
        image: 'img/korean-bucket-combo.webp',
        price: 13.90,
        type: 'bucket',
        hasBuilder: true,
        isKorean: true,
        includesFrites: true,
        includesBoisson: true
    },

    // ==================== ASSIETTES ====================
    {
        id: 'assiette',
        category: 'assiettes',
        name: 'Assiette',
        description: 'Crudités, Frites, Sauce, Pain',
        image: 'img/assiette-1-viande.webp',
        price: 11.00,
        type: 'assiette',
        hasBuilder: true
    },

    // ==================== BOWLS ====================
    {
        id: 'bowl_dynamite',
        category: 'bowls',
        name: 'Dynamite Bowl',
        description: 'Viande au choix',
        image: 'img/crousty-bowl.webp',
        price: 9.90,
        type: 'bowl',
        hasBuilder: true
    },
    {
        id: 'bowl_indian',
        category: 'bowls',
        name: 'Bowl Indien',
        description: 'Poulet Tikka, Curry, Oignons Frits',
        image: 'img/indian-bowl.webp',
        price: 9.90,
        type: 'bowl',
        hasBuilder: true
    },
    {
        id: 'bowl_crousty',
        category: 'bowls',
        name: 'Crousty Bowl',
        description: 'Tenders, Sweet Chili, Oignons Frits',
        image: 'img/classique-bowl.webp',
        type: 'bowl',
        hasBuilder: true,
        isPromo: true,
        promoLabel: '-30%',
        sizes: [
            { id: 'M', name: 'M', price: 6.90, originalPrice: 9.90 },
            { id: 'XL', name: 'XL', price: 11.90, originalPrice: 14.90 }
        ]
    },
    {
        id: 'bowl_hot',
        category: 'bowls',
        name: 'Hot Bowl',
        description: 'Poulet Tikka, Hot Sauce, Oignons Frits',
        image: 'img/spicy-bowl.webp',
        price: 9.90,
        type: 'bowl',
        hasBuilder: true
    },
    {
        id: 'bowl_chef',
        category: 'bowls',
        name: 'Chef Bowl',
        description: 'Cordon Bleu, Chili-Thaï, Oignons Frits',
        image: 'img/chef-bowl.webp',
        price: 10.90,
        type: 'bowl',
        hasBuilder: true
    },

    // ==================== BOXES ====================
    {
        id: 'box_single',
        category: 'boxes',
        name: 'Single Box',
        description: '1 Burger + 2 Mozza Sticks + Frites Cheddar + Sauce',
        image: 'img/single-box.webp',
        price: 9.90,
        type: 'box',
        hasBuilder: true
    },
    {
        id: 'box_mega',
        category: 'boxes',
        name: 'Mega Box',
        description: '1 Burger + 4 Mozza Sticks + Tenders dés + Frites Cheddar + Sauce',
        image: 'img/mega-box.webp',
        price: 11.90,
        type: 'box',
        hasBuilder: true
    },

    // ==================== BURGERS ====================
    {
        id: 'smash_burger',
        category: 'burgers',
        name: 'Smash Burger',
        description: '1 Steak Smashé',
        image: 'img/smash-burger.webp',
        price: 5.90,
        menuUpgrade: 2.00,
        hasBuilder: true
    },
    {
        id: 'double_smash',
        category: 'burgers',
        name: 'Double Smash',
        description: '2 Steaks Smashés',
        image: 'img/double-smash.webp',
        price: 7.90,
        menuUpgrade: 2.00,
        hasBuilder: true
    },
    {
        id: 'smokey_chick',
        category: 'burgers',
        name: 'Smokey Chick',
        description: '2 Tenders, Bacon, Oignons Frits',
        image: 'img/smokey-chick.webp',
        price: 8.50,
        menuUpgrade: 2.00,
        hasBuilder: true
    },
    {
        id: 'delices_smash',
        category: 'burgers',
        name: 'Délices Smash',
        description: 'Steak Smashé, P.D.T, Œuf, Raclette, Bacon',
        image: 'img/delices-smash.webp',
        price: 11.50,
        menuUpgrade: 2.00,
        hasBuilder: true
    },
    {
        id: 'smash_tower',
        category: 'burgers',
        name: 'Smash Tower',
        description: '3 Steaks Smashés, P.D.T, Cheddar, Bacon',
        image: 'img/smash-tower.webp',
        price: 14.90,
        menuUpgrade: 2.00,
        hasBuilder: true
    },

    // ==================== POUTINES ====================
    {
        id: 'poutine_classic',
        category: 'poutines',
        name: 'Poutine Classic',
        description: 'Sauce Fromagère',
        image: 'img/poutine.webp',
        type: 'poutine',
        hasBuilder: true,
        sizes: [
            { id: 'M', name: 'M', price: 8.90 },
            { id: 'XL', name: 'XL', price: 12.90 }
        ]
    },
    {
        id: 'poutine_chevre',
        category: 'poutines',
        name: 'Poutine Chèvre Miel',
        description: 'Tenders & Chèvre Miel',
        image: 'img/poutine.webp',
        type: 'poutine',
        hasBuilder: true,
        sizes: [
            { id: 'M', name: 'M', price: 10.90 },
            { id: 'XL', name: 'XL', price: 14.90 }
        ]
    },
    {
        id: 'poutine_boursin',
        category: 'poutines',
        name: 'Poutine Boursin',
        description: 'Cordon Bleu & Boursin',
        image: 'img/poutine.webp',
        type: 'poutine',
        hasBuilder: true,
        sizes: [
            { id: 'M', name: 'M', price: 10.90 },
            { id: 'XL', name: 'XL', price: 14.90 }
        ]
    },
    {
        id: 'poutine_raclette',
        category: 'poutines',
        name: 'Poutine Raclette',
        description: 'Tikka & Raclette',
        image: 'img/poutine.webp',
        type: 'poutine',
        hasBuilder: true,
        sizes: [
            { id: 'M', name: 'M', price: 10.90 },
            { id: 'XL', name: 'XL', price: 14.90 }
        ]
    },

    // ==================== TEX MEX ====================
    {
        id: 'wings_5',
        category: 'tex_mex',
        name: 'Wings x5',
        description: '5 ailes de poulet croustillantes',
        image: 'img/chickenzz-logo.webp',
        price: 5.00
    },
    {
        id: 'tenders_5',
        category: 'tex_mex',
        name: 'Tenders x5',
        description: '5 tenders croustillants',
        image: 'img/chickenzz-logo.webp',
        price: 6.00
    },
    {
        id: 'nuggets_6',
        category: 'tex_mex',
        name: 'Nuggets x6',
        description: '6 nuggets croustillants',
        image: 'img/chickenzz-logo.webp',
        price: 5.00
    },
    {
        id: 'jalapenos_5',
        category: 'tex_mex',
        name: 'Jalapenos x5',
        description: 'Jalapeños frits au fromage',
        image: 'img/chickenzz-logo.webp',
        price: 5.50
    },
    {
        id: 'oignons_7',
        category: 'tex_mex',
        name: 'Oignons Rings x7',
        description: 'Onion rings croustillants',
        image: 'img/chickenzz-logo.webp',
        price: 5.50
    },
    {
        id: 'nems_5',
        category: 'tex_mex',
        name: 'Nems x5',
        description: 'Nems croustillants',
        image: 'img/chickenzz-logo.webp',
        price: 6.00
    },
    {
        id: 'mozza_6',
        category: 'tex_mex',
        name: 'Mozza Sticks x6',
        description: 'Bâtonnets de mozzarella',
        image: 'img/chickenzz-logo.webp',
        price: 5.00
    },
    {
        id: 'camembert_6',
        category: 'tex_mex',
        name: 'Camembert x6',
        description: 'Camembert pané',
        image: 'img/chickenzz-logo.webp',
        price: 5.00
    },
    {
        id: 'chevre_5',
        category: 'tex_mex',
        name: 'Chèvre x5',
        description: 'Fromage de chèvre pané',
        image: 'img/chickenzz-logo.webp',
        price: 6.00
    },
    {
        id: 'samoussas',
        category: 'tex_mex',
        name: 'Samoussas',
        description: 'Samoussas croustillants',
        image: 'img/chickenzz-logo.webp',
        price: 4.50
    },
    {
        id: 'korean_wings_5',
        category: 'tex_mex',
        name: 'Korean Wings x5',
        description: '5 Wings sauce coréenne',
        image: 'img/korean-wings.webp',
        price: 6.90
    },
    {
        id: 'korean_wings_10',
        category: 'tex_mex',
        name: 'Korean Wings x10',
        description: '10 Wings sauce coréenne',
        image: 'img/korean-wings.webp',
        price: 12.90
    },
    {
        id: 'korean_tenders_4',
        category: 'tex_mex',
        name: 'Korean Tenders x4',
        description: '4 Tenders sauce coréenne',
        image: 'img/korean-tenders.webp',
        price: 6.90
    },
    {
        id: 'korean_tenders_6',
        category: 'tex_mex',
        name: 'Korean Tenders x6',
        description: '6 Tenders sauce coréenne',
        image: 'img/korean-tenders.webp',
        price: 8.90
    },

    // ==================== FRITES ====================
    {
        id: 'frite_simple',
        category: 'frites',
        name: 'Frite Simple',
        description: 'Portion de frites',
        image: 'img/frite-boisson.webp',
        price: 2.50
    },
    {
        id: 'grande_frite',
        category: 'frites',
        name: 'Grande Frite',
        description: 'Grande portion de frites',
        image: 'img/frite-boisson.webp',
        price: 3.50
    },
    {
        id: 'frites_cheddar',
        category: 'frites',
        name: 'Frites Cheddar',
        description: 'Frites sauce cheddar',
        image: 'img/frite-boisson.webp',
        type: 'frites',
        hasBuilder: true,
        sizes: [
            { id: 'M', name: 'M', price: 3.90 },
            { id: 'XL', name: 'XL', price: 4.90 }
        ]
    },
    {
        id: 'frites_cheddar_bacon',
        category: 'frites',
        name: 'Frites Cheddar Bacon',
        description: 'Frites cheddar & bacon',
        image: 'img/frite-boisson.webp',
        type: 'frites',
        hasBuilder: true,
        sizes: [
            { id: 'M', name: 'M', price: 4.90 },
            { id: 'XL', name: 'XL', price: 5.90 }
        ]
    },
    {
        id: 'frites_cheddar_lardon',
        category: 'frites',
        name: 'Frites Cheddar Lardon',
        description: 'Frites cheddar & lardons',
        image: 'img/frite-boisson.webp',
        type: 'frites',
        hasBuilder: true,
        sizes: [
            { id: 'M', name: 'M', price: 4.90 },
            { id: 'XL', name: 'XL', price: 5.90 }
        ]
    },
    {
        id: 'frites_cheddar_boursin',
        category: 'frites',
        name: 'Frites Cheddar Boursin',
        description: 'Frites cheddar & boursin',
        image: 'img/frite-boisson.webp',
        type: 'frites',
        hasBuilder: true,
        sizes: [
            { id: 'M', name: 'M', price: 4.90 },
            { id: 'XL', name: 'XL', price: 5.90 }
        ]
    },
    {
        id: 'patate_douce',
        category: 'frites',
        name: 'Patate Douce',
        description: 'Frites de patate douce',
        image: 'img/frite-boisson.webp',
        type: 'frites',
        hasBuilder: true,
        sizes: [
            { id: 'M', name: 'M', price: 3.90 },
            { id: 'XL', name: 'XL', price: 4.90 }
        ]
    },
    {
        id: 'potato_pops',
        category: 'frites',
        name: 'Potato Pops',
        description: 'Billes de pomme de terre',
        image: 'img/frite-boisson.webp',
        type: 'frites',
        hasBuilder: true,
        sizes: [
            { id: 'M', name: 'M', price: 3.90 },
            { id: 'XL', name: 'XL', price: 4.90 }
        ]
    },

    // ==================== SALADES ====================
    {
        id: 'salade_cesar',
        category: 'salades',
        name: 'Salade César',
        description: 'Poulet & Parmesan',
        image: 'img/salade.webp',
        price: 7.50
    },
    {
        id: 'salade_nems',
        category: 'salades',
        name: 'Salade Nems',
        description: 'Poulet & Soja',
        image: 'img/salade.webp',
        price: 7.50
    },
    {
        id: 'salade_indienne',
        category: 'salades',
        name: 'Salade Indienne',
        description: 'Tikka & Épices',
        image: 'img/salade.webp',
        price: 7.50
    },
    {
        id: 'salade_thon',
        category: 'salades',
        name: 'Salade Thon',
        description: 'Thon & Œuf',
        image: 'img/salade.webp',
        price: 7.50
    },

    // ==================== DESSERTS ====================
    {
        id: 'tiramisu',
        category: 'desserts',
        name: 'Tiramisu',
        description: 'Au café',
        image: 'img/tiramisu.webp',
        price: 3.50
    },
    {
        id: 'panini_nutella',
        category: 'desserts',
        name: 'Panini Nutella',
        description: 'Panini Fondant',
        image: 'img/panini-nutella.webp',
        price: 4.00
    },
    {
        id: 'tarte_daim',
        category: 'desserts',
        name: 'Tarte Daim',
        description: 'Croustillant',
        image: 'img/tatre-daim.webp',
        price: 2.50
    },

    // ==================== BOISSONS ====================
    {
        id: 'boisson_33',
        category: 'boissons',
        name: 'Boisson 33cl',
        description: 'Au choix',
        image: 'img/frite-boisson.webp',
        price: 1.70,
        type: 'boisson_seule',
        hasBuilder: true
    },
    {
        id: 'pepsi_150',
        category: 'boissons',
        name: 'Pepsi 1.5L',
        description: '',
        image: 'img/frite-boisson.webp',
        price: 4.00
    },
    {
        id: 'oasis_150',
        category: 'boissons',
        name: 'Oasis 1.5L',
        description: '',
        image: 'img/frite-boisson.webp',
        price: 4.00
    },
    {
        id: 'eau_150',
        category: 'boissons',
        name: 'Eau 1.5L',
        description: '',
        image: 'img/frite-boisson.webp',
        price: 3.50
    },

    // ==================== MENU ENFANT ====================
    {
        id: 'enfant_nuggets',
        category: 'enfant',
        name: 'Menu Nuggets',
        description: 'Nuggets + Frites + Boisson',
        image: 'img/chickenzz-logo.webp',
        price: 6.90,
        type: 'enfant',
        hasBuilder: true
    },
    {
        id: 'enfant_tenders',
        category: 'enfant',
        name: 'Menu Tenders',
        description: 'Tenders + Frites + Boisson',
        image: 'img/chickenzz-logo.webp',
        price: 6.90,
        type: 'enfant',
        hasBuilder: true
    }
];
