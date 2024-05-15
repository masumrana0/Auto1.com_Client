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
      className="relative w-[14.7rem]  border-1 border-black  "
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
        className="py-1 px-4 text-sm  border rounded-md w-full focus:outline-none text-gray-700 placeholder-gray-800   "
      />
      {showBtn && (
        <button
          type="submit"
          className="absolute inset-y-0 text-white font-extrabold right-0 px-4 py-2 bg-blue-500 focus:outline-none rounded-r-md  "
        >
          <FaAngleRight />
        </button>
      )}
    </form>
  );
};

export default TopNavHeaderInput;
