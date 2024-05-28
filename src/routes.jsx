import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/ErrorPage";
import DefaultLayout from "./layouts/DefaultLayout";
import HomeLayout from "./layouts/HomeLayout"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import { ShopContext } from "./context/ShopContext";
import React, { useState } from "react";
import Cart from "./pages/Cart";

export function Router() {

    const [CartItems, setCartItems] = useState([]);

    return (
        <ShopContext.Provider value={[CartItems, setCartItems]}>
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route path="shop" element={<Shop />} />
                <Route path="cart" element={<Cart />} />
            </Route>
        </Routes>
        </ShopContext.Provider>
    )
}

export default Router