// Script to generate complete product data from CSV
const csvData = `linea,categoria_L1,categoria_L2,producto,presentacion,precio_profesional_ARS,precio_publico_ARS,tipo,slug,imagen_url,thumbnail_url
Acnex Depure,Cuidado de la piel,Tratamiento del acné,Control Cover,2g,13000,21000,Maquillaje corrector,acnex-depure-control-cover,https://skinhouselidhermaarg.vtexassets.com/arquivos/acnex-depure-control-cover.jpg,https://skinhouselidhermaarg.vtexassets.com/arquivos/acnex-depure-control-cover.jpg
Acnex Depure,Cuidado de la piel,Limpieza,Intensive Cleanser,100g,14500,24000,Limpiador facial,acnex-depure-intensive-cleanser,https://skinhouselidhermaarg.vtexassets.com/arquivos/acnex-depure-intensive-cleanser.jpg,https://skinhouselidhermaarg.vtexassets.com/arquivos/acnex-depure-intensive-cleanser.jpg
Acnex Depure,Cuidado de la piel,Tratamiento del acné,Control Treatment,50g,18500,30000,Tratamiento facial,acnex-depure-control-treatment,https://skinhouselidhermaarg.vtexassets.com/arquivos/acnex-depure-control-treatment.jpg,https://skinhouselidhermaarg.vtexassets.com/arquivos/acnex-depure-control-treatment.jpg
Acnex Depure,Cuidado de la piel,Tratamiento del acné,Control Topic,15g,12000,20000,Tratamiento localizado,acnex-depure-control-topic,https://skinhouselidhermaarg.vtexassets.com/arquivos/acnex-depure-control-topic.jpg,https://skinhouselidhermaarg.vtexassets.com/arquivos/acnex-depure-control-topic.jpg
Activos Concentrados,Cuidado de la piel,Tratamiento intensivo,Argireline Amplied,30ml,20000,33500,Activo concentrado,activos-concentrados-argireline-amplied,https://skinhouselidhermaarg.vtexassets.com/arquivos/activos-concentrados-argireline-amplied.jpg,https://skinhouselidhermaarg.vtexassets.com/arquivos/activos-concentrados-argireline-amplied.jpg
Activos Concentrados,Cuidado de la piel,Tratamiento intensivo,Bioceramidas,30ml,15000,25000,Activo concentrado,activos-concentrados-bioceramidas,https://skinhouselidhermaarg.vtexassets.com/arquivos/activos-concentrados-bioceramidas.jpg,https://skinhouselidhermaarg.vtexassets.com/arquivos/activos-concentrados-bioceramidas.jpg`;

// Helper function to determine skin type based on product line and type
function getSkinType(linea, tipo, categoria_L2) {
  if (linea.includes('Acnex') || tipo.includes('acné') || categoria_L2.includes('acné')) {
    return ["Piel acneica", "Piel grasa"];
  }
  if (linea.includes('Hyaluronic') || tipo.includes('hidrat') || categoria_L2.includes('Hidratación')) {
    return ["Piel deshidratada", "Todos los tipos"];
  }
  if (linea.includes('Matt Balance') || tipo.includes('matif') || categoria_L2.includes('grasa')) {
    return ["Piel grasa", "Piel mixta"];
  }
  if (linea.includes('Silver Age') || categoria_L2.includes('maduro')) {
    return ["Piel madura", "+60 años"];
  }
  if (linea.includes('Renovage') || linea.includes('Retinol')) {
    return ["Piel madura", "Arrugas"];
  }
  if (tipo.includes('solar')) {
    return ["Todos los tipos"];
  }
  if (linea.includes('Mímika')) {
    return ["Todos los tipos"];
  }
  return ["Todos los tipos"];
}

// Helper function to determine functions based on product line and type
function getFunctions(linea, tipo, categoria_L2) {
  const functions = [];
  
  if (linea.includes('Acnex') || tipo.includes('acné')) {
    functions.push("Anti-acné", "Purificante");
  }
  if (linea.includes('Hyaluronic') || tipo.includes('hidrat')) {
    functions.push("Hidratación profunda", "Regeneración");
  }
  if (linea.includes('Radian C') || tipo.includes('despigment')) {
    functions.push("Vitamina C", "Iluminador", "Anti-manchas");
  }
  if (linea.includes('Renovage') || linea.includes('Retinol') || linea.includes('Silver Age')) {
    functions.push("Anti-age", "Renovación celular", "Firmeza");
  }
  if (tipo.includes('solar') || tipo.includes('SPF')) {
    functions.push("Protección solar", "UV");
  }
  if (linea.includes('Mímika')) {
    functions.push("Cobertura", "Hidratación");
  }
  if (tipo.includes('limpia') || categoria_L2.includes('Limpieza')) {
    functions.push("Limpieza profunda");
  }
  if (categoria_L2.includes('Exfoliación')) {
    functions.push("Exfoliación", "Renovación");
  }
  
  return functions.length > 0 ? functions : ["Cuidado de la piel"];
}

// Generate random stock between 5-25
function getRandomStock() {
  return Math.floor(Math.random() * 21) + 5;
}

// Check if product has installments without interest (price > 25000)
function hasInstallments(price) {
  return price > 25000;
}

// Parse CSV and generate JavaScript array
const lines = csvData.trim().split('\n');
const headers = lines[0].split(',');

const products = [];
for (let i = 1; i < lines.length; i++) {
  const values = lines[i].split(',');
  const product = {};
  
  headers.forEach((header, index) => {
    product[header] = values[index];
  });
  
  // Convert to proper format
  const formattedProduct = {
    id: i.toString(),
    slug: product.slug,
    linea: product.linea,
    categoria_L1: product.categoria_L1,
    categoria_L2: product.categoria_L2,
    producto: product.producto,
    presentacion: product.presentacion,
    precio_profesional_ARS: parseInt(product.precio_profesional_ARS),
    precio_publico_ARS: product.precio_publico_ARS ? parseInt(product.precio_publico_ARS) : null,
    tipo: product.tipo,
    tipo_piel: getSkinType(product.linea, product.tipo, product.categoria_L2),
    funcion: getFunctions(product.linea, product.tipo, product.categoria_L2),
    imagen_url: product.imagen_url,
    disponible: true,
    stock: getRandomStock(),
    cuotas_sin_interes: hasInstallments(parseInt(product.precio_profesional_ARS))
  };
  
  products.push(formattedProduct);
}

console.log('export const mockProducts = ' + JSON.stringify(products, null, 2) + ';');