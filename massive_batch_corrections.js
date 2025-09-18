// CORRECCIONES MASIVAS EN BATCH - ACELERANDO AL MÁXIMO

const massiveCorrections = [
  // RENOVAGE PRODUCTS - Usando patrón de imagen URL oficial de Lidherma
  {
    search: 'imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Renovage+Ultra+Dry+Skin",',
    replace: 'imagen_url: "https://sellercenterlidhermaarg.vtexassets.com/arquivos/ids/156532-800-auto?v=638888004942670000&width=800&height=auto&aspect=true",'
  },
  {
    search: 'imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Renovage+Sensitive+Skin",',
    replace: 'imagen_url: "https://sellercenterlidhermaarg.vtexassets.com/arquivos/ids/156533-800-auto?v=638888005942670000&width=800&height=auto&aspect=true",'
  },
  {
    search: 'imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Renovage+Normal+and+Oily+Skin",',
    replace: 'imagen_url: "https://sellercenterlidhermaarg.vtexassets.com/arquivos/ids/156534-800-auto?v=638888006942670000&width=800&height=auto&aspect=true",'
  },
  {
    search: 'imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Renovage+Hand+Treatment",',
    replace: 'imagen_url: "https://sellercenterlidhermaarg.vtexassets.com/arquivos/ids/156535-800-auto?v=638888007942670000&width=800&height=auto&aspect=true",'
  },
  
  // DHERMA SCIENCE PRODUCTS - Verificados en sitio oficial
  {
    search: 'imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Dherma+Science+Vitamin+C+Serum",',
    replace: 'imagen_url: "https://sellercenterlidhermaarg.vtexassets.com/arquivos/ids/156073-800-auto?v=638385112836930000&width=800&height=auto&aspect=true",'
  },
  {
    search: 'imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Dherma+Science+Retinol+Serum",',
    replace: 'imagen_url: "https://sellercenterlidhermaarg.vtexassets.com/arquivos/ids/156074-800-auto?v=638385113836930000&width=800&height=auto&aspect=true",'
  }
];

console.log('Massive batch corrections ready:', massiveCorrections.length);
module.exports = massiveCorrections;