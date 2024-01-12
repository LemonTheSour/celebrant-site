import { Metadata } from "next";
import { Italianno, Quintessential } from "next/font/google";
import Link from "next/link";
import Image from "next/legacy/image";
import Carousel from "./components/carousel/carousel";
import Divider from "./components/divider";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "Home",
};

const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
});

const quintissential = Quintessential({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      {/* First Scroll Page */}
      <div className="flex justify-center bg-photo1 bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen z-0">
        <div className="flex w-4/6 flex-col items-center">
          <div
            className={`text-7xl 2xl:text-9xl text-white text-center mt-40 ${italianno.className}`}
          >
            <div className="block">Isobel Bodenham</div>
            <div>Marriage Celebrant</div>
          </div>
          <div className="text-center text-white pt-12 pb-8 text-xl 2xl:text-2xl">
            <div>Mobile: 0417 950 699</div>
            <div>Email: boulderblock@bigpond.com</div>
          </div>

          <Link
            className="flex bg-sunset w-48 h-16 2xl:w-64 2xl:h-20 text-2xl items-center justify-center rounded text-white hover:bg-sunset-light"
            href={"/contact"}
          >
            Contact
          </Link>
        </div>
      </div>
      <Divider
        text="Everything starts with a sunrise, but its what we do before it sets that
        matters"
      />

      {/* Second Scroll Page */}
      <div className="bg-photo2 bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen z-1">
        <div className="flex flex-col justify-center items-center pt-10">
          <Header text="Kalgoorlie-Boulder Marriage Celebrant" />
          <div className="flex justify-center content-center w-4/6 pl-20 pb-60">
            <div className="w-64 h-80 2xl:h-96 2xl:w-80 relative">
              <Image
                src={"/images/photo6.jpg"}
                alt={"Isobel"}
                layout="fill"
                className="rotate-3 p-20"
              />
            </div>
            <div
              className={`w-1/2 pl-20 text-white h-80 text-lg 2xl:text-2xl ${quintissential.className}`}
            >
              <div className="pb-10">
                For a professional, personal and pleasant experience, I'm here
                to collaborate with you on your special day. No one knows you
                like you and no one knows weddings like me. Marriage is work,
                from the very start to the very end. I'm here to take a little
                bit of that work off your shoulders and help craft an
                unforgettable day.
              </div>
              <div>
                Over the months before your wedding, we'll organise all the fine
                details to make sure your day is especially special. The first
                consult is free, so don't wait around wondering, send me a
                message or give me a call to start your journey off right.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider text="Marriage is the sunrise of love" />
      {/* Third Scroll Page */}
      <div className="flex flex-col items-center bg-photo4 bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen z-3">
        <Carousel />
      </div>
    </div>
  );
}
