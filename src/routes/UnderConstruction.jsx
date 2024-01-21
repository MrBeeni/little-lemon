import React from "react";
import { LuConstruction } from "react-icons/lu";

const UnderConstruction = () => {
  return (
    <section className="h-screen flex  items-center justify-center text-4xl">
      <span>Page under construction</span>
      <LuConstruction className="text-[#af3e11]" size={100} />
    </section>
  );
};

export default UnderConstruction;
