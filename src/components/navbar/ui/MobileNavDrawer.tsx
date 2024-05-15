"use client";

import React, { useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";
import type { DrawerProps, RadioChangeEvent } from "antd";
import { FaAngleLeft } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import TopNavHeaderInput from "./TopNavHeaderInput";
import Link from "next/link";
import Logo from "./Logo";

const MobileNavDrawer = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("right");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="block md:hidden">
        <button onClick={showDrawer}>
          <FiMenu className="text-3xl  " />
        </button>
      </div>
      <Drawer
        keyboard={true}
        className="p-0"
        style={{ padding: 0 }}
        placement={placement}
        width={220}
        closeIcon={
          <Space>
            <button
              className="flex items-center  text-blue-500   px-2 py-2 ml-5"
              onClick={onClose}
            >
              <FaAngleLeft />
              Back
            </button>
          </Space>
        }
        open={open}
      >
        <div className="pb-10">
          <div className="my-5">
            <TopNavHeaderInput />
          </div>

          <div>
            <div className="border-t-[1px] border-black py-3 hover:bg-gray-100 pl-4 text-[#4a90e2] hover:text-[#4676ab]">
              <Link href={"/"}>PURCHASE</Link>
            </div>
            <div className="border-y-[1px] border-black py-3 hover:bg-gray-100 pl-4 text-[#4a90e2] hover:text-[#4676ab]">
              <Link href={"/"}>MY ORDER</Link>
            </div>
          </div>

          <div className="border-l-[5px] border-[#e87f36]">
            <div className="  py-3 hover:bg-gray-100 pl-3 text-[#4a90e2] hover:text-[#4676ab]">
              <Link href={"/"}>MY ACCOUNT</Link>
            </div>
            <div className="border-t-[1px] border-black py-3 hover:bg-gray-100 pl-3 text-[#4a90e2] hover:text-[#4676ab]">
              <Link href={"/"}>MY CAR PURCHASING PREFERENCES</Link>
            </div>
            <div className="border-t-[1px] border-black py-3 hover:bg-gray-100 pl-3 text-[#4a90e2] hover:text-[#4676ab]">
              <Link href={"/"}>MESSAGING CENENTER</Link>
            </div>
            <div className="border-t-[1px] border-black py-3 hover:bg-gray-100 pl-3 text-[#4a90e2] hover:text-[#4676ab]">
              <Link href={"/"}> ADDRESS SETTINGS</Link>
            </div>
            <div className="border-t-[1px] border-black py-3 hover:bg-gray-100 pl-3 text-[#4a90e2] hover:text-[#4676ab]">
              <Link href={"/"}> LOG OUT</Link>
            </div>
          </div>

          <div className="border-l-[5px] border-[#4a90e2]">
            <div className=" border-t-[1px] border-black  py-3 hover:bg-gray-100 pl-3 text-[#4a90e2] hover:text-[#4676ab]">
              <Link href={"/"}>HOME</Link>
            </div>
            <div className="border-t-[1px] border-black py-3 hover:bg-gray-100 pl-3 text-[#4a90e2] hover:text-[#4676ab]">
              <Link href={"/"}>WATCHLIST</Link>
            </div>
            <div className="border-y-[1px] border-black py-3 hover:bg-gray-100 pl-3 text-[#4a90e2] hover:text-[#4676ab]">
              <Link href={"/"}>CONTACT AUTO1.COM</Link>
            </div>
          </div>

          <div className="mt-7">
            <div className="mx-5">
              <Logo />
            </div>
            <p className="text-xs mt-3 text-center">
              CopyRight © 2024 Auto1.com
            </p>
            <div className="flex gap-1 justify-center mt-1">
              <Link className="text-blue-600 underline" href={"/prevacy"}>
                Privacy
              </Link>{" "}
              |
              <Link
                href={"/termsandconditions"}
                className="text-blue-600 underline"
              >
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileNavDrawer;
