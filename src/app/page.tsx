import { Metadata } from "next";
import { Italianno } from "next/font/google";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <div>
        <div className="flex justify-center bg-photo1 bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen z-0">
          <div className="flex flex-col items-center">
            <div
              className={`text-9xl text-white text-center mt-40 ${italianno.className}`}
            >
              <div className="block">Isobel Boddenham</div>
              <div>Marriage Celebrant</div>
            </div>
            <div className="text-center text-white pt-12 pb-12 text-2xl">
              tel: 0444 444 444 | email: example@bigpond.com
            </div>
            <Link
              className="flex bg-sunset w-64 h-24 text-2xl items-center justify-center rounded text-white"
              href={"/contact"}
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="bg-sunset h-64 w-full z-10"></div>
      </div>
      <div>
        <div className="bg-photo2 bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen z-1"></div>
        <div className="bg-sunset h-64 w-full z-10"></div>
      </div>
      <div>
        <div className="bg-photo3 bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen z-2"></div>
        <div className="bg-sunset h-64 w-full z-10"></div>
      </div>
      <div>
        <div className="bg-photo4 bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen z-3"></div>
      </div>
    </div>
  );
}
