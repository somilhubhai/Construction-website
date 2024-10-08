import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mt-2 bg-white min-h-screen rounded-lg text-black p-5">
        <div className="flex">
          <h2>SOMIL GUPTA</h2>
          <h2 className="md:ml-40 ml-5">MENU</h2>
          <h2 className="md:ml-40 ml-16">FOLLOW ME</h2>
        </div>
        <div className="flex">
          <p className="text-slate-400">~Somil Gupta The developer</p>
          <div className="md:ml-14 md:text-xl text-md">
            <h2 className="transition-all hover:text-slate-400 duration-100">
              <Link href="/about"> About</Link>
            </h2>
            <h2 className="transition-all hover:text-slate-400 duration-100">
              <Link href="/services">Services</Link>
            </h2>
            <h2 className="transition-all hover:text-slate-400 duration-100">
              <Link href="/projects">Projects</Link>
            </h2>
            <h2 className="transition-all hover:text-slate-400 duration-100">
              <Link href="/contact">Contact</Link>
            </h2>
          </div>
          <div className="md:ml-32 ml-16 md:text-xl text-md">
            <h2 className="transition-all hover:text-slate-400 duration-100">
              <a
                href="https://www.linkedin.com/in/somil-gupta-903b06280/"
                target="_blank"
              >
                LinkedIn
              </a>
            </h2>
            <h2 className="transition-all hover:text-slate-400 duration-100">
              <a href="https://github.com/somilhubhai/" target="_blank">
                Github
              </a>
            </h2>
            <h2 className="transition-all hover:text-slate-400 duration-100">
              <a
                href="https://www.instagram.com/somilgupta___/"
                target="_blank"
              >
                Instagram
              </a>
            </h2>
          </div>
        </div>
        <div className="mt-40">
          <h2>Created with ❤ by</h2>
          <h1 className="md:text-[12rem] text-[5rem] text-slate-300 hover:animate-pulse hover:translate-x-4 transition-all delay-150 hover:text-transparent bg-clip-text hover:bg-gradient-to-tr from-blue-700 to-violet-500">
            ~Somil Gupta
          </h1>
        </div>
      </footer>
    </>
  );
};

export default Footer;
