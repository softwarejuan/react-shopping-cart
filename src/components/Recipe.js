// Show checkout and shipping component

import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Recipe = () => {
  const checkRef = useRef();
  const dispatch = useDispatch();
  const addedItems = useSelector((state) => state.addedItems);
  const total = useSelector((state) => state.total);
  
  const handleChecked = (e) => {
    if (e.target.checked) {
      dispatch({ type: "ADD_SHIPPING" });
    } else {
      dispatch({ type: "SUB_SHIPPING" });
    }
  };
  useEffect(() => {
    if (checkRef.current.checked) {
      dispatch({ type: "SUB_SHIPPING" });
    }
  }, []);
  return (
    <div className="container">
      <div className="collection">
        <li className="collection-item">
          <label>
            <input type="checkbox" ref={checkRef} onChange={handleChecked} />
            <span>Shipping(+6$)</span>
          </label>
        </li>
        <li className="collection-item">
          <b>Total: {total} $</b>
        </li>
      </div>
      <div className="checkout">
        <button className="waves-effect waves-light btn">Checkout</button>
      </div>
    </div>
  );
};
