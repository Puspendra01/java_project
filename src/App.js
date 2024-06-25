/* eslint-disable react/jsx-pascal-case */
import './App.css';
import AddToCart from './customer/components/Cart/AddToCart';
import Footer from './customer/components/Footer/Footer';
import Login_Page from './customer/components/Login/Login_Page';
import Product_Details from './customer/components/ProductDetail/Product_Details';
import Signup_Page from './customer/components/Signup/Signup_Page';
import Checkout from './customer/components/checkout/Checkout';
import Navbar from './customer/components/navigation/Navbar';
import HomePage from './customer/pages/Homepage/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/signup" element={<Signup_Page />}/>
        <Route path="/login" element={<Login_Page />}/> 
        <Route path="/cart" element={<AddToCart />}/>
        <Route path="/productdetail" element={<Product_Details />}/>
        <Route path="/addtocart" element={<AddToCart />}/>
        <Route path="/checkout" element={<Checkout />}/>

      </Routes>
          <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
