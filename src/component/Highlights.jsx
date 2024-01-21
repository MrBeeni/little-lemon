import React from "react";
import bruschettaImage from "../assets/bruschetta.jpg";
import greekSaladImage from "../assets/greek-salad.jpg";
import lemonDessertImage from "../assets/lemon-dessert.jpg";
import { Link } from "react-router-dom";

import { BsBicycle } from "react-icons/bs";

const meals = [
  {
    name: "Greek Salad",
    image: greekSaladImage,
    price: "$12.99",
    description: `The famous greek salad of crispy lettuce, peppers, olives and 
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
      croutons.`,
  },
  {
    name: "Bruschetta",
    image: bruschettaImage,
    price: "$5.99",
    description: `Our Bruschetta is made from grilled bread that has been
      smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    name: "Lemon Dessert",
    image: lemonDessertImage,
    price: "$5.00",
    description: `This comes straight from grandma's recipe book, every last
      ingredient has been sourced and is as authentic as can be imagined.`,
  },
];

const Highlights = () => {
  return (
    <section className="py-10 px-6 md:px-20">
      <div className="flex flex-col items-center justify-between md:flex-row mb-5">
        <h2 className="flex flex-col sm:text-4xl text-3xl font-medium text-gray-900">
          This week specials!
        </h2>
        <Link to={"/orderOnline"}>
          <button className="inline-flex text-white bg-[#af3e11] border-0 py-2 px-6 focus:outline-none hover:bg-[#af3e11]/50 rounded text-lg">
            Online Menu
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {meals.map((meal, index) => (
          <MealCard key={index} meal={meal} />
        ))}
      </div>
    </section>
  );
};

export default Highlights;

const MealCard = ({ meal }) => {
  return (
    <div className=" w-full bg-[#EDEFEE] rounded-md group">
      <div className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block transform duration-300 group-hover:scale-110"
          src={meal.image}
        />
      </div>
      <div className="flex flex-col text-[#495E57] gap-6 px-6 py-2">
        <div className=" flex items-center justify-between">
          <h2 className=" text-lg font-bold">{meal.name}</h2>
          <p className=" text-[#af3e11] text-lg font-bold">$16.00</p>
        </div>
        <p className="text-base ">{meal.description}</p>
        <Link
          to={"/orderOnline"}
          className="flex title-font text-lg font-bold items-center gap-2 mt-auto"
        >
          Order a delivery <BsBicycle size={30} />{" "}
        </Link>
      </div>
    </div>
  );
};
