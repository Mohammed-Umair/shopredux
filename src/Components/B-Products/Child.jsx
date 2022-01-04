import React from "react";
import "./All.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
export const Child = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="cards">
      <img className="img" src={item.Poster} alt="" />
      <h4>{item.Title.substr(0, 20) + "..."}</h4>
      <h4>Year: {item.Year}</h4>
      <button onClick={() => dispatch({ type: "Add-Cart", data: item })}>
        Add To Cart
      </button>
      <Link to="/deatils">
        <button
          onClick={() => dispatch({ type: "Selected-Product", data: item })}
        >
          View More
        </button>
      </Link>
    </div>
  );
};
