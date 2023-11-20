import About from "./components/about";
import Divider from "./components/divider";
import Image from "next/image";
import Photo1 from "./assets/images/photo1.jpg";
import Photo2 from "./assets/images/photo2.jpg";
import Photo3 from "./assets/images/photo3.jpeg";
import Photo4 from "./assets/images/photo4.jpg";

export default function Home() {
  return (
    <div>
      <div>
        <div className="bg-photo1 bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen z-0"></div>
        <div className="bg-sunset h-36 w-screen z-10"></div>
      </div>
      <div>
        <div className="bg-photo2 bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen z-0"></div>
        <div className="bg-sunset h-36 w-screen z-10"></div>
      </div>
      <div>
        <div className="bg-photo3 bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen z-0"></div>
        <div className="bg-sunset h-36 w-screen z-10"></div>
      </div>
      <div>
        <div className="bg-photo4 bg-no-repeat bg-cover bg-center bg-fixed w-full h-screen z-0"></div>
        <div className="bg-sunset h-36 w-screen z-10"></div>
      </div>
    </div>
  );
}
