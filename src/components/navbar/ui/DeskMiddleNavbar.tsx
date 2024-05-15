"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaCarAlt } from "react-icons/fa";
import { FaCar } from "react-icons/fa6";
import PurchaseButtonwithDropdown from "./PurchaseButtonwithDropdown";
import OrderButtonWithDropdown from "./OrderButtonWithDropdown";

const DeskMiddleNavbar = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex items-center gap-10">
        <div className="relative">
          <div className="flex ite">
            <h2 className="  text-2xl  font-bold text-white bg-[#304f95] flex  px-2 py-1">
              logo here
            </h2>
          </div>
        </div>

        {/* purchase dropdown and order dropdown */}
        <div className="flex gap-1 items-center">
          <div>
            <PurchaseButtonwithDropdown />
          </div>
          <div>
            <OrderButtonWithDropdown />
          </div>
        </div>
      </div>
      {/* dorpdown */}
      <div>

      </div>
    </div>
  );
};

export default DeskMiddleNavbar;
