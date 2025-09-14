import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./contexts/ProductContext";
import { CartProvider } from "./contexts/CartContext";
import { UserProvider } from "./contexts/UserContext";
import { Toaster } from "./components/ui/toaster";

// Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Pages
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactPage from "./pages/ContactPage";
import CategoryPage from "./pages/CategoryPage";
import LinePage from "./pages/LinePage";

function AppProviders({ children }) {
  return (
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          {children}
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppProviders>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/productos" element={<ProductsPage />} />
                <Route path="/producto/:slug" element={<ProductDetailPage />} />
                <Route path="/carrito" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/contacto" element={<ContactPage />} />
                <Route path="/cuidado-piel" element={<CategoryPage category="Cuidado de la piel" />} />
                <Route path="/maquillaje" element={<CategoryPage category="Maquillaje" />} />
                <Route path="/solares" element={<CategoryPage category="Solares" />} />
                <Route path="/linea/:slug" element={<LinePage />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <Toaster />
        </AppProviders>
      </BrowserRouter>
    </div>
  );
}

export default App;