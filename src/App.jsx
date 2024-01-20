import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Checkout from "./components/Checkout";
import CartContext from "./context/cartContext";
import ThemedComponent from "./components/ThemedComponent";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  const [cartList, setCartList] = useState(["red"]);
  useEffect(() => {
    let storedList = localStorage.getItem("list");
    if (storedList) {
      setCartList(JSON.parse(storedList));
    }
  }, []);
  const updateLocalStorage = (cartList) => {
    localStorage.setItem("list", JSON.stringify(cartList));
  };
  const addToCart = (item) => {
    setCartList((prevList) => {
      const newList = [...prevList, item];
      updateLocalStorage(newList);
      return newList;
    });
  };
  const removeFromCart = (item) => {
    setCartList((prevList) => {
      const newList = prevList.filter((li) => li !== item);
      updateLocalStorage(newList);
      return newList;
    });
  };
  return (
    <CartContext.Provider value={{ cartList, addToCart, removeFromCart }}>
      <ThemeProvider>
        <div>
          <Header />
          <Checkout />
          <ThemedComponent />
        </div>
      </ThemeProvider>
    </CartContext.Provider>
  );
};

export default App;
