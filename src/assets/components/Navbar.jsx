import React, { useState } from "react";

const Navbar = ({ submitShowMenu }) => {
  return (
    <section className="">
      <div>
        <img
          className="absolute top-7 left-4"
          src="/images/Ellipse1.png"
          alt=""
        />
        <img
          className="absolute top-4 left-7"
          src="/images/Ellipse2.png"
          alt=""
        />
      </div>

      <div className="flex flex-row-reverse items-center h-[75px]">
        <button onClick={() => submitShowMenu()}>
          <img
            className=" mx-4 my-4 cursor-pointer"
            src="/images/Vector.png"
            alt=""
          />
        </button>
      </div>
      <div className="flex justify-center">
        <img
          className=" my-6 w-[257.2px] h-[212.59px] "
          src="/images/Image.svg"
          alt=""
        />
      </div>
    </section>
  );
};

export default Navbar;
