import React from "react";
import Hero from "../component/Hero";
import Highlights from "../component/Highlights";
import Testimonials from "../component/Testimonials";
import About from "../component/About";

const Home = () => {
  return (
    <section>
      {/* hero */}
      <Hero />
      {/* highlights */}
      <Highlights />
      {/* Testimonial */}
      <Testimonials />
      {/* About */}
      <About />
    </section>
  );
};

export default Home;
