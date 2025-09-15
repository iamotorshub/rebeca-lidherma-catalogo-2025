import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, Star, Shield, Truck, Heart, Users, Sparkles, Crown, Gift, 
  MapPin, Clock, Calendar, CreditCard, Package, MessageCircle, Award,
  Phone, Mail, Instagram, CheckCircle2, Zap
} from 'lucide-react';
import { useProducts } from '../contexts/ProductContext';
import ProductCard from '../components/product/ProductCard';
import HeroCarousel from '../components/common/HeroCarousel';
import FAQAccordion from '../components/common/FAQAccordion';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { storeConfig, mediosPago } from '../data/mockProducts';

const HomePage = () => {
  const { featuredProducts, loading, categories, lineas } = useProducts();

  return (
    <div className="min-h-screen">
      
      {/* Hero Carousel */}
      <section className="mb-8">
        <HeroCarousel />
      </section>

      {/* Barra de Beneficios Destacados */}
      <section className="gradient-pink py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Truck className="w-5 h-5 text-pink-600" />
              <span className="font-lato font-semibold text-gray-700">Envío Uber - Mismo día en Bahía Blanca</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Gift className="w-5 h-5 text-purple-600" />
              <span className="font-lato font-semibold text-gray-700">10% OFF por transferencia</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Crown className="w-5 h-5 text-yellow-600" />
              <span className="font-lato font-semibold text-gray-700">Cosmetóloga M.P. 1624</span>
            </div>
          </div>
        </div>
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

      {/* Featured Products - Lo Más Vendido */}
      <section className="section-padding gradient-lavender">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-700 mb-4">
              Lo Más Vendido
            </h2>
            <p className="text-lg text-gray-600 font-lato max-w-2xl mx-auto mb-6">
              Los productos favoritos de nuestras clientas
            </p>
            <Link to="/productos">
              <Button className="btn-pastel font-lato">
                Ver Todo el Catálogo
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="beauty-card overflow-hidden animate-pulse">
                  <div className="aspect-square bg-pink-100"></div>
                  <div className="p-4">
                    <div className="h-4 bg-pink-200 rounded mb-2"></div>
                    <div className="h-3 bg-pink-200 rounded w-3/4 mb-2"></div>
                    <div className="h-6 bg-pink-200 rounded w-1/2 mb-4"></div>
                    <div className="h-8 bg-pink-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredProducts.slice(0, 6).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Consulta Gratis Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="beauty-card p-12 gradient-pink">
              <div className="mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Heart className="w-10 h-10 text-pink-500" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-700 mb-6">
                Consultá Gratis con Rebeca
              </h2>
              <p className="text-lg text-gray-600 font-lato mb-8 max-w-2xl mx-auto">
                Recibí asesoramiento personalizado para elegir los productos ideales para tu tipo de piel. 
                Más de 10 años de experiencia en cosmética profesional.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  size="lg"
                  className="btn-lavender font-lato px-10 py-4 text-lg"
                  onClick={() => {
                    const message = encodeURIComponent("¡Hola Rebeca! Me gustaría una consulta gratuita sobre qué productos Lidherma son ideales para mi tipo de piel 💆‍♀️✨");
                    window.open(`https://wa.me/5491140000000?text=${message}`, '_blank');
                  }}
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Consulta Gratuita
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-400 text-gray-700 hover:bg-gray-100 font-lato px-10 py-4 text-lg"
                  onClick={() => {
                    const message = encodeURIComponent("Hola! Me gustaría conocer más sobre los precios profesionales de Lidherma");
                    window.open(`https://wa.me/5491140000000?text=${message}`, '_blank');
                  }}
                >
                  Precios Profesionales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section Rediseñada */}
      <section className="section-padding gradient-lavender">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-700 mb-4">
              ¿Por qué elegir Rebeca Beauty Store?
            </h2>
            <p className="text-lg text-gray-600 font-lato max-w-2xl mx-auto">
              Tu tienda de confianza para productos LIDHERMA originales
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="beauty-card text-center p-6 hover-lift group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-gray-600" />
                  </div>
                  <h3 className="font-playfair font-bold text-lg mb-3 text-gray-700 group-hover:text-pink-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-lato text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Líneas Lidherma Carousel */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-700 mb-4">
              Líneas Lidherma Disponibles
            </h2>
            <p className="text-lg text-gray-600 font-lato max-w-2xl mx-auto">
              Cada línea con tecnología específica para diferentes necesidades de la piel
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {lineas.slice(0, 12).map((linea, index) => {
              const colors = [
                'from-pink-100 to-rose-100',
                'from-purple-100 to-lavender-100', 
                'from-yellow-100 to-amber-100',
                'from-blue-100 to-cyan-100',
                'from-green-100 to-emerald-100',
                'from-orange-100 to-red-100'
              ];
              const color = colors[index % colors.length];
              
              return (
                <Link 
                  key={index}
                  to={`/linea/${linea.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group hover-lift"
                >
                  <div className="beauty-card text-center p-4 h-full group-hover:shadow-xl">
                    <div className={`h-16 flex items-center justify-center mb-3 rounded-full bg-gradient-to-br ${color}`}>
                      <span className="text-2xl font-playfair font-bold text-gray-600 group-hover:scale-110 transition-transform">
                        L
                      </span>
                    </div>
                    <h3 className="font-lato font-medium text-xs text-gray-700 group-hover:text-pink-600 transition-colors leading-tight">
                      {linea}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/productos">
              <Button className="btn-pastel font-lato">
                Ver Todas las Líneas
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="section-padding gradient-pink">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Crown className="w-16 h-16 mx-auto text-pink-500 mb-4" />
            </div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-700 mb-6">
              ¿Sos profesional de la estética?
            </h2>
            <p className="text-lg text-gray-600 font-lato mb-8 max-w-2xl mx-auto">
              Accedé a precios especiales, condiciones exclusivas y asesoramiento técnico personalizado
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/profesionales">
                <Button size="lg" className="btn-lavender font-lato px-10 py-4 text-lg">
                  <Crown className="mr-2 h-5 w-5" />
                  Registrarme como Profesional
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-gray-400 text-gray-700 hover:bg-gray-100 font-lato px-10 py-4 text-lg"
                onClick={() => {
                  const message = encodeURIComponent("Hola! Soy profesional de la estética y me gustaría información sobre precios y condiciones especiales");
                  window.open(`https://wa.me/5491140000000?text=${message}`, '_blank');
                }}
              >
                Consultar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;