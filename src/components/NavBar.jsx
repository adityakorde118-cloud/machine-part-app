import { path } from "motion/react-client";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/About", name: "About" },
    { path: "/Contact", name: "Contact" },
    { path: "/Projects", name: "projects" },
  ];

  return (
 <nav className="py-2 fixed  top-0 hidden  w-full z-[9999]  bg-white   sm:flex justify-between items-center px-3">
  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
    <img src="./logo.png" alt="" className="h-full w-full object-cover" />
  </div>

  <ul className="flex gap-10 items-center justify-center z-40">
    {navItems.map((nav, index) => (
      <li key={index} className="relative">
        <Link
          to={nav.path}
          className="relative group flex items-center justify-center text-white text-[13px] tracking-[1px] py-3 px-6 rounded-full"
        >
          {location.pathname === nav.path && (
            <motion.span
            transition={{
                duration:0.3
            }}
              layoutId="navitem"
              className="absolute inset-0  bg-black rounded-lg "
            ></motion.span>
          )}
       <p className={`relative font-[500]  ${location.pathname === nav.path ?"text-":"text-black"}`}>   {nav.name}</p>
        </Link>
      </li>
    ))}
  </ul>
</nav>

  );
}

export default NavBar;
