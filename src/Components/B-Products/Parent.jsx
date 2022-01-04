import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Child } from "./Child";
import "./All.css";
export const Parent = ({ search }) => {
  const stateProduct = useSelector((state) => state.productReducer.product);
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const getApiData = async () => {
    const allProducts = await axios.get("https://fake-movie-database-api.herokuapp.com/api?s=batman");
    setProduct(allProducts.data.Search);
    console.log("product==>", allProducts.data);
    stateProduct.length <= 0 &&
      dispatch({ type: "Add-Product", data: allProducts.data.Search });
  };
  useEffect(() => {
    getApiData();
  }, []);
  useEffect(() => {
    const filtered = stateProduct.filter((item) =>
      item.title.toUpperCase().includes(search.toUpperCase())
    );
    setProduct(filtered);
  }, [search]);
  return (
    <div>
      <h1>Parent</h1>
      <div className="parent">
        {product.map((item) => {
          console.log(item);
          return <Child item={item} />;
        })}
      </div>
    </div>
  );
};
