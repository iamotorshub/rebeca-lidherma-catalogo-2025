import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../contexts/ProductContext';
import ProductCard from '../components/product/ProductCard';
import { Badge } from '../components/ui/badge';

const LinePage = () => {
  const { slug } = useParams();
  const { allProducts, loading } = useProducts();
  
  // Convert slug back to line name
  const lineName = slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  const lineProducts = useMemo(() => {
    return allProducts.filter(product => 
      product.linea.toLowerCase().replace(/\s+/g, '-') === slug
    );
  }, [allProducts, slug]);

  const getLineInfo = (lineName) => {
    const lineDescriptions = {
      'Hyaluronic 4D': {
        description: 'Tecnología de ácido hialurónico de 4 pesos moleculares para hidratación profunda y efecto relleno inmediato.',
        benefits: ['Hidratación profunda', 'Efecto tensor', 'Anti-age', 'Relleno de arrugas']
      },
      'Mimika': {
        description: 'Línea completa de maquillaje profesional que cuida la piel mientras realza la belleza natural.',
        benefits: ['Cobertura natural', 'Larga duración', 'Cuidado de la piel', 'Acabado profesional']
      },
      'Dherma Sun': {
        description: 'Protección solar inteligente con filtros de última generación, vitamina E y protección contra luz azul.',
        benefits: ['Protección UV', 'Anti luz azul', 'Antioxidante', 'Textura liviana']
      },
      'Retinol A+': {
        description: 'Retinol de alta calidad para renovación celular, reducción de arrugas y mejora de la textura de la piel.',
        benefits: ['Renovación celular', 'Anti-arrugas', 'Firmeza', 'Textura mejorada']
      },
      'Niacinamide+': {
        description: 'Niacinamida concentrada para control de oleosidad, minimización de poros y unificación del tono.',
        benefits: ['Control oleosidad', 'Minimiza poros', 'Unifica tono', 'Purificante']
      },
      'Aqua Shot': {
        description: 'Hidratación intensiva con tecnología de liberación gradual para una piel hidratada todo el día.',
        benefits: ['Hidratación 24h', 'Efecto tensor', 'Piel radiante', 'Absorción rápida']
      }
    };

    return lineDescriptions[lineName] || {
      description: `Línea especializada de LIDHERMA con activos de alta performance.`,
      benefits: ['Alta calidad', 'Resultados visibles', 'Uso profesional', 'Tecnología avanzada']
    };
  };

  const lineInfo = getLineInfo(lineName);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mb-8"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
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
          </div>
        </div>
      </div>
    );
  }

  if (lineProducts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Línea no encontrada</h2>
          <p className="text-gray-600 mb-8">
            No pudimos encontrar productos para la línea "{lineName}"
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2d5aa0] to-[#1a4480] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 bg-white bg-opacity-10 rounded-full mb-6">
              <span className="text-4xl font-bold">L</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">{lineName}</h1>
            <p className="text-lg mb-6 opacity-90">
              {lineInfo.description}
            </p>
            <Badge className="bg-white text-[#2d5aa0] text-lg px-4 py-2">
              {lineProducts.length} productos disponibles
            </Badge>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-center mb-6 text-gray-900">
              Beneficios principales
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {lineInfo.benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-[#2d5aa0] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-[#2d5aa0] font-bold text-lg">✓</span>
                  </div>
                  <p className="text-sm text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Productos de la línea {lineName}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lineProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Professional CTA */}
      <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Sos profesional de la estética?
          </h2>
          <p className="text-gray-600 mb-6">
            Accedé a precios especiales en toda la línea {lineName}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => {
                const message = encodeURIComponent(`Hola! Soy profesional y me interesa la línea ${lineName}. ¿Podrían informarme sobre precios especiales?`);
                window.open(`https://wa.me/5491140000000?text=${message}`, '_blank');
              }}
              className="bg-[#25d366] hover:bg-[#20a85a] text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Consultar Precios Profesionales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LinePage;