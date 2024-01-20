import React, { useContext } from "react";
import CartContext from "../context/cartContext";

const Header = () => {
  const { cartList } = useContext(CartContext);
  return (
    <div>
      <h2>Page Header</h2>
      {cartList.map((item) => {
        return <p key={item}> {item} </p>;
      })}
    </div>
  );
};

export default Header;
