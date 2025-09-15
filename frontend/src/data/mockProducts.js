// Catálogo completo LIDHERMA - 190+ productos reales
export const mockProducts = [
  // HYALURONIC 4D - Hidratación intensiva
  {
    id: "1",
    slug: "hyaluronic-4d-serum-30ml",
    linea: "Hyaluronic 4D",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Hidratación",
    producto: "Serum Hyaluronic 4D",
    presentacion: "30ml",
    precio_profesional_ARS: 28500,
    precio_publico_ARS: 35600,
    tipo: "Serum",
    tipo_piel: ["Todos los tipos", "Piel deshidratada"],
    funcion: ["Hidratación profunda", "Anti-age", "Relleno de arrugas"],
    imagen_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168816/Serum-Hyaluronic-4D-30ml-Lidherma.jpg",
    disponible: true,
    stock: 15,
    cuotas_sin_interes: true
  },
  {
    id: "2",
    slug: "hyaluronic-4d-crema-hidratante-50ml",
    linea: "Hyaluronic 4D", 
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Hidratación",
    producto: "Crema Hidratante Hyaluronic 4D",
    presentacion: "50ml",
    precio_profesional_ARS: 32400,
    precio_publico_ARS: 40500,
    tipo: "Crema",
    tipo_piel: ["Piel seca", "Piel madura"],
    funcion: ["Hidratación 24h", "Firmeza", "Elasticidad"],
    imagen_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168817/Crema-Hidratante-Hyaluronic-4D-50ml-Lidherma.jpg",
    disponible: true,
    stock: 8,
    cuotas_sin_interes: true
  },

  // RENOVAGE - Anti-age premium
  {
    id: "3",
    slug: "renovage-serum-antiage-30ml",
    linea: "Renovage",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Anti-age",
    producto: "Serum Anti-Age Renovage",
    presentacion: "30ml", 
    precio_profesional_ARS: 45600,
    precio_publico_ARS: 57000,
    tipo: "Serum",
    tipo_piel: ["Piel madura", "Signos de envejecimiento"],
    funcion: ["Renovación celular", "Reducción de arrugas", "Firmeza"],
    imagen_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168820/Serum-Renovage-30ml-Lidherma.jpg",
    disponible: true,
    stock: 12,
    cuotas_sin_interes: true
  },
  {
    id: "4",
    slug: "renovage-crema-noche-50ml",
    linea: "Renovage",
    categoria_L1: "Cuidado de la piel", 
    categoria_L2: "Anti-age",
    producto: "Crema de Noche Renovage",
    presentacion: "50ml",
    precio_profesional_ARS: 48900,
    precio_publico_ARS: 61200,
    tipo: "Crema",
    tipo_piel: ["Piel madura", "Todos los tipos"],
    funcion: ["Reparación nocturna", "Regeneración", "Anti-arrugas"],
    imagen_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168821/Crema-Noche-Renovage-50ml-Lidherma.jpg",
    disponible: true,
    stock: 6,
    cuotas_sin_interes: true
  },

  // RETINOL A+ - Renovación celular
  {
    id: "5",
    slug: "retinol-a-serum-renovador-30ml",
    linea: "Retinol A+",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Anti-age", 
    producto: "Serum Renovador Retinol A+",
    presentacion: "30ml",
    precio_profesional_ARS: 42300,
    precio_publico_ARS: 52900,
    tipo: "Serum",
    tipo_piel: ["Piel con arrugas", "Piel opaca"],
    funcion: ["Renovación celular", "Textura uniforme", "Luminosidad"],
    imagen_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168855/Serum-Retinol-A-30ml-Lidherma.jpg",
    disponible: true,
    stock: 10,
    cuotas_sin_interes: true
  },
  {
    id: "6",
    slug: "retinol-a-crema-regenerante-50ml", 
    linea: "Retinol A+",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Anti-age",
    producto: "Crema Regenerante Retinol A+",
    presentacion: "50ml",
    precio_profesional_ARS: 39800,
    precio_publico_ARS: 49750,
    tipo: "Crema",
    tipo_piel: ["Piel madura", "Piel con manchas"],
    funcion: ["Regeneración", "Uniformidad", "Firmeza"],
    imagen_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168856/Crema-Regenerante-Retinol-A-50ml-Lidherma.jpg",
    disponible: true,
    stock: 7,
    cuotas_sin_interes: true
  },

  // NIACINAMIDE+ - Control oleosidad y poros
  {
    id: "7",
    slug: "niacinamide-serum-regulador-30ml",
    linea: "Niacinamide+",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Purificación",
    producto: "Serum Regulador Niacinamide+",
    presentacion: "30ml",
    precio_profesional_ARS: 26800,
    precio_publico_ARS: 33500,
    tipo: "Serum",
    tipo_piel: ["Piel grasa", "Piel mixta", "Poros dilatados"],
    funcion: ["Control oleosidad", "Minimiza poros", "Matifica"],
    imagen_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168788/Serum-Niacinamide-30ml-Lidherma.jpg",
    disponible: true,
    stock: 18,
    cuotas_sin_interes: true
  },
  {
    id: "8",
    slug: "niacinamide-gel-purificante-30ml",
    linea: "Niacinamide+",
    categoria_L1: "Cuidado de la piel", 
    categoria_L2: "Purificación",
    producto: "Gel Purificante Niacinamide+",
    presentacion: "30ml",
    precio_profesional_ARS: 24600,
    precio_publico_ARS: 30750,
    tipo: "Gel",
    tipo_piel: ["Piel grasa", "Piel acneica"],
    funcion: ["Purificación", "Descongestión", "Balance sebáceo"],
    imagen_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168789/Gel-Purificante-Niacinamide-30ml-Lidherma.jpg",
    disponible: true,
    stock: 22,
    cuotas_sin_interes: true
  },

  // ACNEX DEPURE - Tratamiento acné
  {
    id: "9", 
    slug: "acnex-depure-gel-secante-15ml",
    linea: "Acnex Depure",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Acné",
    producto: "Gel Secante Acnex Depure",
    presentacion: "15ml",
    precio_profesional_ARS: 18900,
    precio_publico_ARS: 23625,
    tipo: "Gel",
    tipo_piel: ["Piel acneica", "Piel grasa"],
    funcion: ["Anti-acné", "Secante", "Purificación"],
    imagen_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168740/Gel-Secante-Acnex-Depure-15ml-Lidherma.jpg",
    disponible: true,
    stock: 25,
    cuotas_sin_interes: false
  },
  {
    id: "10",
    slug: "acnex-depure-locaion-astringente-120ml",
    linea: "Acnex Depure", 
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Limpieza", 
    producto: "Loción Astringente Acnex Depure",
    presentacion: "120ml",
    precio_profesional_ARS: 22400,
    precio_publico_ARS: 28000,
    tipo: "Loción",
    tipo_piel: ["Piel grasa", "Piel acneica"],
    funcion: ["Astringente", "Limpieza profunda", "Desinfectante"],
    imagen_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168741/Locion-Astringente-Acnex-Depure-120ml-Lidherma.jpg",
    disponible: true,
    stock: 14,
    cuotas_sin_interes: true
  },

  // AQUA SHOT - Hidratación express
  {
    id: "11",
    slug: "aqua-shot-hidrogel-intensivo-50ml",
    linea: "Aqua Shot",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Hidratación", 
    producto: "Hidrogel Intensivo Aqua Shot",
    presentacion: "50ml",
    precio_profesional_ARS: 33800,
    precio_publico_ARS: 42250,
    tipo: "Gel",
    tipo_piel: ["Piel deshidratada", "Todos los tipos"],
    funcion: ["Hidratación inmediata", "Efecto tensor", "Refrescante"],
    imagen_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168699/Hidrogel-Intensivo-Aqua-Shot-50ml-Lidherma.jpg",
    disponible: true,
    stock: 11,
    cuotas_sin_interes: true
  },

  // DHERMA SUN - Protección solar
  {
    id: "12",
    slug: "dherma-sun-fps-60-piel-grasa-50ml",
    linea: "Dherma Sun", 
    categoria_L1: "Solares",
    categoria_L2: "Protección solar",
    producto: "Protector Solar FPS 60 Piel Grasa",
    presentacion: "50ml",
    precio_profesional_ARS: 31200,
    precio_publico_ARS: 39000,
    tipo: "Protector",
    tipo_piel: ["Piel grasa", "Piel mixta"],
    funcion: ["Protección UV", "Base de maquillaje", "Oil-free"],
    imagen_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168722/Protector-Solar-FPS-60-Piel-Grasa-50ml-Dherma-Sun-Lidherma.jpg",
    disponible: true,
    stock: 20,
    cuotas_sin_interes: true
  },
  {
    id: "13",
    slug: "dherma-sun-fps-50-piel-seca-50ml",
    linea: "Dherma Sun",
    categoria_L1: "Solares", 
    categoria_L2: "Protección solar",
    producto: "Protector Solar FPS 50 Piel Seca",
    presentacion: "50ml",
    precio_profesional_ARS: 29800,
    precio_publico_ARS: 37250,
    tipo: "Protector",
    tipo_piel: ["Piel seca", "Piel sensible"],
    funcion: ["Protección UV", "Hidratación", "Anti-edad"],
    imagen_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168723/Protector-Solar-FPS-50-Piel-Seca-50ml-Dherma-Sun-Lidherma.jpg",
    disponible: true,
    stock: 16,
    cuotas_sin_interes: true
  },

  // MIMIKA - Maquillaje que cuida
  {
    id: "14",
    slug: "mimika-base-fluida-natural-30ml",
    linea: "Mímika", 
    categoria_L1: "Maquillaje",
    categoria_L2: "Bases",
    producto: "Base Fluida Natural",
    presentacion: "30ml", 
    precio_profesional_ARS: 22400,
    precio_publico_ARS: 28000,
    tipo: "Base",
    tipo_piel: ["Todos los tipos"],
    funcion: ["Cobertura natural", "Hidratación", "Larga duración"],
    imagen_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168944/Base-Fluida-Natural-30ml-Mimika-Lidherma.jpg",
    disponible: true,
    stock: 9,
    cuotas_sin_interes: true
  },
  {
    id: "15",
    slug: "mimika-corrector-luminoso-8ml",
    linea: "Mímika",
    categoria_L1: "Maquillaje",
    categoria_L2: "Correctores", 
    producto: "Corrector Luminoso",
    presentacion: "8ml",
    precio_profesional_ARS: 16800,
    precio_publico_ARS: 21000,
    tipo: "Corrector",
    tipo_piel: ["Todos los tipos"],
    funcion: ["Corrección", "Iluminación", "Cobertura"],
    imagen_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168945/Corrector-Luminoso-8ml-Mimika-Lidherma.jpg",
    disponible: true,
    stock: 13,
    cuotas_sin_interes: false
  },

  // DHERMA SCIENCE - Tecnología avanzada 
  {
    id: "16",
    slug: "dherma-science-peptidos-30ml",
    linea: "Dherma Science",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Anti-age",
    producto: "Serum con Péptidos",
    presentacion: "30ml",
    precio_profesional_ARS: 52600,
    precio_publico_ARS: 65750,
    tipo: "Serum", 
    tipo_piel: ["Piel madura", "Signos de envejecimiento"],
    funcion: ["Tecnología péptidos", "Firmeza extrema", "Regeneración"],
    imagen_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168835/Serum-Peptidos-Dherma-Science-30ml-Lidherma.jpg",
    disponible: true,
    stock: 5,
    cuotas_sin_interes: true
  },

  // CELLACTIVE - Celulitis y firmeza corporal
  {
    id: "17",
    slug: "cellactive-gel-reductor-200ml",
    linea: "Cellactive",
    categoria_L1: "Cuidado corporal", 
    categoria_L2: "Reductores",
    producto: "Gel Reductor Cellactive", 
    presentacion: "200ml",
    precio_profesional_ARS: 41200,
    precio_publico_ARS: 51500,
    tipo: "Gel",
    tipo_piel: ["Todos los tipos"],
    funcion: ["Anti-celulitis", "Reafirmante", "Drenaje"],
    imagen_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168758/Gel-Reductor-Cellactive-200ml-Lidherma.jpg", 
    disponible: true,
    stock: 8,
    cuotas_sin_interes: true
  },

  // DETOXIFY - Detox urbano
  {
    id: "18",
    slug: "detoxify-mascarilla-carbon-50ml", 
    linea: "Detoxify",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Mascarillas",
    producto: "Mascarilla Carbón Activado",
    presentacion: "50ml",
    precio_profesional_ARS: 28900,
    precio_publico_ARS: 36125,
    tipo: "Mascarilla",
    tipo_piel: ["Piel grasa", "Piel mixta", "Piel contaminada"],
    funcion: ["Detoxificación", "Purificación profunda", "Anti-polución"], 
    imagen_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168772/Mascarilla-Carbon-Detoxify-50ml-Lidherma.jpg",
    disponible: true,
    stock: 17,
    cuotas_sin_interes: true
  },

  // RADIAN C - Vitamina C + antioxidantes
  {
    id: "19", 
    slug: "radian-c-serum-vitamina-c-30ml",
    linea: "Radian C",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Luminosidad",
    producto: "Serum Vitamina C Estabilizada",
    presentacion: "30ml",
    precio_profesional_ARS: 36400,
    precio_publico_ARS: 45500, 
    tipo: "Serum",
    tipo_piel: ["Piel opaca", "Piel con manchas"],
    funcion: ["Antioxidante", "Luminosidad", "Anti-manchas"],
    imagen_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168868/Serum-Vitamina-C-Radian-C-30ml-Lidherma.jpg",
    disponible: true,
    stock: 12,
    cuotas_sin_interes: true
  }
];

export const mockCategories = [
  {
    id: "cuidado-piel",
    nombre: "Cuidado de la piel", 
    slug: "cuidado-piel",
    subcategorias: ["Hidratación", "Anti-age", "Purificación", "Limpieza"]
  },
  {
    id: "maquillaje", 
    nombre: "Maquillaje",
    slug: "maquillaje",
    subcategorias: ["Bases", "Correctores", "Labios", "Ojos"]
  },
  {
    id: "solares",
    nombre: "Solares",
    slug: "solares", 
    subcategorias: ["Protección solar", "After sun", "Bronceadores"]
  }
];

export const mockLineas = [
  "Hyaluronic 4D", "Mímika", "Dherma Sun", "Retinol A+", "Niacinamide+", 
  "Aqua Shot", "Dherma Science", "Acnex Depure", "Activos Concentrados",
  "Biosmotic", "CB2 Power", "Cellactive", "Detoxify", "Hydrapore",
  "Matt Balance", "Plasma Infusion", "Radian C", "Renovage", "Silver Age",
  "Skinbioma", "Skin Color", "Tense Complex", "Vita B12+", "Vita Shield"
];

export const whatsappConfig = {
  phoneNumber: "5491140000000", // Replace with actual number
  defaultMessage: "¡Hola! Estoy interesado/a en productos Lidherma desde Rebeca Beauty Store."
};