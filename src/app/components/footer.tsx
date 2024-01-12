import FacebookIcon from "./facebook";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="bg-sunset flex pt-4 h-30 2xl:h-36 justify-center text-center">
      <div>
        <div>Isobel</div>
        <div>Mobile : 0417 950 699</div>
        <div>Email : boulderblock@bigpond.com</div>
        <Link href={"https://www.facebook.com/CelebrantKalgoorlieBoulder"}>
          <FacebookIcon />
        </Link>
      </div>
    </div>
  );
}
