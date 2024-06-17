import React from "react";
import { Link, useParams } from "react-router-dom";
import Shop from "./Shop";
import HomeLayout from "../layouts/HomeLayout";
import Logo from "../assets/logo.svg"

const Home = () => {
  return (
    <div className="ml-12 text-4xl flex flex-col sm:flex sm:flex-row  justify-center mr-12 mt-4 ">
      <div className="mt-[3%] flex flex-col gap-8 h-auto items-start">
      <h1 className="mb-2 sm:mb-[10%]">
        My <span className="font-bold text-purple-700">Website </span>
      </h1>
      <div className="flex flex-col h-auto gap-12 w-8">
        <h1 className="text-3xl sm:text-6xl w-44 font-Freeman">
          Shopping <br />
          Cart
        </h1>
        <p className="text-xl w-44">
          This page is made entirely for development skills only! <br />
          feel free to test everything.
        </p>
        <Link to="/shop">
          <button className="border-2 rounded-full bg-purple-950 h-14 w-[20rem] text-white">
            Go shopping
          </button>
        </Link>
      </div>
      </div>

      <img className="h-[10rem] sm:h-[50rem] w-auto" src={Logo} alt="Logo" />
    </div>
  );
};

export default Home;
