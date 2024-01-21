import chefsMarioAndAdrianAImage from "../assets/chefs-mario-and-adrian_a.jpg";
import chefsMarioAndAdrianBImage from "../assets/chefs-mario-and-adrian_b.jpg";

const About = () => {
  return (
    <section className=" py-10 grid grid-cols-1 gap-10 px-6 md:px-20 md:grid-cols-2">
      <div className="text-[#495E57]">
        <h1 className="flex flex-col sm:text-4xl text-3xl mb-4 font-medium  ">
          Little Lemon
          <span className="text-[#af3e11]">Chicago</span>
        </h1>
        <p className="text-base text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <img
          className="md:w-[80%] rounded-md w-full"
          src={chefsMarioAndAdrianAImage}
          alt="Chefs Mario and Adrian"
        />
        <img
          className="md:w-[80%] rounded-md w-full"
          src={chefsMarioAndAdrianBImage}
          alt="Chefs Mario and Adrian"
        />
      </div>
    </section>
  );
};

export default About;
