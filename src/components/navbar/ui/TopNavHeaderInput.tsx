/**
 * Title: 'top navbar input define by Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 14-05-2024
 *
 */

"use client";
import React, { useState } from "react";
// icon
import { FaAngleRight } from "react-icons/fa6";

const TopNavHeaderInput = () => {
  // essential state
  const [showBtn, setShowBtn] = useState<boolean>(false);

  // handle submiting value
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const value = form.querySelector("input")?.value;

    if (value && value.length > 0) {
      console.log("Submitted value:", value);
    }
    // Reset the form after submission
    form.reset();
    setShowBtn(false);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="relative mx-4  md:w-[14.7rem] border-[0.5px] border-gray-500 rounded-md  "
    >
      <input
        type="text"
        maxLength={7}
        placeholder="Stock number (e.g. MK23468)"
        onBlur={() => {
          const input = document.querySelector("input") as HTMLInputElement;
          if (!input.value) {
            setShowBtn(false);
          }
        }}
        onFocus={() => setShowBtn(true)}
        className="py-1 md:px-4 px-2 text-[10px] md:text-sm    md:w-full focus:outline-none text-gray-700 placeholder-gray-800   "
      />
      {showBtn && (
        <button
          type="submit"
          className="absolute inset-y-0 text-white font-extrabold right-0 px-3 md:px-4 md:py-2 bg-blue-500 focus:outline-none rounded-r-md  "
        >
          <FaAngleRight />
        </button>
      )}
    </form>
  );
};

export default TopNavHeaderInput;
