import React from "react";
import customer1Image from "../assets/customer1.jpg";
import customer2Image from "../assets/customer2.jpg";
import customer3Image from "../assets/customer3.jpg";
import customer4Image from "../assets/customer4.jpg";
const customers = [
  {
    fullName: "Maria Sanchez",
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: "Antony Clifton",
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: "Tamika Jackson",
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    fullName: "Brandon Ming",
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

const Testimonials = () => {
  return (
    <section className=" bg-[#495E57] py-10 px-6 md:px-20 md:mb-32 ">
      <h2 className="text-3xl">What people say about us!</h2>
      <div className="grid grid-cols-1 gap-10 mt-5 md:mt-10 md:grid-cols-4">
        {" "}
        {customers.map((customer, index) => (
          <TestimonialCard key={index} customer={customer} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

const TestimonialCard = ({ customer }) => {
  return (
    <div className="flex flex-col items-center gap-3 p-6 justify-center bg-slate-50 rounded-md text-[#495E57]">
      <img
        className="h-28 w-28 rounded-full"
        src={customer.image}
        alt={customer.fullName}
      />
      <h4 className="font-bold">{customer.fullName}</h4>
      <span>
        {/* {customer.rating.map((ratingPoint, index) => (
          <FontAwesomeIcon
            key={index}
            icon={ratingLevels[ratingPoint]}
            size="xs"
          />
        ))} */}
      </span>
      <blockquote>
        <p className="text-base ">"{customer.says}"</p>
      </blockquote>
    </div>
  );
};
