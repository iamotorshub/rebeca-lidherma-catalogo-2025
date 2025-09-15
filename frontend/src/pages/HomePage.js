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

      {/* Líneas Destacadas */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-700 mb-4">
              Líneas Profesionales Lidherma
            </h2>
            <p className="text-lg text-gray-600 font-lato max-w-2xl mx-auto">
              Dermocosmética profesional para cada tipo de piel y necesidad específica
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hidratación */}
            <Link to="/cuidado-piel" className="group hover-lift">
              <div className="beauty-card overflow-hidden h-full">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center relative">
                  <div className="text-6xl group-hover:scale-110 transition-transform">💧</div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white text-blue-600 border-none font-lato">Hyaluronic 4D</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair font-bold text-xl mb-3 text-gray-700 group-hover:text-blue-600 transition-colors">
                    Hidratación Profunda
                  </h3>
                  <p className="text-gray-600 mb-4 font-lato">
                    Hyaluronic 4D, Aqua Shot, Hydrapore para hidratación intensa y duradera
                  </p>
                  <Button className="btn-pastel w-full font-lato group-hover:shadow-lg">
                    Ver Línea
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
            
            {/* Anti-Age */}
            <Link to="/cuidado-piel" className="group hover-lift">
              <div className="beauty-card overflow-hidden h-full">
                <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                  <div className="text-6xl group-hover:scale-110 transition-transform">✨</div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white text-purple-600 border-none font-lato">Renovage</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair font-bold text-xl mb-3 text-gray-700 group-hover:text-purple-600 transition-colors">
                    Tratamiento Anti-Age
                  </h3>
                  <p className="text-gray-600 mb-4 font-lato">
                    Renovage, Retinol A+, Dherma Science para firmeza y juventud
                  </p>
                  <Button className="btn-lavender w-full font-lato group-hover:shadow-lg">
                    Ver Línea
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
            
            {/* Purificación */}
            <Link to="/cuidado-piel" className="group hover-lift">
              <div className="beauty-card overflow-hidden h-full">
                <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center relative">
                  <div className="text-6xl group-hover:scale-110 transition-transform">🌿</div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white text-green-600 border-none font-lato">Niacinamide+</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair font-bold text-xl mb-3 text-gray-700 group-hover:text-green-600 transition-colors">
                    Purificación & Balance
                  </h3>
                  <p className="text-gray-600 mb-4 font-lato">
                    Niacinamide+, Acnex Depure, Detoxify para piel pura y equilibrada
                  </p>
                  <Button className="btn-gold w-full font-lato group-hover:shadow-lg">
                    Ver Línea
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="section-padding gradient-lavender">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-700 mb-4">
              Productos Más Vendidos
            </h2>
            <p className="text-lg text-gray-600 font-lato max-w-2xl mx-auto mb-6">
              Los favoritos de nuestras clientas en Bahía Blanca
            </p>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="beauty-card overflow-hidden animate-pulse">
                  <div className="aspect-square bg-pink-100"></div>
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-pink-200 rounded"></div>
                    <div className="h-3 bg-pink-200 rounded w-3/4"></div>
                    <div className="h-6 bg-pink-200 rounded w-1/2"></div>
                    <div className="h-8 bg-pink-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                {featuredProducts.slice(0, 8).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="text-center">
                <Link to="/productos">
                  <Button className="btn-pastel font-lato px-8 py-3">
                    Ver Catálogo Completo (190+ productos)
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Envío con Uber - Bahía Blanca */}
      <section className="section-padding bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <Truck className="w-8 h-8 text-black" />
                </div>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold">
                  Envío con Uber
                </h2>
              </div>
              <p className="text-xl font-lato mb-2">
                Solo en Bahía Blanca - El mismo día
              </p>
              <p className="text-gray-300 font-lato max-w-2xl mx-auto">
                Hacés tu compra, te llega en 1-3 horas con seguimiento en tiempo real desde la app de Uber
              </p>
            </div>

            {/* Pasos del envío */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-playfair font-semibold mb-2">Pedido Confirmado</h4>
                <p className="text-sm text-gray-300 font-lato">Recibimos tu compra</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-playfair font-semibold mb-2">En Preparación</h4>
                <p className="text-sm text-gray-300 font-lato">Armamos tu pedido</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-playfair font-semibold mb-2">Uber en Camino</h4>
                <p className="text-sm text-gray-300 font-lato">Seguí en tiempo real</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-playfair font-semibold mb-2">Entregado</h4>
                <p className="text-sm text-gray-300 font-lato">En tu domicilio</p>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-white text-black hover:bg-gray-100 font-lato px-8 py-4 text-lg"
              onClick={() => {
                const message = encodeURIComponent("¡Hola Rebeca! Me interesa el envío con Uber en Bahía Blanca. ¿Cómo funciona? 🚚");
                window.open(`https://wa.me/${storeConfig.contacto.whatsapp}?text=${message}`, '_blank');
              }}
            >
              <Package className="mr-2 h-5 w-5" />
              Comprá Ahora con Envío Uber
            </Button>
          </div>
        </div>
      </section>

      {/* Consulta con Rebeca */}
      <section className="section-padding gradient-pink">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="beauty-card p-12 bg-white">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-pink-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-700 mb-4">
                  Consultá con Rebeca
                </h2>
                <p className="text-lg text-gray-600 font-lato max-w-2xl mx-auto">
                  <strong>Rebeca es cosmetóloga profesional (M.P. 1624)</strong>, especializada en tratamientos Lidherma. 
                  Agendá una consulta personalizada online, presencial o a domicilio.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                  <Calendar className="w-8 h-8 mx-auto text-blue-600 mb-3" />
                  <h4 className="font-playfair font-semibold text-gray-700 mb-2">Virtual</h4>
                  <p className="text-sm text-gray-600 font-lato">Video consulta online</p>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <MapPin className="w-8 h-8 mx-auto text-purple-600 mb-3" />
                  <h4 className="font-playfair font-semibold text-gray-700 mb-2">Presencial</h4>
                  <p className="text-sm text-gray-600 font-lato">En nuestro local</p>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                  <Clock className="w-8 h-8 mx-auto text-green-600 mb-3" />
                  <h4 className="font-playfair font-semibold text-gray-700 mb-2">A Domicilio</h4>
                  <p className="text-sm text-gray-600 font-lato">En tu hogar</p>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  size="lg"
                  className="btn-lavender font-lato px-10 py-4 text-lg mr-4"
                  onClick={() => {
                    const message = encodeURIComponent("¡Hola Rebeca! Me gustaría agendar una consulta personalizada. ¿Qué opciones tenés disponibles? 💆‍♀️✨");
                    window.open(`https://wa.me/${storeConfig.contacto.whatsapp}?text=${message}`, '_blank');
                  }}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chatear con Rebeca
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion />

      {/* Medios de Pago */}
      <section className="section-padding gradient-lavender">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-700 mb-8">
              Medios de Pago
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mediosPago.map((medio, index) => (
                <div 
                  key={index} 
                  className={`beauty-card p-6 text-center hover-lift ${
                    medio.destacado ? 'border-2 border-yellow-400 bg-gradient-to-br from-yellow-50 to-amber-50' : ''
                  }`}
                >
                  <div className="text-4xl mb-3">{medio.icon}</div>
                  <h4 className="font-playfair font-semibold text-gray-700 mb-2">{medio.nombre}</h4>
                  <p className="text-sm text-gray-600 font-lato">{medio.descripcion}</p>
                  {medio.destacado && (
                    <Badge className="mt-2 bg-yellow-400 text-yellow-900 border-none font-lato">
                      Recomendado
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding gradient-pink">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-700 mb-4">
              Distribuidor Oficial Lidherma en Bahía Blanca
            </h2>
            <p className="text-xl text-gray-600 font-lato mb-8">
              Dermocosmética profesional con entrega el mismo día. Más de 190 productos oficiales.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/productos">
                <Button size="lg" className="btn-pastel font-lato px-10 py-4 text-lg">
                  <Crown className="mr-2 h-5 w-5" />
                  Ver Catálogo Completo
                </Button>
              </Link>
              
              <Button 
                size="lg"
                className="btn-lavender font-lato px-10 py-4 text-lg"
                onClick={() => {
                  const message = encodeURIComponent("¡Hola! Me gustaría más información sobre Rebeca Beauty Store y productos Lidherma 💄✨");
                  window.open(`https://wa.me/${storeConfig.contacto.whatsapp}?text=${message}`, '_blank');
                }}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contactar Ahora
              </Button>
            </div>

            {/* Stats finales */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="beauty-card p-6">
                <div className="text-2xl font-playfair font-bold text-pink-600 mb-1">10+</div>
                <div className="text-xs text-gray-600 font-lato">Años de experiencia</div>
              </div>
              <div className="beauty-card p-6">
                <div className="text-2xl font-playfair font-bold text-purple-600 mb-1">M.P. 1624</div>
                <div className="text-xs text-gray-600 font-lato">Matrícula profesional</div>
              </div>
              <div className="beauty-card p-6">
                <div className="text-2xl font-playfair font-bold text-green-600 mb-1">1-3hs</div>
                <div className="text-xs text-gray-600 font-lato">Entrega Uber</div>
              </div>
              <div className="beauty-card p-6">
                <div className="text-2xl font-playfair font-bold text-yellow-600 mb-1">24/7</div>
                <div className="text-xs text-gray-600 font-lato">WhatsApp</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;