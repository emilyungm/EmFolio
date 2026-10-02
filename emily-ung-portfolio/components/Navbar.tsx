"use client";

import Link from "next/link";
// import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

interface NavbarProps {
  title: string;
}

const Navbar = ({ title }: NavbarProps) => {
  //   const pathname = usePathname();

  return (
    <header className="bg-surface">
      {/* <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"> */}
      <nav className="flex items-center justify-between ml-10 px-6 py-8">
        <Link className="text-rainbow font-heading text-4xl" href="/">
          {title}
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
