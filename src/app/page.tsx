import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div>
      <div>
        <div className="flex justify-center bg-photo1 bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen z-0">
          <div className="w-1/2 h-screen flex items-center">
            <div className="rounded-full h-64 w-64"></div>
          </div>
        </div>
        <div className="bg-sunset h-64 w-full z-10"></div>
      </div>
      <div>
        <div className="bg-photo2 bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen z-0"></div>
        <div className="bg-sunset h-64 w-full z-10"></div>
      </div>
      <div>
        <div className="bg-photo3 bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen z-0"></div>
        <div className="bg-sunset h-64 w-full z-10"></div>
      </div>
      <div>
        <div className="bg-photo4 bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen z-0"></div>
      </div>
    </div>
  );
}
