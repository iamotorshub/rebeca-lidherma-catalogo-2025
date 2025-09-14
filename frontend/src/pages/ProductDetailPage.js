import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingCart, MessageCircle, ArrowLeft, Star, Shield, Truck } from 'lucide-react';
import { useProducts } from '../contexts/ProductContext';
import { useCart } from '../contexts/CartContext';
import { useUser } from '../contexts/UserContext';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { useToast } from '../hooks/use-toast';
import ProductCard from '../components/product/ProductCard';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const { getProductBySlug, getProductsByLine } = useProducts();
  const { addItem, isProfessional } = useCart();
  const { favoriteProducts, toggleFavorite, addToRecentlyViewed } = useUser();
  const { toast } = useToast();
  
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  
  const product = getProductBySlug(slug);
  const relatedProducts = product ? getProductsByLine(product.linea).filter(p => p.id !== product.id).slice(0, 4) : [];
  
  useEffect(() => {
    if (product) {
      addToRecentlyViewed(product.id);
    }
  }, [product, addToRecentlyViewed]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Producto no encontrado</h2>
          <Link to="/productos">
            <Button className="bg-[#2d5aa0] hover:bg-[#1a4480]">
              Ver Catálogo
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const isFavorite = favoriteProducts.includes(product.id);
  const priceToShow = isProfessional ? product.precio_profesional_ARS : (product.precio_publico_ARS || product.precio_profesional_ARS);
  const hasDiscount = product.precio_publico_ARS && isProfessional;

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast({
      title: "Producto agregado al carrito",
      description: `${quantity}x ${product.producto} se agregó correctamente`,
    });
  };

  const handleToggleFavorite = () => {
    toggleFavorite(product.id);
    toast({
      title: isFavorite ? "Eliminado de favoritos" : "Agregado a favoritos",
      description: `${product.producto} ${isFavorite ? 'se eliminó de' : 'se agregó a'} tus favoritos`,
    });
  };

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(`Hola! Estoy interesado/a en: ${product.producto} - ${product.linea} (${product.presentacion}). ¿Podrían darme más información sobre este producto?`);
    const whatsappUrl = `https://wa.me/5491140000000?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-[#2d5aa0]">Inicio</Link>
          <span>/</span>
          <Link to="/productos" className="hover:text-[#2d5aa0]">Productos</Link>
          <span>/</span>
          <Link to={`/cuidado-piel`} className="hover:text-[#2d5aa0]">{product.categoria_L1}</Link>
          <span>/</span>
          <span className="text-gray-900">{product.producto}</span>
        </div>

        {/* Back Button */}
        <Link to="/productos">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al catálogo
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.imagen_url}
                alt={product.producto}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/500x500/f3f4f6/9ca3af?text=Lidherma';
                }}
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Brand and Availability */}
            <div className="flex items-center justify-between">
              <Badge className="bg-gray-100 text-gray-700 text-sm">{product.linea}</Badge>
              <Badge className={`${product.disponible ? 'bg-[#28a745]' : 'bg-gray-400'}`}>
                {product.disponible ? 'Disponible' : 'Consultar'}
              </Badge>
            </div>

            {/* Product Name */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.producto}</h1>
              <p className="text-lg text-gray-600">{product.categoria_L2}</p>
              <p className="text-gray-500">{product.presentacion}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600">(4.8) 124 reseñas</span>
            </div>

            {/* Price */}
            <div className="bg-gray-50 p-6 rounded-lg">
              {hasDiscount ? (
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-3xl font-bold text-[#2d5aa0]">
                      ${priceToShow.toLocaleString()}
                    </span>
                    <Badge className="bg-[#ffc107] text-gray-900">
                      {Math.round((1 - priceToShow / product.precio_publico_ARS) * 100)}% OFF
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg text-gray-400 line-through">
                      ${product.precio_publico_ARS.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-500">precio público</span>
                  </div>
                  <p className="text-sm text-[#2d5aa0] font-medium mt-1">
                    Precio profesional aplicado
                  </p>
                </div>
              ) : (
                <div>
                  <span className="text-3xl font-bold text-[#2d5aa0]">
                    ${priceToShow.toLocaleString()}
                  </span>
                  <p className="text-sm text-gray-500 mt-1">
                    {isProfessional ? 'Precio profesional' : 'Consultá por precio profesional'}
                  </p>
                </div>
              )}
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="font-medium">Cantidad:</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#2d5aa0] hover:bg-[#1a4480] text-lg py-3"
                  disabled={!product.disponible}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Agregar al Carrito
                </Button>
                <Button
                  variant="outline"
                  onClick={handleToggleFavorite}
                  className={`px-4 ${isFavorite ? 'text-[#e63946] border-[#e63946]' : ''}`}
                >
                  <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
                </Button>
              </div>

              <Button
                onClick={handleWhatsAppInquiry}
                variant="outline"
                className="w-full border-[#25d366] text-[#25d366] hover:bg-[#25d366] hover:text-white"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Consultar por WhatsApp
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <Shield className="h-6 w-6 mx-auto text-[#2d5aa0] mb-2" />
                <p className="text-sm text-gray-600">100% Original</p>
              </div>
              <div className="text-center">
                <Truck className="h-6 w-6 mx-auto text-[#2d5aa0] mb-2" />
                <p className="text-sm text-gray-600">Envío gratis +$60k</p>
              </div>
              <div className="text-center">
                <MessageCircle className="h-6 w-6 mx-auto text-[#2d5aa0] mb-2" />
                <p className="text-sm text-gray-600">Asesoramiento</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'description', label: 'Descripción' },
                { id: 'ingredients', label: 'Ingredientes' },
                { id: 'usage', label: 'Modo de Uso' },
                { id: 'reviews', label: 'Reseñas' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-[#2d5aa0] text-[#2d5aa0]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {product.producto} de la línea {product.linea} es un {product.tipo.toLowerCase()} 
                  especialmente formulado para {product.categoria_L2.toLowerCase()}. 
                  Este producto de LIDHERMA combina activos de última generación para brindar 
                  resultados visibles y duraderos.
                </p>
                <p className="text-gray-700 mt-4">
                  Presentación: {product.presentacion}
                </p>
              </div>
            )}
            
            {activeTab === 'ingredients' && (
              <div className="prose max-w-none">
                <p className="text-gray-700">
                  Los ingredientes específicos de este producto están disponibles en el envase. 
                  Para información detallada sobre la composición, consultá por WhatsApp.
                </p>
              </div>
            )}
            
            {activeTab === 'usage' && (
              <div className="prose max-w-none">
                <p className="text-gray-700">
                  Aplicar según las indicaciones del envase. Para uso profesional, 
                  seguir el protocolo recomendado por LIDHERMA. 
                  Consultá con nuestros asesores para el mejor protocolo según tu tipo de piel.
                </p>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                        ))}
                      </div>
                      <span className="font-medium">María González</span>
                    </div>
                    <span className="text-sm text-gray-500">Hace 2 semanas</span>
                  </div>
                  <p className="text-gray-700">
                    "Excelente producto. Lo uso hace 3 meses y noto una gran mejora en mi piel. 
                    La atención de Rebeca Beauty Store es impecable."
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Otros productos de {product.linea}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;