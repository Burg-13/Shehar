"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Lifestyle", href: "/lifestyle" },
  { name: "Fashion", href: "/fashion" },
  { name: "Travel", href: "/travel" },
  { name: "Food", href: "/food" },
  { name: "Covers", href: "/covers" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-3xl font-serif font-bold tracking-tight text-foreground z-50">
          Shehar.
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm tracking-wide uppercase font-medium transition-colors hover:text-primary ${
                pathname === link.href ? "text-primary border-b-2 border-primary" : "text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="bg-primary text-white px-6 py-2.5 rounded-full text-sm tracking-wider uppercase font-medium hover:bg-[#732218] transition-colors">
            Subscribe
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-foreground z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-background z-50 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out lg:hidden overflow-y-auto py-20 ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <nav className="flex flex-col items-center gap-6 mt-10">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-2xl font-serif transition-colors hover:text-primary ${
                  pathname === link.href ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <button className="bg-primary text-white px-8 py-3 rounded-full tracking-wider uppercase font-medium mt-auto mb-10 hover:bg-[#732218] transition-colors shrink-0">
            Subscribe Now
          </button>
        </div>
      </div>
    </header>
  );
}
