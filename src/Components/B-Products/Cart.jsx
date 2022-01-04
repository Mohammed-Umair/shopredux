import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.productReducer.cart);
  console.log("cartItems===>", cartItems);
  return (
    <div>
      <h1>Cart</h1>
      <div className="parent">
        {cartItems.map((item) => {
          return (
            <div className="cards">
              <img className="img" src={item.image} alt="" />
              <h4>{item.title.substr(0, 20) + "..."}</h4>
              <h4>Price${item.price}</h4>
              <button
                onClick={() => dispatch({ type: "Remove-Product", data: item })}
              >
                Remove
              </button>
              <Link to="/deatils">
                <button
                  onClick={() =>
                    dispatch({ type: "Selected-Product", data: item })
                  }
                >
                  View More
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
