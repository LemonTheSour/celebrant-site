import { Metadata } from "next";
import Image from "next/image";
import EmailContactForm from "../components/email";
import Sunset from "../assets/images/sunset.jpg";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <div className="relative w-full h-screen">
      <div>
        <Image
          src={Sunset}
          alt="Sunset"
          className="absolute w-full h-screen z-0"
        />
      </div>
      <div className="relative z-10">
        <EmailContactForm />
      </div>
    </div>
  );
}
