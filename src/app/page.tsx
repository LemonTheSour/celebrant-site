import { Metadata } from "next";
import { Italianno } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Carousel from "./components/carousel/carousel";
import slides from "./Data/carousel.json";

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
      {/* First Scroll Page */}
      <div className="flex justify-center bg-photo1 bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen z-0">
        <div className="flex w-4/6 flex-col items-center">
          <div
            className={`text-9xl text-white text-center mt-40 ${italianno.className}`}
          >
            <div className="block">Isobel Boddenham</div>
            <div>Marriage Celebrant</div>
          </div>
          <div className="text-center text-white pt-12 pb-8 text-2xl">
            <div>mobile: 0444 444 444</div>
            <div>email: example@bigpond.com.au</div>
          </div>

          <Link
            className="flex bg-sunset w-64 h-20 text-2xl items-center justify-center rounded text-white"
            href={"/contact"}
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="flex bg-sunset h-32 w-full z-10 text-black text-center items-center justify-center">
        Everything starts with a sunrise, but its what we do before it sets that
        matters
      </div>

      {/* Second Scroll Page */}
      <div className="flex justify-center items-center bg-photo2 bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen z-1">
        <div className="flex w-4/6 pl-20 pb-60">
          <div className="w-80 h-96 relative">
            <Image
              src={"/images/photo6.jpg"}
              alt={"Isobel"}
              style="fill"
              className="rounded rotate-3 drop-shadow-2xl"
            />
          </div>
          <div className="w-1/2 pl-20 text-white text-xl">
            <div className="pb-10">
              Amet duis sint adipisicing nostrud adipisicing labore mollit
              tempor sunt reprehenderit voluptate. Proident ut veniam
              consectetur deserunt do commodo culpa ex cupidatat Lorem id. Sunt
              excepteur consectetur magna sit eu magna Lorem fugiat. Aliquip
              fugiat aute magna eu et excepteur anim laboris commodo ut officia
              amet incididunt. Cillum Lorem proident minim ut et. Lorem id. Sunt
              excepteur consectetur magna sit eu magna Lorem fugiat. Aliquip
              fugiat aute magna eu et excepteur anim laboris commodo ut officia
              amet incididunt. Cillum Lorem proident minim ut et.
            </div>
            <div>
              Lorem proident minim ut et. Lorem id. Sunt excepteur consectetur
              magna sit eu magna Lorem fugiat. Aliquip fugiat aute magna eu et
              excepteur anim laboris commodo ut officia amet incididunt. Cillum
              Lorem proident minim ut et.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-sunset h-32 w-full z-10"></div>
      {/* Third Scroll Page */}
      <div>
        <div className="flex justify-center items-center bg-photo4 bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen z-3">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
