"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/", active: true },
    { name: "Menu", href: "/menu" },
    { name: "Blog", href: "/blog" },
    { name: "Pages", href: "/pages" },
    { name: "About", href: "/about" },
    { name: "Shop", href: "/shop" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/FAQ" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="z-50 w-full bg-[#0D0D0D] sticky top-0 px-4 sm:px-6 lg:px-[15.62%] py-4 lg:py-7">
      {/* Logo Row (Centered) */}
      <div className="flex justify-center mb-4">
        <Link
          href="/"
          className="text-[20px] sm:text-[24px] leading-[32px] font-bold text-white"
        >
          Food<span className="text-[#FF9F0D]">tuck</span>
        </Link>
      </div>

      {/* Navigation & Icons */}
      <nav className="flex justify-between items-center">
        {/* Mobile Menu Toggle (Left Side) */}
        <Button
          variant="ghost"
          className="lg:hidden text-white"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Navigation Links (Left Side) */}
        <div
          className={`fixed inset-0 bg-[#0D0D0D] flex flex-col items-center justify-center gap-6
          lg:static lg:flex-row lg:bg-transparent lg:gap-8 transition-all duration-300
          ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible lg:opacity-100 lg:visible"}`}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-6">
            {menuItems.map((item) => (
              <li key={item.name} className="text-center">
                <Link
                  href={item.href}
                  className={`text-[16px] leading-6 ${
                    item.active ? "text-[#FF9F0D] font-bold" : "text-white"
                  } font-inter hover:text-[#FF9F0D] transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Icons Row (Right Side) */}
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-white hover:text-[#FF9F0D] transition-colors"
            aria-label="Search"
          >
            <Search size={24} />
          </Link>
          <Link
            href="/signup"
            className="text-white hover:text-[#FF9F0D] transition-colors"
            aria-label="User Profile"
          >
            <User size={24} />
          </Link>
          <Link
            href="/cart"
            className="text-white hover:text-[#FF9F0D] transition-colors"
            aria-label="Shopping Cart"
          >
            <ShoppingCart size={24} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
