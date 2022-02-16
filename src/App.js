import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Category from './Category';
import Home from './Home';
import ListProduct from './ListProduct';
import ListSearch from './ListSearch';
import ProductDetail from './ProductDetail';
import NotFound from './NotFound';
import ShoppingCart from './ShoppingCart';
import Order from './Order';
import Login from './Login';
import { CartProvider } from 'react-use-cart';
import Register from './Register';
import { Main, Seller, Setting } from './Profile';
import ProtectedRoute from './ProtectedRoute';



const App = () => {

  return (
    <CartProvider>
      <Router>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="category" element={<Category />} />
            <Route path="search" element={<ListSearch />} />
            <Route path="category/:id" element={<ListProduct />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="cart" element={<ShoppingCart />} />
            <Route path="order" element={<Order />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

            <Route element={<ProtectedRoute />}>
              <Route path="profile/main" element={<Main />} />
              <Route path="profile/seller" element={<Seller />} />
              <Route path="profile/setting" element={<Setting />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      </Router>
    </CartProvider>
  )
}

export default App
