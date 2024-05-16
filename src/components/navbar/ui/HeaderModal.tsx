"use client";
import React from "react";
import { Modal } from "antd";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { setHeaderModalOpen } from "@/Redux/Slices/unitlitySlice";
import HeaderModalContent from "./HeaderModalContent";

const HeaderModal = () => {
  // redux
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.utilitySlice.headerModalOpen);

  //   show modal
  const showAndCancelModal = () => {
    dispatch(setHeaderModalOpen());
  };

  return (
    <div>
      <button
        onClick={showAndCancelModal}
        className="font-semibold  text-white px-4 py-2 bg-[#e87f36] text-sm  "
      >
        UPLOAD YOUR COMPANY DOCUMENTS
      </button>

      <Modal
        width={800}
        closeIcon={null}
        footer={null}
        open={isOpen}
        onCancel={showAndCancelModal}
      >
        <div>
          <HeaderModalContent />
        </div>
      </Modal>
    </div>
  );
};

export default HeaderModal;
