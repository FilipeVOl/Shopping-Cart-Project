import React from "react";
import { Link, useParams } from "react-router-dom";
import Shop from "./Shop";
import HomeLayout from "../layouts/HomeLayout";
import Logo from "../assets/logo.svg"

const Home = () => {
  return (
    <div className="ml-12 text-4xl flex flex-row justify-center mr-12 mt-4 rounded-lg shadow-2xl">
      <div className="mt-[3%] ">
      <h1 className="mb-[10%]">
        My <span className="font-bold text-purple-700">Website </span>
      </h1>
      <div className="flex flex-col gap-12">
        <h1 className="text-6xl font-Freeman">
          Shopping <br />
          Cart
        </h1>
        <p className="">
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

      <img className="h-[50rem] w-auto" src={Logo} alt="Logo" />
    </div>
  );
};

export default Home;
