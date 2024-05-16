"use client";
import React from "react";
import { Select } from "antd";
import { MdAvTimer } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlineMyLocation } from "react-icons/md";
import FilteringOption from "@/components/Home/FilteringOption";
import SelectCountry from "@/components/Home/SelectCountry";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const HomePage = () => {
  return (
    <div className="container mx-auto grid grid-cols-12 gap-7">
      <div className=" col-span-3">
        {/* first  */}
        <div className="text-center bg-gradient-to-r from-[#3555a5] to-[#4389c7]   p-7">
          <div className="w-16 mx-auto">
            <h3 className="text-center text-md  px-3.5 py-1 bg-[#e87f36] rounded text-white">
              NEW
            </h3>
          </div>
          <h3 className="text-white text-xl mt-3">
            CHECK OUT OUR NEW FILTERS BELOW
          </h3>
        </div>

        {/* search */}
        <div className="bg-[#eeeff5] py-5">
          {/* title */}
          <h3 className="font-bold track text-3xl tracking-wide text-gray-700 ml-4 ">
            SEARCH
          </h3>

          {/* recent search or seaved search */}
          <div>
            <div className="flex justify-between items-center border-b border-black py-4 text-[#4a90e2] hover:bg-white">
              <h2 className="pl-5 ">MY RECENT SEARCHES</h2>
              <div className="pl-5">
                <FaAngleRight className="text-2xl " />
              </div>
            </div>
            <div className="flex justify-between items-center border-b border-white py-4 text-[#4a90e2] hover:bg-white">
              <h2 className="pl-5 ">MY SAVED SEARCHES</h2>
              <div className="pl-5">
                <FaAngleRight className="text-2xl " />
              </div>
            </div>
          </div>

          {/* add a location section   */}
          <div className="my-5 pl-4">
            {/* title  */}
            <h2 className="text-2xl text-gray-800 mt-5 ">1. Add a location</h2>
            <div className="flex items-center gap-2 px-2">
              <input
                placeholder="e.g Berlin, or 12049, or Germany"
                type="text"
                className="border outline-none w-full border-black bg-white mt-2 py-3 rounded px-2"
              />

              <MdOutlineMyLocation className="text-4xl text-gray-600 mr-3" />
            </div>
          </div>

          {/* within section  */}
          <div className="my-5 mx-4 pb-5 border-b border-black ">
            {/* title  */}
            <h2 className="text-2xl text-gray-800 mb-1">Within:</h2>
            <select className="w-full border-[1px] border-gray-500 py-3 px-2 outline-none rounded">
              <option value="">100km</option>
              <option value="20km">20km</option>
              <option value="50km">50km</option>
              <option value="200km">200km</option>
              <option value="300km">300km</option>
              <option value="400km">400km</option>
              <option value="750km">750km</option>
              <option value="1000km">1000km</option>
            </select>
          </div>

          {/* select one or more countries  section */}
          <div>
            <SelectCountry />
            <div>
              <h3 className="text-2xl text-gray-800 mb-1">
                2.add / Filter cars
              </h3>
            </div>

            <div className="mx-4">
              <h3>SEARCH AND SELECT MANUFACTURER(S)</h3>
              <div>
                <HiMiniMagnifyingGlass />
                <input type="text" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" col-span-9">
        {/*top section   */}
        <div className="w-full flex items-center border-b-4 border-[#e87f36] py-3 bg-white  ">
          <MdAvTimer className="text-[#e87f36] text-4xl" />
          <h2 className="font-semibold">24H Auction</h2>
        </div>
        <div>
          <FilteringOption />
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default HomePage;
