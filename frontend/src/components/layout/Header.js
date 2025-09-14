import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Heart, ShoppingCart, Menu, X, MessageCircle, User } from 'lucide-react';
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
    { name: 'Inicio', href: '/', icon: 'home' },
    { name: 'Cuidado de la Piel', href: '/cuidado-piel' },
    { name: 'Maquillaje', href: '/maquillaje' },
    { name: 'Solares', href: '/solares' },
    { name: 'Todas las Líneas', href: '/productos' },
    { name: 'Profesionales', href: '/profesionales' },
    { name: 'Contacto', href: '/contacto' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      {/* Top Bar */}
      <div className="py-2 text-sm bg-[#2d5aa0] text-white text-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-6 text-xs md:text-sm">
            <span>🚚 Envíos a todo el país</span>
            <span>📱 Consultas por WhatsApp</span>
            <span>💳 Precios profesionales disponibles</span>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#2d5aa0] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-[#2d5aa0]">Rebeca Beauty Store</h1>
              <p className="text-sm text-gray-600">Distribuidor Oficial Lidherma</p>
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
                className="w-full pl-4 pr-12 py-2 border rounded-lg focus:ring-2 focus:ring-[#2d5aa0] focus:border-transparent"
              />
              <Button 
                type="submit"
                size="sm"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#2d5aa0] hover:bg-[#1a4480]"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Professional Badge */}
            {isProfessional && (
              <Badge className="bg-[#28a745] text-white hidden sm:flex">
                <User className="h-3 w-3 mr-1" />
                Profesional
              </Badge>
            )}
            
            {/* Favorites */}
            <Button variant="ghost" className="text-gray-600 hover:text-[#2d5aa0] relative">
              <Heart className="h-5 w-5" />
              {favoriteProducts.length > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-[#e63946] text-white text-xs min-w-[16px] h-4 flex items-center justify-center p-0">
                  {favoriteProducts.length}
                </Badge>
              )}
              <span className="hidden sm:inline ml-2">Favoritos</span>
            </Button>
            
            {/* Cart */}
            <Link to="/carrito">
              <Button variant="ghost" className="text-gray-600 hover:text-[#2d5aa0] relative">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-[#e63946] text-white text-xs min-w-[16px] h-4 flex items-center justify-center p-0">
                    {itemCount}
                  </Badge>
                )}
                <span className="hidden sm:inline ml-2">Carrito</span>
              </Button>
            </Link>
            
            {/* WhatsApp */}
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-[#28a745] hover:bg-[#20852e] text-white px-4 py-2 rounded-lg font-medium hidden sm:flex items-center"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
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
              className="w-full pl-4 pr-12 py-2 border rounded-lg focus:ring-2 focus:ring-[#2d5aa0]"
            />
            <Button 
              type="submit"
              size="sm"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#2d5aa0] hover:bg-[#1a4480]"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>
        
        {/* Navigation Menu - Desktop */}
        <nav className="border-t py-3 hidden md:block">
          <ul className="flex space-x-8 text-sm font-medium">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.href}
                  className="text-gray-700 hover:text-[#2d5aa0] transition-colors duration-200"
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
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="block text-gray-700 hover:text-[#2d5aa0] font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t">
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-[#28a745] hover:bg-[#20852e] text-white flex items-center justify-center"
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