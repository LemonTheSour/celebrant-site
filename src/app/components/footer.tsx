import FacebookIcon from "./facebook";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="bg-sunset flex pt-4 h-36 justify-center text-center space-x-10">
      <div>
        <div>Isobel</div>
        <div>Mobile : 0444 444 444</div>
        <div>Email : example@email.com.au</div>
        <Link
          href={
            "https://www.facebook.com/search/top?q=isobel%20bodenham%20marriage%20celebrant"
          }
        >
          <FacebookIcon />
        </Link>
      </div>
    </div>
  );
}
