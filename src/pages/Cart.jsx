import React, { useContext, useState } from "react";
import BigCart from "../assets/bigCart.svg";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {

    const [ cartItems ] = useContext(ShopContext)
    const { value } = useContext(ShopContext)


    const calculatePrice = (id, price, quant) => {
      console.log(cartItems)
      const total = cartItems.reduce((_e) => price * quant, 0);
      return total;
    };

  return (
    <div className="h-[90vh] sm:flex sm:flex-row flex flex-col">
      <div className="flex flex-col w-2/4 pl-4 sm:pl-32 sm:pt-32 h-auto gap-10">
        <img src={BigCart} alt="Big cart" className="mr-56 h-32" />
        <h1 className="text-4xl">Your shopping cart</h1>
        <p>
          This is a private project made by Filipe Gideão Rodrigues, so it will
          not ask for any payment or personal information.
        </p>
        </div>

        <div className="w-2/4 sm:pr-32 pt-32 pl-4 gap-10 flex flex-col">
                <h1>Items in your cart:</h1>
                <ul className="flex flex-col gap-4 pl-4">
                    {Object.values(cartItems).map((item, index) => {
                        return (
                            <li key={index}
                            className="flex flex-col gap-8 border-2 p-4 justify-center items-center">
                                <p className="">{item.title}</p>
                                <p>{calculatePrice(index, item.price, item.quantity)}</p>
                            </li>
                        )
                    })}
                </ul>
        </div>
      </div>
  );
};

export default Cart;
