import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { whatsappConfig } from '../../data/mockProducts';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(whatsappConfig.defaultMessage);
    const whatsappUrl = `https://wa.me/${whatsappConfig.phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-[#2d5aa0] py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2">SUSCRIBITE Y OBTENÉ 10% OFF</h3>
          <p className="text-lg mb-6 opacity-90">EN TU PRIMERA COMPRA</p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Tu email"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
            />
            <button className="bg-[#e63946] hover:bg-[#c73540] px-6 py-3 rounded-r-lg font-medium transition-colors">
              Suscribirse
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-[#2d5aa0] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Rebeca Beauty Store</h3>
                <p className="text-sm text-gray-400">Distribuidor Oficial Lidherma</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Especialistas en productos de belleza profesional LIDHERMA. 
              Precios mayoristas y atención personalizada para profesionales y público en general.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <button 
                onClick={handleWhatsAppClick}
                className="text-gray-400 hover:text-[#25d366] transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-gray-400 hover:text-white transition-colors">
                  Todos los Productos
                </Link>
              </li>
              <li>
                <Link to="/cuidado-piel" className="text-gray-400 hover:text-white transition-colors">
                  Cuidado de la Piel
                </Link>
              </li>
              <li>
                <Link to="/maquillaje" className="text-gray-400 hover:text-white transition-colors">
                  Maquillaje
                </Link>
              </li>
              <li>
                <Link to="/solares" className="text-gray-400 hover:text-white transition-colors">
                  Protección Solar
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Líneas Destacadas</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/linea/hyaluronic-4d" className="text-gray-400 hover:text-white transition-colors">
                  Hyaluronic 4D
                </Link>
              </li>
              <li>
                <Link to="/linea/mimika" className="text-gray-400 hover:text-white transition-colors">
                  Mímika
                </Link>
              </li>
              <li>
                <Link to="/linea/dherma-sun" className="text-gray-400 hover:text-white transition-colors">
                  Dherma Sun
                </Link>
              </li>
              <li>
                <Link to="/linea/retinol-a" className="text-gray-400 hover:text-white transition-colors">
                  Retinol A+
                </Link>
              </li>
              <li>
                <Link to="/linea/niacinamide" className="text-gray-400 hover:text-white transition-colors">
                  Niacinamide+
                </Link>
              </li>
              <li>
                <Link to="/linea/aqua-shot" className="text-gray-400 hover:text-white transition-colors">
                  Aqua Shot
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#2d5aa0]" />
                <span className="text-gray-400">Buenos Aires, Argentina</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#2d5aa0]" />
                <span className="text-gray-400">+54 11 4000-0000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#2d5aa0]" />
                <span className="text-gray-400">info@rebecabeautystore.com</span>
              </div>
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-2 text-[#25d366] hover:text-white transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Consultas por WhatsApp</span>
              </button>
            </div>
            
            {/* Business Hours */}
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Horarios de Atención</h5>
              <div className="text-xs text-gray-400 space-y-1">
                <p>Lunes a Viernes: 9:00 - 18:00</p>
                <p>Sábados: 9:00 - 13:00</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Legal Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2025 Rebeca Beauty Store. Todos los derechos reservados.</p>
              <p className="text-xs mt-1">Distribuidor autorizado de productos LIDHERMA Argentina</p>
            </div>
            <div className="flex space-x-6 text-xs">
              <Link to="/terminos" className="hover:text-white transition-colors">
                Términos y Condiciones
              </Link>
              <Link to="/privacidad" className="hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/cambios" className="hover:text-white transition-colors">
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