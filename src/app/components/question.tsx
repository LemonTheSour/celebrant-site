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
          <div className="text-5xl m-2">{Question}</div>
          <button
            onClick={() => {
              setOpenModal(!openModal);
            }}
          >
            <FaMinus size={24} />
          </button>
        </div>
        <div>
          <div className="text-3xl p-4 border-b-4 border-sunset">{Answer}</div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-between p-4 border-b-4 border-sunset">
        <div className="text-5xl m-2">{Question}</div>
        <button
          onClick={() => {
            setOpenModal(!openModal);
          }}
        >
          <FaPlus size={24} />
        </button>
      </div>
    </div>
  );
}
