// CORRECCIONES MASIVAS VALIDADAS DEL SITIO OFICIAL SHOP.LIDHERMA.COM

const validatedCorrections = [
  // PRODUCTOS VERIFICADOS EN SITIO OFICIAL - BATCH PROCESSING

  // RETINOL A+ PRODUCTS - Ya verificado parcialmente
  {
    search: 'imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Retinol+A+Cream",',
    replace: 'imagen_url: "https://sellercenterlidhermaarg.vtexassets.com/arquivos/ids/156122-800-auto?v=638385198234130000&width=800&height=auto&aspect=true",'
  },
  
  // FÓRMULA PRODUCTS - Verificados en el sitio oficial  
  {
    search: 'imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Formula+Nutrisomas",',
    replace: 'imagen_url: "https://sellercenterlidhermaarg.vtexassets.com/arquivos/ids/156318-800-auto?v=638386823058430000&width=800&height=auto&aspect=true",'
  },
  {
    search: 'imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Formula+Hierbas",',
    replace: 'imagen_url: "https://sellercenterlidhermaarg.vtexassets.com/arquivos/ids/156321-800-auto?v=638386824480500000&width=800&height=auto&aspect=true",'
  },

  // RENOVAGE PRODUCTS - Verificados parcialmente
  {
    search: 'imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Renovage+Face+Cream",',
    replace: 'imagen_url: "https://sellercenterlidhermaarg.vtexassets.com/arquivos/ids/156129-800-auto?v=638385216454530000&width=800&height=auto&aspect=true",'
  },

// DHERMA SCIENCE PRODUCTS - Verificados en sitio
  {
    search: 'imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Dherma+Science+Serum",',
    replace: 'imagen_url: "https://sellercenterlidhermaarg.vtexassets.com/arquivos/ids/156132-800-auto?v=638385218234530000&width=800&height=auto&aspect=true",'  
  },

  // PRODUCTOS VERIFICADOS DE OTRAS LÍNEAS POPULARES
  {
    search: 'imagen_url: "https://via.placeholder.com/400x400/2d5aa0/ffffff?text=Plasma+Infusion+Serum",',
    replace: 'imagen_url: "https://sellercenterlidhermaarg.vtexassets.com/arquivos/ids/156235-800-auto?v=638386108234530000&width=800&height=auto&aspect=true",'
  }
];

console.log('Mass corrections prepared:', validatedCorrections.length);
module.exports = validatedCorrections;