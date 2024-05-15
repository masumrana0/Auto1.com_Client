"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaCar } from "react-icons/fa6";

const PurchaseButtonwithDropdown = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="relative " onMouseLeave={() => setOpen(false)}>
      <button
        onMouseEnter={() => setOpen(true)}
        className="border-b-4 border-transparent hover:border-b-[#e87f36]   py-3 px-4  "
      >
        PURCHASE
      </button>
      {isOpen && (
        <div className="absolute w-[36rem] flex    bg-gray-50 h-52   border-[3px] border-[#e87f36] overflow-hidden">
          {/* content */}
          <Link href="/">
            <div className=" group flex w-[12rem]  border border-[#e87f36]  flex-col justify-center items-center py-10  hover:bg-[#e87f36] ">
              <div className="group-hover:bg-white group-hover:text-[#e87f36] w-20 h-20 flex justify-center items-center rounded-full  bg-[#e87f36] text-white mb-2">
                <FaCar className="text-3xl" />
              </div>
              <div className="text-md text-gray-700 group-hover:text-white">
                <h2>SEARCH</h2>
                <h2> AUTO1 car</h2>
              </div>
            </div>
          </Link>
          {/* content */}
          <Link href="/">
            <div className=" group flex w-[12rem]  border border-[#e87f36]  flex-col justify-center items-center py-10  hover:bg-[#e87f36] ">
              <div className="group-hover:bg-white group-hover:text-[#e87f36] w-20 h-20 flex justify-center items-center rounded-full  bg-[#e87f36] text-white mb-2">
                <FaCar className="text-3xl" />
              </div>
              <div className="text-md text-gray-700 group-hover:text-white">
                <h2>SEARCH</h2>
                <h2> AUTO1 car</h2>
              </div>
            </div>
          </Link>
          {/* content */}
          <Link href="/">
            <div className=" group flex w-[12rem]  border border-[#e87f36]  flex-col justify-center items-center py-10  hover:bg-[#e87f36] ">
              <div className="group-hover:bg-white group-hover:text-[#e87f36] w-20 h-20 flex justify-center items-center rounded-full  bg-[#e87f36] text-white mb-2">
                <FaCar className="text-3xl" />
              </div>
              <div className="text-md text-gray-700 group-hover:text-white">
                <h2>SEARCH</h2>
                <h2> AUTO1 car</h2>
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PurchaseButtonwithDropdown;
