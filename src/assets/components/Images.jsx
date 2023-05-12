import React from "react";

const Images = () => {
  return (
    <>
      <section className="py-2 max-w-[1000px] mx-auto">
        <article className="grid gap-6 sm:grid sm:grid-cols-2 sm:items-center sm:px-4">
        <div className="text-center mx-auto sm:w-[322px] sm:h-[365px] sm:grid sm:justify-center sm:items-center">
            <h2 className="text-4xl text-white ">
              <span className="text-indigo-500">Last Landing</span> and website
              proyects
            </h2>
            <p className="text-xl text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi magni vero nam iusto possimus sit quasi ea, a
              dignissimos. Dolorum iusto sequi nesciunt ipsam eos. Tenetur
              officia expedita excepturi at!
            </p>
          </div>
          <div className="w-[181px] h-[206px] sm:w-[322px] sm:h-[365px] mx-auto -translate-1/2">
            <img className="w-full h-full object-contain" src="/images/cel.png" alt="" />
          </div>
          
        </article>
        <article className="mt-6 sm:grid sm:grid-cols-2 sm:items-center sm:px-4  ">
        <div className="text-center sm:w-[322px] sm:h-[365px] mx-auto  sm:grid sm:justify-center sm:items-center">
            <h2 className="text-4xl text-white">
              <span className="text-indigo-500">Build</span> a whole new world
            </h2>
            <p className="text-xl text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              quaerat rerum aliquid similique alias blanditiis magnam a
              praesentium, laboriosam voluptate provident commodi animi.
              Possimus cum ut cupiditate itaque. Quasi, voluptates.
            </p>
          </div>
          <div className="w-[181px] h-[206px] sm:w-[322px] sm:h-[365px] mx-auto -translate-1/2 mt-6">
            <img
              className="w-full h-full object-contain"
              src="/images/coding.png"
              alt=""
            />
          </div>
          
        </article>
      </section>
    </>
  );
};

export default Images;
