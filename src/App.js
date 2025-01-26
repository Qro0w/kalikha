import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import SellerCenter from './pages/SellerCenter';  // New page
import MyOrders from './pages/MyOrders';          // New page
import MyProfile from './pages/MyProfile';        // New page
import Navbar from './components/Navbar';         // Navbar component

function App() {
  return (
    <Router>
      <Navbar /> {/* This is where your Navbar will appear on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/seller-center" element={<SellerCenter />} /> {/* Seller Center page */}
        <Route path="/my-orders" element={<MyOrders />} />           {/* My Orders page */}
        <Route path="/my-profile" element={<MyProfile />} />         {/* My Profile page */}
      </Routes>
    </Router>
  );
}

export default App;
