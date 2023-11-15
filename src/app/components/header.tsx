import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-sunset flex justify-between items-center p-2 h-36">
      <div className="space-x-2">
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div>Logo</div>
      <div>Facebook</div>
    </header>
  );
}
