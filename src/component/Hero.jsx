import React from "react";
import restaurantFoodImage from "../assets/restaurant-food.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="text-white bg-[#495E57] py-10 px-6 md:px-20 md:mb-32 ">
      <div className="container mx-auto flex  md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="flex flex-col sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">
            Little Lemon
            <span className="text-white">Chicago</span>
          </h1>

          <p className="mb-8 leading-relaxed">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-[#af3e11] border-0 py-2 px-6 focus:outline-none hover:bg-[#af3e11]/50 rounded text-lg">
              <Link to={"/"}>Reserve a table</Link>
            </button>
          </div>
        </div>
        <div className="">
          <img
            className="h-96 w-96 object-cover md:-mb-[5.5rem] rounded"
            alt="hero"
            src={restaurantFoodImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
