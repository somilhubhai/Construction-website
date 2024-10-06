import Image from "next/image";
import React from "react";
import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import design1 from "../assets/design1.avif";
import design2 from "../assets/design2.avif";
import design3 from "../assets/design3.avif";
import design4 from "../assets/design4.avif";
import design5 from "../assets/design5.avif";
import design6 from "../assets/design6.avif";
import logo from "../assets/logo.svg";

const Service = () => {
  return (
    <>
      {/* hero section starts */}
      <div className="bg-white md:h-[80vh] h-[60vh] flex relative rounded-lg">
        <div className="md:h-[80vh] h-[60vh] bg-slate-300 w-[1px] ml-8" />
        <div className="md:h-[80vh] h-[60vh] bg-slate-300 w-[1px] md:ml-96 ml-40" />
        <div className="md:h-[80vh] h-[60vh] bg-slate-300 w-[1px] md:ml-96 ml-40" />
        <div className="absolute text-blue-600 p-2 md:top-72 top-60 left-6">
          <h2 className="border-blue-500 text-2xl">About us</h2>
          <h2 className="md:text-[3rem] text-[2rem]">
            Turning Ideas into <br /> Timeless Creations
          </h2>
        </div>
      </div>
      {/* hero section ends */}

      {/* projects section starts */}
      <div className="md:flex mt-2">
        <div className="bg-blue-900 hover:bg-blue-950 w-full rounded-lg p-2">
          <h2 className="hover:translate-x-4 transition-all">OUR PROJECTS</h2>
          <p className="mt-16">
            Explore our portfolio to see concepts come to life
          </p>
        </div>
        <div className="bg-orange-900 hover:bg-orange-950 w-full rounded-lg md:ml-2 md:mt-0 mt-2 p-2">
          <h2 className="hover:translate-x-4 transition-all">GET IN TOUCH</h2>
          <p className="mt-16">
            Contact us to discuss your vision and bring it to life{" "}
          </p>
        </div>
      </div>
      <div className="md:flex mt-2">
        <div>
          <Image src={project1} alt="project-1" className="rounded-lg" />
          <Image
            src={project2}
            alt="project-2"
            className="rounded-lg mt-2 w-full"
          />
        </div>
        <Image
          src={project3}
          alt="project-3"
          className="rounded-lg md:ml-2 md:mt-0 mt-2 overflow-hidden"
        />
      </div>
      {/* projects section ends */}
      <div className="bg-white text-blue-700 p-4 text-center justify-center mt-2 rounded-lg">
        <div className="text-center">
          <h2>EXPERT SOLUTIONS</h2>
          <hr className="w-32 mx-auto bg-blue-600" />
          <p className="md:text-5xl md:px-80 text-2xl mt-10">
            Modus delivers tailored architectural solutions that bring your
            vision to life.
          </p>
        </div>
      </div>
      {/* designs section starts */}
      <div className="mt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {/* design1 starts */}
          <div className="relative group max-h-72 overflow-hidden rounded-lg">
            <Image
              src={design1}
              alt="design1"
              className="rounded-lg object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <h2 className="text-3xl text-white font-bold">Concept Design</h2>
              <p className="mt-3 text-white text-center">
                Creating innovative and functional design concepts that align
                with your vision
              </p>
            </div>
          </div>
          {/* design1 ends */}
          {/* design2 starts */}
          <div className="relative max-h-72 group overflow-hidden rounded-lg">
            <Image
              src={design2}
              alt="design2"
              className="rounded-lg object-cover -mt-40 transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <h2 className="text-3xl text-white font-bold">Interior Design</h2>
              <p className="mt-3 text-white text-center">
                Creatin functional interior design that elevate your space
                overall experience
              </p>
            </div>
          </div>
          {/* design2 ends */}
          {/* design3 starts */}
          <div className="relative max-h-72 group overflow-hidden rounded-lg">
            <Image
              src={design3}
              alt="design3"
              className="rounded-lg object-cover -mt-20 transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <h2 className="text-3xl text-white font-bold">
                Sustainable Design
              </h2>
              <p className="mt-3 text-white text-center">
                Usin eco-frienfly and energy-efficient solutions to boost
                project sustainability
              </p>
            </div>
          </div>
          {/* design3 ends */}
        </div>

        {/* design section 2nd starts */}
        <div className="grid mt-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {/* design4 starts */}
          <div className="relative group max-h-72 overflow-hidden rounded-lg">
            <Image
              src={design4}
              alt="design1"
              className="rounded-lg object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <h2 className="text-3xl text-white font-bold">
                Space Renovation
              </h2>
              <p className="mt-3 text-white text-center">
                Enhancing existing spaces with modern updates to better align
                with your needs
              </p>
            </div>
          </div>
          {/* design4 ends */}
          {/* design5 starts */}
          <div className="relative max-h-72 group overflow-hidden rounded-lg">
            <Image
              src={design5}
              alt="design2"
              className="rounded-lg object-cover  transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <h2 className="text-3xl text-white font-bold">Urban Planning</h2>
              <p className="mt-3 text-white text-center">
                Developing detailed plans and blueprint to quide the
                construction process
              </p>
            </div>
          </div>
          {/* design5 ends */}
          {/* design6 starts */}
          <div className="relative max-h-72 group overflow-hidden rounded-lg">
            <Image
              src={design6}
              alt="design3"
              className="rounded-lg object-cover  transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <h2 className="text-3xl text-white font-bold">
                Project management
              </h2>
              <p className="mt-3 text-white text-center">
                Revamping existing spaces with modern updates to suite your
                needs
              </p>
            </div>
          </div>
          {/* design6 ends */}
        </div>
        {/* design section 2nd ends */}
      </div>
      {/* designs section ends */}

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
    </>
  );
};

export default Service;
