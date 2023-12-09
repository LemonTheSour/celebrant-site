import Link from "next/link";
import FacebookIcon from "./facebook";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-white p-2 h-16 sticky top-0 border-b-2 border-sunset">
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
    </header>
  );
}
