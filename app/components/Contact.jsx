import React from "react";
import contact from "../assets/contact.avif";
import Image from "next/image";

const Contact = () => {
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
            Contact Us to Turn <br /> Ideas into Reality
          </h2>
        </div>
      </div>
      {/* hero section ends */}
      {/* contact info starts */}
      <div className="md:flex mt-2">
        <div className="md:flex w-full">
          <div className="bg-blue-900 rounded-lg hover:bg-blue-950 transition-all p-3 w-full">
            <h2 className="hover:translate-x-4 transition-all ease-in-out text-2xl">
              Email us
            </h2>
            <p className="mt-12">
              Share your questions or ideas and we will respond quickly.
            </p>
          </div>
          <div className="bg-blue-800 rounded-lg md:ml-2 md:mt-0 mt-2 hover:bg-blue-900 transition-all p-3 w-full">
            <h2 className="hover:translate-x-4 transition-all ease-in-out text-2xl">
              Call us
            </h2>
            <p className="mt-12">
              Contact us directly for immediate assistance.
            </p>
          </div>
        </div>
        <div className="bg-orange-900 rounded-lg md:ml-2 md:mt-0 mt-2 hover:bg-orange-950 transition-all p-3 w-full">
          <h2 className="hover:translate-x-4 transition-all ease-in-out text-2xl">
            Visit us
          </h2>
          <p className="mt-12">
            Visit us for personalised consultations and advice.
          </p>
        </div>
      </div>
      {/* contact info ends */}

      {/* contact form starts */}
      <div className="md:flex mt-2">
        <Image src={contact} alt="contact" className="rounded-lg w-full" />
        <div className="md:ml-2 md:mt-0 mt-2 bg-white w-full rounded-lg p-3">
          <h2 className="text-4xl text-blue-900">
            Share Your <br /> Vision with Us
          </h2>
          <form className="mt-5">
            <label htmlFor="name" className="text-slate-400">
              FULL NAME
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="bg-slate-200 rounded-lg p-3 mb-2 focus:outline-none w-full text-slate-800"
            />
            <br />
            <div>
              <label htmlFor="email" className="text-slate-400">
                EMAIL
              </label>
              <label htmlFor="phone" className="text-slate-400 md:ml-72 ml-32">
                PHONE
              </label>
            </div>
            <div className="flex mb-4">
              <input
                type="email"
                name="email"
                placeholder="john.doe@gmail.com"
                className="bg-slate-200 rounded-lg p-3 focus:outline-none w-full text-slate-800"
              />
              <input
                type="phone"
                name="phone"
                placeholder="+91 9806456321"
                className="bg-slate-200 ml-2 rounded-lg p-3 focus:outline-none w-full text-slate-800"
              />
            </div>
            <label htmlFor="enquiry" className="text-slate-400 ">
              INQUIRY TYPE
            </label>
            <br />
            <select
              name="inquiry"
              id="inquiry"
              className="bg-slate-200 mb-2 rounded-lg p-3 focus:outline-none w-full text-slate-800"
            >
              <option value="General Inquiry" selected>
                General Inquiry
              </option>
              <option value="Project Proposal">Project Proposal</option>
              <option value="Request for Quotation">
                Request for Quotation
              </option>
              <option value="Partnership Opportunities">
                Partnership Opportunities
              </option>
              <option value="Other">Other</option>
            </select>
            <label htmlFor="message" className="text-slate-400">
              MESSAGE
            </label>
            <br />
            <textarea
              name="message"
              id="message"
              cols={80}
              rows={4}
              placeholder="How can we help you?"
              className="bg-slate-200 mb-2 rounded-lg p-3 focus:outline-none w-full text-slate-800"
            />
            <button
              type="submit"
              className="bg-blue-800 w-full p-2 rounded-lg hover:bg-transparent transition-all hover:text-black text-center"
            >
              SEND A MESSAGE
            </button>
          </form>
        </div>
      </div>
      {/* contact form ends */}
    </>
  );
};

export default Contact;
