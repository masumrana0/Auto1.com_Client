import Link from "next/link";
import React from "react";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";

// icons
import { IoIosPerson } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";

const UserDropdown = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div className="border-black border-b py-2">
          <Link className="font-semibold hover:underline " href={"/my-account"}>
            My Account
          </Link>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="border-black border-b py-2">
          <Link className="font-semibold hover:underline " href={"/my-account"}>
            My car purchasing preferences
          </Link>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="border-black border-b py-2">
          <Link className="font-semibold hover:underline " href={"/my-account"}>
            Messageing Center
          </Link>
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <div className="border-black border-b py-2">
          <Link className="font-semibold hover:underline " href={"/my-account"}>
            Address settings
          </Link>
        </div>
      ),
    },
    {
      key: "5",
      label: (
        <div className="border-black border-b py-2">
          <Link className="font-semibold hover:underline " href={"/my-account"}>
            <button>Log out</button>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Dropdown menu={{ items }} placement="bottom">
        <div className="flex items-center justify-between md:gap-2 gap-1 md:w-[15rem] border py-2 md:py-1 px-2">
          <div className="flex  items-center gap-1">
            <IoIosPerson className="text-2xl md:text-4xl text-[#314f8f]" />
            <h2 className="text-sm hidden md:block">Hello Mr. Ali</h2>
          </div>
          <FaAngleDown />
        </div>
      </Dropdown>
    </div>
  );
};

export default UserDropdown;
