"use client";

import Link from "next/link";

interface NavbarProps {
  title: string;
}

const Navbar = ({ title }: NavbarProps) => {
  return (
    <header className="bg-surface sticky top-0 z-100">
      <nav className="flex items-center justify-between mx-5 px-6 py-8">
        <div className="w-1/3">
          <Link className="text-rainbow font-accent text-4xl" href="/">
            {title}
          </Link>
        </div>
        <div className="flex w-1/3 justify-between">
          <Link className="text-ink font-mono" href="/work-experience">
            Work Experience
          </Link>
          <Link className="text-ink font-mono" href="/education">
            Education
          </Link>
          <Link className="text-ink font-mono" href="/projects">
            Projects
          </Link>
          <Link className="text-ink font-mono" href="/contact">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
