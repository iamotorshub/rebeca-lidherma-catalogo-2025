// CATÁLOGO DIGITAL LIDHERMA COMPLETO - REBECA BEAUTY STORE
// PRODUCTOS PROFESIONALES CON URLs OFICIALES DEL VADEMÉCUM PROFESIONAL

export const mockProducts = [
  // HYALURONIC 4D - Hidratación multidimensional ✅
  {
    id: "1",
    slug: "hyaluronic-4d-cleansing-foam-145ml",
    linea: "Hyaluronic 4D",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Hidratación multidimensional",
    producto: "Cleansing Foam",
    presentacion: "145ml",
    precio_profesional_ARS: 16000,
    precio_publico_ARS: 26500,
    tipo: "Espuma limpiadora",
    tipo_piel: ["Todos los tipos"],
    funcion: ["Hidratación profunda", "Limpieza suave", "Ácido hialurónico"],
    imagen_url: "https://www.lidherma.com.ar/thumbnails/lidherma_hyaluronic_4d_cleansing_foam1_310xauto.jpg",
    imagen_profesional_url: "https://www.lidherma.com.ar/thumbnails/lidherma_hyaluronic_4d_cleansing_foam1_310xauto.jpg",
    disponible: true,
    stock: 15,
    cuotas_sin_interes: false
  },
  {
    id: "2",
    slug: "hyaluronic-4d-eyes-15g",
    linea: "Hyaluronic 4D",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Contorno de ojos",
    producto: "Eyes",
    presentacion: "15g",
    precio_profesional_ARS: 23500,
    precio_publico_ARS: 38500,
    tipo: "Contorno de ojos",
    tipo_piel: ["Todos los tipos"],
    funcion: ["Hidratación profunda", "Anti-age", "Firmeza"],
    imagen_url: "https://www.lidherma.com.ar/thumbnails/lidherma_hyaluronic_4d_eyes1_310xauto.jpg",
    imagen_profesional_url: "https://www.lidherma.com.ar/thumbnails/lidherma_hyaluronic_4d_eyes1_310xauto.jpg",
    disponible: true,
    stock: 12,
    cuotas_sin_interes: true
  },
  {
    id: "3",
    slug: "hyaluronic-4d-face-cream-50g",
    linea: "Hyaluronic 4D",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Hidratación multidimensional",
    producto: "Face Cream",
    presentacion: "50g",
    precio_profesional_ARS: 25500,
    precio_publico_ARS: 42500,
    tipo: "Crema facial",
    tipo_piel: ["Todos los tipos"],
    funcion: ["Hidratación profunda", "Anti-age", "Firmeza"],
    imagen_url: "https://www.lidherma.com.ar/thumbnails/lidherma_hyaluronic_4d_face_cream1_310xauto.jpg",
    imagen_profesional_url: "https://www.lidherma.com.ar/thumbnails/lidherma_hyaluronic_4d_face_cream1_310xauto.jpg",
    disponible: true,
    stock: 18,
    cuotas_sin_interes: true
  },
  {
    id: "4",
    slug: "hyaluronic-4d-rich-cream-50g",
    linea: "Hyaluronic 4D",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Hidratación multidimensional",
    producto: "Rich Cream",
    presentacion: "50g",
    precio_profesional_ARS: 25000,
    precio_publico_ARS: 41500,
    tipo: "Crema rica",
    tipo_piel: ["Piel seca", "Piel muy seca"],
    funcion: ["Hidratación intensiva", "Nutrición", "Reparación"],
    imagen_url: "https://www.lidherma.com.ar/thumbnails/lidherma_hyaluronic_4d_rich_cream1_310xauto.jpg",
    imagen_profesional_url: "https://www.lidherma.com.ar/thumbnails/lidherma_hyaluronic_4d_rich_cream1_310xauto.jpg",
    disponible: true,
    stock: 10,
    cuotas_sin_interes: true
  },
  {
    id: "5",
    slug: "hyaluronic-4d-serum-30g",
    linea: "Hyaluronic 4D",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Hidratación multidimensional",
    producto: "Serum",
    presentacion: "30g",
    precio_profesional_ARS: 24000,
    precio_publico_ARS: 39000,
    tipo: "Serum facial",
    tipo_piel: ["Todos los tipos"],
    funcion: ["Hidratación profunda", "Anti-age", "Firmeza"],
    imagen_url: "https://www.lidherma.com.ar/thumbnails/lidherma_hyaluronic_4d_serum1_310xauto.jpg",
    imagen_profesional_url: "https://www.lidherma.com.ar/thumbnails/lidherma_hyaluronic_4d_serum1_310xauto.jpg",
    disponible: true,
    stock: 14,
    cuotas_sin_interes: true
  },
  {
    id: "6",
    slug: "hyaluronic-4d-face-mask-sachet",
    linea: "Hyaluronic 4D",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Hidratación multidimensional",
    producto: "Face Mask",
    presentacion: "Sachet",
    precio_profesional_ARS: 1500,
    precio_publico_ARS: 2500,
    tipo: "Mascarilla facial",
    tipo_piel: ["Todos los tipos"],
    funcion: ["Hidratación intensiva", "Efecto flash", "Ácido hialurónico"],
    imagen_url: "https://www.lidherma.com.ar/thumbnails/lidherma_hyaluronic_4d_face_mask1_310xauto.jpg",
    imagen_profesional_url: "https://www.lidherma.com.ar/thumbnails/lidherma_hyaluronic_4d_face_mask1_310xauto.jpg",
    disponible: true,
    stock: 25,
    cuotas_sin_interes: false
  },

  // NIACINAMIDE+ - Tratamiento de poros ✅
  {
    id: "7",
    slug: "niacinamide-micellar-water-190ml",
    linea: "Niacinamide+",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Tratamiento poros",
    producto: "Micellar Water",
    presentacion: "190ml",
    precio_profesional_ARS: 17500,
    precio_publico_ARS: 28000,
    tipo: "Agua micelar",
    tipo_piel: ["Piel grasa", "Piel mixta"],
    funcion: ["Limpieza profunda", "Control poros", "Equilibrio"],
    imagen_url: "https://www.lidherma.com.ar/thumbnails/niacinamide_micellar_water_foto_producto1_310xauto.png",
    imagen_profesional_url: "https://www.lidherma.com.ar/thumbnails/niacinamide_micellar_water_foto_producto1_310xauto.png",
    disponible: true,
    stock: 20,
    cuotas_sin_interes: false
  },
  {
    id: "8",
    slug: "niacinamide-serum-30g",
    linea: "Niacinamide+",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Tratamiento poros",
    producto: "Serum",
    presentacion: "30g",
    precio_profesional_ARS: 24500,
    precio_publico_ARS: 39500,
    tipo: "Serum facial",
    tipo_piel: ["Piel grasa", "Piel mixta"],
    funcion: ["Control poros", "Equilibrio", "Hidratación"],
    imagen_url: "https://www.lidherma.com.ar/thumbnails/niacinamide_serum_foto_producto1_310xauto.png",
    imagen_profesional_url: "https://www.lidherma.com.ar/thumbnails/niacinamide_serum_foto_producto1_310xauto.png",
    disponible: true,
    stock: 16,
    cuotas_sin_interes: true
  },
  {
    id: "9",
    slug: "niacinamide-cream-50g",
    linea: "Niacinamide+",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Tratamiento poros",
    producto: "Cream",
    presentacion: "50g",
    precio_profesional_ARS: 26000,
    precio_publico_ARS: 42000,
    tipo: "Crema facial",
    tipo_piel: ["Piel grasa", "Piel mixta"],
    funcion: ["Control poros", "Equilibrio", "Hidratación"],
    imagen_url: "https://www.lidherma.com.ar/thumbnails/niacinamide_cream_foto_producto1_310xauto.png",
    imagen_profesional_url: "https://www.lidherma.com.ar/thumbnails/niacinamide_cream_foto_producto1_310xauto.png",
    disponible: true,
    stock: 12,
    cuotas_sin_interes: true
  },

  // RADIAN C - Despigmentante ✅
  {
    id: "10",
    slug: "radian-c-brightening-serum-30g",
    linea: "Radian C",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Despigmentante",
    producto: "Brightening Serum",
    presentacion: "30g",
    precio_profesional_ARS: 21000,
    precio_publico_ARS: 34000,
    tipo: "Serum despigmentante",
    tipo_piel: ["Todos los tipos"],
    funcion: ["Despigmentante", "Iluminador", "Vitamina C"],
    imagen_url: "https://www.lidherma.com.ar/thumbnails/lidherma_radian_c_brightening_serum1_310xauto.jpg",
    imagen_profesional_url: "https://www.lidherma.com.ar/thumbnails/lidherma_radian_c_brightening_serum1_310xauto.jpg",
    disponible: true,
    stock: 18,
    cuotas_sin_interes: true
  },
  {
    id: "11",
    slug: "radian-c-lightening-face-cream-50g",
    linea: "Radian C",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Despigmentante",
    producto: "Lightening Face Cream",
    presentacion: "50g",
    precio_profesional_ARS: 24000,
    precio_publico_ARS: 39500,
    tipo: "Crema despigmentante",
    tipo_piel: ["Todos los tipos"],
    funcion: ["Despigmentante", "Hidratación", "Vitamina C"],
    imagen_url: "https://www.lidherma.com.ar/thumbnails/lidherma_radian_c_lightening_face_cream1_310xauto.jpg",
    imagen_profesional_url: "https://www.lidherma.com.ar/thumbnails/lidherma_radian_c_lightening_face_cream1_310xauto.jpg",
    disponible: true,
    stock: 14,
    cuotas_sin_interes: true
  },
  {
    id: "12",
    slug: "radian-c-hand-cream-50g",
    linea: "Radian C",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Manos",
    producto: "Hand Cream",
    presentacion: "50g",
    precio_profesional_ARS: 12500,
    precio_publico_ARS: 18000,
    tipo: "Crema de manos",
    tipo_piel: ["Todos los tipos"],
    funcion: ["Despigmentante", "Hidratación", "Protección"],
    imagen_url: "https://www.lidherma.com.ar/thumbnails/lidherma_radian_c_hand_cream1_310xauto.jpg",
    imagen_profesional_url: "https://www.lidherma.com.ar/thumbnails/lidherma_radian_c_hand_cream1_310xauto.jpg",
    disponible: true,
    stock: 22,
    cuotas_sin_interes: false
  },
  {
    id: "13",
    slug: "radian-c-firming-body-cream-180g",
    linea: "Radian C",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Corporal",
    producto: "Firming Body Cream",
    presentacion: "180g",
    precio_profesional_ARS: 20500,
    precio_publico_ARS: 34000,
    tipo: "Crema corporal",
    tipo_piel: ["Todos los tipos"],
    funcion: ["Firmeza", "Vitamina C", "Hidratación"],
    imagen_url: "https://www.lidherma.com.ar/thumbnails/lidherma_radian_c_firming_body_cream1_310xauto.jpg",
    imagen_profesional_url: "https://www.lidherma.com.ar/thumbnails/lidherma_radian_c_firming_body_cream1_310xauto.jpg",
    disponible: true,
    stock: 8,
    cuotas_sin_interes: false
  },
  {
    id: "14",
    slug: "radian-c-revitalizing-mask-sachet",
    linea: "Radian C",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Despigmentante",
    producto: "Revitalizing Mask",
    presentacion: "Sachet",
    precio_profesional_ARS: 1500,
    precio_publico_ARS: 2500,
    tipo: "Mascarilla facial",
    tipo_piel: ["Todos los tipos"],
    funcion: ["Despigmentante", "Revitalizante", "Vitamina C"],
    imagen_url: "https://www.lidherma.com.ar/thumbnails/lidherma_radian_c_revitalizing_mask1_310xauto.jpg",
    imagen_profesional_url: "https://www.lidherma.com.ar/thumbnails/lidherma_radian_c_revitalizing_mask1_310xauto.jpg",
    disponible: true,
    stock: 25,
    cuotas_sin_interes: false
  },
  {
    id: "15",
    slug: "radian-c-face-mask-sachet",
    linea: "Radian C",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Despigmentante",
    producto: "Face Mask",
    presentacion: "Sachet",
    precio_profesional_ARS: 1500,
    precio_publico_ARS: 2500,
    tipo: "Mascarilla facial",
    tipo_piel: ["Todos los tipos"],
    funcion: ["Despigmentante", "Iluminador", "Vitamina C"],
    imagen_url: "https://www.lidherma.com.ar/thumbnails/radian_c_face_mask_foto_final_cuadrada1_310xauto.png",
    imagen_profesional_url: "https://www.lidherma.com.ar/thumbnails/radian_c_face_mask_foto_final_cuadrada1_310xauto.png",
    disponible: true,
    stock: 25,
    cuotas_sin_interes: false
  },

  // BIOSMOTIC - Hidratación profunda ✅
  {
    id: "16",
    slug: "biosmotic-water-drops-30g",
    linea: "Biosmotic",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Hidratación profunda",
    producto: "Water Drops",
    presentacion: "30g",
    precio_profesional_ARS: 23500,
    precio_publico_ARS: 36000,
    tipo: "Serum hidratante",
    tipo_piel: ["Todos los tipos"],
    funcion: ["Hidratación profunda", "Renovación", "Equilibrio"],
    imagen_url: "https://www.lidherma.com.ar/thumbnails/lidherma_biosmotic_water_drops1_310xauto.jpg",
    imagen_profesional_url: "https://www.lidherma.com.ar/thumbnails/lidherma_biosmotic_water_drops1_310xauto.jpg",
    disponible: true,
    stock: 16,
    cuotas_sin_interes: true
  },
  {
    id: "17",
    slug: "biosmotic-water-cream-50g",
    linea: "Biosmotic",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Hidratación profunda",
    producto: "Water Cream",
    presentacion: "50g",
    precio_profesional_ARS: 23000,
    precio_publico_ARS: 38000,
    tipo: "Crema hidratante",
    tipo_piel: ["Todos los tipos"],
    funcion: ["Hidratación profunda", "Renovación", "Equilibrio"],
    imagen_url: "https://www.lidherma.com.ar/thumbnails/lidherma_biosmotic_water_cream1_310xauto.jpg",
    imagen_profesional_url: "https://www.lidherma.com.ar/thumbnails/lidherma_biosmotic_water_cream1_310xauto.jpg",
    disponible: true,
    stock: 12,
    cuotas_sin_interes: true
  },
  {
    id: "18",
    slug: "biosmotic-water-booster-75g",
    linea: "Biosmotic",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Hidratación profunda",
    producto: "Water Booster",
    presentacion: "75g",
    precio_profesional_ARS: 15000,
    precio_publico_ARS: 25000,
    tipo: "Potenciador hidratante",
    tipo_piel: ["Todos los tipos"],
    funcion: ["Hidratación intensiva", "Renovación", "Equilibrio"],
    imagen_url: "https://www.lidherma.com.ar/thumbnails/lidherma_biosmotic_water_booster1_310xauto.jpg",
    imagen_profesional_url: "https://www.lidherma.com.ar/thumbnails/lidherma_biosmotic_water_booster1_310xauto.jpg",
    disponible: true,
    stock: 18,
    cuotas_sin_interes: false
  }
];

// Categorías para filtros
export const mockCategories = [
  { id: "1", name: "Cuidado de la piel", slug: "cuidado-piel" },
  { id: "2", name: "Solares", slug: "solares" },
  { id: "3", name: "Maquillaje", slug: "maquillaje" }
];

// Líneas de productos
export const mockLineas = [
  { id: "1", name: "Hyaluronic 4D", slug: "hyaluronic-4d" },
  { id: "2", name: "Niacinamide+", slug: "niacinamide-plus" },
  { id: "3", name: "Radian C", slug: "radian-c" },
  { id: "4", name: "Biosmotic", slug: "biosmotic" },
  { id: "5", name: "Hydrapore", slug: "hydrapore" },
  { id: "6", name: "Matt Balance", slug: "matt-balance" },
  { id: "7", name: "Plasma Infusion", slug: "plasma-infusion" },
  { id: "8", name: "Retinol A+", slug: "retinol-a-plus" },
  { id: "9", name: "Vita Shield", slug: "vita-shield" },
  { id: "10", name: "Dherma Sun", slug: "dherma-sun" },
  { id: "11", name: "Aqua Shot", slug: "aqua-shot" }
];

// Configuración de la tienda
export const storeConfig = {
  name: "Rebeca Beauty Store",
  descripcion: "Especialistas en productos cosméticos profesionales LIDHERMA",
  contacto: {
    email: "rebecabeautystore@gmail.com",
    phone: "+54 9 261 123-4567",
    whatsapp: "5492611234567",
    instagram: "@rebecabeautystore",
    direccion: "Mendoza, Argentina"
  },
  cosmetologa: {
    nombre: "Rebeca",
    matricula: "1234",
    especialidad: "Cosmetología Profesional"
  },
  horarios: {
    lunes_viernes: "9:00 - 18:00",
    sabados: "9:00 - 14:00",
    domingos: "Cerrado"
  },
  delivery: {
    uber_eats: true,
    zona_cobertura: "Gran Mendoza",
    tiempo_entrega: "30-45 min"
  },
  servicios: {
    descuento_transferencia: true,
    envio_gratis_desde: 60000,
    cuotas_sin_interes: 12
  },
  // Compatibilidad con propiedades anteriores
  email: "rebecabeautystore@gmail.com",
  phone: "+54 9 261 123-4567",
  whatsapp: "+54 9 261 123-4567",
  instagram: "@rebecabeautystore",
  address: "Mendoza, Argentina"
};

// Medios de pago
export const mediosPago = [
  {
    id: "1",
    name: "Tarjetas de Crédito",
    description: "Visa, Mastercard, American Express",
    icon: "CreditCard",
    cuotas: "Hasta 12 cuotas sin interés"
  },
  {
    id: "2", 
    name: "Transferencia Bancaria",
    description: "10% de descuento",
    icon: "Package",
    cuotas: "Pago único"
  },
  {
    id: "3",
    name: "Efectivo",
    description: "En sucursal o contra entrega",
    icon: "CheckCircle2",
    cuotas: "Pago único"
  },
  {
    id: "4",
    name: "Mercado Pago",
    description: "QR, Link de pago",
    icon: "Zap", 
    cuotas: "Hasta 6 cuotas"
  }
];

// Configuración de WhatsApp
export const whatsappConfig = {
  phoneNumber: "5492611234567",
  defaultMessage: "¡Hola! Me interesa conocer más sobre los productos de Rebeca Beauty Store 💄"
};

// FAQs
export const faqs = [
  {
    id: "1",
    question: "¿Los productos son originales?",
    answer: "Sí, todos nuestros productos son 100% originales LIDHERMA. Trabajamos directamente con la marca para garantizar la autenticidad."
  },
  {
    id: "2", 
    question: "¿Hacen envíos a todo el país?",
    answer: "Realizamos envíos a toda Argentina. En Gran Mendoza tenemos delivery con Uber Eats (30-45 min). Para otras provincias coordinamos envíos por correo."
  },
  {
    id: "3",
    question: "¿Qué medios de pago aceptan?",
    answer: "Aceptamos tarjetas de crédito (hasta 12 cuotas sin interés), transferencia bancaria (10% descuento), efectivo y Mercado Pago."
  },
  {
    id: "4",
    question: "¿Tienen garantía los productos?",
    answer: "Todos los productos tienen garantía. Si no estás satisfecho/a, tenés 30 días para cambios por productos en perfecto estado."
  },
  {
    id: "5",
    question: "¿Puedo consultar sobre rutinas de cuidado?",
    answer: "¡Por supuesto! Rebeca es cosmetóloga profesional y puede asesorarte sobre la rutina ideal para tu tipo de piel. Consultá por WhatsApp."
  },
  {
    id: "6",
    question: "¿Tienen productos para profesionales?",
    answer: "Sí, manejamos precios especiales para profesionales de la belleza. Contactanos para conocer nuestros precios mayoristas."
  }
];

// Hero banners para el carrusel - con imágenes oficiales proporcionadas
export const heroBanners = [
  {
    id: 1,
    url: "https://skinhouselidhermaarg.vtexassets.com/assets/vtex.file-manager-graphql/images/fb8e544c-763e-4a34-88f3-97659fa17bdd___c4a28372a79ea44216cb958854e24b13.jpg",
    title: "Cuidado de la Piel",
    descripcion: "Productos profesionales para el cuidado facial"
  },
  {
    id: 2,
    url: "https://skinhouselidhermaarg.vtexassets.com/assets/vtex.file-manager-graphql/images/cea9e213-5141-4538-8e8e-efe646a1d5c0___58b17a7f024585d5951cef2f7b30bf91.jpg",
    title: "Promociones Especiales",
    descripcion: "Descuentos y ofertas exclusivas en productos seleccionados"
  },
  {
    id: 3,
    url: "https://skinhouselidhermaarg.vtexassets.com/assets/vtex.file-manager-graphql/images/f059946c-19b4-4c9f-8e52-046f4c829731___04a15065f2cf5eced69aaf8b05abbd08.jpg",
    title: "Líneas Premium",
    descripcion: "Descubre nuestras líneas más innovadoras"
  },
  {
    id: 4,
    url: "https://skinhouselidhermaarg.vtexassets.com/assets/vtex.file-manager-graphql/images/c2d753ac-ceb0-4189-b92e-2c9333ea306f___f381c9333b1a429af242589d82314d54.jpg",
    title: "Productos Destacados",
    descripcion: "Los favoritos de nuestros clientes"
  }
];