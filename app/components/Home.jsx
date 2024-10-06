import React from "react";
import Image from "next/image";
import hero from "../assets/hero-img.png";
import logo from "../assets/logo.svg";
import about from "../assets/about-img.avif";
import about2 from "../assets/about2.avif";
import about3 from "../assets/about3.avif";
import Link from "next/link";

const Home = () => {
  return (
    <>
      {/* hero section starts */}
      <div className="md:flex justify-between md:p-14 p-4">
        <div className="py-5">
          <h2 className="md:text-[4rem] text-[2rem]">
            Built by your trust and hardwork peoples trust in us
          </h2>
          <h2 className="mt-5 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi culpa
            possimus, temporibus debitis mollitia dignissimos? Sequi nisi,
            adipisci esse dignissimos, dolorum assumenda similique aspernatur
            consequuntur eum natus hic eos dolorem.
          </h2>
        </div>
        <Image src={hero} alt="hero-img" className="md:size-[30vw] w-full" />
      </div>
      {/* hero section ends */}

      {/* clients section starts */}
      <div>
        <h2 className="text-center mt-16 mb-10 text-2xl lg:text-3xl font-bold">
          FEATURED CLIENTS
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center items-center mx-auto w-[90%] lg:w-[80%] mb-8">
          <Image
            src={logo}
            alt="logo"
            className="opacity-50 hover:opacity-100 transition-all duration-200"
          />
          <Image
            src={logo}
            alt="logo"
            className="opacity-50 hover:opacity-100 transition-all duration-200"
          />
          <Image
            src={logo}
            alt="logo"
            className="opacity-50 hover:opacity-100 transition-all duration-200"
          />
          <Image
            src={logo}
            alt="logo"
            className="opacity-50 hover:opacity-100 transition-all duration-200"
          />
          <Image
            src={logo}
            alt="logo"
            className="opacity-50 hover:opacity-100 transition-all duration-200"
          />
        </div>

        <hr className="border-[1px] opacity-50 w-[80%] mx-auto mb-8" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center items-center mx-auto w-[90%] lg:w-[80%]">
          <Image
            src={logo}
            alt="logo"
            className="opacity-50 hover:opacity-100 transition-all duration-200"
          />
          <Image
            src={logo}
            alt="logo"
            className="opacity-50 hover:opacity-100 transition-all duration-200"
          />
          <Image
            src={logo}
            alt="logo"
            className="opacity-50 hover:opacity-100 transition-all duration-200"
          />
          <Image
            src={logo}
            alt="logo"
            className="opacity-50 hover:opacity-100 transition-all duration-200"
          />
          <Image
            src={logo}
            alt="logo"
            className="opacity-50 hover:opacity-100 transition-all duration-200"
          />
        </div>

        <h2 className="text-center mt-12 px-6 sm:px-24 lg:px-40 xl:px-60 text-slate-400 text-base lg:text-lg">
          We are honored to partner with visionary clients who challenge us to
          innovate and excel.
        </h2>
      </div>

      {/* clients section ends */}

      {/* about section starts */}
      <div>
        <h2 className="text-center mt-40 text-3xl">See Our Newest</h2>
        <h2 className="text-center text-2xl">Projects in Action</h2>
        {/* first project starts */}
        <div className="md:flex md:px-10 px-3 mt-20">
          <div className="md:h-screen h-[60vh] md:w-[45vw] w-full rounded-md bg-blue-50 text-blue-500 p-5">
            <h2 className="text-3xl font-medium underline">
              Lorem Ipsum Dolor
            </h2>
            <h2 className="text-2xl font-medium underline">Lorem Ipsum </h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
              officia laudantium atque asperiores voluptas rerum mollitia beatae
              explicabo temporibus impedit dolorum fugiat totam amet, quas et
              quibusdam modi perspiciatis earum!
            </p>
            <button className="border-[1px] md:mt-[48vh] mt-40 px-3 py-1 rounded-full bg-blue-600 hover:bg-transparent transition-all delay-150 hover:text-slate-500  text-white">
              <Link href="/projects">Learn more</Link>
            </button>
          </div>
          <div className="md:h-screen h-[60vh]  w-full md:ml-2 mt-2 md:mt-0 relative overflow-hidden rounded-md">
            <Image
              src={about}
              alt="img-abt"
              className="absolute object-fit md:-top-[39vh]"
            />
          </div>
        </div>
        {/* first project ends */}
        {/* second project starts */}
        <div className="md:flex md:px-10 px-3 mt-2">
          <div className="md:h-[92vh] h-[50vh] w-full relative overflow-hidden rounded-md">
            <Image
              src={about2}
              alt="img-abt"
              className="absolute size-full object-fill rounded-lg"
            />
          </div>
          <div className="md:h-[92vh] h-[60vh] w-full md:w-[45vw] md:ml-2 md:mt-0 mt-2 rounded-md bg-blue-50 text-blue-500 p-5">
            <h2 className="text-3xl font-medium">Lorem Ipsum Dolor</h2>
            <h2 className="text-2xl font-medium">Lorem Ipsum </h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
              officia laudantium atque asperiores voluptas rerum mollitia beatae
              explicabo temporibus impedit dolorum fugiat totam amet, quas et
              quibusdam modi perspiciatis earum!
            </p>
            <button className="border-[1px] md:mt-[43vh] mt-40 px-3 py-1 rounded-full bg-blue-600 hover:bg-transparent transition-all delay-150 hover:text-slate-500  text-white">
              <Link href="/projects">Learn more</Link>
            </button>
          </div>
        </div>
        {/* second project ends */}
        {/* third project starts */}
        <div className="md:flex md:px-10 px-3 mt-2">
          <div className="md:h-[89.5vh] h-[60vh] md:w-[50vw] rounded-md bg-blue-50 text-blue-500 p-5">
            <h2 className="text-3xl font-medium">Lorem Ipsum Dolor</h2>
            <h2 className="text-2xl font-medium">Lorem Ipsum </h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
              officia laudantium atque asperiores voluptas rerum mollitia beatae
              explicabo temporibus impedit dolorum fugiat totam amet, quas et
              quibusdam modi perspiciatis earum!
            </p>
            <button className="border-[1px] md:mt-[46vh] mt-40 px-3 py-1 rounded-full bg-blue-600 hover:bg-transparent transition-all delay-150 hover:text-slate-500  text-white">
              <Link href="/projects">Learn more</Link>
            </button>
          </div>
          <div className="md:h-[89vh] h-[80vh] w-full md:ml-2 md:mt-0 mt-2 overflow-clip relative rounded-md">
            <Image
              src={about3}
              alt="img-abt"
              className="absolute object-fit size-full"
            />
          </div>
        </div>
        {/* third project starts */}
      </div>
      {/* about section ends */}
      <div className="md:px-60 px-4 mt-20">
        <h2>HIGHLIGHTS</h2>
        <div className="md:flex">
          <h2 className="text-3xl">
            Key Points That <br /> Define Our Success
          </h2>
          <button className="rounded h-10 md:mt-0 mt-5 transition-all md:ml-auto bg-white text-blue-400 hover:bg-transparent hover:text-white border-[1px] px-2 py-1 border-white">
            <Link href="/contact">Get in touch</Link>
          </button>
        </div>
        <hr className="w-full border-[1px] border-slate-400 mt-9" />
        <div className="md:flex mt-5">
          <h2 className="text-slate-500 md:text-[9rem] text-[4rem]">50+</h2>
          <div className="md:ml-72">
            <h2>PROJECTS COMPLETED</h2>
            <p className="text-sm mt-10 text-slate-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              at cumque nisi, non, qui doloribus voluptatum cupiditate numquam
              reprehenderit
            </p>
          </div>
        </div>
        <hr className="w-full border-[1px] border-slate-400 mt-9" />
        <div className="md:flex mt-5">
          <h2 className="text-slate-500 md:text-[9rem] text-[4rem]">147</h2>
          <div className="md:ml-72">
            <h2>SKILLED PROFESSIONALS</h2>
            <p className="text-sm mt-10 text-slate-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              at cumque nisi, non, qui doloribus voluptatum cupiditate numquam
              reprehenderit
            </p>
          </div>
        </div>
        <hr className="w-full border-[1px] border-slate-400 mt-9" />
        <div className="md:flex mt-5">
          <h2 className="text-slate-500 md:text-[9rem] text-[4rem]">$1.2B</h2>
          <div className="md:ml-40">
            <h2>PROJECTS VALUE</h2>
            <p className="text-sm mt-10 text-slate-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              at cumque nisi, non, qui doloribus voluptatum cupiditate numquam
              reprehenderit
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
