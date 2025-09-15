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
    subcategorias: ["Hidratación", "Anti-age", "Purificación", "Limpieza", "Luminosidad", "Acné", "Mascarillas"],
    icon: "🌸",
    descripcion: "Líneas especializadas para cada tipo de piel y necesidad específica"
  },
  {
    id: "maquillaje", 
    nombre: "Maquillaje",
    slug: "maquillaje",
    subcategorias: ["Bases", "Correctores", "Labios", "Ojos"],
    icon: "💄",
    descripcion: "Mímika: maquillaje que cuida tu piel mientras realza tu belleza"
  },
  {
    id: "solares",
    nombre: "Solares",
    slug: "solares", 
    subcategorias: ["Protección solar", "After sun"],
    icon: "☀️",
    descripcion: "Dherma Sun: protección inteligente contra UV y luz azul"
  },
  {
    id: "cuidado-corporal",
    nombre: "Cuidado Corporal",
    slug: "cuidado-corporal",
    subcategorias: ["Reductores", "Reafirmantes", "Hidratantes"],
    icon: "✨",
    descripcion: "Tratamientos profesionales para el cuerpo"
  }
];

export const mockLineas = [
  // Hidratación y reparación
  "Hyaluronic 4D", "Aqua Shot", "Hydrapore",
  
  // Anti-age premium
  "Renovage", "Retinol A+", "Dherma Science", "Silver Age", "Tense Complex",
  
  // Purificación y balance
  "Niacinamide+", "Acnex Depure", "Matt Balance", "Detoxify",
  
  // Luminosidad y antioxidantes  
  "Radian C", "Vita B12+", "Vita Shield",
  
  // Solares
  "Dherma Sun",
  
  // Maquillaje
  "Mímika",
  
  // Corporal
  "Cellactive", "Activos Corporales",
  
  // Tratamientos específicos
  "Plasma Infusion", "Biosmotic", "CB2 Power", "Skinbioma", "Expert Mask"
];

// Configuración específica de Rebeca Beauty Store
export const storeConfig = {
  name: "Rebeca Beauty Store",
  slogan: "Distribuidor Oficial Exclusivo Lidherma",
  ubicacion: "Bahía Blanca, Buenos Aires",
  cosmetologa: {
    nombre: "Rebeca",
    matricula: "M.P. 1624",
    especialidad: "Cosmetóloga especializada en tratamientos Lidherma"
  },
  contacto: {
    whatsapp: "5492915660198",
    email: "rebecabeautystore@gmail.com", 
    telefono: "291 566 0198",
    instagram: "@rebecamasajista"
  },
  servicios: {
    envio_uber: true,
    consultas_online: true,
    atencion_domicilio: true,
    descuento_transferencia: 10
  },
  horarios: {
    lunes_viernes: "9:00 - 18:00",
    sabados: "9:00 - 14:00", 
    domingos: "Cerrado",
    whatsapp_247: true
  }
};

export const whatsappConfig = {
  phoneNumber: storeConfig.contacto.whatsapp,
  defaultMessage: "¡Hola Rebeca! Me gustaría consultar sobre productos Lidherma 💆‍♀️✨"
};

// Banners del carrusel oficial de Lidherma
export const heroBanners = [
  {
    id: 1,
    url: "https://skinhouselidhermaarg.vtexassets.com/assets/vtex.file-manager-graphql/images/645c6683-1f07-4246-bd8a-47ad6d7f59f6___4093bcb78875469e7d901dbae6ace457.gif",
    title: "Promociones Lidherma",
    descripcion: "Descuentos especiales en líneas seleccionadas"
  },
  {
    id: 2, 
    url: "https://skinhouselidhermaarg.vtexassets.com/assets/vtex.file-manager-graphql/images/f059946c-19b4-4c9f-8e52-046f4c829731___04a15065f2cf5eced69aaf8b05abbd08.jpg",
    title: "Hyaluronic 4D",
    descripcion: "Hidratación profunda con ácido hialurónico"
  },
  {
    id: 3,
    url: "https://skinhouselidhermaarg.vtexassets.com/assets/vtex.file-manager-graphql/images/c2d753ac-ceb0-4189-b92e-2c9333ea306f___f381c9333b1a429af242589d82314d54.jpg", 
    title: "Renovage Anti-Age",
    descripcion: "Tecnología avanzada contra el envejecimiento"
  },
  {
    id: 4,
    url: "https://skinhouselidhermaarg.vtexassets.com/assets/vtex.file-manager-graphql/images/ee18a340-e16a-47ac-80bb-a691c461dfaf___51c0cfe06ab12560b32d002143feb914.jpg",
    title: "Dherma Sun",
    descripcion: "Protección solar inteligente"
  },
  {
    id: 5,
    url: "https://skinhouselidhermaarg.vtexassets.com/assets/vtex.file-manager-graphql/images/a4ddf1a2-cf36-4226-abf4-e12610bd425e___276e07d8ac054f5d2c537a5115a50ff6.jpg",
    title: "Mímika",
    descripcion: "Maquillaje que cuida tu piel"
  }
];

// FAQs específicas
export const faqs = [
  {
    id: 1,
    pregunta: "¿Cómo funciona el envío con Uber?",
    respuesta: "Hacés tu compra online, confirmamos el pedido y en 1-2 horas un conductor de Uber te lo entrega en tu domicilio dentro de Bahía Blanca. Podés seguir el envío en tiempo real desde la app de Uber."
  },
  {
    id: 2,
    pregunta: "¿Qué productos tienen 3 cuotas sin interés?", 
    respuesta: "Todos los productos de más de $25.000 tienen 3 cuotas sin interés con tarjeta de crédito. Los de más de $45.000 tienen hasta 6 cuotas sin interés."
  },
  {
    id: 3,
    pregunta: "¿Cuál es el tiempo de entrega?",
    respuesta: "En Bahía Blanca: 1-3 horas con Uber. Resto del país: 24-72hs con OCA/Correo Argentino. Envíos gratis en compras superiores a $70.000."
  },
  {
    id: 4,
    pregunta: "¿Hacen envíos a todo el país?",
    respuesta: "Sí, enviamos a toda Argentina. Bahía Blanca tiene envío express con Uber el mismo día. Para otras localidades usamos OCA y Correo Argentino."
  },
  {
    id: 5,
    pregunta: "¿Los productos son originales?",
    respuesta: "Somos distribuidor oficial exclusivo de Lidherma. Todos nuestros productos son 100% originales, con garantía de autenticidad y fecha de vencimiento vigente."
  },
  {
    id: 6,
    pregunta: "¿Puedo cambiar o devolver un producto?",
    respuesta: "Sí, tenés 30 días para cambios por productos sin usar. En caso de productos defectuosos, te hacemos el cambio inmediato sin costo adicional."
  }
];

// Medios de pago
export const mediosPago = [
  {
    nombre: "Mercado Pago",
    icon: "💳",
    descripcion: "Todas las tarjetas, hasta 12 cuotas"
  },
  {
    nombre: "Transferencia Bancaria", 
    icon: "🏦",
    descripcion: "10% de descuento",
    destacado: true
  },
  {
    nombre: "Visa / Mastercard",
    icon: "💎", 
    descripcion: "3 y 6 cuotas sin interés"
  },
  {
    nombre: "Efectivo",
    icon: "💵",
    descripcion: "En sucursal o contra entrega"
  }
];