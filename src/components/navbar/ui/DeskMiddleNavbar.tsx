"use client";
import Link from "next/link";
import React from "react";

import PurchaseButtonwithDropdown from "./PurchaseButtonwithDropdown";
import OrderButtonWithDropdown from "./OrderButtonWithDropdown";
import UserDropdown from "./UserDropdown";

// icons
import { FiMenu } from "react-icons/fi";
import MobileNavDrawer from "./MobileNavDrawer";
import Logo from "./Logo";

const DeskMiddleNavbar = () => {
  return (
    <div className="bg-white w-full">
      <div className="container mx-auto flex items-center justify-between py-2 px-5">
        <div className="flex items-center gap-10">
          {/* logo */}
          <div>
            <Logo />
          </div>

          {/* purchase dropdown and order dropdown */}
          <div className="md:flex gap-1 items-center hidden ">
            <div>
              <PurchaseButtonwithDropdown />
            </div>
            <div>
              <OrderButtonWithDropdown />
            </div>
          </div>
        </div>
        {/* dorpdown */}
        <div className="flex items-center  gap-3">
          <div>
            <UserDropdown />
          </div>
          <div>
            <MobileNavDrawer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeskMiddleNavbar;
