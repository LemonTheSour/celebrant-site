import { Metadata } from "next";
import EmailContactForm from "../components/email";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <div className="h-36">
      <EmailContactForm />
    </div>
  );
}
