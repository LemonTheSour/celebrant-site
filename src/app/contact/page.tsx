import { Metadata } from "next";
import EmailContactForm from "../components/email";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <div className="flex justify-center relative w-full h-screen bg-photo6 bg-cover">
      <div className="p-10 mt-20 w-1/2 h-3/4 border-sunset border-4 bg-white">
        <div className="text-6xl text-center">Contact Me!</div>
        <div className="flex h-5/6 justify-between divide-x-2">
          <div className="w-1/2">
            <EmailContactForm />
          </div>
          <div className="w-1/2">Contact Info</div>
        </div>
      </div>
    </div>
  );
}
