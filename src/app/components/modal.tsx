"use client";
import { useState } from "react";
import { RiMailSendLine } from "react-icons/ri";
import { FaWindowClose } from "react-icons/fa";

export interface modalProps {
  open: boolean;
  onSuccess: () => void;
  onClose: () => void;
}
export default function Modal({ open, onSuccess, onClose }: modalProps) {
  const openHandler = () => {
    onSuccess();
  };

  const closeHandler = () => {
    onClose();
  };

  if (!open) return null;

  return (
    <div className="flex justify-center items-center bg-black bg-opacity-50 fixed inset-0 z-50">
      <div className="flex flex-col items-center w-1/5 h-1/6 bg-white rounded">
        <div className="flex justify-end items-center bg-[green] w-full h-6">
          <button className="pr-2">
            <FaWindowClose color={"white"} onClick={closeHandler} />
          </button>
        </div>
        <div className="text-center text-4xl text-[green] pt-2 pb-2">
          Message Sent!
        </div>
        <RiMailSendLine size={64} color={"green"} />
      </div>
    </div>
  );
}
