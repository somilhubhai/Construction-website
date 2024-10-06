import Image from "next/image";
import React from "react";
import hero from "../assets/about-hero.avif";
import purpose from "../assets/purpose.webp";
import Link from "next/link";

const About = () => {
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
            Crafting Spaces, <br /> Shaping Visions
          </h2>
        </div>
      </div>
      {/* hero section ends */}

      {/* image section starts */}
      <div className="overflow-hidden mt-2">
        <Image src={hero} alt="hero-img" className="rounded-lg" />
      </div>
      {/* image section ends */}

      {/* purpose section starts */}
      <div className="mt-32 relative md:p-20 p-8">
        <h2 className="absolute md:top-[50vh] top-10 left-32 md:left-[45vw] border-[1px] border-white rounded-full p-2">
          OUR PURPOSE
        </h2>
        <h2 className="absolute md:top-[62vh] text-center md:px-40 px-10 top-24 md:text-5xl text-2xl">
          With a focus on creativity and precision, we transform visions into
          enduring designs.
        </h2>
        <div className="absolute text-center md:top-[100vh] top-[35vh] md:flex md:px-24 px-10">
          <div className="bg-slate-400/60 backdrop-blur-3xl md:p-8 p-3 w-full rounded-lg">
            <h2 className="text-center mb-5">CREATIVE VISION</h2>
            <h2 className="text-center">
              Bringing innovative and imaginative design to life with unique
              flair
            </h2>
          </div>
          <div className="bg-slate-400/60 backdrop-blur-3xl md:p-8 p-3 md:mt-0 mt-2 w-full rounded-lg md:ml-4">
            <h2 className="text-center mb-5">TAILORED SOLUTIONS</h2>
            <h2 className="text-center">
              Customising designs to perfectly align with clients needs and
              goals
            </h2>
          </div>
          <div className="bg-slate-400/60 backdrop-blur-3xl md:p-8 p-3 md:mt-0 mt-2 w-full rounded-lg md:ml-4">
            <h2 className="text-center mb-5">ECO PRACTICES</h2>
            <h2 className="text-center">
              Implementing energy-efficient and eco-friendly solutions in each
              projects
            </h2>
          </div>
        </div>
        <Image
          src={purpose}
          alt="purpose-img"
          className="rounded-lg md:h-[230vh] h-[100vh]"
        />
      </div>
      {/* purpose section ends */}

      {/* story section starts */}
      <div className="md:p-40 p-5">
        <h2 className="border-[1px] text-[12px] w-fit p-2 border-white rounded-full">
          STORY & APPROACH
        </h2>
        <h2 className="md:text-5xl text-2xl mt-2">
          How We Began and <br /> Where We Are Going
        </h2>
        <div className="mt-20 md:flex">
          <div className="pr-10">
            <h2>OUR BEGINNINGS</h2>
            <p className="text-slate-400 mb-5">
              Started with a vision to revolutionize spaces through innovative
              and sustainable designs.
            </p>
          </div>
          <div className="border-[1px] border-slate-700" />
          <div className="md:px-10 py-2 md:py-0">
            <h2>MILESTONE OF GROWTH</h2>
            <p className="text-slate-400 mb-5">
              We have grown from a small firm to a leading name, reaching
              milestones and growing our portfolio.
            </p>
          </div>
          <div className="border-[1px] border-slate-700" />
          <div className="md:px-10 md:py-0 py-2">
            <h2>A LEGACY OF INNOVATIONS</h2>
            <p className="text-slate-400 mb-5">
              Our history is defined by pushing design boundaries and creating
              projects that inspires and lead.
            </p>
          </div>
          <div className="border-[1px] border-slate-700" />
        </div>
        <div className="border-[1px] border-slate-700 w-full" />
        <div className="md:flex">
          <div>
            <h2 className="mt-5">CLIENT-CENTRIC DESIGN</h2>
            <p className="text-slate-400 mb-5">
              We focus on understanding and reflecting our clients vision with
              tailored, innovative solutions.
            </p>
          </div>
          <div className="border-[1px] border-slate-700 md:ml-9" />
          <div className="md:px-10 md:py-0 py-2">
            <h2 className="mt-5">SUSTAINABLE PRACTICES</h2>
            <p className="text-slate-400 mb-5">
              We integrate eco-friendly and enrgy-efficient solutions into for a
              design for a better impact.
            </p>
          </div>
          <div className="border-[1px] border-slate-700 md:ml-8" />
          <div className="md:px-10 md:py-0 py-2">
            <h2 className="mt-5">COLLABRATIVE RESULTS</h2>
            <p className="text-slate-400 mb-5">
              We work closely with clients and stakeholders to ensure
              exceptional results and exceed expectations.
            </p>
          </div>
          <div className="border-[1px] border-slate-700" />
        </div>
      </div>
      {/* story section ends */}
      <div className="md:px-60 px-4 mt-20">
        <h2>HIGHLIGHTS</h2>
        <div className="md:flex">
          <h2 className="text-3xl">
            Key Points That <br /> Define Our Success
          </h2>
          <button className="rounded h-10 md:mt-0 mt-5 transition-all md:ml-auto bg-white text-blue-400 hover:bg-transparent hover:text-white border-[1px] px-2 py-1 border-white">
            <Link href="/services">Get in touch</Link>
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

export default About;
