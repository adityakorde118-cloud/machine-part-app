import React, { useState } from "react";
import { MenuIcon, X } from "lucide-react";
import { motion } from "motion/react";
import { Link, Links } from "react-router-dom";
function Sidebar() {
  const [ismenuOpen, setismenuOpen] = useState(false);

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/About", name: "About" },
    { path: "/Contact", name: "Contact" },
    { path: "/Projects", name: "projects" },
  ];

  return (
    <>
      {ismenuOpen ? (
        <motion.div
          layoutId="menu"
          className=" w-52 m-6 right-0 top-0 mr-1 mt-1 p-2 fixed  rounded-lg z-20"
        >
        <div className="flex items-center w-full justify-end">
           <div className="h-8 w-8 border border-[#a4a4a493] bg-white rounded-full flex items-center justify-center ">
           <div
            className=""
            onClick={() => setismenuOpen(false)}
          >
            <X className="text-end h-4 w-4" />
          </div>
         </div>
        </div>
          <div>
            {navItems.map((nav) => ( 
             <Link to={nav.path}>
              <div className="p-2 bg-white cursor-pointer text-center  border border-[#dbdbdb93] discription text-sm text-black  mt-4 rounded-lg">
                <p>{nav.name}</p>
              </div>
             </Link>
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          layoutId="menu"
          className="sm:hidden cursor-pointer flex justify-center border border-[#a4a4a493] items-center z-30 h-10 m-6 w-10 bg-white rounded-full app-Shadow text-white fixed right-0 top-0"
          onClick={() => setismenuOpen(true)}
        >
          <MenuIcon color="#000" className="h-4 w-4" />
        </motion.div>
      )}
    </>
  );
}

export default Sidebar;
