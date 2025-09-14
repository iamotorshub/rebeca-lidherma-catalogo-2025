import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { useToast } from '../hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate WhatsApp message
    const whatsappMessage = `*CONSULTA DESDE WEB*

Nombre: ${formData.nombre}
Email: ${formData.email}
Teléfono: ${formData.telefono}
Asunto: ${formData.asunto}

Mensaje:
${formData.mensaje}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/5491140000000?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: ''
    });

    toast({
      title: "Consulta enviada",
      description: "Te responderemos a la brevedad por WhatsApp",
    });
  };

  const handleWhatsAppDirect = () => {
    const message = encodeURIComponent("Hola! Me gustaría recibir información sobre productos Lidherma.");
    const whatsappUrl = `https://wa.me/5491140000000?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Contacto</h1>
          <p className="text-lg text-gray-600">
            Estamos aquí para ayudarte con todas tus consultas sobre productos Lidherma
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Company Info */}
            <Card>
              <CardHeader>
                <CardTitle>Rebeca Beauty Store</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Somos distribuidores oficiales de LIDHERMA en Argentina, 
                  especializados en productos de belleza profesional con más de 10 años de experiencia.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-[#2d5aa0]" />
                    <div>
                      <p className="font-medium">Ubicación</p>
                      <p className="text-gray-600">Buenos Aires, Argentina</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#2d5aa0]" />
                    <div>
                      <p className="font-medium">Teléfono</p>
                      <p className="text-gray-600">+54 11 4000-0000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[#2d5aa0]" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">info@rebecabeautystore.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-[#2d5aa0]" />
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-gray-600">Atención personalizada 24/7</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Horarios de Atención
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Lunes a Viernes</span>
                  <span className="font-medium">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados</span>
                  <span className="font-medium">9:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos</span>
                  <span className="text-gray-500">Cerrado</span>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    <MessageCircle className="h-4 w-4 inline mr-1" />
                    WhatsApp disponible 24/7 para consultas urgentes
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Contacto Rápido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Para consultas inmediatas, podés contactarnos directamente por WhatsApp
                </p>
                <Button
                  onClick={handleWhatsAppDirect}
                  className="w-full bg-[#25d366] hover:bg-[#20a85a] text-white"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Enviar Consulta</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nombre">Nombre completo *</Label>
                      <Input
                        id="nombre"
                        value={formData.nombre}
                        onChange={(e) => handleInputChange('nombre', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="telefono">Teléfono *</Label>
                      <Input
                        id="telefono"
                        value={formData.telefono}
                        onChange={(e) => handleInputChange('telefono', e.target.value)}
                        placeholder="+54 9 11 1234-5678"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="asunto">Asunto *</Label>
                    <Input
                      id="asunto"
                      value={formData.asunto}
                      onChange={(e) => handleInputChange('asunto', e.target.value)}
                      placeholder="Ej: Consulta sobre precios profesionales"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="mensaje">Mensaje *</Label>
                    <Textarea
                      id="mensaje"
                      value={formData.mensaje}
                      onChange={(e) => handleInputChange('mensaje', e.target.value)}
                      placeholder="Escribí tu consulta aquí..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-[#2d5aa0] hover:bg-[#1a4480]"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Consulta por WhatsApp
                  </Button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    Tu consulta será enviada por WhatsApp para una respuesta más rápida
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">¿Cómo accedo a precios profesionales?</h3>
                <p className="text-gray-600 text-sm">
                  Contactanos por WhatsApp con tu matrícula profesional o certificado de estudios 
                  en estética para activar los precios especiales.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">¿Hacen envíos a todo el país?</h3>
                <p className="text-gray-600 text-sm">
                  Sí, enviamos a toda Argentina. Los costos y tiempos de entrega 
                  se coordinan según la ubicación y el monto de la compra.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">¿Los productos son originales?</h3>
                <p className="text-gray-600 text-sm">
                  Somos distribuidores oficiales de LIDHERMA. Todos nuestros productos 
                  son 100% originales y vienen directo del laboratorio.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">¿Ofrecen asesoramiento?</h3>
                <p className="text-gray-600 text-sm">
                  Sí, nuestro equipo de asesores especializados puede ayudarte a elegir 
                  los productos ideales para tu tipo de piel o tratamiento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;