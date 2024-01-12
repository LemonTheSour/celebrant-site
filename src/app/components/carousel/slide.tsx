import { Quintessential } from "next/font/google";
import Header from "../header";

export interface slideProps {
  text: String;
  heading: String;
}

const quintissential = Quintessential({
  weight: "400",
  subsets: ["latin"],
});

export default function Slide({ text, heading }: slideProps) {
  return (
    <div className="flex min-h-full min-w-full text-white justify-center items-center text-center">
      <div className="pt-20 w-5/6">
        <Header text={heading} />
        <div
          className={`text-4xl 2xl:text-6xl pb-12 ${quintissential.className}`}
        >
          {text}
        </div>
      </div>
    </div>
  );
}
