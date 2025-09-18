import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, ShoppingCart, MessageCircle, Sparkles } from 'lucide-react';
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
      title: "¡Agregado al carrito! 💕",
      description: `${product.producto} se agregó correctamente`,
    });
  };

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    toggleFavorite(product.id);
    toast({
      title: isFavorite ? "Eliminado de favoritos 💔" : "¡Agregado a favoritos! 💖",
      description: `${product.producto} ${isFavorite ? 'se eliminó de' : 'se agregó a'} tus favoritos`,
    });
  };

  const handleWhatsAppInquiry = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(`¡Hola Rebeca! Me interesa este producto: ${product.producto} - ${product.linea} (${product.presentacion}). ¿Podrías darme más información? 💆‍♀️✨`);
    const whatsappUrl = `https://wa.me/5491140000000?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="beauty-card overflow-hidden group hover-lift">
      {/* Image Container */}
      <Link to={`/producto/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50">
          <img 
            src={product.imagen_url || `https://via.placeholder.com/400x400/F4C2C2/9CA3AF?text=${encodeURIComponent(product.producto)}`} 
            alt={product.producto}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              // Fallback mejorado con nombre del producto
              const productName = encodeURIComponent(product.producto);
              const lineName = encodeURIComponent(product.linea);
              e.target.src = `https://via.placeholder.com/400x400/F4C2C2/8B5A5A?text=${productName}+%0A${lineName}`;
            }}
          />
          
          {/* Overlay Actions */}
          <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={handleToggleFavorite}
              className={`w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
                isFavorite 
                  ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white scale-110' 
                  : 'bg-white text-gray-600 hover:text-pink-500 hover:bg-pink-50'
              }`}
            >
              <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
            <Link 
              to={`/producto/${product.slug}`}
              className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-purple-500 hover:bg-purple-50 transition-all duration-300"
            >
              <Eye className="h-4 w-4" />
            </Link>
          </div>
          
          {/* Stock Status */}
          <div className="absolute top-3 left-3">
            <Badge className={`text-xs border-none font-lato ${
              product.disponible 
                ? 'bg-gradient-to-r from-green-200 to-emerald-200 text-green-800' 
                : 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700'
            }`}>
              {product.disponible ? (
                <><Sparkles className="w-3 h-3 mr-1" />Disponible</>
              ) : (
                'Consultar'
              )}
            </Badge>
          </div>

          {/* Discount Badge */}
          {hasDiscount && (
            <div className="absolute bottom-3 left-3">
              <Badge className="bg-gradient-to-r from-yellow-200 to-amber-200 text-yellow-800 text-xs border-none font-lato font-semibold">
                {Math.round((1 - priceToShow / product.precio_publico_ARS) * 100)}% OFF
              </Badge>
            </div>
          )}
        </div>
      </Link>
      
      {/* Product Info */}
      <div className="p-5">
        {/* Brand/Line */}
        <div className="flex items-center justify-between mb-3">
          <Badge className="text-xs bg-gradient-to-r from-purple-100 to-lavender-100 text-purple-700 border-none font-lato">
            {product.linea}
          </Badge>
          <span className="text-xs text-gray-500 font-lato">{product.presentacion}</span>
        </div>
        
        {/* Product Name */}
        <Link to={`/producto/${product.slug}`}>
          <h3 className="font-playfair font-semibold text-gray-800 mb-2 text-sm leading-tight line-clamp-2 hover:text-pink-600 transition-colors">
            {product.producto}
          </h3>
        </Link>
        
        {/* Category */}
        <p className="text-xs text-gray-500 mb-4 font-lato">{product.categoria_L2}</p>
        
        {/* Pricing */}
        <div className="mb-4">
          {hasDiscount ? (
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-pink-600 font-playfair">
                    ${priceToShow.toLocaleString()}
                  </span>
                  <span className="text-xs text-pink-500 ml-1 font-lato">prof.</span>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-400 line-through font-lato">
                    ${product.precio_publico_ARS.toLocaleString()}
                  </span>
                  <span className="text-xs text-gray-400 block font-lato">público</span>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <span className="text-lg font-bold text-pink-600 font-playfair">
                ${priceToShow.toLocaleString()}
              </span>
              <span className="text-xs text-gray-500 ml-1 font-lato">
                {isProfessional ? 'prof.' : 'consultar'}
              </span>
            </div>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button 
            onClick={handleAddToCart}
            className="flex-1 btn-pastel text-sm py-2 font-lato font-medium hover:shadow-lg"
            disabled={!product.disponible}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Agregar
          </Button>
          <Button 
            onClick={handleWhatsAppInquiry}
            className="btn-lavender text-sm py-2 px-3 hover:shadow-lg"
          >
            <MessageCircle className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;