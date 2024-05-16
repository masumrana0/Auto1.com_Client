import { setHeaderModalOpen } from "@/Redux/Slices/unitlitySlice";
import { useAppDispatch } from "@/Redux/hooks";
import React from "react";
// icons
import { FaCheck } from "react-icons/fa6";
import { MdOutlineCloudUpload } from "react-icons/md";

const HeaderModalContent = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      {/* text section  */}
      <section className="flex gap-2 md:gap-6 items-center text-gray-700  ">
        {/* regsitration compleate progess cirlce */}
        <div className="flex flex-col items-center  ">
          <div className="w-[5rem] h-[5rem] md:w-[7rem] md:h-[7rem] border-[14px] border-l-blue-200 border-blue-500 rounded-full flex justify-center items-center">
            <h2 className="font-bold   text-lg md:text-xl">90%</h2>
          </div>
          <h2 className="text-blue-500 text-center  text-md md:text-lg mt-2 ">
            Registration complete
          </h2>
        </div>

        {/* line */}
        <div className="h-[100px] md:h-[240px] w-0.5 bg-blue-500    "></div>

        {/* text  */}
        <div>
          <div>
            <h3 className="font-semibold text-xl md:text-2xl  md:mb-2">
              UPLOAD COMPANY DOCUMENTS
            </h3>
            <p className="md:text-lg text-[15px] mt-5">
              Upload your company documents in order to see{" "}
              <span className="font-bold">All prices</span> and get full access
              to AUTO1.com.
            </p>
          </div>
          <div className="flex flex-col gap-0 mt-2">
            <h3 className="flex items-center gap-1 text-sm md:text-[17px]">
              <FaCheck className="text-blue-500" />
              Company Name must be visible
            </h3>
            <h3 className="flex items-center gap-1 text-sm md:text-[17px]">
              <FaCheck className="text-blue-500" />
              Company address must be visible
            </h3>
            <h3 className="flex items-center gap-1 text-sm md:text-[17px]">
              <FaCheck className="text-blue-500" />
              Company regsitration must not have expired
            </h3>
          </div>
        </div>
      </section>

      {/* lower section*/}
      <section>
        <div className="my-5 border px-2 py-3 bg-gray-100">
          <h3 className="flex items-center justify-center gap-5 text-gray-600 text-xs md:text-sm">
            <MdOutlineCloudUpload className="text-blue-500 text-5xl" /> Drag and
            drop your company documents here
          </h3>
        </div>
        <div className=" my-3 md:my-5 md:mt-16  flex justify-center">
          <button className="font-semibold text-sm md:text-xl  mb-2 py-3 px-5 text-white bg-[#ff8c3b]">
            UPLOAD COMPANY DOCUMENTS
          </button>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => dispatch(setHeaderModalOpen())}
            className="underline text-blue-400 text-lg"
          >
            Cancel
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeaderModalContent;
