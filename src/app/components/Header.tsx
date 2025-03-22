import type { Metadata } from "next";
import "../globals.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="nav-left">
        <Link href="/">Home</Link>
      </div>
      <div className="nav-right flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <i className="fas fa-sun"></i>
          <label className="switch">
            <input type="checkbox" id="theme-toggle" />
            <span className="slider round"></span>
          </label>
          <i className="fas fa-moon"></i>
        </div>

        <nav className="hidden md:flex space-x-4">
            <Link href="/about" className="hover:underline">
            About Me</Link>
            <Link href="/projects" className="hover:underline">
            Projects</Link>
        </nav>
      </div>
    </header>
  );
}
