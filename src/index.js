import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
import App from "./App";
import SearchGG from "./pages/searchgg";
import Index_01 from "./pages/template/01/";
import Index_02 from "./pages/template/02/";
import reportWebVitals from "./reportWebVitals";
import Index_03 from "./pages/template/03";
import Index_04 from "./pages/template/04";
import Index_05 from "./pages/template/05";
import Index_06 from "./pages/template/06";
import About from "./pages/template/06/components/about";
import Products from "./pages/template/06/components/products";
import Product from "./pages/template/06/components/product";
import Cart from "./pages/template/06/components/cart";
import Index_07 from "./pages/template/07";
import Index_08 from "./pages/template/08";
import Index_09 from "./pages/template/09";
import Index_10 from "./pages/template/10";
import Weather from "./pages/project/project-weather";
import Shop01 from "./pages/project/project-shop01";
import Login from "./pages/login";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}>
          Login
        </Route>
      </Routes>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="search" element={<SearchGG />} />
          <Route path="template01" element={<Index_01 />} />
          <Route path="template02" element={<Index_02 />} />
          <Route path="template03" element={<Index_03 />} />
          <Route path="template04" element={<Index_04 />} />
          <Route path="template05" element={<Index_05 />} />
          <Route path="template06" element={<Index_06 />}>
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:productId" element={<Product />} />
          </Route>
          <Route path="template07" element={<Index_07 />} />
          <Route path="template08" element={<Index_08 />} />
          <Route path="template09" element={<Index_09 />} />
          <Route path="template10" element={<Index_10 />} />
          <Route path="/project/weather" element={<Weather />} />
          <Route path="/project/shop01" element={<Shop01 />} />
        </Route>
        <Route path="template10" element={<Index_10 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
