/**
 * Title: 'DestopTopNavbar define By Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 14-05-2024
 *
 */

"use client";
import React from "react";
import Link from "next/link";
import TopNavHeaderInput from "./TopNavHeaderInput";

// icons
import { FaStar } from "react-icons/fa6";

const DeskTopNavbar = () => {
  return (
    <div className="w-full bg-[#f5f5f5] hidden md:block ">
      <div className=" container   flex items-center  justify-center   gap-32   py-2  ">
        <div>
          <TopNavHeaderInput />
        </div>
        {/* navigation bar */}
        <div className="flex items-center gap-3 text-gray-blue-300  text-sm">
          <Link className="hover:underline tracking-wider" href="/home">
            Home
          </Link>
          <span className="hover:underline tracking-wider">|</span>
          <Link
            className="hover:underline tracking-wider flex items-center gap-1"
            href="/home"
          >
            <FaStar />
            Watchlist
          </Link>
          <span className="hover:underline tracking-wider">|</span>
          <Link className="hover:underline tracking-wider" href="/home">
            Contact AUTO1.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeskTopNavbar;
