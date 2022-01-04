import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "../A-Navigation/NavBar";
import { Cart } from "../B-Products/Cart";
import { Parent } from "../B-Products/Parent";
import { ProductDetails } from "../B-Products/ProductDetails";
import { useState } from "react";

export const Landing = () => {
  const [search,setSearch]=useState("")
  return (
    <div>
      <BrowserRouter>
        <NavBar setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<Parent search={search} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/deatils" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
