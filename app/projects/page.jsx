import React from "react";
import Image from "next/image";
import project from "../assets/project-section.webp";
import about from "../assets/about-img.avif";
import about2 from "../assets/about2.avif";
import about3 from "../assets/about3.avif";
import about4 from "../assets/about4.webp";
import about5 from "../assets/about5.webp";

const Projects = () => {
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
            Gallery of Our <br /> Signature Projects
          </h2>
        </div>
      </div>
      {/* hero section ends */}
      <div className="mt-2">
        <Image src={project} alt="project" className="rounded-lg" />
      </div>
      {/* project section starts */}
      <h2 className="text-center mt-24">OUR PROJECTS</h2>
      <h2 className="text-center mt-2 text-4xl overflow-hidden">
        Showcase of Our <br /> Design Excellence
      </h2>
      {/* first project starts */}
      <div className="md:flex md:px-10 px-3 mt-20">
        <div className="md:h-screen h-[60vh] md:w-[45vw] w-full rounded-md bg-blue-50 text-blue-500 p-5">
          <h2 className="text-3xl font-medium underline">Lorem Ipsum Dolor</h2>
          <h2 className="text-2xl font-medium underline">Lorem Ipsum </h2>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
            officia laudantium atque asperiores voluptas rerum mollitia beatae
            explicabo temporibus impedit dolorum fugiat totam amet, quas et
            quibusdam modi perspiciatis earum!
          </p>
          <button className="border-[1px] md:mt-[48vh] mt-40 px-3 py-1 rounded-full bg-blue-600 hover:bg-transparent transition-all delay-150 hover:text-slate-500  text-white">
            Learn more
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
            Learn more
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
            Learn more
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

      {/* forth project starts */}
      <div className="md:flex md:px-10 px-3 mt-2">
        <div className="md:h-[92vh] h-[50vh] w-full relative overflow-hidden rounded-md">
          <Image
            src={about4}
            alt="img-abt"
            className="absolute object-fill size-full"
          />
        </div>
        <div className="md:h-[92vh] h-[80vh] md:w-[45vw] w-full md:ml-2 md:mt-0 mt-2 rounded-md bg-blue-50 text-blue-500 p-5">
          <h2 className="text-3xl font-medium">Lorem Ipsum Dolor</h2>
          <h2 className="text-2xl font-medium">Lorem Ipsum </h2>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
            officia laudantium atque asperiores voluptas rerum mollitia beatae
            explicabo temporibus impedit dolorum fugiat totam amet, quas et
            quibusdam modi perspiciatis earum!
          </p>
          <button className="border-[1px] mt-[43vh] px-3 py-1 rounded-full bg-blue-600 hover:bg-transparent transition-all delay-150 hover:text-slate-500  text-white">
            Learn more
          </button>
        </div>
      </div>
      {/* forth project ends */}
      {/* fifth project starts */}
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
            Learn more
          </button>
        </div>
        <div className="md:h-[89vh] h-[60vh] w-full md:ml-2 md:mt-0 mt-2  overflow-clip relative rounded-md">
          <Image
            src={about5}
            alt="img-abt"
            className="absolute object-fit size-full"
          />
        </div>
      </div>
      {/* fifth project ends */}
      {/* project section ends */}
    </>
  );
};

export default Projects;
