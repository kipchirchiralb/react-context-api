import React, { useContext } from "react";
import CartContext from "../context/cartContext";

const Checkout = () => {
  const { cartList, removeFromCart } = useContext(CartContext);
  return (
    <div>
      <h2>Checkout Page</h2>
      {cartList.map((item) => {
        return (
          <h3 key={item}>
            <span>{item}</span>{" "}
            <button onClick={() => removeFromCart(item)}>X</button>{" "}
          </h3>
        );
      })}
    </div>
  );
};

export default Checkout;
