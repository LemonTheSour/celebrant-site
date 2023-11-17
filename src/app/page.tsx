import About from "./components/about";
import Divider from "./components/divider";
import Image from "next/image";
import Photo1 from "./assets/images/photo1.jpg";
import Photo2 from "./assets/images/photo2.jpg";
import Photo3 from "./assets/images/photo3.jpeg";
import Photo4 from "./assets/images/photo4.jpg";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="pt-10">
        <About />
        <Divider />
        <Image src={Photo1} alt="Photo1" className="w-full"/>
        <Divider />
        <Image src={Photo2} alt="Photo2" className="w-full"/>
        <Divider />
        <Image src={Photo3} alt="Photo3" className="w-full"/>
        <Divider />
        <Image src={Photo4} alt="Photo4" className="w-full"/>
      </div>
    </div>
  );
}
