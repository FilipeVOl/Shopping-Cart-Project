import { useState, createContext } from "react";

const ShopContext = createContext();

function ShopProvider() {
  const [cartItems, setCartItems] = useState([]);
  const [value, setValue] = useState({});

  return (
    <ShopContext.Provider value={{ cartItems, setCartItems, value, setValue }}>
      {children}
    </ShopContext.Provider>
  );
}

export { ShopContext, ShopProvider }