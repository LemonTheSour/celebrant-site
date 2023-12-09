import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div>
      <div>
        <div className="bg-photo1 bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen z-0">
          <div className="w-full h-screen flex pt-20 content-center justify-end align-center">
            <div className="bg-white w-5/6 border-sunset border-4 h-3/4 rounded-s-full"></div>
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
