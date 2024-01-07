"use client";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import slides from "../../Data/carousel.json";
import Slide from "./slide";

export interface CarouselProps {
  Key: String;
  Text: String;
}

export default function Carousel() {
  const [curr, setCurr] = useState(0);

  const cards = slides;

  const next = () => {
    setCurr((curr) => (curr == 0 ? slides.length - 1 : curr - 1));
  };

  const prev = () => {
    setCurr((curr) => (curr == slides.length - 1 ? 0 : curr + 1));
  };
  return (
    <div className="flex items-center justify-center overflow-hidden relative">
      <div
        className="flex h-80 w-96 transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide) => (
          <Slide key={slide.key} text={slide.text} />
        ))}
      </div>
      <div className="flex absolute inset-0 items-center justify-between p-4">
        <button>
          <FaChevronLeft size={20} onClick={next} />
        </button>
        <button>
          <FaChevronRight size={20} onClick={prev} />
        </button>
      </div>
    </div>
  );
}
