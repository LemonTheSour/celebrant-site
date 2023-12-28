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
        <div className="flex justify-between pr-2 bg-sunset-light">
          <div className="text-5xl m-2">{Question}</div>
          <button
            onClick={() => {
              setOpenModal(!openModal);
            }}
          >
            <FaMinus />
          </button>
        </div>
        <div>
          <div className="text-3xl">{Answer}</div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-between pr-2">
        <div className="text-5xl m-2">{Question}</div>
        <button
          onClick={() => {
            setOpenModal(!openModal);
          }}
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
}
