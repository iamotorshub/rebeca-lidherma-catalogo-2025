import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { faqs } from '../../data/mockProducts';

const FAQAccordion = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <HelpCircle className="w-16 h-16 mx-auto text-pink-500 mb-4" />
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-700 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-gray-600 font-lato max-w-2xl mx-auto">
              Todas las respuestas sobre productos, envíos y servicios de Rebeca Beauty Store
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openItems.has(faq.id);
              
              return (
                <div key={faq.id} className="beauty-card overflow-hidden">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-pink-50 transition-colors"
                  >
                    <h3 className="font-playfair font-semibold text-lg text-gray-800 pr-4">
                      {faq.pregunta}
                    </h3>
                    <div className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDown className="h-5 w-5 text-pink-500" />
                    </div>
                  </button>
                  
                  {/* Animated content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-5 border-t border-pink-100">
                      <p className="font-lato text-gray-600 leading-relaxed pt-4">
                        {faq.respuesta}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Bottom */}
          <div className="text-center mt-12">
            <div className="beauty-card p-8 gradient-pink">
              <h3 className="font-playfair font-bold text-xl text-gray-700 mb-4">
                ¿No encontraste la respuesta?
              </h3>
              <p className="font-lato text-gray-600 mb-6">
                Rebeca te responde personalmente por WhatsApp
              </p>
              <button
                onClick={() => {
                  const message = encodeURIComponent("¡Hola Rebeca! Tengo una consulta que no está en las preguntas frecuentes. ¿Me podrías ayudar? 💆‍♀️");
                  window.open(`https://wa.me/5492915660198?text=${message}`, '_blank');
                }}
                className="btn-lavender font-lato px-8 py-3 inline-flex items-center"
              >
                <HelpCircle className="w-5 h-5 mr-2" />
                Hacer Consulta Personal
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;