import React, { createContext, useContext, useReducer, useEffect } from 'react';

const UserContext = createContext();

const initialState = {
  isProfessional: false,
  favoriteProducts: [],
  recentlyViewed: [],
  currency: 'ARS',
  priceDisplay: 'both', // 'professional' | 'public' | 'both'
  userInfo: null
};

function userReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_FAVORITE': {
      const productId = action.payload;
      const isFavorite = state.favoriteProducts.includes(productId);
      
      return {
        ...state,
        favoriteProducts: isFavorite
          ? state.favoriteProducts.filter(id => id !== productId)
          : [...state.favoriteProducts, productId]
      };
    }
    
    case 'ADD_TO_RECENTLY_VIEWED': {
      const productId = action.payload;
      const recentlyViewed = [
        productId,
        ...state.recentlyViewed.filter(id => id !== productId)
      ].slice(0, 10); // Keep only last 10 items
      
      return { ...state, recentlyViewed };
    }
    
    case 'REGISTER_AS_PROFESSIONAL':
      return {
        ...state,
        isProfessional: true,
        userInfo: action.payload,
        priceDisplay: 'professional'
      };
    
    case 'SET_PRICE_DISPLAY':
      return { ...state, priceDisplay: action.payload };
    
    case 'LOAD_USER_DATA':
      return { ...state, ...action.payload };
    
    default:
      return state;
  }
}

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);
  
  useEffect(() => {
    const savedUserData = localStorage.getItem('rebeca-beauty-user');
    if (savedUserData) {
      const userData = JSON.parse(savedUserData);
      dispatch({ type: 'LOAD_USER_DATA', payload: userData });
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('rebeca-beauty-user', JSON.stringify({
      isProfessional: state.isProfessional,
      favoriteProducts: state.favoriteProducts,
      recentlyViewed: state.recentlyViewed,
      priceDisplay: state.priceDisplay,
      userInfo: state.userInfo
    }));
  }, [state]);
  
  const toggleFavorite = (productId) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: productId });
  };
  
  const addToRecentlyViewed = (productId) => {
    dispatch({ type: 'ADD_TO_RECENTLY_VIEWED', payload: productId });
  };
  
  const registerAsProfessional = (data) => {
    dispatch({ type: 'REGISTER_AS_PROFESSIONAL', payload: data });
  };
  
  const setPriceDisplay = (display) => {
    dispatch({ type: 'SET_PRICE_DISPLAY', payload: display });
  };
  
  const value = {
    ...state,
    toggleFavorite,
    addToRecentlyViewed,
    registerAsProfessional,
    setPriceDisplay
  };
  
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}