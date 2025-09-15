import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, Instagram, Heart, Sparkles, Crown } from 'lucide-react';
import { storeConfig } from '../../data/mockProducts';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("¡Hola Rebeca! Me gustaría información sobre productos Lidherma 💆‍♀️✨");
    const whatsappUrl = `https://wa.me/${storeConfig.contacto.whatsapp}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramClick = () => {
    window.open(`https://instagram.com/${storeConfig.contacto.instagram.replace('@', '')}`, '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-pink-50 via-white to-lavender-50">
      {/* Newsletter Section Pastel */}
      <div className="gradient-pink section-padding">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Sparkles className="w-12 h-12 mx-auto text-pink-500 mb-4" />
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-700 mb-4">
              Suscribite y Obtené 10% OFF
            </h3>
            <p className="text-lg text-gray-600 font-lato mb-8 opacity-90">
              En tu primera compra + consejos exclusivos de belleza con Rebeca
            </p>
            <div className="max-w-md mx-auto flex rounded-full overflow-hidden shadow-lg">
              <input 
                type="email" 
                placeholder="Tu email"
                className="flex-1 px-6 py-4 text-gray-700 focus:outline-none font-lato bg-white"
              />
              <button 
                className="btn-pastel px-8 py-4 font-lato font-medium rounded-r-full rounded-l-none"
                onClick={() => {
                  const message = encodeURIComponent("¡Hola Rebeca! Me gustaría suscribirme para recibir ofertas y consejos de belleza 💄✨");
                  window.open(`https://wa.me/${storeConfig.contacto.whatsapp}?text=${message}`, '_blank');
                }}
              >
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://customer-assets.emergentagent.com/job_8be3063f-542a-4d08-acb0-b16243d79b54/artifacts/8ka0w66z_LOGO%20BEAUTY.jpeg"
                alt="Rebeca Beauty Store"
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  e.target.outerHTML = `<div class="w-10 h-10 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full flex items-center justify-center"><span class="text-pink-600 font-playfair font-bold text-lg">R</span></div>`;
                }}
              />
              <div>
                <h3 className="text-xl font-playfair font-bold text-gray-700">
                  {storeConfig.name}
                </h3>
                <p className="text-sm text-gray-500 font-lato">{storeConfig.slogan}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-6 font-lato leading-relaxed">
              <strong>Rebeca</strong> es cosmetóloga matriculada (<strong>M.P. {storeConfig.cosmetologa.matricula}</strong>) 
              con más de 10 años de experiencia. Distribuidor oficial exclusivo de LIDHERMA en {storeConfig.ubicacion}.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <button 
                onClick={handleInstagramClick}
                className="w-10 h-10 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full flex items-center justify-center text-pink-600 hover:shadow-lg transition-all hover-lift"
              >
                <Instagram className="h-5 w-5" />
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="w-10 h-10 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full flex items-center justify-center text-green-600 hover:shadow-lg transition-all hover-lift"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-6 text-gray-700 flex items-center">
              <Heart className="w-4 h-4 mr-2 text-pink-500" />
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3 text-sm font-lato">
              <li>
                <Link to="/" className="text-gray-600 hover:text-pink-600 transition-colors hover:pl-2">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-gray-600 hover:text-pink-600 transition-colors hover:pl-2">
                  Catálogo Completo (190+ productos)
                </Link>
              </li>
              <li>
                <Link to="/cuidado-piel" className="text-gray-600 hover:text-pink-600 transition-colors hover:pl-2">
                  Cuidado de la Piel
                </Link>
              </li>
              <li>
                <Link to="/maquillaje" className="text-gray-600 hover:text-pink-600 transition-colors hover:pl-2">
                  Maquillaje Mímika
                </Link>
              </li>
              <li>
                <Link to="/solares" className="text-gray-600 hover:text-pink-600 transition-colors hover:pl-2">
                  Protección Solar
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-600 hover:text-pink-600 transition-colors hover:pl-2">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Líneas Destacadas */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-6 text-gray-700 flex items-center">
              <Sparkles className="w-4 h-4 mr-2 text-purple-500" />
              Líneas Destacadas
            </h4>
            <ul className="space-y-3 text-sm font-lato">
              <li>
                <Link to="/linea/hyaluronic-4d" className="text-gray-600 hover:text-purple-600 transition-colors hover:pl-2">
                  Hyaluronic 4D
                </Link>
              </li>
              <li>
                <Link to="/linea/renovage" className="text-gray-600 hover:text-purple-600 transition-colors hover:pl-2">
                  Renovage Anti-Age
                </Link>
              </li>
              <li>
                <Link to="/linea/mimika" className="text-gray-600 hover:text-purple-600 transition-colors hover:pl-2">
                  Mímika Maquillaje
                </Link>
              </li>
              <li>
                <Link to="/linea/dherma-sun" className="text-gray-600 hover:text-purple-600 transition-colors hover:pl-2">
                  Dherma Sun
                </Link>
              </li>
              <li>
                <Link to="/linea/retinol-a" className="text-gray-600 hover:text-purple-600 transition-colors hover:pl-2">
                  Retinol A+
                </Link>
              </li>
              <li>
                <Link to="/linea/niacinamide" className="text-gray-600 hover:text-purple-600 transition-colors hover:pl-2">
                  Niacinamide+
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contacto Específico de Rebeca */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-6 text-gray-700 flex items-center">
              <Crown className="w-4 h-4 mr-2 text-yellow-500" />
              Contacto
            </h4>
            <div className="space-y-4 text-sm font-lato">
              <div className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm hover-lift">
                <MapPin className="h-4 w-4 text-pink-500 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-700">Ubicación</p>
                  <p className="text-gray-600">{storeConfig.ubicacion}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm hover-lift">
                <Phone className="h-4 w-4 text-purple-500 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-700">WhatsApp</p>
                  <p className="text-gray-600">{storeConfig.contacto.telefono}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm hover-lift">
                <Mail className="h-4 w-4 text-yellow-500 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-700">Email</p>
                  <p className="text-gray-600">{storeConfig.contacto.email}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm hover-lift">
                <Instagram className="h-4 w-4 text-pink-500 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-700">Instagram</p>
                  <p className="text-gray-600">{storeConfig.contacto.instagram}</p>
                </div>
              </div>
              
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-start space-x-3 p-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg shadow-sm hover:shadow-md transition-all w-full hover-lift"
              >
                <MessageCircle className="h-4 w-4 text-green-600 mt-0.5" />
                <div className="text-left">
                  <p className="font-medium text-green-700">Consultas Gratuitas</p>
                  <p className="text-green-600 text-xs">Chat directo con Rebeca M.P. {storeConfig.cosmetologa.matricula}</p>
                </div>
              </button>
            </div>
            
            {/* Business Hours */}
            <div className="mt-6 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg">
              <h5 className="font-playfair font-semibold mb-3 text-gray-700 flex items-center">
                <Sparkles className="w-3 h-3 mr-1 text-pink-500" />
                Horarios de Atención
              </h5>
              <div className="text-xs text-gray-600 space-y-1 font-lato">
                <p>Lunes a Viernes: {storeConfig.horarios.lunes_viernes}</p>
                <p>Sábados: {storeConfig.horarios.sabados}</p>
                <p>Domingos: {storeConfig.horarios.domingos}</p>
                <p className="text-pink-600 font-medium mt-2">
                  {storeConfig.horarios.whatsapp_247 ? 'WhatsApp: 24/7 disponible' : 'WhatsApp en horarios comerciales'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Benefits Bar */}
      <div className="gradient-lavender py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Sparkles className="w-5 h-5 text-pink-500" />
              <span className="font-lato font-medium text-gray-700">
                10% OFF por transferencia
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Heart className="w-5 h-5 text-purple-500" />
              <span className="font-lato font-medium text-gray-700">
                Envío gratis desde ${storeConfig.servicios.descuento_transferencia ? '70.000' : '60.000'}
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Crown className="w-5 h-5 text-yellow-500" />
              <span className="font-lato font-medium text-gray-700">
                Cosmetóloga M.P. {storeConfig.cosmetologa.matricula}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Legal Footer */}
      <div className="border-t border-pink-100 py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 font-lato">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p>&copy; 2025 {storeConfig.name}. Todos los derechos reservados.</p>
              <p className="text-xs mt-1">
                {storeConfig.slogan} • {storeConfig.ubicacion}
              </p>
              <p className="text-xs text-pink-600 font-medium mt-1">
                Dermocosmética profesional con entrega el mismo día • Más de 190 productos oficiales
              </p>
            </div>
            <div className="flex space-x-6 text-xs">
              <Link to="/terminos" className="hover:text-pink-600 transition-colors">
                Términos y Condiciones
              </Link>
              <Link to="/privacidad" className="hover:text-pink-600 transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/cambios" className="hover:text-pink-600 transition-colors">
                Cambios y Devoluciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;