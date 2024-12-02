import React from "react";
import micro from "/public/photos/micro.jpg";
import search from "/public/photos/search.jpg";
import ecart from "/public/photos/ecart.jpg";
import signup from "/public/photos/signup.jpg";
import { IoMdMenu } from "react-icons/io";


function Navbar() {
  return (
    <div className="w-full flex  h-16 shadow-md px-12  items-center shadow-slate-300 ">
      <div className="flex order-3 lg:order-1  ">
        <img
          className=" flex py-4  h-[55px] w-[110px] "
          src={micro}
          alt="microsoft"
        />
      </div>
      <div className="order-1 lg:order-2 flex lg:w-4/6 items-center justify-between p-4 ">
        <div className="flex lg:hidden">
          <IoMdMenu />
        </div>
        <div className="overflow-hidden text-sm py-5 gap-4 hidden  w-[500px] lg:flex justify-around  ">
          {[
            "Microsoft 365",
            "Teams",
            "Copilot",
            "Windows",
            "Surface",
            "Xbox",
            "Support",
          ].map((item, idx) => {
            return <p className="hover:underline">{item}</p>;
          })}
        </div>
        <p className="hover:underline lg:flex hidden">All Microsoft</p>
      </div>

      <div className="flex hover:underline order-2 lg:order-3 lg:pl-14  ">
        <p className="hidden lg:flex">search</p>
        <img className="w-[25px] h-[25px] " src={search} alt="" />
      </div>
      <div className="flex hover:underline order-4 lg:pl-14  ">
        <p className="hidden lg:flex">Cart</p>
        <img className="w-[25px] h-[25px]" src={ecart} alt="" />
      </div>
      <div className="flex gap-2 hover:underline order-5 lg:pl-10 ">
        <p className="hidden lg:flex">Sign in</p>
        <img className="w-[25px] h-[25px]" src={signup} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
