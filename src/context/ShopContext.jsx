import { useState, createContext } from "react";

const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
});

function ShopProvider() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (index) => {
    
  };

  return (
    <ShopContext.Provider value={{ cartItems, products, addToCart }}>
      <Header />
      <ProductDetail />
    </ShopContext.Provider>
  );
}

export { ShopContext, ShopProvider }