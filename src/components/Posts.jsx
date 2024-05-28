import React, { useEffect, useState, useContext } from "react";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import { ShopContext } from "../context/ShopContext";

const Posts = ({ data }) => {
  const [value, setValue] = useState(0);

  const [CartItems, setCartItems] = useContext(ShopContext);

  const Increment = (id) => {
    setValue((value) => ({
      ...value,
      [id]: (value[id] || 0) + 1,
    }));
  };
  const Decrement = (id) => {
    setValue((value) => ({
      ...value,
      [id]: value[id] > 0 ? value[id] - 1 : 0,
    }));
  };

  const HandleChange = (id, e) => {
    const newValue = e.target.value;
    value[id] = newValue[id] > 1 ? Number(newValue) : 0;
    setValue(value);
  };


  const calculatePrice = (id) => {
    const itemValue = data[id] ? data[id].price : 0;
    const itemInput = value[id] || 0;
    return itemValue * itemInput;
  };

  useEffect(() => {
    console.log(CartItems);
  }, [CartItems]);

  return (
    <div className="h-[10%] border-2 w-full">
        <ul className="grid grid-cols-3">
          {Object.values(data).map((item, index) => (
            <li
              key={item.id}
              className="flex flex-col gap-8 border-2 p-4 justify-center items-center"
            >
              <img src={item.image} alt={item.title} className="w-20" />
              <p>{item.title}</p>
              <p>{`R$ ${item.price}`}</p>
              <p>{`Total: ${calculatePrice(index)}`}</p>
              <p>{`Category: ${item.category}`}</p>
              <p>{`Rating: ${item.rating.rate} / Count: ${item.rating.count}`}</p>
              <form>
                <div className="flex flex-row items-center">
                  <img
                    src={minus}
                    alt="minus"
                    className="h-4"
                    onClick={() => Decrement(index)}
                  />
                  <input
                    type="number"
                    className="border-[1px] rounded-md indent-2 appearance-none"
                    placeholder="Quantity"
                    onChange={(e) => HandleChange(index, e)}
                    value={value[index] || 0}
                  />
                  <img
                    src={plus}
                    alt="plus"
                    className="h-4"
                    onClick={() => Increment(index)}
                  />
                </div>
              </form>
              <button
                onClick={() => {
                  setCartItems(prevItems => [...prevItems, data[index]])
                }}
              >
                Comprar
              </button>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Posts;
