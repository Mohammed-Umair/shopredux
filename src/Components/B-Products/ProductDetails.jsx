import React from "react";
import { useDispatch, useSelector } from "react-redux";
export const ProductDetails = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state) => state.productReducer.selectedProduct[0]
  );
  return (
    <div>
      <h1>ProductDetails</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="cards2">
          <img className="img2" src={cartItems.image} alt="" />
        </div>
        <div className="cards2">
          <p>
            {" "}
            <b> Desc:</b>
            {cartItems.description}
          </p>
          <h4>{cartItems.title}</h4>
          <h4>Price${cartItems.price}</h4>
          <button
            onClick={() => dispatch({ type: "Add-Cart", data: cartItems })}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
