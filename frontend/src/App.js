import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            {/* LoginScreen */}
            <Route path="/login" element={<LoginScreen />} />
            {/* RegisterScreen */}
            <Route path="/register" element={<RegisterScreen />} />
            {/* ProfileScreen */}
            <Route path="/profile" element={<ProfileScreen />} />
            {/* ShippingScreen */}
            <Route path="/shipping" element={<ShippingScreen />} />
            {/* PaymentScreen */}
            <Route path="/payment" element={<PaymentScreen />} />
            {/* PlaceOrderScreen */}
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            {/* OrderScreen */}
            <Route path="/order/:id" element={<OrderScreen />} />
            {/* ProductScreen */}
            <Route path="/product/:id" element={<ProductScreen />} />
            {/* CartScreen */}
            <Route path="/cart/:id?" element={<CartScreen />} />
            {/* UserListScreen */}
            <Route path="/admin/userlist" element={<UserListScreen />} />
            {/* UserEditScreen */}
            <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
            {/* ProductListScreen */}
            <Route path="/admin/productlist" element={<ProductListScreen />} />
            {/* ProductListScreen Page number */}
            <Route
              path="/admin/productlist/:pageNumber"
              element={<ProductListScreen />}
            />
            {/* ProductEditScreen */}
            <Route
              path="/admin/product/:id/edit"
              element={<ProductEditScreen />}
            />
            {/* OrderListScreen */}
            <Route path="/admin/orderlist" element={<OrderListScreen />} />
            {/* HomeScreen Search */}
            <Route path="/search/:keyword" element={<HomeScreen />} />
            {/* HomeScreen Search Page number */}
            <Route
              path="/search/:keyword/page/:pageNumber"
              element={<HomeScreen />}
            />
            {/* HomeScreen Page number */}
            <Route path="/page/:pageNumber" element={<HomeScreen />} />
            {/* HomeScreen */}
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
