"use client";
import Image from "next/image";
import React, { useState } from "react";
import Austria from "/public/assets/countries/austria.png";
import finland from "/public/assets/countries/finland.png";
import france from "/public/assets/countries/france.png";
import germany from "/public/assets/countries/germany.png";
import Luxembourg from "/public/assets/countries/luxembourg.png";
import Netherlands from "/public/assets/countries/netherlands.png";
import italy from "/public/assets/countries/italy.png";
import Poland from "/public/assets/countries/poland.png";
import Denmark from "/public/assets/countries/denmark.png";

const SelectCountry = () => {
  const [showCountries, setShowCountries] = useState(false);

  const europeanCountries = [
    {
      name: "Austria",
      flag: Austria,
    },
    {
      name: "France",
      flag: france,
    },
    {
      name: "Denmark",
      flag: Denmark,
    },
    {
      name: "Finland",
      flag: finland,
    },
    {
      name: "France",
      flag: france,
    },
    {
      name: "Germany",
      flag: germany,
    },
    {
      name: "Italy",
      flag: italy,
    },
    {
      name: "Luxembourg",
      flag: Luxembourg,
    },
    {
      name: "Netherlands",
      flag: Netherlands,
    },
    {
      name: "Poland",
      flag: Poland,
    },
  ];
  return (
    <div className="mx-4">
      <div className="">
        <h2 className="mb-2 font-semibold">Or select one ormore countries</h2>
        <button
          onClick={() => setShowCountries(!showCountries)}
          className="w-full bg-[#4a90e2] text-lg text-white py-3"
        >
          {showCountries ? "HIDE COUNTRIES" : "SELECT COUNTRY"}
        </button>
      </div>

      {showCountries && (
        <div className="mt-4 ">
          <h2 className="text-lg font-bold mb-2">
            European Countries with Plug Types:
          </h2>
          <ul className="h-[400px] overflow-y-auto">
            {europeanCountries.map((country, index) => (
              <li key={index} className="mb-2 flex  gap-3">
                <label className="flex items-center cursor-pointer gap-2">
                  <input
                    type="checkbox"
                    className="h-5 w-5 rounded-full bg-gray-200 focus:ring-blue-500 focus:ring-opacity-50"
                  />
                </label>
                <Image
                  src={country.flag}
                  width={40}
                  height={30}
                  alt="country img"
                />
                <span className="font-bold">{country.name}</span>{" "}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectCountry;
