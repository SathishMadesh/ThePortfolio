import React from 'react';
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

function Contact() {
  const contact_info = [
    { logo: <MdOutlineEmail />, text: "codeaprogram@gmail.com" },
    { logo: <FaWhatsapp />, text: "123 456 780" },
    { logo: <IoLocationOutline />, text: "demo location" },
  ];
  return (
    <section id="Contact" className="py-10 px-5">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-700 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-10 flex md:flex-row flex-col
           gap-6 max-w-5xl bg-gray-500 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5">
            <input type="text" placeholder="Your Name" className="rounded-lg" />
            <input type="Email" placeholder="Your Email Address" className="rounded-lg" />
            <textarea placeholder="Your Message" rows={10} className="rounded-lg"></textarea>
            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                    text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full border-2">
                  {contact.logo}
                </div>
                <p className="md:text-base text-sm  break-words text-white">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact