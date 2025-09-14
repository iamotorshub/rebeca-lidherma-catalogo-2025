import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { whatsappConfig } from '../data/mockProducts';

const CartContext = createContext();

const initialState = {
  items: [],
  subtotal: 0,
  total: 0,
  itemCount: 0,
  isProfessional: false
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, cantidad: item.cantidad + (action.quantity || 1) }
            : item
        );
        return { ...state, items: updatedItems };
      } else {
        const newItem = {
          ...action.payload,
          cantidad: action.quantity || 1
        };
        return { ...state, items: [...state.items, newItem] };
      }
    }
    
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, cantidad: Math.max(0, action.payload.quantity) }
            : item
        ).filter(item => item.cantidad > 0)
      };
    
    case 'CLEAR_CART':
      return { ...state, items: [] };
    
    case 'TOGGLE_PROFESSIONAL':
      return { ...state, isProfessional: !state.isProfessional };
    
    case 'UPDATE_TOTALS':
      const itemCount = state.items.reduce((sum, item) => sum + item.cantidad, 0);
      const subtotal = state.items.reduce((sum, item) => {
        const price = state.isProfessional ? item.precio_profesional_ARS : (item.precio_publico_ARS || item.precio_profesional_ARS);
        return sum + (price * item.cantidad);
      }, 0);
      
      return {
        ...state,
        itemCount,
        subtotal,
        total: subtotal
      };
    
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  useEffect(() => {
    dispatch({ type: 'UPDATE_TOTALS' });
  }, [state.items, state.isProfessional]);
  
  useEffect(() => {
    const savedCart = localStorage.getItem('rebeca-beauty-cart');
    if (savedCart) {
      const cartData = JSON.parse(savedCart);
      cartData.items.forEach(item => {
        dispatch({ type: 'ADD_ITEM', payload: item, quantity: item.cantidad });
      });
      if (cartData.isProfessional) {
        dispatch({ type: 'TOGGLE_PROFESSIONAL' });
      }
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('rebeca-beauty-cart', JSON.stringify({
      items: state.items,
      isProfessional: state.isProfessional
    }));
  }, [state.items, state.isProfessional]);
  
  const addItem = (product, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: product, quantity });
  };
  
  const removeItem = (productId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  };
  
  const updateQuantity = (productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
  };
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  
  const toggleProfessional = () => {
    dispatch({ type: 'TOGGLE_PROFESSIONAL' });
  };
  
  const calculateDiscount = () => {
    if (!state.isProfessional) return 0;
    const publicTotal = state.items.reduce((sum, item) => {
      const publicPrice = item.precio_publico_ARS || item.precio_profesional_ARS;
      return sum + (publicPrice * item.cantidad);
    }, 0);
    return publicTotal - state.subtotal;
  };
  
  const generateWhatsAppMessage = () => {
    const total = state.total;
    const priceType = state.isProfessional ? 'profesional' : 'público';
    
    let message = `🛒 *NUEVO PEDIDO - REBECA BEAUTY STORE*\n\n`;
    message += `*PRODUCTOS:*\n`;
    
    state.items.forEach((item, index) => {
      const price = state.isProfessional ? item.precio_profesional_ARS : (item.precio_publico_ARS || item.precio_profesional_ARS);
      const subtotal = price * item.cantidad;
      
      message += `${index + 1}. *${item.producto}*\n`;
      message += `   Línea: ${item.linea}\n`;
      message += `   Presentación: ${item.presentacion}\n`;
      message += `   Cantidad: ${item.cantidad}\n`;
      message += `   Precio c/u (${priceType}): $${price.toLocaleString()}\n`;
      message += `   Subtotal: $${subtotal.toLocaleString()}\n\n`;
    });
    
    message += `💰 *TOTAL: $${total.toLocaleString()} (${priceType})*\n\n`;
    message += `¿Confirman disponibilidad y costos de envío? ¡Gracias!`;
    
    return message;
  };
  
  const sendToWhatsApp = () => {
    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };
  
  const value = {
    ...state,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleProfessional,
    calculateDiscount,
    generateWhatsAppMessage,
    sendToWhatsApp
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}