import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Posts from "../components/Posts";


const Shop = () => {
  const [CartItems, setCartItems] = useState([]);
  const [value, setValue] = useState(0);
  const [data, setData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

useEffect(() => {
  const fetchData = async () => {
    try {
    const response = await fetch('https://fakestoreapi.com/products')
    const json = await response.json()
    setData(json)
    } catch (error) {
      console.error("Erro ao buscar dados", error)
    }
  }
  fetchData()
}, [])



  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className="overflow-hidden">
      <div className="">
      <Posts data={currentItems}/>
      </div>

      <div className="pagination grid grid-cols-4">
        {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map(number => (
          <button className="border-2 p-[0.5rem] rounded-md mr-2 text-xl" key={number} onClick={() => paginate(number + 1)}>
            {number + 1}
          </button>
        ))}
        </div>

      
    <div className="hidden border-2 bg-gray-500 w-full h-full mt-20">
      
      </div>
      </div>
  );
};

export default Shop;
