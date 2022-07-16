import Image from "next/image";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
const NavBar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="flex flex-col  ">
      <div className="">
        <div className="w-full mt-10 bg-dark text-4xl px-4 lg:px-10 py-2 rounded-md flex items-center  justify-between">
          <Image src="/logo.png" width="70" height="70" alt="logo" />
          <div
            onClick={() => setMenu(!menu)}
            className="text-white cursor-pointer flex sm:hidden"
          >
            <GiHamburgerMenu
              className={`easeIn translate-x-[50%]
            ${
              menu
                ? "translate-y-[100vh] opacity-0 pointer-events-none"
                : "translate-y-0 opacity-100"
            }`}
            />
            <CgClose
              className={`easeIn -translate-x-[50%]
              ${
                !menu
                  ? "-translate-y-[100vh] opacity-0 pointer-events-none"
                  : "translate-y-0 opacity-100"
              }`}
            />
          </div>
          <div className="text-gray-200 gap-x-10 text-base md:text-lg lg:text-3xl xl:text-4xl font-medium hidden sm:flex">
            <a href="#stats">
              <h3 className="hover:cursor-pointer  easeIn group">
                Statistics
                <hr className="translate-x-full opacity-0 group-hover:opacity-100 easeIn group-hover:translate-x-0 mt-2 border-[1px] rounded-sm border-main bg-main" />
              </h3>
            </a>
            <h3 className="hover:cursor-pointer group">
              Support
              <hr className="translate-x-full opacity-0 group-hover:opacity-100 easeIn group-hover:translate-x-0 mt-2 border-[1px] rounded-sm border-main bg-main" />
            </h3>
          </div>
          <div className="group flex items-center hover:cursor-pointer">
            <div className="text-main border-2 border-gray-100 p-1 sm:p-2 xl:p-3 rounded-lg group-hover:border-main group-hover:-skew-x-6 easeIn">
              <h2 className="text-base md:text-lg lg:text-3xl xl:text-4xl">
                Invite me
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex justify-center easeIn sm:hidden  ${
          !menu ? "translate-x-[100vw]" : "translate-x-0"
        }`}
      >
        <div className="bg-dark  easeIn  p-3 rounded-b-lg z-50 border-dark border-2 outline-none">
          <div className="text-gray-200  min-w-[10rem] mb-1  text-base md:text-lg lg:text-2xl xl:text-3xl font-medium flex flex-col sm:hidden">
            <a href="#stats">
              <h3 className="hover:cursor-pointer  easeIn group w-fit">
                Statistics
                <hr className="translate-x-full opacity-0 group-hover:opacity-100 easeIn group-hover:translate-x-0 mt-2 border-[1px] rounded-sm border-main bg-main" />
              </h3>
            </a>
            <h3 className="hover:cursor-pointer group w-fit">
              Support
              <hr className="translate-x-full opacity-0 group-hover:opacity-100 easeIn group-hover:translate-x-0 mt-2 border-[1px] rounded-sm border-main bg-main" />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
