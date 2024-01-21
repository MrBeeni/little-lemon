import React from "react";
import { Link } from "react-router-dom";
import logoWhiteImage from "../assets/logo-white.png";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

const navLinks = [
  { name: "Home", path: "/", anchorable: true },
  { name: "About", path: "/about", anchorable: true },
  { name: "Menu", path: "/menu", anchorable: true },
  { name: "Reservations", path: "/bookings", anchorable: true },
  { name: "Order Online", path: "/order-online", anchorable: true },
  { name: "Login", path: "/login", anchorable: true },
];
const contacts = [
  { icon: <FaLocationDot />, info: "678 Pisa Ave, Chicago, IL 60611" },
  { icon: <FaPhone />, info: "(312) 593-2744" },
  { icon: <FaEnvelope />, info: "customer@littlelemon.com" },
];
const socials = [
  { icon: <FaFacebook size={30} />, name: "facebook" },
  { icon: <FaTwitter size={30} />, name: "twitter" },
  { icon: <FaInstagram size={30} />, name: "instagram" },
  { icon: <FaYoutube size={30} />, name: "youtube" },
];
const Footer = () => {
  return (
    <footer className="bg-[#495E57] text-gray-600 body-font grid grid-cols-1 md:grid-cols-4 px-6 md:px-20 py-10">
      <div className="w-64">
        <Link
          to={"/"}
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <img className="h-28" src={logoWhiteImage} alt="Little Lemon" />
        </Link>
      </div>
      <div className=" w-full px-4 text-white">
        <h2 className="tracking-widest text-lg font-bold mb-3">Sitemap</h2>
        <nav className="list-none mb-10">
          <ul className="flex flex-col gap-2">
            {navLinks.map((navLink, index) => (
              <li>
                <Link to={navLink.path}>{navLink.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="w-full px-4 text-white">
        <h2 className="tracking-widest text-lg font-bold mb-3">Contact us</h2>

        {contacts.map((contact, index) => (
          <p key={index} className="flex gap-3">
            {contact.icon}
            {contact.info}
          </p>
        ))}
      </div>
      <div className="w-full px-4 text-white">
        <h2 className="tracking-widest text-lg font-bold mb-3">
          Connect with us
        </h2>
        <div className="flex  gap-2">
          {socials.map((social, index) => (
            <a
              key={index}
              href={`https://www.${social.name}.com`}
              target="_blank"
              rel="noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
