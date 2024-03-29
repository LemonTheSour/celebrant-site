import { Metadata } from "next";
import EmailContactForm from "../components/email";
import { FaMobile, FaEnvelope, FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <div className="flex justify-center relative w-full h-screen bg-photo6 bg-cover">
      <div className="pt-5 mt-40 w-4/6 h-4/6 2xl:h-3/4 bg-white">
        <div className="text-3xl text-center">
          The Quickest Way to Find Out Is Ask, So Ask!
        </div>
        <div className="flex h-5/6 justify-between divide-x-2 2xl:pt-6">
          <div className="w-1/2 2xl:pt-10">
            <EmailContactForm />
          </div>
          <div className="w-1/2 p-12 2xl:pt-16 space-y-8 2xl:space-y-16">
            <div className="flex justify-start items-center space-x-8 text-md 2xl:text-2xl">
              <FaEnvelope size={32} />
              <div>boulderblock@bigpond.com</div>
            </div>
            <div className="flex justify-start items-center space-x-8 text-md 2xl:text-2xl">
              <FaMobile size={32} />
              <div>0417 950 699</div>
            </div>
            <a
              className="flex justify-start items-center space-x-8 text-md 2xl:text-2xl hover:text-sky-700"
              target="_blank"
              href="https://www.facebook.com/CelebrantKalgoorlieBoulder"
            >
              <FaFacebookSquare size={32} />
              <div>Facebook</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
