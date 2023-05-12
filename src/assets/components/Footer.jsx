import React from "react";

const Footer = () => {
  return (
    <section className="grid justify-center items-center p-2 w-[600px]  max-w-[1000px] mx-auto bg-[#3E3C3C] mt-10 rounded-md ">
      <div className="   p-4 my-2  mt-10 text-center gap-4 py-5">
        <h2 className="text-3xl font-bold text-black">Contact me!</h2>
        <p className="text-white font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          voluptas molestiae enim fuga odio officiis ullam similique, ratione id
          accusamus animi quia quaerat eligendi quis! Commodi perspiciatis
          similique quia aspernatur?
        </p>
       
      </div>
      <button className=" w-[100px] mx-auto p-2 border-2 border-white text-white rounded-md hover:bg-white hover:text-black  hover:-translate-y-1 duration-200">Click here!</button>
    </section>
  );
};

export default Footer;
