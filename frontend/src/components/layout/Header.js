import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Heart, ShoppingCart, Menu, X, MessageCircle, User, Sparkles } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useProducts } from '../../contexts/ProductContext';
import { useUser } from '../../contexts/UserContext';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { whatsappConfig } from '../../data/mockProducts';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const { searchProducts } = useProducts();
  const { favoriteProducts, isProfessional } = useUser();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      searchProducts(searchQuery);
      navigate('/productos');
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(whatsappConfig.defaultMessage);
    const whatsappUrl = `https://wa.me/${whatsappConfig.phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Cuidado de la Piel', href: '/cuidado-piel' },
    { name: 'Maquillaje', href: '/maquillaje' },
    { name: 'Solares', href: '/solares' },
    { name: 'Todas las Líneas', href: '/productos' },
    { name: 'Profesionales', href: '/profesionales' },
    { name: 'Contacto', href: '/contacto' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b border-pink-100">
      {/* Top Bar Pastel */}
      <div className="py-2 text-sm gradient-pink text-gray-700 text-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-6 text-xs md:text-sm font-lato">
            <span className="flex items-center">
              <Sparkles className="w-3 h-3 mr-1" />
              10% OFF por transferencia
            </span>
            <span>🚚 Envío gratis desde $70.000</span>
            <span>💆‍♀️ Consultas gratis con Rebeca</span>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section con imagen real */}
          <Link to="/" className="flex items-center space-x-3 hover-lift">
            <img 
              src="https://customer-assets.emergentagent.com/job_8be3063f-542a-4d08-acb0-b16243d79b54/artifacts/8ka0w66z_LOGO%20BEAUTY.jpeg"
              alt="Rebeca Beauty Store"
              className="h-16 md:h-20 w-auto object-contain"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiNGQURBREQiLz4KPHR0ZXh0IHg9IjQwIiB5PSI1MCIgZm9udC1mYW1pbHk9IlBsYXlmYWlyIERpc3BsYXkiIGZvbnQtc2l6ZT0iMzAiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IiM0QTRBNEEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlI8L3RleHQ+Cjwvc3ZnPgo=';
              }}
            />
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-playfair font-semibold text-gray-700">
                Rebeca Beauty Store
              </h1>
              <p className="text-sm text-gray-500 font-lato">Distribuidor Oficial Lidherma</p>
            </div>
          </Link>
          
          {/* Search Bar - Hidden on mobile */}
          <div className="flex-1 max-w-md mx-4 md:mx-8 hidden md:block">
            <form onSubmit={handleSearch} className="relative">
              <Input 
                type="search"
                placeholder="Buscar productos, líneas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-3 border-2 border-pink-200 rounded-full focus:ring-2 focus:ring-pink-300 focus:border-pink-300 bg-pink-50"
              />
              <Button 
                type="submit"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 btn-pastel rounded-full w-8 h-8 p-0"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Professional Badge */}
            {isProfessional && (
              <Badge className="bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 hidden sm:flex border-none">
                <User className="h-3 w-3 mr-1" />
                Profesional
              </Badge>
            )}
            
            {/* Favorites */}
            <Button variant="ghost" className="text-gray-600 hover:text-pink-600 relative hover-lift">
              <Heart className="h-5 w-5" />
              {favoriteProducts.length > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-pink-400 text-white text-xs min-w-[16px] h-4 flex items-center justify-center p-0 border-none">
                  {favoriteProducts.length}
                </Badge>
              )}
              <span className="hidden sm:inline ml-2 font-lato">Favoritos</span>
            </Button>
            
            {/* Cart */}
            <Link to="/carrito">
              <Button variant="ghost" className="text-gray-600 hover:text-pink-600 relative hover-lift">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-pink-400 text-white text-xs min-w-[16px] h-4 flex items-center justify-center p-0 border-none">
                    {itemCount}
                  </Badge>
                )}
                <span className="hidden sm:inline ml-2 font-lato">Carrito</span>
              </Button>
            </Link>
            
            {/* WhatsApp */}
            <Button 
              onClick={handleWhatsAppClick}
              className="btn-lavender hidden sm:flex items-center font-lato"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 hover:text-pink-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Search Bar */}
        <div className="block md:hidden pb-4">
          <form onSubmit={handleSearch} className="relative">
            <Input 
              type="search"
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-3 border-2 border-pink-200 rounded-full focus:ring-2 focus:ring-pink-300 bg-pink-50"
            />
            <Button 
              type="submit"
              size="sm"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 btn-pastel rounded-full w-8 h-8 p-0"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>
        
        {/* Navigation Menu - Desktop */}
        <nav className="border-t py-4 hidden md:block border-pink-100">
          <ul className="flex space-x-8 text-sm font-medium font-lato justify-center">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.href}
                  className="text-gray-600 hover:text-pink-600 transition-colors duration-300 px-3 py-2 rounded-full hover:bg-pink-50"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-pink-100 beauty-card rounded-b-3xl mx-4 mb-2">
          <nav className="container mx-auto px-4 py-6">
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="block text-gray-700 hover:text-pink-600 font-medium font-lato py-2 px-4 rounded-full hover:bg-pink-50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-pink-100">
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full btn-lavender flex items-center justify-center font-lato"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contactar por WhatsApp
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;