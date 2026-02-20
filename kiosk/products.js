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
    { id: 'bacon', name: 'Bacon' },
    { id: 'olives', name: 'Olives' },
    { id: 'poivrons', name: 'Poivrons' },
    { id: 'mozzarella', name: 'Mozzarella' }
];

const SUPPLEMENTS = [
    { id: 'supp_viande', name: 'Viande Supplémentaire', price: 2.00 },
    { id: 'supp_tenders', name: '1 Tender', price: 1.50 },
    { id: 'supp_cheddar', name: 'Cheddar', price: 1.00 },
    { id: 'supp_raclette', name: 'Raclette', price: 1.50 },
    { id: 'supp_chevre', name: 'Chèvre', price: 1.50 },
    { id: 'supp_boursin', name: 'Boursin', price: 1.50 },
    { id: 'supp_oeuf', name: 'Œuf', price: 1.00 },
    { id: 'supp_bacon', name: 'Bacon', price: 1.50 }
];

// Catégories
const CATEGORIES = [
    { id: 'tacos', name: 'Tacos', image: '../AssetsTv4/tacos.png' },
    { id: 'naans', name: 'Naans', image: '../AssetsTv2/naan_royal_real_png.png' },
    { id: 'sandwichs', name: 'Sandwichs', image: '../AssetsTv2/sandwich deco pain rond.png' },
    { id: 'assiettes', name: 'Assiettes', image: '../AssetsTv3/assiette 1 viande.png' },
    { id: 'bowls', name: 'Bowls', image: '../AssetsTv3/classique bowl.png' },
    { id: 'boxes', name: 'Boxes', image: '../AssetsTv3/SINGLE BOX.png' },
    { id: 'burgers', name: 'Burgers', image: '../AssetsTv3/smash_burger_real.png' },
    { id: 'poutines', name: 'Poutines', image: '../AssetsTv5/poutine.png' },
    { id: 'tex_mex', name: 'Tex Mex', image: '../AssetsTv3/chicken_cheese.png' },
    { id: 'salades', name: 'Salades', image: '../AssetsTv5/salade.png' },
    { id: 'desserts', name: 'Desserts', image: '../AssetsTv5/panini nutella.png' },
    { id: 'boissons', name: 'Boissons', image: '../AssetsTv3/frite boisson.png' },
    { id: 'enfant', name: 'Menu Enfant', image: '../AssetsTv3/chicken_cheese.png' }
];

// Produits
const PRODUCTS = [
    // ==================== TACOS ====================
    {
        id: 'tacos_spicy',
        category: 'tacos',
        name: 'Tacos Spicy',
        description: 'Kefta, Tikka, Cheddar, Chili-Thaï',
        image: '../AssetsTv4/SPICY.png',
        type: 'tacos',
        hasBuilder: true,
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
        image: '../AssetsTv4/CRISPY.png',
        type: 'tacos',
        hasBuilder: true,
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
        image: '../AssetsTv4/CHEF.png',
        type: 'tacos',
        hasBuilder: true,
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
        image: '../AssetsTv4/CHEVRE.png',
        type: 'tacos',
        hasBuilder: true,
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
        image: '../AssetsTv4/ORIENTAL.png',
        type: 'tacos',
        hasBuilder: true,
        sizes: [
            { id: 'M', name: 'M', price: 9.90, meatCount: 2 },
            { id: 'L', name: 'L', price: 12.90, meatCount: 3 },
            { id: 'XL', name: 'XL', price: 15.90, meatCount: 4 }
        ]
    },
    {
        id: 'tacos_custom',
        category: 'tacos',
        name: 'Tacos',
        displayName: 'Compose ton Tacos',
        description: 'Choisis ta taille, tes viandes et tes sauces',
        image: '../AssetsTv4/tacos.png',
        type: 'tacos',
        hasBuilder: true,
        isCustom: true,
        sizes: [
            { id: 'S', name: 'S', price: 6.90, meatCount: 1 },
            { id: 'M', name: 'M', price: 7.90, meatCount: 2 },
            { id: 'L', name: 'L', price: 9.90, meatCount: 3 },
            { id: 'XL', name: 'XL', price: 14.90, meatCount: 4 }
        ]
    },

    // ==================== NAANS ====================
    {
        id: 'naan_royal',
        category: 'naans',
        name: 'Naan Royal',
        description: 'Poulet Tikka, Tenders, Cheddar, Oignons Frits',
        image: '../AssetsTv2/naan_royal_real_png.png',
        price: 9.50,
        type: 'naan',
        hasBuilder: true
    },
    {
        id: 'naan_cheesy',
        category: 'naans',
        name: 'Naan Cheesy',
        description: 'Steak, Cordon Bleu, Raclette, Sauce Fromage',
        image: '../AssetsTv2/naan_cheesy_real_png.png',
        price: 10.00,
        type: 'naan',
        hasBuilder: true
    },
    {
        id: 'naan_spicy',
        category: 'naans',
        name: 'Naan Spicy',
        description: 'Tikka, Kefta, Sauce Algérienne',
        image: '../AssetsTv2/naan_spicy_real_png.png',
        price: 9.50,
        type: 'naan',
        hasBuilder: true
    },
    {
        id: 'naan_mexicain',
        category: 'naans',
        name: 'Naan Mexicain',
        description: 'Poulet Tikka, Tenders, Chili-Thaï',
        image: '../AssetsTv2/naan_mexicain_real_png.png',
        price: 9.50,
        type: 'naan',
        hasBuilder: true
    },
    {
        id: 'naan_sandwich_link',
        category: 'naans',
        name: 'Compose ton Sandwich',
        description: 'Pain, viande, sauce au choix',
        image: '../AssetsTv2/sandwich deco pain rond.png',
        price: 7.90,
        type: 'sandwich',
        hasBuilder: true,
        isLink: true
    },

    // ==================== SANDWICHS ====================
    {
        id: 'sandwich',
        category: 'sandwichs',
        name: 'Sandwich',
        description: 'Compose ton sandwich',
        image: '../AssetsTv2/sandwich deco pain rond.png',
        price: 7.90,
        type: 'sandwich',
        hasBuilder: true
    },

    // ==================== ASSIETTES ====================
    {
        id: 'assiette',
        category: 'assiettes',
        name: 'Assiette',
        description: 'Crudités, Frites, Sauce, Pain Maison',
        image: '../AssetsTv3/assiette 1 viande.png',
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
        image: '../AssetsTv3/crousty bowl.png',
        price: 9.90,
        type: 'bowl',
        hasBuilder: true
    },
    {
        id: 'bowl_indian',
        category: 'bowls',
        name: 'Bowl Indien',
        description: 'Poulet Tikka, Curry, Oignons Frits',
        image: '../AssetsTv3/indian bowl.png',
        price: 9.90,
        type: 'bowl',
        hasBuilder: true
    },
    {
        id: 'bowl_crousty',
        category: 'bowls',
        name: 'Crousty Bowl',
        description: 'Tenders, Sweet Chili, Oignons Frits',
        image: '../AssetsTv3/classique bowl.png',
        price: 9.90,
        type: 'bowl',
        hasBuilder: true
    },
    {
        id: 'bowl_hot',
        category: 'bowls',
        name: 'Hot Bowl',
        description: 'Poulet Tikka, Hot Sauce, Oignons Frits',
        image: '../AssetsTv3/spicy bowl.png',
        price: 9.90,
        type: 'bowl',
        hasBuilder: true
    },
    {
        id: 'bowl_chef',
        category: 'bowls',
        name: 'Chef Bowl',
        description: 'Cordon Bleu, Chili-Thaï, Oignons Frits',
        image: '../AssetsTv3/chef bowl.png',
        price: 10.90,
        type: 'bowl',
        hasBuilder: true
    },

    // ==================== BOXES ====================
    {
        id: 'box_single',
        category: 'boxes',
        name: 'Single Box',
        description: '1 Burger + 2 Wings/Tenders + Frites Cheddar + Sauce',
        image: '../AssetsTv3/SINGLE BOX.png',
        price: 9.90,
        type: 'box',
        hasBuilder: true
    },
    {
        id: 'box_mega',
        category: 'boxes',
        name: 'Mega Box',
        description: '1 Burger + 2 Wings + 2 Tenders + Frites Cheddar + Sauce',
        image: '../AssetsTv3/MEGA BOX.png',
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
        image: '../AssetsTv3/smash_burger_real.png',
        price: 5.90,
        menuUpgrade: 2.00,
        hasBuilder: true
    },
    {
        id: 'double_smash',
        category: 'burgers',
        name: 'Double Smash',
        description: '2 Steaks Smashés',
        image: '../AssetsTv3/double_smash_real.png',
        price: 7.90,
        menuUpgrade: 2.00,
        hasBuilder: true
    },
    {
        id: 'smokey_chick',
        category: 'burgers',
        name: 'Smokey Chick',
        description: '2 Tenders, Bacon, Oignons Frits',
        image: '../AssetsTv3/smokey_chick_real.png',
        price: 7.90,
        menuUpgrade: 2.00,
        hasBuilder: true
    },
    {
        id: 'delices_smash',
        category: 'burgers',
        name: 'Délices Smash',
        description: 'Steak Smashé, P.D.T, Œuf, Raclette, Bacon',
        image: '../AssetsTv3/delices_smash_real.png',
        price: 11.50,
        menuUpgrade: 2.00,
        hasBuilder: true
    },
    {
        id: 'smash_tower',
        category: 'burgers',
        name: 'Smash Tower',
        description: '3 Steaks Smashés, P.D.T, Cheddar, Bacon',
        image: '../AssetsTv3/smash_tower_real.png',
        price: 14.90,
        menuUpgrade: 2.00,
        hasBuilder: true
    },

    // ==================== POUTINES ====================
    {
        id: 'poutine_classic',
        category: 'poutines',
        name: 'Poutine Classic',
        description: 'Sauce Fromagère Maison',
        image: '../AssetsTv5/poutine.png',
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
        image: '../AssetsTv5/poutine.png',
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
        image: '../AssetsTv5/poutine.png',
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
        image: '../AssetsTv5/poutine.png',
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
        image: '../AssetsTv3/chicken_cheese.png',
        price: 5.00
    },
    {
        id: 'tenders_5',
        category: 'tex_mex',
        name: 'Tenders x5',
        description: '5 tenders croustillants',
        image: '../AssetsTv3/chicken_cheese.png',
        price: 6.00
    },
    {
        id: 'nuggets_6',
        category: 'tex_mex',
        name: 'Nuggets x6',
        description: '6 nuggets croustillants',
        image: '../AssetsTv3/chicken_cheese.png',
        price: 5.00
    },
    {
        id: 'korean_wings',
        category: 'tex_mex',
        name: 'Korean Wings',
        description: 'Wings sauce coréenne',
        image: '../AssetsTv3/chicken_cheese.png',
        price: 6.90
    },
    {
        id: 'korean_tenders',
        category: 'tex_mex',
        name: 'Korean Tenders',
        description: 'Tenders sauce coréenne',
        image: '../AssetsTv3/chicken_cheese.png',
        price: 6.90
    },

    // ==================== SALADES ====================
    {
        id: 'salade_cesar',
        category: 'salades',
        name: 'Salade César',
        description: 'Poulet & Parmesan',
        image: '../AssetsTv5/salade.png',
        price: 7.50
    },
    {
        id: 'salade_nems',
        category: 'salades',
        name: 'Salade Nems',
        description: 'Poulet & Soja',
        image: '../AssetsTv5/salade.png',
        price: 7.50
    },
    {
        id: 'salade_indienne',
        category: 'salades',
        name: 'Salade Indienne',
        description: 'Tikka & Épices',
        image: '../AssetsTv5/salade.png',
        price: 7.50
    },
    {
        id: 'salade_thon',
        category: 'salades',
        name: 'Salade Thon',
        description: 'Thon & Œuf',
        image: '../AssetsTv5/salade.png',
        price: 7.50
    },

    // ==================== DESSERTS ====================
    {
        id: 'tiramisu',
        category: 'desserts',
        name: 'Tiramisu',
        description: 'Maison & Café',
        image: '../AssetsTv2/tiramisu.png',
        price: 3.50
    },
    {
        id: 'panini_nutella',
        category: 'desserts',
        name: 'Panini Nutella',
        description: 'Panini Fondant',
        image: '../AssetsTv5/panini nutella.png',
        price: 4.00
    },
    {
        id: 'tarte_daim',
        category: 'desserts',
        name: 'Tarte Daim',
        description: 'Croustillant',
        image: '../AssetsTv2/tatre daim.png',
        price: 3.90
    },

    // ==================== BOISSONS ====================
    {
        id: 'pepsi_33',
        category: 'boissons',
        name: 'Pepsi 33cl',
        description: '',
        image: '../AssetsTv3/frite boisson.png',
        price: 2.00
    },
    {
        id: 'pepsi_max_33',
        category: 'boissons',
        name: 'Pepsi Max 33cl',
        description: '',
        image: '../AssetsTv3/frite boisson.png',
        price: 2.00
    },
    {
        id: 'oasis_33',
        category: 'boissons',
        name: 'Oasis 33cl',
        description: '',
        image: '../AssetsTv3/frite boisson.png',
        price: 2.00
    },
    {
        id: 'ice_tea_33',
        category: 'boissons',
        name: 'Ice Tea 33cl',
        description: '',
        image: '../AssetsTv3/frite boisson.png',
        price: 2.00
    },
    {
        id: 'eau_33',
        category: 'boissons',
        name: 'Eau 33cl',
        description: '',
        image: '../AssetsTv3/frite boisson.png',
        price: 1.50
    },
    {
        id: 'pepsi_150',
        category: 'boissons',
        name: 'Pepsi 1.5L',
        description: '',
        image: '../AssetsTv3/frite boisson.png',
        price: 4.00
    },
    {
        id: 'oasis_150',
        category: 'boissons',
        name: 'Oasis 1.5L',
        description: '',
        image: '../AssetsTv3/frite boisson.png',
        price: 4.00
    },
    {
        id: 'eau_150',
        category: 'boissons',
        name: 'Eau 1.5L',
        description: '',
        image: '../AssetsTv3/frite boisson.png',
        price: 3.50
    },

    // ==================== MENU ENFANT ====================
    {
        id: 'enfant_nuggets',
        category: 'enfant',
        name: 'Menu Nuggets',
        description: 'Nuggets + Frites + Boisson',
        image: '../AssetsTv3/chicken_cheese.png',
        price: 6.90
    },
    {
        id: 'enfant_tenders',
        category: 'enfant',
        name: 'Menu Tenders',
        description: 'Tenders + Frites + Boisson',
        image: '../AssetsTv3/chicken_cheese.png',
        price: 6.90
    }
];
