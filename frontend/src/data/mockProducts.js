// Mock data based on LIDHERMA product structure
export const mockProducts = [
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
    imagen_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168816/Serum-Hyaluronic-4D-30ml-Lidherma.jpg",
    thumbnail_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168816-300-300/Serum-Hyaluronic-4D-30ml-Lidherma.jpg",
    disponible: true
  },
  {
    id: "2", 
    slug: "mimika-base-fluida-beige-30ml",
    linea: "Mímika",
    categoria_L1: "Maquillaje",
    categoria_L2: "Bases",
    producto: "Base Fluida Beige",
    presentacion: "30ml",
    precio_profesional_ARS: 22400,
    precio_publico_ARS: 28000,
    tipo: "Base",
    imagen_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168944/Base-Fluida-Beige-30ml-Mimika-Lidherma.jpg",
    thumbnail_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168944-300-300/Base-Fluida-Beige-30ml-Mimika-Lidherma.jpg",
    disponible: true
  },
  {
    id: "3",
    slug: "dherma-sun-fps-60-50ml", 
    linea: "Dherma Sun",
    categoria_L1: "Solares",
    categoria_L2: "Protección solar",
    producto: "Protector Solar FPS 60",
    presentacion: "50ml",
    precio_profesional_ARS: 31200,
    precio_publico_ARS: 39000,
    tipo: "Protector",
    imagen_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168722/Protector-Solar-FPS-60-50ml-Dherma-Sun-Lidherma.jpg",
    thumbnail_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168722-300-300/Protector-Solar-FPS-60-50ml-Dherma-Sun-Lidherma.jpg",
    disponible: true
  },
  {
    id: "4",
    slug: "retinol-a-crema-regenerante-50ml",
    linea: "Retinol A+",
    categoria_L1: "Cuidado de la piel", 
    categoria_L2: "Anti-age",
    producto: "Crema Regenerante Retinol A+",
    presentacion: "50ml",
    precio_profesional_ARS: 42300,
    precio_publico_ARS: 52900,
    tipo: "Crema",
    imagen_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168855/Crema-Regenerante-Retinol-A-50ml-Lidherma.jpg",
    thumbnail_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168855-300-300/Crema-Regenerante-Retinol-A-50ml-Lidherma.jpg",
    disponible: true
  },
  {
    id: "5",
    slug: "niacinamide-gel-purificante-30ml",
    linea: "Niacinamide+",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Purificación", 
    producto: "Gel Purificante Niacinamide+",
    presentacion: "30ml",
    precio_profesional_ARS: 25600,
    precio_publico_ARS: 32000,
    tipo: "Gel",
    imagen_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168788/Gel-Purificante-Niacinamide-30ml-Lidherma.jpg",
    thumbnail_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168788-300-300/Gel-Purificante-Niacinamide-30ml-Lidherma.jpg",
    disponible: true
  },
  {
    id: "6",
    slug: "aqua-shot-hidrogel-intensivo-50ml",
    linea: "Aqua Shot",
    categoria_L1: "Cuidado de la piel",
    categoria_L2: "Hidratación",
    producto: "Hidrogel Intensivo",
    presentacion: "50ml", 
    precio_profesional_ARS: 33800,
    precio_publico_ARS: 42250,
    tipo: "Gel",
    imagen_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168699/Hidrogel-Intensivo-Aqua-Shot-50ml-Lidherma.jpg",
    thumbnail_url: "https://skinhouselidhermaarg.vtexassets.com/arquivos/ids/168699-300-300/Hidrogel-Intensivo-Aqua-Shot-50ml-Lidherma.jpg",
    disponible: true
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