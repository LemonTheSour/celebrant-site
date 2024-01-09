import { FaHeart } from "react-icons/fa";

interface headerProps {
  text: String;
}

export default function Header({ text }: headerProps) {
  return (
    <div>
      <div className="text-6xl text-white">{text}</div>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-white"></div>
        <div className="flex-shrink mx-4 text-white">
          <FaHeart />
        </div>
        <div className="flex-grow border-t border-white"></div>
      </div>
    </div>
  );
}
