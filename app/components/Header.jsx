"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import hamburger from "../assets/hamburger.webp";
import cross from "../assets/cross.jpg";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Function to check window size and determine if it's mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    // Check on mount and listen for window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="border-b-2 border-gray-400">
      <nav className="flex items-center justify-between px-8 py-5 text-gray-400 font-bold">
        {/* Logo / Title */}
        <h2 className="text-xl hover:text-white transition-all delay-100">
          <Link href="/">Somil Gupta</Link>
        </h2>

        {/* Mobile Menu Button and Menu */}
        {isMobile ? (
          <div>
            <Image
              src={hamburger}
              alt="Open menu"
              className="cursor-pointer"
              width={30}
              height={30}
              onClick={() => setShowMenu(true)}
            />

            {showMenu && (
              <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center">
                <Image
                  src={cross}
                  alt="Close menu"
                  className="cursor-pointer mb-5"
                  width={30}
                  height={30}
                  onClick={() => setShowMenu(false)}
                />
                <Link href="/" onClick={() => setShowMenu(false)}>
                  <span className="text-white text-lg mb-4">HOME</span>
                </Link>
                <Link href="/about" onClick={() => setShowMenu(false)}>
                  <span className="text-white text-lg mb-4">ABOUT</span>
                </Link>
                <Link href="/services" onClick={() => setShowMenu(false)}>
                  <span className="text-white text-lg mb-4">SERVICES</span>
                </Link>
                <Link href="/projects" onClick={() => setShowMenu(false)}>
                  <span className="text-white text-lg mb-4">PROJECTS</span>
                </Link>
                <Link href="/contact" onClick={() => setShowMenu(false)}>
                  <button className="mt-4 border-2 px-4 py-2 rounded text-white hover:text-black hover:bg-white transition-all">
                    CONTACT
                  </button>
                </Link>
              </div>
            )}
          </div>
        ) : (
          /* Desktop Menu */
          <div className="flex gap-14">
            <Link href="/">
              <span className="hover:text-white transition-all delay-100">HOME</span>
            </Link>
            <Link href="/about">
              <span className="hover:text-white transition-all delay-100">ABOUT</span>
            </Link>
            <Link href="/services">
              <span className="hover:text-white transition-all delay-100">SERVICES</span>
            </Link>
            <Link href="/projects">
              <span className="hover:text-white transition-all delay-100">PROJECTS</span>
            </Link>
            <Link href="/contact">
              <button className="border-2 px-4 py-2 rounded hover:text-black hover:bg-white transition-all">
                CONTACT
              </button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
