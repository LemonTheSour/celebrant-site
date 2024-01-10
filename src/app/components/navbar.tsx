import Link from "next/link";
import FacebookIcon from "./facebook";

export default function Navbar() {
  return (
    <nav className="flex absolute w-full items-center justify-center p-2 h-24 z-50">
      <div className="flex justify-between items-center justify-center w-4/6 text-white text-2xl">
        <div className="space-x-8">
          <Link href="/" className="hover:text-sunset">
            Home
          </Link>
          <Link href="/contact" className="hover:text-sunset">
            Contact
          </Link>
          <Link href="/faq" className="hover:text-sunset">
            FAQ
          </Link>
        </div>
        <div className="hover:text-sky-700">
          <Link href="https://www.facebook.com/CelebrantKalgoorlieBoulder">
            <FacebookIcon />
          </Link>
        </div>
      </div>
    </nav>
  );
}
