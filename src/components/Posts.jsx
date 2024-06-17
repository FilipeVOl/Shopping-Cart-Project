import React, { useEffect, useState, useContext } from "react";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import { ShopContext } from "../context/ShopContext";

const Posts = ({ data }) => {
  const [value, setValue] = useState({});

  const [CartItems, setCartItems] = useContext(ShopContext);

  const Increment = (id, obj) => {
    const objeto = obj[id]
    if (objeto) {
    objeto.quantity = (objeto.quantity || 0) + 1
    }
    setValue((value) => ({
      ...value,
      [id]: (value[id] || 0) + 1,
    }));

  };
  const Decrement = (id, obj) => {
    const objeto = obj[id]
    if (objeto) {
      objeto.quantity = (objeto.quantity) - 1 
    } {
      objeto.quantity = 0
    }
    setValue((value) => ({
      ...value,
      [id]: value[id] > 0 ? value[id] - 1 : 0,
    }));


  };

  const HandleChange = (id, e) => {
    const newValue = e.target.value;
    setValue(prevValue => ({
      ...prevValue,
      [id]: newValue > 1 ? Number(newValue) : 0
    }))
  };

  const validateConfirm = (id, e) => {
    if (e > 0) {
      setCartItems(prevItems => [...prevItems, data[id]])

      } else {
        alert("Please, select a quantity greater than 0")
    }
  }

  useEffect(() => {
  }, [CartItems]);

  return (
    <div className="h-[10%] border-2 w-full">
        <ul className="flex flex-col sm:grid sm:grid-cols-3">
          {Object.values(data).map((item, index) => (
            <li
              key={item.id}
              className="flex flex-col gap-8 border-2 p-4 justify-center items-center"
            >
              <img src={item.image} alt={item.title} className="w-20" />
              <p>{item.title}</p>
              <p>{`R$ ${item.price}`}</p>
              <p>{`Category: ${item.category}`}</p>
              <p>{`Rating: ${item.rating.rate} / Count: ${item.rating.count}`}</p>
              <form>
                <div className="flex flex-row items-center">
                  <img
                    src={minus}
                    alt="minus"
                    className="h-4"
                    onClick={() => Decrement(index, data)}
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
                    onClick={() => Increment(index, data)
                    }
                  />
                </div>
              </form>
              <button
                onClick={() => {
                  validateConfirm(index, value[index]);
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
