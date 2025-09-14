import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingCart, MessageCircle } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Switch } from '../components/ui/switch';

const CartPage = () => {
  const {
    items,
    subtotal,
    total,
    itemCount,
    isProfessional,
    removeItem,
    updateQuantity,
    clearCart,
    toggleProfessional,
    calculateDiscount,
    sendToWhatsApp
  } = useCart();

  const discount = calculateDiscount();

  if (itemCount === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingCart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tu carrito está vacío</h2>
          <p className="text-gray-600 mb-8">Descubrí nuestros productos y comenzá a agregar al carrito</p>
          <Link to="/productos">
            <Button className="bg-[#2d5aa0] hover:bg-[#1a4480]">
              Ver Catálogo de Productos
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Carrito de Compras</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Productos ({itemCount})</h2>
              <Button
                variant="ghost"
                onClick={clearCart}
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Vaciar carrito
              </Button>
            </div>
            
            {items.map((item) => {
              const currentPrice = isProfessional ? item.precio_profesional_ARS : (item.precio_publico_ARS || item.precio_profesional_ARS);
              const itemTotal = currentPrice * item.cantidad;
              
              return (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {/* Product Image */}
                      <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.imagen_url}
                          alt={item.producto}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/80x80/f3f4f6/9ca3af?text=L';
                          }}
                        />
                      </div>
                      
                      {/* Product Info */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {item.producto}
                            </h3>
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge variant="secondary" className="text-xs">
                                {item.linea}
                              </Badge>
                              <span className="text-sm text-gray-500">{item.presentacion}</span>
                            </div>
                            <p className="text-sm text-gray-600">{item.categoria_L2}</p>
                          </div>
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-gray-300 rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.cantidad - 1)}
                              className="px-3 py-1 hover:bg-gray-100 disabled:opacity-50"
                              disabled={item.cantidad <= 1}
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-4 py-1 border-x border-gray-300 min-w-[3rem] text-center">
                              {item.cantidad}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.cantidad + 1)}
                              className="px-3 py-1 hover:bg-gray-100"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          
                          {/* Price */}
                          <div className="text-right">
                            <p className="font-semibold text-lg text-[#2d5aa0]">
                              ${itemTotal.toLocaleString()}
                            </p>
                            <p className="text-sm text-gray-500">
                              ${currentPrice.toLocaleString()} c/u
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Resumen del Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Professional Toggle */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Precios Profesionales</p>
                    <p className="text-sm text-gray-600">
                      {isProfessional ? 'Activado' : 'Desactivado'}
                    </p>
                  </div>
                  <Switch
                    checked={isProfessional}
                    onCheckedChange={toggleProfessional}
                  />
                </div>
                
                {/* Price Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal ({itemCount} productos)</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Descuento profesional</span>
                      <span>-${discount.toLocaleString()}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Envío</span>
                    <span>A coordinar</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-[#2d5aa0]">${total.toLocaleString()}</span>
                  </div>
                </div>
                
                {/* Checkout Buttons */}
                <div className="space-y-3">
                  <Link to="/checkout">
                    <Button className="w-full bg-[#2d5aa0] hover:bg-[#1a4480] text-lg py-3">
                      Finalizar Compra
                    </Button>
                  </Link>
                  
                  <Button
                    onClick={sendToWhatsApp}
                    variant="outline"
                    className="w-full border-[#25d366] text-[#25d366] hover:bg-[#25d366] hover:text-white"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Enviar por WhatsApp
                  </Button>
                </div>
                
                {/* Benefits */}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-[#2d5aa0] mb-2">Beneficios incluidos:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Productos 100% originales</li>
                    <li>✓ Envío gratis en compras +$60.000</li>
                    <li>✓ Asesoramiento profesional</li>
                    <li>✓ Garantía de satisfacción</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Continue Shopping */}
        <div className="mt-8 text-center">
          <Link to="/productos">
            <Button variant="outline" className="border-[#2d5aa0] text-[#2d5aa0] hover:bg-[#2d5aa0] hover:text-white">
              Seguir Comprando
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;