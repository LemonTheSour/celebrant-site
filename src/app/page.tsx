import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div>
      <div>
        <div className="bg-photo1 bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen z-0"></div>
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
