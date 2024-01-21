import React, { useState } from "react";
import { cn } from "../lib/utils";
import logoImage from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const nav = [
  { name: "Home", path: "/", anchorable: true },
  { name: "About", path: "/about", anchorable: true },
  { name: "Menu", path: "/menu", anchorable: true },
  { name: "Reservations", path: "/bookings", anchorable: true },
  { name: "Order Online", path: "/order-online", anchorable: true },
  { name: "Login", path: "/login", anchorable: true },
];
const Navbar = () => {
  const { pathname } = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isActiveTabe, setIsActiveTabe] = useState(true);
  return (
    <nav className="bg-white border-gray-200 relative px-6 md:px-20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3">
        <Link to={"/"} relative="path">
          <img className="h-10" src={logoImage} alt="Little Lemon logo" />
        </Link>

        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {/* Nav */}
        <div
          className={cn(
            "absolute w-1/2 z-20 top-0 transform duration-500 md:left-0 md:relative md:h-10 md:block md:w-auto md:duration-0",
            isSidebarOpen ? "left-0" : "-left-[330px]"
          )}
        >
          <ul className="h-screen font-medium flex flex-col item-center gap-2 md:h-10 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {nav.map((item) => (
              <Link to={item.path}>
                <li
                  key={item.path}
                  className={cn(
                    "flex items-center justify-center text-[#495E57] font-bold px-4 py-2 cursor-pointer hover:bg-[#af3e11] hover:text-white rounded-md",
                    pathname === item.path && "text-white bg-[#af3e11]"
                  )}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
