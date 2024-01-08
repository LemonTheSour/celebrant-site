import { Quintessential } from "next/font/google";

export interface slideProps {
  text: String;
  heading: String;
  icon: String;
}

const quintissential = Quintessential({
  weight: "400",
  subsets: ["latin"],
});

export default function Slide({ text, heading, icon }: slideProps) {
  return (
    <div className="flex min-h-full min-w-full text-white justify-center text-center">
      <div className="pt-20 w-5/6">
        <div className="text-6xl pb-12">{heading}</div>
        <div className={`text-2xl pb-12 ${quintissential.className}`}>
          {text}
        </div>
      </div>
    </div>
  );
}
