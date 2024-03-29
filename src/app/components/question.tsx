"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export interface QuestionProps {
  Question: String;
  Answer: String;
}

export default function Question({ Question, Answer }: QuestionProps) {
  const [openModal, setOpenModal] = useState(false);

  if (openModal) {
    return (
      <div>
        <div className="flex justify-between p-4 bg-sunset-light">
          <div className="text-xl m-2">{Question}</div>
          <button
            onClick={() => {
              setOpenModal(!openModal);
            }}
          >
            <FaMinus size={16} />
          </button>
        </div>
        <div>
          <div className="text-md p-4 border-b-2 border-sunset">{Answer}</div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-between p-4 border-b-2 border-sunset">
      <div className="text-xl m-2">{Question}</div>
      <button
        onClick={() => {
          setOpenModal(!openModal);
        }}
      >
        <FaPlus size={16} />
      </button>
    </div>
  );
}
