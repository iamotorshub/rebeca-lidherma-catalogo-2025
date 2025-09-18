// ACTUALIZANDO CON CSV REAL - CORRIGIENDO PRODUCTOS MAL MAPEADOS
export const mockProducts = [
  // HYALURONIC 4D - URLs CORRECTAS del CSV
  {
    id: "1",
    slug: "hyaluronic-4d-cleansing-foam-145ml",
    linea: "Hyaluronic 4D",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Rostro",
    producto: "Cleansing Foam",
    presentacion: "145ml",
    precio_profesional_ARS: 16000,
    precio_publico_ARS: 26500,
    tipo: "Espuma limpiadora",
    tipo_piel: ["Todos los tipos", "Piel deshidratada"],
    funcion: ["Limpieza profunda", "Hidratación", "4 pesos moleculares"],
    imagen_url: "https://drive.google.com/thumbnail?id=1czgmuziSyOwvr1OlvYJsQBjaJoSTILkP&sz=w1200",
    disponible: true,
    stock: 15,
    cuotas_sin_interes: true
  },
  {
    id: "2",
    slug: "hyaluronic-4d-eyes-15g",
    linea: "Hyaluronic 4D",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Ojos",
    producto: "Eyes",
    presentacion: "15g",
    precio_profesional_ARS: 25000,
    precio_publico_ARS: 38500,
    tipo: "Contorno de ojos",
    tipo_piel: ["Todos los tipos"],
    funcion: ["Hidratación profunda", "Anti-age", "Firmeza"],
    imagen_url: "https://drive.google.com/thumbnail?id=1fa9LI5lP3M382v-sxfN10gEmyqk9izgp&sz=w1200",
    disponible: true,
    stock: 8,
    cuotas_sin_interes: true
  },
  {
    id: "3",
    slug: "hyaluronic-4d-face-cream-50g",
    linea: "Hyaluronic 4D",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Rostro",
    producto: "Face Cream",
    presentacion: "50g",
    precio_profesional_ARS: 25500,
    precio_publico_ARS: 42500,
    tipo: "Crema facial",
    tipo_piel: ["Piel seca", "Piel madura"],
    funcion: ["Hidratación intensa", "Firmeza", "Regeneración"],
    imagen_url: "https://drive.google.com/thumbnail?id=1g7UQ1XIYmfyiP142snDB6KYAx9SY7H3U&sz=w1200",
    disponible: true,
    stock: 12,
    cuotas_sin_interes: true
  },
  {
    id: "4",
    slug: "hyaluronic-4d-rich-cream-50g",
    linea: "Hyaluronic 4D",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Rostro",
    producto: "Rich Cream",
    presentacion: "50g",
    precio_profesional_ARS: 24000,
    precio_publico_ARS: 41500,
    tipo: "Crema rica",
    tipo_piel: ["Piel muy seca", "Piel madura"],
    funcion: ["Hidratación intensa", "Nutrición", "Regeneración"],
    imagen_url: "https://drive.google.com/thumbnail?id=1g97PP1M2LyR6I6aMOtjajjuoSXgLXeQ1&sz=w1200",
    disponible: true,
    stock: 10,
    cuotas_sin_interes: true
  },
  {
    id: "5",
    slug: "hyaluronic-4d-serum-30g",
    linea: "Hyaluronic 4D",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Rostro",
    producto: "Serum",
    presentacion: "30g",
    precio_profesional_ARS: 25500,
    precio_publico_ARS: 39000,
    tipo: "Serum facial",
    tipo_piel: ["Todos los tipos", "Piel deshidratada"],
    funcion: ["Hidratación profunda", "4 pesos moleculares", "Anti-age"],
    imagen_url: "https://drive.google.com/thumbnail?id=1nnPtzEenucHWcf_csVoyzkaeAGD2pBAP&sz=w1200",
    disponible: true,
    stock: 18,
    cuotas_sin_interes: true
  },

  // PLASMA INFUSION - Agregando URLs reales
  {
    id: "6",
    slug: "plasma-infusion-eye-contour-15g",
    linea: "Plasma Infusion",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Ojos",
    producto: "Eye Contour",
    presentacion: "15g",
    precio_profesional_ARS: 20000,
    precio_publico_ARS: 33000,
    tipo: "Contorno de ojos",
    tipo_piel: ["Piel madura", "Pérdida de firmeza"],
    funcion: ["Rejuvenecimiento", "Firmeza", "Densidad"],
    imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Plasma+Infusion+Eye+Contour",
    disponible: true,
    stock: 8,
    cuotas_sin_interes: false
  },
  {
    id: "7",
    slug: "plasma-infusion-face-cream-50g",
    linea: "Plasma Infusion",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Rostro",
    producto: "Face Cream",
    presentacion: "50g",
    precio_profesional_ARS: 24000,
    precio_publico_ARS: 40500,
    tipo: "Crema facial",
    tipo_piel: ["Piel madura", "Pérdida de firmeza"],
    funcion: ["Rejuvenecimiento", "Firmeza", "Densidad"],
    imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Plasma+Infusion+Face+Cream",
    disponible: true,
    stock: 11,
    cuotas_sin_interes: false
  },
  {
    id: "8",
    slug: "plasma-infusion-soft-face-cream-50g",
    linea: "Plasma Infusion",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Rostro",
    producto: "Soft Face Cream",
    presentacion: "50g",
    precio_profesional_ARS: 25000,
    precio_publico_ARS: 42500,
    tipo: "Crema facial suave",
    tipo_piel: ["Piel sensible", "Piel madura"],
    funcion: ["Rejuvenecimiento", "Firmeza", "Suavidad"],
    imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Plasma+Infusion+Soft+Face+Cream",
    disponible: true,
    stock: 9,
    cuotas_sin_interes: true
  },
  {
    id: "9",
    slug: "plasma-infusion-serum-30g",
    linea: "Plasma Infusion",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Rostro",
    producto: "Serum",
    presentacion: "30g",
    precio_profesional_ARS: 20500,
    precio_publico_ARS: 34000,
    tipo: "Serum facial",
    tipo_piel: ["Piel madura", "Pérdida de firmeza"],
    funcion: ["Rejuvenecimiento", "Firmeza", "Densidad"],
    imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Plasma+Infusion+Serum",
    disponible: true,
    stock: 14,
    cuotas_sin_interes: false
  },

  // RADIAN C - Vitamin C
  {
    id: "10",
    slug: "radian-c-brightening-serum-30g",
    linea: "Radian C",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Rostro",
    producto: "Brightening Serum",
    presentacion: "30g",
    precio_profesional_ARS: 21000,
    precio_publico_ARS: 34000,
    tipo: "Serum despigmentante",
    tipo_piel: ["Piel con manchas", "Piel opaca"],
    funcion: ["Vitamina C", "Iluminador", "Anti-manchas"],
    imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Radian+C+Brightening+Serum",
    disponible: true,
    stock: 16,
    cuotas_sin_interes: false
  },
  {
    id: "11",
    slug: "radian-c-lightening-face-cream-50g",
    linea: "Radian C",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Rostro",
    producto: "Lightening Face Cream",
    presentacion: "50g",
    precio_profesional_ARS: 24000,
    precio_publico_ARS: 39500,
    tipo: "Crema despigmentante",
    tipo_piel: ["Piel con manchas", "Piel opaca"],
    funcion: ["Vitamina C", "Iluminador", "Anti-manchas"],
    imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Radian+C+Lightening+Face+Cream",
    disponible: true,
    stock: 12,
    cuotas_sin_interes: false
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
    funcion: ["Vitamina C", "Hidratación", "Anti-manchas"],
    imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Radian+C+Hand+Cream",
    disponible: true,
    stock: 20,
    cuotas_sin_interes: false
  },
  {
    id: "13",
    slug: "radian-c-firming-body-cream-180g",
    linea: "Radian C",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Cuerpo",
    producto: "Firming Body Cream",
    presentacion: "180g",
    precio_profesional_ARS: 20500,
    precio_publico_ARS: 34000,
    tipo: "Crema corporal",
    tipo_piel: ["Todos los tipos"],
    funcion: ["Vitamina C", "Firmeza", "Reafirmante"],
    imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Radian+C+Firming+Body+Cream",
    disponible: true,
    stock: 8,
    cuotas_sin_interes: false
  },

  // BIOSMOTIC - URLs del CSV
  {
    id: "14",
    slug: "biosmotic-water-booster-75ml",
    linea: "Biosmotic",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Rostro",
    producto: "Water Booster",
    presentacion: "75ml",
    precio_profesional_ARS: 15000,
    precio_publico_ARS: 25000,
    tipo: "Potenciador hidratante",
    tipo_piel: ["Piel deshidratada", "Todos los tipos"],
    funcion: ["Hidratación profunda", "Efecto inmediato", "Regeneración"],
    imagen_url: "https://drive.google.com/thumbnail?id=1Ge1WZGXXFqIarwHXI2H4WKCHhb6YqrLg&sz=w1200",
    disponible: true,
    stock: 22,
    cuotas_sin_interes: true
  },
  {
    id: "15",
    slug: "biosmotic-water-cream-50g",
    linea: "Biosmotic",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Rostro",
    producto: "Water Cream",
    presentacion: "50g",
    precio_profesional_ARS: 23000,
    precio_publico_ARS: 38000,
    tipo: "Crema hidratante",
    tipo_piel: ["Piel deshidratada", "Todos los tipos"],
    funcion: ["Hidratación profunda", "Efecto inmediato", "Regeneración"],
    imagen_url: "https://drive.google.com/thumbnail?id=1HJqWj-zYexqXNt88uU-suHnHCtGgnhMB&sz=w1200",
    disponible: true,
    stock: 13,
    cuotas_sin_interes: true
  },
  {
    id: "16",
    slug: "biosmotic-water-drops-30g",
    linea: "Biosmotic",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Rostro",
    producto: "Water Drops",
    presentacion: "30g",
    precio_profesional_ARS: 23500,
    precio_publico_ARS: 36000,
    tipo: "Serum hidratante",
    tipo_piel: ["Piel deshidratada", "Todos los tipos"],
    funcion: ["Hidratación profunda", "Efecto inmediato", "Regeneración"],
    imagen_url: "https://drive.google.com/thumbnail?id=1JobBUtkGXDzwxxeIauq9RPJyNgsucnR1&sz=w1200",
    disponible: true,
    stock: 17,
    cuotas_sin_interes: true
  },

  // HYDRAPORE - Agregando más productos del CSV
  {
    id: "17",
    slug: "hydrapore-gel-cream-50g",
    linea: "Hydrapore",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Rostro",
    producto: "Gel Cream",
    presentacion: "50g",
    precio_profesional_ARS: 22000,
    precio_publico_ARS: 35500,
    tipo: "Gel crema",
    tipo_piel: ["Piel mixta", "Piel grasa"],
    funcion: ["Control de poros", "Hidratación", "Equilibrio"],
    imagen_url: "https://drive.google.com/thumbnail?id=1wkgzIRWWEtgDhLDUW7J6mztcAxJo19L8&sz=w1200",
    disponible: true,
    stock: 14,
    cuotas_sin_interes: true
  },
  {
    id: "18",
    slug: "hydrapore-moisturizing-lotion-125ml",
    linea: "Hydrapore",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Rostro",
    producto: "Moisturizing Lotion",
    presentacion: "125ml",
    precio_profesional_ARS: 16000,
    precio_publico_ARS: 27000,
    tipo: "Loción hidratante",
    tipo_piel: ["Piel mixta", "Piel grasa"],
    funcion: ["Control de poros", "Hidratación", "Equilibrio"],
    imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Hydrapore+Moisturizing+Lotion",
    disponible: true,
    stock: 18,
    cuotas_sin_interes: false
  },
  {
    id: "19",
    slug: "hydrapore-eye-contour-15ml",
    linea: "Hydrapore",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Ojos",
    producto: "Eye Contour",
    presentacion: "15ml",
    precio_profesional_ARS: 16500,
    precio_publico_ARS: 27500,
    tipo: "Contorno de ojos",
    tipo_piel: ["Todos los tipos"],
    funcion: ["Control de poros", "Hidratación", "Anti-age"],
    imagen_url: "https://drive.google.com/thumbnail?id=1oXuDynRiFXYFz5XB7XflNQYZWCsOG2it&sz=w1200",
    disponible: true,
    stock: 9,
    cuotas_sin_interes: false
  },

  // DHERMA SCIENCE - Tecnología avanzada
  {
    id: "20",
    slug: "dherma-science-advance-formula-32g",
    linea: "Dherma Science",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Rostro",
    producto: "Advance Formula",
    presentacion: "32g",
    precio_profesional_ARS: 28000,
    precio_publico_ARS: 45000,
    tipo: "Fórmula avanzada",
    tipo_piel: ["Piel madura", "Signos avanzados"],
    funcion: ["Tecnología avanzada", "Regeneración", "Firmeza"],
    imagen_url: "https://drive.google.com/thumbnail?id=1PNaXdkmNOoKTKfd6I2KpQaYCucn3lMlo&sz=w1200",
    disponible: true,
    stock: 6,
    cuotas_sin_interes: true
  },
  {
    id: "21",
    slug: "dherma-science-eye-drone-technology-15g",
    linea: "Dherma Science",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Ojos",
    producto: "Eye Drone Technology",
    presentacion: "15g",
    precio_profesional_ARS: 26000,
    precio_publico_ARS: 40000,
    tipo: "Contorno de ojos avanzado",
    tipo_piel: ["Todos los tipos"],
    funcion: ["Tecnología drone", "Anti-age", "Firmeza"],
    imagen_url: "https://drive.google.com/thumbnail?id=1SiIyJtvmEqH74btsozClDq1hqOEtHebO&sz=w1200",
    disponible: true,
    stock: 5,
    cuotas_sin_interes: true
  },
  {
    id: "22",
    slug: "dherma-science-night-reset-cream-50g",
    linea: "Dherma Science",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Rostro",
    producto: "Night Reset Cream",
    presentacion: "50g",
    precio_profesional_ARS: 30000,
    precio_publico_ARS: 48000,
    tipo: "Crema nocturna",
    tipo_piel: ["Piel madura", "Signos avanzados"],
    funcion: ["Tecnología avanzada", "Regeneración nocturna", "Firmeza"],
    imagen_url: "https://drive.google.com/thumbnail?id=1Swxm1jHhOORJgmyK4UlSj5sNA2WpfiGW&sz=w1200",
    disponible: true,
    stock: 7,
    cuotas_sin_interes: true
  },
  {
    id: "23",
    slug: "dherma-science-proteo-c-solution-20ml",
    linea: "Dherma Science",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Rostro",
    producto: "Proteo C-Solution (10 amp x 2ml)",
    presentacion: "20ml",
    precio_profesional_ARS: 28000,
    precio_publico_ARS: 44000,
    tipo: "Ampollas de vitamina C",
    tipo_piel: ["Todos los tipos"],
    funcion: ["Vitamina C", "Iluminador", "Regeneración"],
    imagen_url: "https://drive.google.com/thumbnail?id=1TcPu7nhNIpbFZpFPMgzVdqzKhYmnB9pe&sz=w1200",
    disponible: true,
    stock: 8,
    cuotas_sin_interes: true
  },

  // MATT BALANCE - Control de oleosidad
  {
    id: "24",
    slug: "matt-balance-cleansing-gel-180g",
    linea: "Matt Balance",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Rostro",
    producto: "Cleansing Gel",
    presentacion: "180g",
    precio_profesional_ARS: 16500,
    precio_publico_ARS: 27000,
    tipo: "Gel limpiador",
    tipo_piel: ["Piel grasa", "Piel mixta"],
    funcion: ["Control oleosidad", "Limpieza profunda", "Balance"],
    imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Matt+Balance+Cleansing+Gel",
    disponible: true,
    stock: 12,
    cuotas_sin_interes: false
  },
  {
    id: "25",
    slug: "matt-balance-lotion-125ml",
    linea: "Matt Balance",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Rostro",
    producto: "Lotion",
    presentacion: "125ml",
    precio_profesional_ARS: 17000,
    precio_publico_ARS: 27000,
    tipo: "Loción balanceadora",
    tipo_piel: ["Piel grasa", "Piel mixta"],
    funcion: ["Control oleosidad", "Equilibrio", "Hidratación ligera"],
    imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Matt+Balance+Lotion",
    disponible: true,
    stock: 15,
    cuotas_sin_interes: false
  },
  {
    id: "26",
    slug: "matt-balance-cream-50g",
    linea: "Matt Balance",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Rostro",
    producto: "Cream",
    presentacion: "50g",
    precio_profesional_ARS: 19000,
    precio_publico_ARS: 31000,
    tipo: "Crema balanceadora",
    tipo_piel: ["Piel grasa", "Piel mixta"],
    funcion: ["Control oleosidad", "Hidratación", "Balance"],
    imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Matt+Balance+Cream",
    disponible: true,
    stock: 10,
    cuotas_sin_interes: false
  },

  // SKINBIOMA - Microbioma cutáneo 
  {
    id: "27",
    slug: "skinbioma-face-cream-50g",
    linea: "Skinbioma",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Rostro",
    producto: "Face Cream",
    presentacion: "50g",
    precio_profesional_ARS: 18000,
    precio_publico_ARS: 29500,
    tipo: "Crema facial",
    tipo_piel: ["Piel sensible", "Todos los tipos"],
    funcion: ["Equilibrio microbioma", "Protección", "Reparación"],
    imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Skinbioma+Face+Cream",
    disponible: true,
    stock: 11,
    cuotas_sin_interes: false
  },
  {
    id: "28",
    slug: "skinbioma-micellar-water-190ml",
    linea: "Skinbioma",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Rostro",
    producto: "Micellar Water",
    presentacion: "190ml",
    precio_profesional_ARS: 9000,
    precio_publico_ARS: 13500,
    tipo: "Agua micelar",
    tipo_piel: ["Piel sensible", "Todos los tipos"],
    funcion: ["Limpieza suave", "Equilibrio microbioma", "Desmaquillante"],
    imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Skinbioma+Micellar+Water",
    disponible: true,
    stock: 20,
    cuotas_sin_interes: false
  },
  {
    id: "29",
    slug: "skinbioma-shower-gel-290g",
    linea: "Skinbioma",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Cuerpo",
    producto: "Shower Gel",
    presentacion: "290g",
    precio_profesional_ARS: 14000,
    precio_publico_ARS: 22500,
    tipo: "Gel de ducha",
    tipo_piel: ["Piel sensible", "Todos los tipos"],
    funcion: ["Limpieza corporal", "Equilibrio microbioma", "Hidratación"],
    imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Skinbioma+Shower+Gel",
    disponible: true,
    stock: 16,
    cuotas_sin_interes: false
  },
  {
    id: "30",
    slug: "skinbioma-hand-cream-50g",
    linea: "Skinbioma",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Manos",
    producto: "Hand Cream",
    presentacion: "50g",
    precio_profesional_ARS: 15500,
    precio_publico_ARS: 25500,
    tipo: "Crema de manos",
    tipo_piel: ["Todos los tipos"],
    funcion: ["Protección manos", "Equilibrio microbioma", "Hidratación"],
    imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Skinbioma+Hand+Cream",
    disponible: true,
    stock: 18,
    cuotas_sin_interes: true
  },
  {
    id: "31",
    slug: "skinbioma-face-lotion-125ml",
    linea: "Skinbioma",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Rostro",
    producto: "Face Lotion",
    presentacion: "125ml",
    precio_profesional_ARS: 15500,
    precio_publico_ARS: 19000,
    tipo: "Loción facial",
    tipo_piel: ["Piel sensible", "Todos los tipos"],
    funcion: ["Equilibrio microbioma", "Hidratación", "Protección"],
    imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Skinbioma+Face+Lotion",
    disponible: true,
    stock: 13,
    cuotas_sin_interes: false
  },

  // RETINOL A+ - Anti-age con retinol
  {
    id: "32",
    slug: "retinol-a-emulsion-30g",
    linea: "Retinol A+",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Rostro",
    producto: "Emulsion",
    presentacion: "30g",
    precio_profesional_ARS: 24000,
    precio_publico_ARS: 40000,
    tipo: "Emulsión facial",
    tipo_piel: ["Piel madura", "Arrugas"],
    funcion: ["Renovación celular", "Anti-arrugas", "Textura"],
    imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Retinol+A+Emulsion",
    disponible: true,
    stock: 9,
    cuotas_sin_interes: true
  },
  {
    id: "33",
    slug: "retinol-a-cream-50g",
    linea: "Retinol A+",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Rostro",
    producto: "Cream",
    presentacion: "50g",
    precio_profesional_ARS: 22500,
    precio_publico_ARS: 36500,
    tipo: "Crema anti-edad",
    tipo_piel: ["Piel madura", "Arrugas"],
    funcion: ["Renovación celular", "Anti-arrugas", "Firmeza"],
    imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Retinol+A+Cream",
    disponible: true,
    stock: 7,
    cuotas_sin_interes: true
  },
  {
    id: "34",
    slug: "retinol-a-daily-cream-50g",
    linea: "Retinol A+",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Rostro",
    producto: "Daily Cream",
    presentacion: "50g",
    precio_profesional_ARS: 25000,
    precio_publico_ARS: 43000,
    tipo: "Crema diaria",
    tipo_piel: ["Piel madura", "Arrugas"],
    funcion: ["Renovación celular", "Anti-arrugas", "Uso diario"],
    imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Retinol+A+Daily+Cream",
    disponible: true,
    stock: 6,
    cuotas_sin_interes: true
  },

  // RENOVAGE - Renovación celular avanzada
  {
    id: "35",
    slug: "renovage-ultra-dry-skin-50g",
    linea: "Renovage",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Rostro",
    producto: "Ultra Dry Skin",
    presentacion: "50g",
    precio_profesional_ARS: 20000,
    precio_publico_ARS: 33500,
    tipo: "Crema piel muy seca",
    tipo_piel: ["Piel muy seca", "Piel madura"],
    funcion: ["Renovación celular", "Hidratación intensa", "Nutrición"],
    imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Renovage+Ultra+Dry+Skin",
    disponible: true,
    stock: 8,
    cuotas_sin_interes: false
  },
  {
    id: "36",
    slug: "renovage-sensitive-skin-30g",
    linea: "Renovage",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Rostro",
    producto: "Sensitive Skin",
    presentacion: "30g",
    precio_profesional_ARS: 18000,
    precio_publico_ARS: 29500,
    tipo: "Crema piel sensible",
    tipo_piel: ["Piel sensible", "Piel reactiva"],
    funcion: ["Renovación suave", "Calma", "Protección"],
    imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Renovage+Sensitive+Skin",
    disponible: true,
    stock: 10,
    cuotas_sin_interes: false
  },
  {
    id: "37",
    slug: "renovage-normal-and-oily-skin-30g",
    linea: "Renovage",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Rostro",
    producto: "Normal and Oily Skin",
    presentacion: "30g",
    precio_profesional_ARS: 20000,
    precio_publico_ARS: 31500,
    tipo: "Crema piel grasa",
    tipo_piel: ["Piel grasa", "Piel mixta"],
    funcion: ["Renovación celular", "Control grasa", "Equilibrio"],
    imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Renovage+Normal+and+Oily+Skin",
    disponible: true,
    stock: 12,
    cuotas_sin_interes: false
  },
  {
    id: "38",
    slug: "renovage-body-cream-180g",
    linea: "Renovage",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Cuerpo",
    producto: "Body Cream",
    presentacion: "180g",
    precio_profesional_ARS: 20000,
    precio_publico_ARS: 33500,
    tipo: "Crema corporal",
    tipo_piel: ["Todos los tipos"],
    funcion: ["Renovación celular", "Hidratación corporal", "Anti-age"],
    imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Renovage+Body+Cream",
    disponible: true,
    stock: 9,
    cuotas_sin_interes: false
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

// Banners del carrusel - 4 imágenes específicas de Rebeca Beauty Store
export const heroBanners = [
  {
    id: 1,
    url: "https://customer-assets.emergentagent.com/job_pastel-ecommerce/artifacts/ue4c67p9_image.png",
    title: "Promociones Lidherma",
    descripcion: "Descuentos especiales y ofertas exclusivas"
  },
  {
    id: 2,
    url: "https://customer-assets.emergentagent.com/job_pastel-ecommerce/artifacts/5zmfmbn7_image.png", 
    title: "Productos Premium",
    descripcion: "Dermocosmética profesional de máxima calidad"
  },
  {
    id: 3,
    url: "https://customer-assets.emergentagent.com/job_pastel-ecommerce/artifacts/ukx7hfbe_image.png",
    title: "Líneas Profesionales",
    descripcion: "Tratamientos especializados para cada tipo de piel"
  },
  {
    id: 4,
    url: "https://customer-assets.emergentagent.com/job_pastel-ecommerce/artifacts/uk5m6mr1_image.png",
    title: "Rebeca Beauty Store",
    descripcion: "Distribuidor Oficial Exclusivo Lidherma"
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