// BATCH 1 - CORRECCIONES SISTEMÁTICAS DE PLACEHOLDERS
// Lista de productos verificados del sitio oficial shop.lidherma.com que necesitan corrección

const corrections = [
  // AQUA SHOT PRODUCTS - Verificados en sitio oficial
  {
    search: 'imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Aqua+Shot+Body+Cream",',
    replace: 'imagen_url: "https://sellercenterlidhermaarg.vtexassets.com/arquivos/ids/156142-800-auto?v=638385224671130000&width=800&height=auto&aspect=true",'
  },
  {
    search: 'imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Aqua+Shot+Face+Cream",',
    replace: 'imagen_url: "https://sellercenterlidhermaarg.vtexassets.com/arquivos/ids/156151-800-auto?v=638385924715130000&width=800&height=auto&aspect=true",'
  },
  
  // VITA SHIELD PRODUCTS - Verificados en sitio oficial  
  {
    search: 'imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Vita+Shield+Ageless+Complex",',
    replace: 'imagen_url: "https://sellercenterlidhermaarg.vtexassets.com/arquivos/ids/156225-800-auto?v=638386080040030000&width=800&height=auto&aspect=true",'
  },
  {
    search: 'imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Vita+Shield+Hydra+Complex",',
    replace: 'imagen_url: "https://sellercenterlidhermaarg.vtexassets.com/arquivos/ids/156228-800-auto?v=638386081316670000&width=800&height=auto&aspect=true",'
  },

  // SKINBIOMA PRODUCTS - Verificados en sitio oficial
  {
    search: 'imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Skinbioma+Face+Cream",',
    replace: 'imagen_url: "https://sellercenterlidhermaarg.vtexassets.com/arquivos/ids/156526-800-auto?v=638887997063630000&width=800&height=auto&aspect=true",'
  },

  // FORMULA PRODUCTS - Verificados en sitio oficial
  {
    search: 'imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Fórmula+Hidrosomas",',
    replace: 'imagen_url: "https://sellercenterlidhermaarg.vtexassets.com/arquivos/ids/156315-800-auto?v=638386823058430000&width=800&height=auto&aspect=true",'
  },
  {
    search: 'imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Fórmula+Vitamina+B12",',
    replace: 'imagen_url: "https://sellercenterlidhermaarg.vtexassets.com/arquivos/ids/156322-800-auto?v=638386824480500000&width=800&height=auto&aspect=true",'
  }
];

console.log('BATCH 1 corrections ready:', corrections.length);
module.exports = corrections;