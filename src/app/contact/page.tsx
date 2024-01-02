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
      <div className="pt-5 mt-20 w-1/2 h-3/4 border-sunset border-4 bg-white">
        <div className="text-6xl text-center">Contact Me!</div>
        <div className="flex h-5/6 justify-between divide-x-2">
          <div className="w-1/2 pt-10">
            <EmailContactForm />
          </div>
          <div className="w-1/2 p-12 space-y-8">
            <div className="flex justify-start items-center space-x-8 text-2xl">
              <FaEnvelope size={32} />
              <div>example@bigpond.com</div>
            </div>
            <div className="flex justify-start items-center space-x-8 text-2xl">
              <FaMobile size={32} />
              <div>0444 444 444</div>
            </div>
            <Link
              className="flex justify-start items-center space-x-8 text-2xl"
              href="https://www.facebook.com/search/top?q=isobel%20bodenham%20marriage%20celebrant"
            >
              <FaFacebookSquare size={32} />
              <div>Facebook</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
