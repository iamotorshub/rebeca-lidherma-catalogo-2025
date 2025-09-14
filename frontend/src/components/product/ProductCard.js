import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, ShoppingCart, MessageCircle } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useUser } from '../../contexts/UserContext';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useToast } from '../../hooks/use-toast';

const ProductCard = ({ product }) => {
  const { addItem, isProfessional } = useCart();
  const { favoriteProducts, toggleFavorite } = useUser();
  const { toast } = useToast();
  
  const isFavorite = favoriteProducts.includes(product.id);
  const priceToShow = isProfessional ? product.precio_profesional_ARS : (product.precio_publico_ARS || product.precio_profesional_ARS);
  const hasDiscount = product.precio_publico_ARS && isProfessional;

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(product);
    toast({
      title: "Producto agregado al carrito",
      description: `${product.producto} se agregó correctamente`,
    });
  };

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    toggleFavorite(product.id);
    toast({
      title: isFavorite ? "Eliminado de favoritos" : "Agregado a favoritos",
      description: `${product.producto} ${isFavorite ? 'se eliminó de' : 'se agregó a'} tus favoritos`,
    });
  };

  const handleWhatsAppInquiry = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(`Hola! Estoy interesado/a en: ${product.producto} - ${product.linea} (${product.presentacion}). ¿Podrían darme más información?`);
    const whatsappUrl = `https://wa.me/5491140000000?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
      {/* Image Container */}
      <Link to={`/producto/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img 
            src={product.imagen_url} 
            alt={product.producto}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300x300/f3f4f6/9ca3af?text=Lidherma';
            }}
          />
          
          {/* Overlay Actions */}
          <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={handleToggleFavorite}
              className={`w-8 h-8 rounded-full shadow-md flex items-center justify-center transition-colors ${
                isFavorite ? 'bg-[#e63946] text-white' : 'bg-white text-gray-600 hover:text-[#e63946]'
              }`}
            >
              <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
            <Link 
              to={`/producto/${product.slug}`}
              className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-[#2d5aa0]"
            >
              <Eye className="h-4 w-4" />
            </Link>
          </div>
          
          {/* Stock Status */}
          <div className="absolute top-3 left-3">
            <Badge className={`text-xs ${product.disponible ? 'bg-[#28a745]' : 'bg-gray-400'}`}>
              {product.disponible ? 'Disponible' : 'Consultar'}
            </Badge>
          </div>

          {/* Discount Badge */}
          {hasDiscount && (
            <div className="absolute bottom-3 left-3">
              <Badge className="bg-[#ffc107] text-gray-900 text-xs">
                {Math.round((1 - priceToShow / product.precio_publico_ARS) * 100)}% OFF
              </Badge>
            </div>
          )}
        </div>
      </Link>
      
      {/* Product Info */}
      <div className="p-4">
        {/* Brand/Line */}
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
            {product.linea}
          </Badge>
          <span className="text-xs text-gray-500">{product.presentacion}</span>
        </div>
        
        {/* Product Name */}
        <Link to={`/producto/${product.slug}`}>
          <h3 className="font-semibold text-gray-900 mb-2 text-sm leading-tight line-clamp-2 hover:text-[#2d5aa0] transition-colors">
            {product.producto}
          </h3>
        </Link>
        
        {/* Category */}
        <p className="text-xs text-gray-500 mb-3">{product.categoria_L2}</p>
        
        {/* Pricing */}
        <div className="mb-4">
          {hasDiscount ? (
            <div className="flex items-center justify-between">
              <div>
                <span className="text-lg font-bold text-[#2d5aa0]">
                  ${priceToShow.toLocaleString()}
                </span>
                <span className="text-xs text-gray-500 ml-1">prof.</span>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-400 line-through">
                  ${product.precio_publico_ARS.toLocaleString()}
                </span>
                <span className="text-xs text-gray-500 block">público</span>
              </div>
            </div>
          ) : (
            <div>
              <span className="text-lg font-bold text-[#2d5aa0]">
                ${priceToShow.toLocaleString()}
              </span>
              <span className="text-xs text-gray-500 ml-1">
                {isProfessional ? 'prof.' : 'consultar'}
              </span>
            </div>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button 
            onClick={handleAddToCart}
            className="flex-1 bg-[#2d5aa0] text-white hover:bg-[#1a4480] text-sm py-2"
            disabled={!product.disponible}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Agregar
          </Button>
          <Button 
            onClick={handleWhatsAppInquiry}
            variant="outline"
            className="border-gray-300 text-gray-600 hover:bg-gray-100 text-sm py-2 px-3"
          >
            <MessageCircle className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;