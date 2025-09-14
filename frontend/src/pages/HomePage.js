import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Shield, Truck, Heart, Users } from 'lucide-react';
import { useProducts } from '../contexts/ProductContext';
import ProductCard from '../components/product/ProductCard';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const HomePage = () => {
  const { featuredProducts, loading, categories, lineas } = useProducts();

  const features = [
    {
      icon: Shield,
      title: "Productos Originales",
      description: "100% auténticos directo del laboratorio"
    },
    {
      icon: Truck,
      title: "Envío a Todo el País",
      description: "Entregas rápidas y seguras"
    },
    {
      icon: Users,
      title: "Precios Profesionales",
      description: "Descuentos especiales para profesionales"
    },
    {
      icon: Heart,
      title: "Atención Personalizada",
      description: "Asesoramiento experto via WhatsApp"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#2d5aa0] to-[#1a4480] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Productos Lidherma Profesionales
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Distribuidor oficial • Precios profesionales y público • Envíos a todo el país
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/productos">
                <Button size="lg" className="bg-white text-[#2d5aa0] hover:bg-gray-100 font-bold px-8 py-3">
                  Ver Catálogo Completo
                </Button>
              </Link>
              <Link to="/contacto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-[#2d5aa0] font-bold px-8 py-3"
                >
                  Contactar Asesor
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">180+</div>
                <div className="text-sm opacity-80">Productos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">25</div>
                <div className="text-sm opacity-80">Líneas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">100%</div>
                <div className="text-sm opacity-80">Original</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">24/7</div>
                <div className="text-sm opacity-80">WhatsApp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Categorías Principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cuidado de la Piel */}
            <Link to="/cuidado-piel" className="group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                  <div className="text-6xl">🧴</div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 group-hover:text-[#2d5aa0] transition-colors">
                    Cuidado de la Piel
                  </h3>
                  <p className="text-gray-600 mb-4">
                    160+ productos para todos los tipos de piel
                  </p>
                  <Button className="bg-[#2d5aa0] text-white hover:bg-[#1a4480] w-full">
                    Ver Productos
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
            
            {/* Maquillaje */}
            <Link to="/maquillaje" className="group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center group-hover:from-pink-100 group-hover:to-pink-200 transition-all duration-300">
                  <div className="text-6xl">💄</div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 group-hover:text-[#2d5aa0] transition-colors">
                    Maquillaje Mímika
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Línea completa de maquillaje profesional
                  </p>
                  <Button className="bg-[#2d5aa0] text-white hover:bg-[#1a4480] w-full">
                    Ver Productos
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
            
            {/* Solares */}
            <Link to="/solares" className="group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-yellow-50 to-yellow-100 flex items-center justify-center group-hover:from-yellow-100 group-hover:to-yellow-200 transition-all duration-300">
                  <div className="text-6xl">☀️</div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 group-hover:text-[#2d5aa0] transition-colors">
                    Protección Solar
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Dherma Sun - Protección avanzada
                  </p>
                  <Button className="bg-[#2d5aa0] text-white hover:bg-[#1a4480] w-full">
                    Ver Productos
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Productos Destacados
            </h2>
            <Link to="/productos">
              <Button variant="outline" className="border-[#2d5aa0] text-[#2d5aa0] hover:bg-[#2d5aa0] hover:text-white">
                Ver Todos
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, index) => (
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
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            ¿Por qué elegir Rebeca Beauty Store?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#2d5aa0] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brands Carousel */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Líneas Lidherma Disponibles
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {lineas.slice(0, 12).map((linea, index) => (
              <Link 
                key={index}
                to={`/linea/${linea.toLowerCase().replace(/\s+/g, '-')}`}
                className="group"
              >
                <div className="bg-white rounded-lg p-4 border border-gray-200 hover:border-[#2d5aa0] hover:shadow-md transition-all duration-300 text-center">
                  <div className="h-12 flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-[#2d5aa0] group-hover:scale-110 transition-transform">
                      L
                    </span>
                  </div>
                  <h3 className="font-medium text-sm text-gray-900 group-hover:text-[#2d5aa0] transition-colors">
                    {linea}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/productos">
              <Button className="bg-[#2d5aa0] text-white hover:bg-[#1a4480]">
                Ver Todas las Líneas
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2d5aa0] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Sos profesional de la estética?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Accedé a precios especiales y condiciones exclusivas
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/profesionales">
              <Button size="lg" className="bg-white text-[#2d5aa0] hover:bg-gray-100 font-bold px-8 py-3">
                Registrarme como Profesional
              </Button>
            </Link>
            <Link to="/contacto">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#2d5aa0] font-bold px-8 py-3"
              >
                Consultar por WhatsApp
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;