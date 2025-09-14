import React, { useMemo } from 'react';
import { useProducts } from '../contexts/ProductContext';
import ProductCard from '../components/product/ProductCard';
import { Badge } from '../components/ui/badge';

const CategoryPage = ({ category }) => {
  const { allProducts, loading } = useProducts();
  
  const categoryProducts = useMemo(() => {
    return allProducts.filter(product => product.categoria_L1 === category);
  }, [allProducts, category]);

  const getCategoryInfo = (category) => {
    switch (category) {
      case 'Cuidado de la piel':
        return {
          title: 'Cuidado de la Piel',
          description: 'Descubrí la línea completa de productos para el cuidado facial y corporal. Desde hidratación hasta tratamientos anti-age.',
          icon: '🧴',
          color: 'from-blue-50 to-blue-100'
        };
      case 'Maquillaje':
        return {
          title: 'Maquillaje Mímika',
          description: 'Línea completa de maquillaje profesional que cuida tu piel mientras realza tu belleza natural.',
          icon: '💄',
          color: 'from-pink-50 to-pink-100'
        };
      case 'Solares':
        return {
          title: 'Protección Solar',
          description: 'Dherma Sun - Protección avanzada contra rayos UV, luz azul y factores ambientales.',
          icon: '☀️',
          color: 'from-yellow-50 to-yellow-100'
        };
      default:
        return {
          title: category,
          description: 'Productos especializados de LIDHERMA',
          icon: '✨',
          color: 'from-gray-50 to-gray-100'
        };
    }
  };

  const categoryInfo = getCategoryInfo(category);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className={`bg-gradient-to-r ${categoryInfo.color} py-16`}>
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">{categoryInfo.icon}</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{categoryInfo.title}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {categoryInfo.description}
          </p>
          <div className="mt-6">
            <Badge className="bg-[#2d5aa0] text-white text-lg px-4 py-2">
              {categoryProducts.length} productos disponibles
            </Badge>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(12)].map((_, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
                  <div className="aspect-square bg-gray-200"></div>
                  <div className="p-4">
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : categoryProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No hay productos en esta categoría
              </h3>
              <p className="text-gray-600">
                Próximamente agregaremos más productos a esta sección
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;