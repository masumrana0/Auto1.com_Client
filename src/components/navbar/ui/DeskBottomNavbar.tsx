import React from "react";

const DeskBottomNavbar = () => {
  return (
    <div className="bg-[#314f8f] w-full py-5 px-3 md:px-0 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center  justify-center md:justify-between  ">
        <section className="flex gap-2 md:gap-6 items-center ">
          {/* regsitration compleate progess cirlce */}
          <div className="flex flex-col items-center  ">
            <div className="w-[4rem] h-[4rem] border-[6px] border-l-gray-500 border-white rounded-full flex justify-center items-center">
              <h2 className="font-bold text-white text-sm md:text-md">90%</h2>
            </div>
            <h2 className="text-white text-sm md:text-md mt-2 ">
              Registration complete
            </h2>
          </div>

          {/* line */}
          <div className="h-[100px] md:h-[140px] w-0.5  bg-white "></div>

          {/* text  */}
          <div className="text-white  my-auto ">
            <h3 className="font-semibold text-lg md:text-xl  mb-2">
              UPLOAD COMPANY DOCUMENTS
            </h3>
            <p className="md:text-md text-xs">
              Upload your company documents to get full access to AUTO1.com.
            </p>
          </div>
        </section>

        <section className="mt-5 md:mt-0">
          <button className="font-semibold  text-white px-4 py-2 bg-[#e87f36] text-sm  ">
            UPLOAD YOUR COMPANY DOCUMENTS
          </button>
        </section>
      </div>
    </div>
  );
};

export default DeskBottomNavbar;
