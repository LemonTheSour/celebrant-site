import Link from "next/link";
import FacebookIcon from "./facebook";

export default function Header() {
  return (
    <header className="flex items-center justify-center bg-white p-2 h-24 sticky top-0 z-50 border-b-2 border-sunset">
      <div className="flex justify-between items-center justify-center w-4/6">
        <div>
          <Link href="/">Isobel</Link>
        </div>
        <div className="space-x-8">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <div>
          <Link href="https://www.facebook.com/search/top?q=isobel%20bodenham%20marriage%20celebrant">
            <FacebookIcon />
          </Link>
        </div>
      </div>
    </header>
  );
}
