# API Contracts - Rebeca Beauty Store

## Backend Implementation Plan

### 1. Database Schema

#### Products Collection (MongoDB)
```javascript
{
  _id: ObjectId,
  slug: String (unique, indexed),
  linea: String (indexed),
  categoria_L1: String (indexed), 
  categoria_L2: String (indexed),
  producto: String (indexed for search),
  presentacion: String,
  precio_profesional_ARS: Number,
  precio_publico_ARS: Number (optional),
  tipo: String (indexed),
  imagen_url: String,
  thumbnail_url: String,
  disponible: Boolean (default: true),
  descripcion: String (optional),
  ingredientes: String (optional),
  modo_uso: String (optional),
  created_at: Date,
  updated_at: Date
}
```

#### Orders Collection (MongoDB)
```javascript
{
  _id: ObjectId,
  order_number: String (unique),
  customer: {
    nombre: String,
    telefono: String,
    email: String,
    ciudad: String,
    provincia: String,
    direccion: String,
    comentarios: String
  },
  items: [{
    producto_id: ObjectId,
    producto: String,
    linea: String,
    presentacion: String,
    precio_unitario: Number,
    cantidad: Number,
    subtotal: Number
  }],
  total: Number,
  tipo_precio: String, // 'profesional' | 'publico'
  estado: String, // 'pendiente' | 'confirmado' | 'enviado' | 'entregado'
  whatsapp_message: String,
  created_at: Date,
  updated_at: Date
}
```

### 2. API Endpoints

#### Products API
- **GET /api/products** - Get all products with filtering
  - Query params: `page`, `limit`, `search`, `linea`, `categoria_L1`, `categoria_L2`, `tipo`, `precio_min`, `precio_max`, `disponible`
  - Response: `{ products: Product[], total: number, page: number, pages: number }`

- **GET /api/products/:slug** - Get product by slug
  - Response: `Product`

- **GET /api/products/linea/:linea** - Get products by line
  - Response: `Product[]`

- **GET /api/products/categoria/:categoria** - Get products by category
  - Response: `Product[]`

#### Categories & Lines API
- **GET /api/categories** - Get all categories
  - Response: `{ categoria_L1: string, count: number }[]`

- **GET /api/lineas** - Get all product lines
  - Response: `{ linea: string, count: number }[]`

#### Orders API
- **POST /api/orders** - Create new order
  - Body: `{ customer: CustomerInfo, items: CartItem[], total: number, tipo_precio: string }`
  - Response: `{ order_id: string, whatsapp_url: string }`

- **GET /api/orders/:id** - Get order by ID
  - Response: `Order`

### 3. Mock Data Integration Points

#### Current Mock Files to Replace:
1. **`/app/frontend/src/data/mockProducts.js`**
   - `mockProducts` → Replace with API call to `/api/products`
   - `mockCategories` → Replace with API call to `/api/categories`
   - `mockLineas` → Replace with API call to `/api/lineas`

#### Frontend Context Updates:
2. **ProductContext (`/app/frontend/src/contexts/ProductContext.js`)**
   - Replace `setTimeout` simulation with actual `axios` calls
   - Update `filterProducts` to work with backend pagination
   - Implement server-side search functionality

3. **CartContext (`/app/frontend/src/contexts/CartContext.js`)**
   - Update `generateWhatsAppMessage` to use order creation API
   - Implement order persistence

### 4. Environment Variables
```bash
# Backend
MONGO_URL=mongodb://localhost:27017/rebeca-beauty-store
DB_NAME=rebeca-beauty-store

# Frontend (already configured)
REACT_APP_BACKEND_URL=existing_configured_url
```

### 5. Data Import Strategy

#### CSV Product Import
- Create migration script to import 180+ products from provided CSV files
- Map CSV columns to database schema
- Generate slugs from product names
- Set up image URL patterns for LIDHERMA products

#### Sample API Response Format
```javascript
// GET /api/products?page=1&limit=12
{
  "products": [
    {
      "_id": "...",
      "slug": "hyaluronic-4d-serum-30ml",
      "linea": "Hyaluronic 4D",
      "categoria_L1": "Cuidado de la piel",
      "categoria_L2": "Hidratación", 
      "producto": "Serum Hyaluronic 4D",
      "presentacion": "30ml",
      "precio_profesional_ARS": 28500,
      "precio_publico_ARS": 35600,
      "tipo": "Serum",
      "imagen_url": "https://skinhouselidhermaarg.vtexassets.com/arquivos/...",
      "disponible": true
    }
  ],
  "total": 180,
  "page": 1,
  "pages": 15
}
```

### 6. Performance Optimizations

#### Database Indexes
```javascript
// Products collection indexes
db.products.createIndex({ "slug": 1 })
db.products.createIndex({ "linea": 1 })
db.products.createIndex({ "categoria_L1": 1, "categoria_L2": 1 })
db.products.createIndex({ "producto": "text", "linea": "text" })
db.products.createIndex({ "precio_profesional_ARS": 1 })
db.products.createIndex({ "disponible": 1 })
```

#### Caching Strategy
- Redis cache for frequently accessed data (categories, lines)
- Product list caching with 15-minute TTL
- Image URL caching

### 7. Search Implementation
- MongoDB text search on `producto` and `linea` fields
- Fuzzy search for product names
- Auto-complete suggestions
- Search result ranking by relevance

### 8. Image Handling
- Primary: LIDHERMA official image URLs
- Fallback: Placeholder images with LIDHERMA branding
- Image optimization and lazy loading
- CDN integration for faster loading

### 9. Order Processing Workflow
1. Frontend cart → Backend order creation
2. Generate WhatsApp message with order details
3. Store order in database with "pendiente" status
4. Return WhatsApp URL for customer
5. Admin can update order status via backend

### 10. Admin Features (Future)
- Product management CRUD
- Order status updates
- Inventory management
- Sales reports
- Customer management

This contract ensures seamless integration between the current mock frontend and the upcoming MongoDB backend while maintaining all existing functionality.