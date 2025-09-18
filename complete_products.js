// Función para generar todos los 112 productos del CSV con URLs de Google Drive
const generateAllProducts = () => {
  const csvProducts = [
    // HYDRAPORE
    ["17", "hydrapore-gel-cream-50g", "Hydrapore", "Cuidado de la piel", "Rostro", "Gel Cream", "50g", 22000, 35500, "https://drive.google.com/thumbnail?id=1wkgzIRWWEtgDhLDUW7J6mztcAxJo19L8&sz=w1200", true, 14, true],
    ["18", "hydrapore-moisturizing-lotion-125ml", "Hydrapore", "Cuidado de la piel", "Rostro", "Moisturizing Lotion", "125ml", 16000, 27000, null, true, 18, false],
    ["19", "hydrapore-eye-contour-15ml", "Hydrapore", "Cuidado de la piel", "Ojos", "Eye Contour", "15ml", 16500, 27500, "https://drive.google.com/thumbnail?id=1oXuDynRiFXYFz5XB7XflNQYZWCsOG2it&sz=w1200", true, 9, false],

    // DHERMA SCIENCE
    ["20", "dherma-science-advance-formula-32g", "Dherma Science", "Cuidado de la piel", "Rostro", "Advance Formula", "32g", 28000, 45000, "https://drive.google.com/thumbnail?id=1PNaXdkmNOoKTKfd6I2KpQaYCucn3lMlo&sz=w1200", true, 6, true],
    ["21", "dherma-science-eye-drone-technology-15g", "Dherma Science", "Cuidado de la piel", "Ojos", "Eye Drone Technology", "15g", 26000, 40000, "https://drive.google.com/thumbnail?id=1SiIyJtvmEqH74btsozClDq1hqOEtHebO&sz=w1200", true, 5, true],
    ["22", "dherma-science-night-reset-cream-50g", "Dherma Science", "Cuidado de la piel", "Rostro", "Night Reset Cream", "50g", 30000, 48000, "https://drive.google.com/thumbnail?id=1Swxm1jHhOORJgmyK4UlSj5sNA2WpfiGW&sz=w1200", true, 7, true],
    ["23", "dherma-science-proteo-c-solution-20ml", "Dherma Science", "Cuidado de la piel", "Rostro", "Proteo C-Solution (10 amp x 2ml)", "20ml", 28000, 44000, "https://drive.google.com/thumbnail?id=1TcPu7nhNIpbFZpFPMgzVdqzKhYmnB9pe&sz=w1200", true, 8, true],

    // MATT BALANCE
    ["24", "matt-balance-cleansing-gel-180g", "Matt Balance", "Cuidado de la piel", "Rostro", "Cleansing Gel", "180g", 16500, 27000, null, true, 12, false],
    ["25", "matt-balance-lotion-125ml", "Matt Balance", "Cuidado de la piel", "Rostro", "Lotion", "125ml", 17000, 27000, null, true, 15, false],
    ["26", "matt-balance-cream-50g", "Matt Balance", "Cuidado de la piel", "Rostro", "Cream", "50g", 19000, 31000, null, true, 10, true],

    // SKINBIOMA
    ["27", "skinbioma-face-cream-50g", "Skinbioma", "Cuidado de la piel", "Rostro", "Face Cream", "50g", 18000, 29500, null, true, 11, false],
    ["28", "skinbioma-micellar-water-190ml", "Skinbioma", "Cuidado de la piel", "Rostro", "Micellar Water", "190ml", 9000, 13500, null, true, 20, false],
    ["29", "skinbioma-shower-gel-290g", "Skinbioma", "Cuidado de la piel", "Cuerpo", "Shower Gel", "290g", 14000, 22500, null, true, 16, false],
    ["30", "skinbioma-hand-cream-50g", "Skinbioma", "Cuidado de la piel", "Manos", "Hand Cream", "50g", 15500, 25500, null, true, 18, true],
    ["31", "skinbioma-face-lotion-125ml", "Skinbioma", "Cuidado de la piel", "Rostro", "Face Lotion", "125ml", 15500, 19000, null, true, 13, false],

    // RETINOL A+
    ["32", "retinol-a-emulsion-30g", "Retinol A+", "Cuidado de la piel", "Rostro", "Emulsion", "30g", 24000, 40000, null, true, 9, true],
    ["33", "retinol-a-cream-50g", "Retinol A+", "Cuidado de la piel", "Rostro", "Cream", "50g", 22500, 36500, null, true, 7, true],
    ["34", "retinol-a-daily-cream-50g", "Retinol A+", "Cuidado de la piel", "Rostro", "Daily Cream", "50g", 25000, 43000, null, true, 6, true],

    // RENOVAGE
    ["35", "renovage-ultra-dry-skin-50g", "Renovage", "Cuidado de la piel", "Rostro", "Ultra Dry Skin", "50g", 20000, 33500, null, true, 8, false],
    ["36", "renovage-sensitive-skin-30g", "Renovage", "Cuidado de la piel", "Rostro", "Sensitive Skin", "30g", 18000, 29500, null, true, 10, false],
    ["37", "renovage-normal-and-oily-skin-30g", "Renovage", "Cuidado de la piel", "Rostro", "Normal and Oily Skin", "30g", 20000, 31500, null, true, 12, false],
    ["38", "renovage-body-cream-180g", "Renovage", "Cuidado de la piel", "Cuerpo", "Body Cream", "180g", 20000, 33500, null, true, 9, false],

    // TENSE COMPLEX
    ["39", "tense-complex-face-cream-50g", "Tense Complex", "Cuidado de la piel", "Rostro", "Face Cream", "50g", 26500, 42000, null, true, 7, true],
    ["40", "tense-complex-serum-30g", "Tense Complex", "Cuidado de la piel", "Rostro", "Serum", "30g", 23500, 39000, null, true, 8, true],

    // VITA SHIELD
    ["41", "vita-shield-ageless-complex-50g", "Vita Shield", "Cuidado de la piel", "Rostro", "Ageless Complex", "50g", 19000, 31500, null, true, 11, false],
    ["42", "vita-shield-hydra-complex-50g", "Vita Shield", "Cuidado de la piel", "Rostro", "Hydra Complex", "50g", 16500, 27500, null, true, 13, false],

    // VITA B12+
    ["43", "vita-b12-cream-50g", "Vita B12+", "Cuidado de la piel", "Rostro", "Cream", "50g", 24000, 39500, null, true, 9, true],
    ["44", "vita-b12-emulsion-30ml", "Vita B12+", "Cuidado de la piel", "Rostro", "Emulsion", "30ml", 22000, 35000, null, true, 10, true],
    ["45", "vita-b12-eye-contour-15g", "Vita B12+", "Cuidado de la piel", "Ojos", "Eye Contour", "15g", 21500, 35500, null, true, 6, true],

    // NIACINAMIDE+
    ["46", "niacinamide-micellar-water-190ml", "Niacinamide+", "Cuidado de la piel", "Rostro", "Micellar Water", "190ml", 17500, 28000, null, true, 15, false],
    ["47", "niacinamide-serum-30g", "Niacinamide+", "Cuidado de la piel", "Rostro", "Serum", "30g", 24500, 39500, null, true, 12, true],
    ["48", "niacinamide-cream-50g", "Niacinamide+", "Cuidado de la piel", "Rostro", "Cream", "50g", 26000, 42000, null, true, 8, true],

    // AQUA SHOT
    ["49", "aqua-shot-micellar-water-190ml", "Aqua Shot", "Cuidado de la piel", "Rostro", "Micellar Water", "190ml", 13000, 21000, "https://drive.google.com/thumbnail?id=1EZ1uaDDiwy1qV7bpdvMhjiCvZ9Shg9Oy&sz=w1200", true, 18, false],
    ["50", "aqua-shot-body-cream-280g", "Aqua Shot", "Cuidado de la piel", "Cuerpo", "Body Cream", "280g", 14500, 23500, "https://drive.google.com/thumbnail?id=19SKHUppA6lVBnGAEkyj4QlR4jz9K1Tft&sz=w1200", true, 14, false],
    ["51", "aqua-shot-gel-scrub-100g", "Aqua Shot", "Cuidado de la piel", "Rostro", "Gel Scrub", "100g", 10000, 16000, "https://drive.google.com/thumbnail?id=1AhbPe81G-n3OhhC8cznDLCspMGMS0Ks4&sz=w1200", true, 22, false],
    ["52", "aqua-shot-face-cream-50g", "Aqua Shot", "Cuidado de la piel", "Rostro", "Face Cream", "50g", 16000, 26000, "https://drive.google.com/thumbnail?id=19iQxETaPTcAnut4-yOpOq0DXi4gmRtRw&sz=w1200", true, 16, true],

    // ACNEX DEPURE
    ["53", "acnex-depure-intensive-cleanser-100g", "Acnex Depure", "Cuidado de la piel", "Rostro", "Intensive Cleanser", "100g", 14500, 24000, "https://drive.google.com/thumbnail?id=17akEZMxUfDmg9bs-RMrZEQSqPTtoTbAJ&sz=w1200", true, 17, false],
    ["54", "acnex-depure-control-treatment-50g", "Acnex Depure", "Cuidado de la piel", "Rostro", "Control Treatment", "50g", 18500, 30000, "https://drive.google.com/thumbnail?id=14wWLtmyZ2eB4ERFXZ0GLR6tYsK0tSEn6&sz=w1200", true, 12, false],
    ["55", "acnex-depure-control-topic-15g", "Acnex Depure", "Cuidado de la piel", "Rostro", "Control Topic", "15g", 12000, 20000, "https://drive.google.com/thumbnail?id=11YJv3nggJSR8G7FUq4Yo_xCKpKdU0MaN&sz=w1200", true, 15, false],
    ["56", "acnex-depure-control-cover-2g", "Acnex Depure", "Cuidado de la piel", "Rostro", "Control Cover", "2g", 13000, 21000, "https://drive.google.com/thumbnail?id=11QIlh9ExuvYG4PxndsASoGowrZPZDtHn&sz=w1200", true, 10, false],

    // DETOXIFY
    ["57", "detoxify-deep-cleanser-gel-110g", "Detoxify", "Cuidado de la piel", "Rostro", "Deep Cleanser Gel", "110g", 15000, 24000, "https://drive.google.com/thumbnail?id=1L-tSHSSJ-M0b_7XsLpNCQKuVribVGalg&sz=w1200", true, 19, false],
    ["58", "detoxify-facial-emulsion-50g", "Detoxify", "Cuidado de la piel", "Rostro", "Facial Emulsion", "50g", 23500, 29500, "https://drive.google.com/thumbnail?id=1LI5rnshHGReNUcy9WoTA0QOnvGIxldDn&sz=w1200", true, 11, false],

    // FÓRMULAS FACIALES
    ["59", "formulas-faciales-desmaquillante-de-ojos-125ml", "Fórmulas Faciales", "Cuidado de la piel", "Rostro", "Desmaquillante de Ojos", "125ml", 20000, 29000, "https://drive.google.com/thumbnail?id=1XaliUBkFTX7K1Sn7j5NACkHKP0gIRzzv&sz=w1200", true, 14, false],
    ["60", "formulas-faciales-dermo-scrub-100g", "Fórmulas Faciales", "Cuidado de la piel", "Rostro", "Dermo Scrub", "100g", 16000, 26000, "https://drive.google.com/thumbnail?id=1WzyVbX_9CnF_zKir450YtWVPVzV22Yuu&sz=w1200", true, 13, true],
    ["61", "formulas-faciales-jabon-liquido-180g", "Fórmulas Faciales", "Cuidado de la piel", "Rostro", "Jabón Líquido", "180g", 12500, 20500, "https://drive.google.com/thumbnail?id=1aeFejBRP449mG_CNFjBr885DNt8kV-z9&sz=w1200", true, 18, false],
    ["62", "formulas-faciales-gel-higienico-300ml", "Fórmulas Faciales", "Cuidado de la piel", "Rostro", "Gel Higiénico", "300ml", 18000, 21500, "https://drive.google.com/thumbnail?id=1ZnydTw4MeYHPvyft2UZ3Bj4mXS1KFE0y&sz=w1200", true, 16, false],
    ["63", "formulas-faciales-peptisomas-50g", "Fórmulas Faciales", "Cuidado de la piel", "Rostro", "Peptisomas", "50g", 19000, 30000, "https://drive.google.com/thumbnail?id=1clqn_8Zq4o4iPgYRsvnOwoH4wm6TKpXE&sz=w1200", true, 9, false],
    ["64", "formulas-faciales-firmosomas-50g", "Fórmulas Faciales", "Cuidado de la piel", "Rostro", "Firmosomas", "50g", 16500, 26500, "https://drive.google.com/thumbnail?id=1ZTPeStJiuSZlesdj86jeu7zKzNHqOPCy&sz=w1200", true, 10, true],
  ];

  return csvProducts.map(product => ({
    id: product[0],
    slug: product[1],
    linea: product[2],
    categoria_L1: product[3],
    categoria_L2: product[4],
    producto: product[5],
    presentacion: product[6],
    precio_profesional_ARS: product[7],
    precio_publico_ARS: product[8],
    imagen_url: product[9] || `https://via.placeholder.com/400x400/2d5aa0/ffffff?text=${encodeURIComponent(product[5])}`,
    disponible: product[10],
    stock: product[11],
    cuotas_sin_interes: product[12],
    tipo_piel: ["Todos los tipos"],
    funcion: ["Cuidado de la piel"]
  }));
};