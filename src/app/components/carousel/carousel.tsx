"use client";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export interface CarouselProps {
  Key: String;
  Text: String;
}

export default function Carousel() {
  const [curr, setCurr] = useState(0);

  return (
    <div>
      <div className="bg-sunset w-96 h-80 relative">
        <div className="flex h-full w-full items-center justify-between p-4 absolute">
          <button>
            <FaChevronLeft size={20} />
          </button>
          <button>
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
