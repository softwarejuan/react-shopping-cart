// Home Component

import React from "react";
import { addToCart } from "./actions/cartActions";
import { useSelector, useDispatch } from "react-redux";

export const Home = () => {
  const dispatch = useDispatch();
  // Get product items from store
  const items = useSelector((state) => state.items);

  // add to cart action
  const handleClick = (id) => {
    dispatch(addToCart(id));
  };
  
  return (
    <div className="container">
      <h3 className="center">Our items</h3>
      <div className="box">
        {items.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="card-image">
                <img src={item.img} alt={item.title} />
                <span className="card-title">{item.title}</span>
                <span
                  to="/"
                  className="btn-floating halfway-fab waves-effect waves-light red"
                  onClick={() => {
                    handleClick(item.id);
                  }}
                >
                  <i className="material-icons">add</i>
                </span>
              </div>

              <div className="card-content">
                <p>{item.desc}</p>
                <p>
                  <b>Price: {item.price}$</b>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
