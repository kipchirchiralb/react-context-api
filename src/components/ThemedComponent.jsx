import React, { useContext, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import CartContext from "../context/cartContext";

const ThemedComponent = () => {
  const { theme, toggleTheme } = useTheme();
  const [newItem, setNewItem] = useState(null);
  const { addToCart } = useContext(CartContext);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newItem) {
      addToCart(newItem);
    }
  };
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
      }}
    >
      <h2>Themed Component</h2>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="new">New Cart Item </label>
        <input
          type="text"
          name="new"
          id="new"
          onChange={(e) => setNewItem(e.target.value)}
        />
        <input type="submit" value="add item" />
      </form>
    </div>
  );
};

export default ThemedComponent;
