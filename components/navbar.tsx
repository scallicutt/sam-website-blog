"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <ul className="flex gap-16 py-8 justify-center text-xl">
          <li>
            <Link
              href="/"
              className={`hover:text-black transition-all ${
                pathname === "/" ? "text-black underline" : "text-gray-500"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`hover:text-black transition-all ${
                pathname === "/about" ? "text-black underline" : "text-gray-500"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className={`hover:text-black transition-all ${
                pathname === "/portfolio"
                  ? "text-black underline"
                  : "text-gray-500"
              }`}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className={`hover:text-black transition-all ${
                pathname === "/gallery"
                  ? "text-black underline"
                  : "text-gray-500"
              }`}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`hover:text-black transition-all ${
                pathname === "/contact"
                  ? "text-black underline"
                  : "text-gray-500"
              }`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/capstone"
              className={`hover:text-black transition-all ${
                pathname === "/capstone"
                  ? "text-black underline"
                  : "text-gray-500"
              }`}
            >
              Capstone
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
