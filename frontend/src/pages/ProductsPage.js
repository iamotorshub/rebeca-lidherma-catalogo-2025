import React, { useState, useMemo } from 'react';
import { Filter, Grid, List, SlidersHorizontal } from 'lucide-react';
import { useProducts } from '../contexts/ProductContext';
import ProductCard from '../components/product/ProductCard';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Checkbox } from '../components/ui/checkbox';
import { Label } from '../components/ui/label';
import { Slider } from '../components/ui/slider';

const ProductsPage = () => {
  const { 
    filteredProducts, 
    loading, 
    lineas, 
    searchProducts, 
    filterProducts,
    filters,
    currentPage,
    itemsPerPage,
    totalPages,
    setPage
  } = useProducts();

  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('nombre');
  const [localFilters, setLocalFilters] = useState(filters);

  // Get unique categories and product types
  const categories = [...new Set(filteredProducts.map(p => p.categoria_L2))];
  const productTypes = [...new Set(filteredProducts.map(p => p.tipo))];

  // Sort products
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    switch (sortBy) {
      case 'precio-asc':
        return sorted.sort((a, b) => a.precio_profesional_ARS - b.precio_profesional_ARS);
      case 'precio-desc':
        return sorted.sort((a, b) => b.precio_profesional_ARS - a.precio_profesional_ARS);
      case 'linea':
        return sorted.sort((a, b) => a.linea.localeCompare(b.linea));
      case 'nombre':
      default:
        return sorted.sort((a, b) => a.producto.localeCompare(b.producto));
    }
  }, [filteredProducts, sortBy]);

  // Paginated products
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return sortedProducts.slice(start, end);
  }, [sortedProducts, currentPage, itemsPerPage]);

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...localFilters };
    
    if (filterType === 'lineas' || filterType === 'categorias' || filterType === 'tipoProducto') {
      if (newFilters[filterType].includes(value)) {
        newFilters[filterType] = newFilters[filterType].filter(item => item !== value);
      } else {
        newFilters[filterType] = [...newFilters[filterType], value];
      }
    } else {
      newFilters[filterType] = value;
    }
    
    setLocalFilters(newFilters);
  };

  const applyFilters = () => {
    filterProducts(localFilters);
    setShowFilters(false);
  };

  const clearFilters = () => {
    const resetFilters = {
      lineas: [],
      categorias: [],
      precioMin: 0,
      precioMax: 100000,
      tipoProducto: [],
      disponibilidad: true
    };
    setLocalFilters(resetFilters);
    filterProducts(resetFilters);
  };

  const FilterPanel = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Filtros</h3>
        <Button variant="ghost" onClick={clearFilters} className="text-sm">
          Limpiar
        </Button>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <Label className="text-sm font-medium mb-3 block">Rango de Precio</Label>
        <div className="space-y-3">
          <Slider
            value={[localFilters.precioMin, localFilters.precioMax]}
            onValueChange={([min, max]) => {
              setLocalFilters(prev => ({ ...prev, precioMin: min, precioMax: max }));
            }}
            max={100000}
            step={1000}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>${localFilters.precioMin.toLocaleString()}</span>
            <span>${localFilters.precioMax.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Lines */}
      <div className="mb-6">
        <Label className="text-sm font-medium mb-3 block">Líneas</Label>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {lineas.map((linea) => (
            <div key={linea} className="flex items-center space-x-2">
              <Checkbox
                id={`linea-${linea}`}
                checked={localFilters.lineas.includes(linea)}
                onCheckedChange={() => handleFilterChange('lineas', linea)}
              />
              <Label
                htmlFor={`linea-${linea}`}
                className="text-sm font-normal cursor-pointer"
              >
                {linea}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <Label className="text-sm font-medium mb-3 block">Categorías</Label>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={localFilters.categorias.includes(category)}
                onCheckedChange={() => handleFilterChange('categorias', category)}
              />
              <Label
                htmlFor={`category-${category}`}
                className="text-sm font-normal cursor-pointer"
              >
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Product Types */}
      <div className="mb-6">
        <Label className="text-sm font-medium mb-3 block">Tipo de Producto</Label>
        <div className="space-y-2">
          {productTypes.map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox
                id={`type-${type}`}
                checked={localFilters.tipoProducto.includes(type)}
                onCheckedChange={() => handleFilterChange('tipoProducto', type)}
              />
              <Label
                htmlFor={`type-${type}`}
                className="text-sm font-normal cursor-pointer"
              >
                {type}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Button onClick={applyFilters} className="w-full bg-[#2d5aa0] hover:bg-[#1a4480]">
        Aplicar Filtros
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Catálogo de Productos</h1>
          <p className="text-gray-600">
            Descubrí toda la línea LIDHERMA con precios especiales
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 space-y-4 lg:space-y-0">
          {/* Search */}
          <div className="flex-1 max-w-md">
            <Input
              type="search"
              placeholder="Buscar productos..."
              onChange={(e) => searchProducts(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Ordenar por..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nombre">Nombre</SelectItem>
                <SelectItem value="precio-asc">Precio: Menor a Mayor</SelectItem>
                <SelectItem value="precio-desc">Precio: Mayor a Menor</SelectItem>
                <SelectItem value="linea">Línea</SelectItem>
              </SelectContent>
            </Select>

            {/* View Mode */}
            <div className="flex rounded-lg border border-gray-300 overflow-hidden">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>

            {/* Mobile Filter Toggle */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6">
          <p className="text-gray-600">
            Mostrando {paginatedProducts.length} de {filteredProducts.length} productos
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar - Desktop */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <FilterPanel />
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden mb-6">
              <FilterPanel />
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(12)].map((_, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
                    <div className="aspect-square bg-gray-200"></div>
                    <div className="p-4">
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
                      <div className="h-8 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : paginatedProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No se encontraron productos
                </h3>
                <p className="text-gray-600 mb-4">
                  Intentá ajustar los filtros o usar otros términos de búsqueda
                </p>
                <Button onClick={clearFilters} variant="outline">
                  Limpiar Filtros
                </Button>
              </div>
            ) : (
              <>
                <div className={`grid gap-6 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                    : 'grid-cols-1'
                }`}>
                  {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-12">
                    <div className="flex space-x-2">
                      {[...Array(totalPages)].map((_, index) => {
                        const page = index + 1;
                        return (
                          <Button
                            key={page}
                            variant={currentPage === page ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setPage(page)}
                            className={currentPage === page ? 'bg-[#2d5aa0] hover:bg-[#1a4480]' : ''}
                          >
                            {page}
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;