import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between px-14 py-4 w-screen fixed z-10">
      <Link href="/" className="font-semibold">{`Yugo's Portfolio`}</Link>
      <nav>
        <ul className="flex">
          <li><Link href="/about">about</Link></li>
          <li className="px-5"><Link href="/works">works</Link></li>
          <li><Link href="/skills">skills</Link></li>
        </ul>
      </nav>
    </div>
  );
}