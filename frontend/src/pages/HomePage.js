import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Shield, Truck, Heart, Users, Sparkles, Crown, Gift } from 'lucide-react';
import { useProducts } from '../contexts/ProductContext';
import ProductCard from '../components/product/ProductCard';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const HomePage = () => {
  const { featuredProducts, loading, categories, lineas } = useProducts();

  const features = [
    {
      icon: Crown,
      title: "Productos Premium",
      description: "100% originales de laboratorio LIDHERMA",
      color: "from-pink-100 to-rose-100"
    },
    {
      icon: Truck,
      title: "Envío Gratis +$70k",
      description: "Entregas rápidas a todo el país",
      color: "from-purple-100 to-lavender-100"
    },
    {
      icon: Gift,
      title: "10% OFF Transferencia",
      description: "Descuentos especiales por pago contado",
      color: "from-yellow-100 to-amber-100"
    },
    {
      icon: Heart,
      title: "Consultas Gratuitas",
      description: "Asesoramiento personalizado con Rebeca",
      color: "from-rose-100 to-pink-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-lavender-50">
      
      {/* Hero Section Pastel */}
      <section className="relative overflow-hidden">
        <div className="gradient-pink section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <Sparkles className="w-16 h-16 mx-auto text-pink-400 mb-4" />
              </div>
              <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-gray-700 leading-tight">
                Belleza Profesional
                <span className="block text-pink-500">con Lidherma</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-600 font-lato max-w-2xl mx-auto">
                Descubrí la línea completa de cosmética profesional • Precios especiales • 
                Asesoramiento personalizado con Rebeca
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/productos">
                  <Button size="lg" className="btn-pastel font-lato px-10 py-4 text-lg">
                    Ver Productos
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  className="btn-lavender font-lato px-10 py-4 text-lg"
                  onClick={() => {
                    const message = encodeURIComponent("¡Hola Rebeca! Me gustaría una consulta gratuita sobre productos Lidherma 💆‍♀️");
                    window.open(`https://wa.me/5491140000000?text=${message}`, '_blank');
                  }}
                >
                  Consulta Gratis
                  <Heart className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              {/* Stats Pastel */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                <div className="beauty-card text-center p-6">
                  <div className="text-3xl md:text-4xl font-playfair font-bold text-pink-500 mb-2">180+</div>
                  <div className="text-sm text-gray-600 font-lato">Productos</div>
                </div>
                <div className="beauty-card text-center p-6">
                  <div className="text-3xl md:text-4xl font-playfair font-bold text-purple-500 mb-2">25</div>
                  <div className="text-sm text-gray-600 font-lato">Líneas</div>
                </div>
                <div className="beauty-card text-center p-6">
                  <div className="text-3xl md:text-4xl font-playfair font-bold text-yellow-500 mb-2">100%</div>
                  <div className="text-sm text-gray-600 font-lato">Original</div>
                </div>
                <div className="beauty-card text-center p-6">
                  <div className="text-3xl md:text-4xl font-playfair font-bold text-rose-500 mb-2">24/7</div>
                  <div className="text-sm text-gray-600 font-lato">WhatsApp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-yellow-200 rounded-full opacity-30 animate-pulse"></div>
      </section>

      {/* Categories Section Rediseñada */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-700 mb-4">
              Líneas Destacadas
            </h2>
            <p className="text-lg text-gray-600 font-lato max-w-2xl mx-auto">
              Cada línea está formulada con activos de última generación para resultados profesionales
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cuidado de la Piel */}
            <Link to="/cuidado-piel" className="group hover-lift">
              <div className="beauty-card overflow-hidden h-full">
                <div className="h-48 bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center relative">
                  <div className="text-6xl group-hover:scale-110 transition-transform">🌸</div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white text-pink-600 border-none font-lato">160+ productos</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair font-bold text-xl mb-3 text-gray-700 group-hover:text-pink-600 transition-colors">
                    Cuidado Facial
                  </h3>
                  <p className="text-gray-600 mb-4 font-lato">
                    Hyaluronic 4D, Retinol A+, Plasma Infusion y más líneas para tu rutina diaria
                  </p>
                  <Button className="btn-pastel w-full font-lato group-hover:shadow-lg">
                    Explorar Línea
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
            
            {/* Maquillaje */}
            <Link to="/maquillaje" className="group hover-lift">
              <div className="beauty-card overflow-hidden h-full">
                <div className="h-48 bg-gradient-to-br from-purple-100 to-lavender-100 flex items-center justify-center relative">
                  <div className="text-6xl group-hover:scale-110 transition-transform">💄</div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white text-purple-600 border-none font-lato">Mímika</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair font-bold text-xl mb-3 text-gray-700 group-hover:text-purple-600 transition-colors">
                    Maquillaje Mímika
                  </h3>
                  <p className="text-gray-600 mb-4 font-lato">
                    Línea completa que cuida tu piel mientras realza tu belleza natural
                  </p>
                  <Button className="btn-lavender w-full font-lato group-hover:shadow-lg">
                    Ver Maquillaje
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
            
            {/* Solares */}
            <Link to="/solares" className="group hover-lift">
              <div className="beauty-card overflow-hidden h-full">
                <div className="h-48 bg-gradient-to-br from-yellow-100 to-amber-100 flex items-center justify-center relative">
                  <div className="text-6xl group-hover:scale-110 transition-transform">☀️</div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white text-yellow-600 border-none font-lato">Dherma Sun</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair font-bold text-xl mb-3 text-gray-700 group-hover:text-yellow-600 transition-colors">
                    Protección Solar
                  </h3>
                  <p className="text-gray-600 mb-4 font-lato">
                    Dherma Sun con filtros avanzados y protección contra luz azul
                  </p>
                  <Button className="btn-gold w-full font-lato group-hover:shadow-lg">
                    Proteger Piel
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