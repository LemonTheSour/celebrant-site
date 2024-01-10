import { Italianno } from "next/font/google";

export interface dividerProps {
  text: String;
}

const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
});

export default function Divier({ text }: dividerProps) {
  return (
    <div className="flex items-center text-5xl justify-center bg-sunset h-16 w-full z-10">
      <div className={italianno.className}>{text}</div>
    </div>
  );
}
