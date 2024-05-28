import React, { useContext } from "react";
import BigCart from "../assets/bigCart.svg";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {

    const [cartItems, setCartItems] = useContext(ShopContext)

  return (
    <div className="h-[90vh] flex flex-row">
      <div className="flex flex-col w-2/4 pl-32 pt-32 gap-10">
        <img src={BigCart} alt="Big cart" className="mr-56 h-32" />
        <h1 className="text-4xl">Your shopping cart</h1>
        <p>
          This is a private project made by Filipe Gideão Rodrigues, so it will
          not ask for any payment or personal information.
        </p>
        </div>

        <div className="w-2/4 pr-32 pt-32 gap-10 flex flex-col">
                <h1>Items in your cart:</h1>
                <ul className="flex flex-col gap-4">
                    {cartItems.map((item, index) => {
                        return (
                            <li key={index}
                            className="flex flex-col gap-8 border-2 p-4 justify-center items-center">
                                {console.log(item.title)}
                                <p className="">{item.title}</p>
                                <p>{item.price}</p>
                            </li>
                        )
                    })}
                </ul>
        </div>
      </div>
  );
};

export default Cart;
