import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { mockProducts, mockCategories, mockLineas } from '../data/mockProducts';

const ProductContext = createContext();

const initialState = {
  allProducts: [],
  filteredProducts: [],
  featuredProducts: [],
  categories: [],
  lineas: [],
  loading: false,
  error: null,
  searchQuery: '',
  filters: {
    lineas: [],
    categorias: [],
    precioMin: 0,
    precioMax: 100000,
    tipoProducto: [],
    disponibilidad: true
  },
  currentPage: 1,
  itemsPerPage: 12,
  totalPages: 1
};

function productReducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    
    case 'SET_PRODUCTS':
      return {
        ...state,
        allProducts: action.payload,
        filteredProducts: action.payload,
        featuredProducts: action.payload.slice(0, 8),
        loading: false
      };
    
    case 'SET_CATEGORIES':
      return { ...state, categories: action.payload };
    
    case 'SET_LINEAS':
      return { ...state, lineas: action.payload };
    
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    
    case 'SET_FILTERS':
      return { ...state, filters: { ...state.filters, ...action.payload } };
    
    case 'FILTER_PRODUCTS':
      const filtered = filterProducts(state.allProducts, state.searchQuery, state.filters);
      return {
        ...state,
        filteredProducts: filtered,
        totalPages: Math.ceil(filtered.length / state.itemsPerPage),
        currentPage: 1
      };
    
    case 'SET_PAGE':
      return { ...state, currentPage: action.payload };
    
    default:
      return state;
  }
}

function filterProducts(products, searchQuery, filters) {
  let filtered = [...products];
  
  // Search filter
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(product =>
      product.producto.toLowerCase().includes(query) ||
      product.linea.toLowerCase().includes(query) ||
      product.categoria_L2.toLowerCase().includes(query) ||
      product.tipo.toLowerCase().includes(query)
    );
  }
  
  // Line filter
  if (filters.lineas.length > 0) {
    filtered = filtered.filter(product => 
      filters.lineas.includes(product.linea)
    );
  }
  
  // Category filter
  if (filters.categorias.length > 0) {
    filtered = filtered.filter(product =>
      filters.categorias.includes(product.categoria_L2)
    );
  }
  
  // Price filter
  filtered = filtered.filter(product =>
    product.precio_profesional_ARS >= filters.precioMin &&
    product.precio_profesional_ARS <= filters.precioMax
  );
  
  // Product type filter
  if (filters.tipoProducto.length > 0) {
    filtered = filtered.filter(product =>
      filters.tipoProducto.includes(product.tipo)
    );
  }
  
  // Availability filter
  if (filters.disponibilidad) {
    filtered = filtered.filter(product => product.disponible);
  }
  
  return filtered;
}

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, initialState);
  
  useEffect(() => {
    // Simulate API call
    dispatch({ type: 'SET_LOADING', payload: true });
    setTimeout(() => {
      dispatch({ type: 'SET_PRODUCTS', payload: mockProducts });
      dispatch({ type: 'SET_CATEGORIES', payload: mockCategories });
      dispatch({ type: 'SET_LINEAS', payload: mockLineas });
    }, 1000);
  }, []);
  
  useEffect(() => {
    dispatch({ type: 'FILTER_PRODUCTS' });
  }, [state.searchQuery, state.filters]);
  
  const searchProducts = (query) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
  };
  
  const filterProducts = (newFilters) => {
    dispatch({ type: 'SET_FILTERS', payload: newFilters });
  };
  
  const getProductBySlug = (slug) => {
    return state.allProducts.find(product => product.slug === slug);
  };
  
  const getProductsByLine = (line) => {
    return state.allProducts.filter(product => product.linea === line);
  };
  
  const getProductsByCategory = (category) => {
    return state.allProducts.filter(product => product.categoria_L2 === category);
  };
  
  const setPage = (page) => {
    dispatch({ type: 'SET_PAGE', payload: page });
  };
  
  const value = {
    ...state,
    searchProducts,
    filterProducts,
    getProductBySlug,
    getProductsByLine,
    getProductsByCategory,
    setPage
  };
  
  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}