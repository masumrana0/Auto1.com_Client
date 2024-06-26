import React from "react";
import DeskTopNavbar from "./ui/DeskTopNavbar";
import DeskBottomNavbar from "./ui/DeskBottomNavbar";
import DeskMiddleNavbar from "./ui/DeskMiddleNavbar";

const Navbar = () => {
  return (
    <div className="mb-7">
      <DeskTopNavbar />
      <DeskMiddleNavbar />
      <DeskBottomNavbar />
    </div>
  );
};

export default Navbar;
