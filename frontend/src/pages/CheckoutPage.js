import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, User, MapPin, Phone, Mail, FileText } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { useToast } from '../hooks/use-toast';

const CheckoutPage = () => {
  const { items, total, itemCount, isProfessional, generateWhatsAppMessage, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [customerInfo, setCustomerInfo] = useState({
    nombre: '',
    telefono: '',
    email: '',
    ciudad: '',
    provincia: '',
    direccion: '',
    comentarios: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!customerInfo.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }
    
    if (!customerInfo.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    }
    
    if (!customerInfo.ciudad.trim()) {
      newErrors.ciudad = 'La ciudad es requerida';
    }
    
    if (!customerInfo.provincia.trim()) {
      newErrors.provincia = 'La provincia es requerida';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppCheckout = () => {
    if (!validateForm()) {
      toast({
        title: "Completá los datos requeridos",
        description: "Por favor completá todos los campos obligatorios",
        variant: "destructive"
      });
      return;
    }

    const orderMessage = generateCustomWhatsAppMessage();
    const encodedMessage = encodeURIComponent(orderMessage);
    const whatsappUrl = `https://wa.me/5491140000000?text=${encodedMessage}`;
    
    // Clear cart and redirect
    clearCart();
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Pedido enviado",
      description: "Tu pedido fue enviado por WhatsApp. Te responderemos a la brevedad.",
    });
    
    navigate('/');
  };

  const generateCustomWhatsAppMessage = () => {
    let message = `🛒 *NUEVO PEDIDO - REBECA BEAUTY STORE*\n\n`;
    
    // Customer info
    message += `👤 *DATOS DEL CLIENTE:*\n`;
    message += `Nombre: ${customerInfo.nombre}\n`;
    message += `Teléfono: ${customerInfo.telefono}\n`;
    message += `Email: ${customerInfo.email || 'No proporcionado'}\n`;
    message += `Ciudad: ${customerInfo.ciudad}\n`;
    message += `Provincia: ${customerInfo.provincia}\n`;
    if (customerInfo.direccion) {
      message += `Dirección: ${customerInfo.direccion}\n`;
    }
    message += `\n`;
    
    // Products
    message += `📦 *PRODUCTOS:*\n`;
    items.forEach((item, index) => {
      const price = isProfessional ? item.precio_profesional_ARS : (item.precio_publico_ARS || item.precio_profesional_ARS);
      const subtotal = price * item.cantidad;
      
      message += `${index + 1}. *${item.producto}*\n`;
      message += `   Línea: ${item.linea}\n`;
      message += `   Presentación: ${item.presentacion}\n`;
      message += `   Cantidad: ${item.cantidad}\n`;
      message += `   Precio c/u: $${price.toLocaleString()}\n`;
      message += `   Subtotal: $${subtotal.toLocaleString()}\n\n`;
    });
    
    // Total
    const priceType = isProfessional ? 'profesional' : 'público';
    message += `💰 *TOTAL: $${total.toLocaleString()} (${priceType})*\n\n`;
    
    // Comments
    if (customerInfo.comentarios) {
      message += `💬 *COMENTARIOS:*\n${customerInfo.comentarios}\n\n`;
    }
    
    message += `¿Confirman disponibilidad y costos de envío? ¡Gracias!`;
    
    return message;
  };

  if (itemCount === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No hay productos en el carrito</h2>
          <Link to="/productos">
            <Button className="bg-[#2d5aa0] hover:bg-[#1a4480]">
              Ver Catálogo
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/carrito">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al carrito
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Finalizar Compra</h1>
          <p className="text-gray-600 mt-2">Completá tus datos para coordinar la entrega</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Customer Information Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Datos Personales
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nombre">Nombre completo *</Label>
                    <Input
                      id="nombre"
                      value={customerInfo.nombre}
                      onChange={(e) => handleInputChange('nombre', e.target.value)}
                      className={errors.nombre ? 'border-red-500' : ''}
                    />
                    {errors.nombre && (
                      <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="telefono">Teléfono *</Label>
                    <Input
                      id="telefono"
                      value={customerInfo.telefono}
                      onChange={(e) => handleInputChange('telefono', e.target.value)}
                      className={errors.telefono ? 'border-red-500' : ''}
                      placeholder="Ej: +54 9 11 1234-5678"
                    />
                    {errors.telefono && (
                      <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="tu@email.com"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Ubicación
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="ciudad">Ciudad *</Label>
                    <Input
                      id="ciudad"
                      value={customerInfo.ciudad}
                      onChange={(e) => handleInputChange('ciudad', e.target.value)}
                      className={errors.ciudad ? 'border-red-500' : ''}
                    />
                    {errors.ciudad && (
                      <p className="text-red-500 text-sm mt-1">{errors.ciudad}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="provincia">Provincia *</Label>
                    <Input
                      id="provincia"
                      value={customerInfo.provincia}
                      onChange={(e) => handleInputChange('provincia', e.target.value)}
                      className={errors.provincia ? 'border-red-500' : ''}
                    />
                    {errors.provincia && (
                      <p className="text-red-500 text-sm mt-1">{errors.provincia}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="direccion">Dirección (opcional)</Label>
                  <Input
                    id="direccion"
                    value={customerInfo.direccion}
                    onChange={(e) => handleInputChange('direccion', e.target.value)}
                    placeholder="Calle, número, piso, depto"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Comentarios Adicionales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={customerInfo.comentarios}
                  onChange={(e) => handleInputChange('comentarios', e.target.value)}
                  placeholder="Horarios de entrega preferidos, referencias, consultas especiales..."
                  rows={4}
                />
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <Card>
              <CardHeader>
                <CardTitle>Resumen del Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Products List */}
                <div className="space-y-3">
                  {items.map((item) => {
                    const price = isProfessional ? item.precio_profesional_ARS : (item.precio_publico_ARS || item.precio_profesional_ARS);
                    const itemTotal = price * item.cantidad;
                    
                    return (
                      <div key={item.id} className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.imagen_url}
                            alt={item.producto}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/48x48/f3f4f6/9ca3af?text=L';
                            }}
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{item.producto}</h4>
                          <p className="text-xs text-gray-500">{item.linea} • {item.presentacion}</p>
                          <p className="text-xs">Cantidad: {item.cantidad}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-[#2d5aa0]">${itemTotal.toLocaleString()}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <Separator />
                
                {/* Pricing Type */}
                <div className="flex justify-between">
                  <span>Tipo de precio:</span>
                  <Badge className={isProfessional ? 'bg-[#28a745]' : 'bg-gray-500'}>
                    {isProfessional ? 'Profesional' : 'Público'}
                  </Badge>
                </div>
                
                {/* Total */}
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-[#2d5aa0]">${total.toLocaleString()}</span>
                </div>
                
                <div className="text-sm text-gray-600 bg-yellow-50 p-3 rounded-lg">
                  <p className="font-medium text-yellow-800 mb-1">Importante:</p>
                  <ul className="space-y-1 text-yellow-700">
                    <li>• El precio final incluye todos los productos</li>
                    <li>• Los costos de envío se coordinarán por WhatsApp</li>
                    <li>• Confirmación de stock al momento del pedido</li>
                  </ul>
                </div>
                
                <Button
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-[#25d366] hover:bg-[#20a85a] text-white text-lg py-3"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Finalizar por WhatsApp
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  Al finalizar, se abrirá WhatsApp con tu pedido completo para coordinar la entrega
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;