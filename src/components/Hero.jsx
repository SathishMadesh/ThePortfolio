import React from 'react';
import { RiInstagramLine } from "react-icons/ri";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { ReactTyped } from 'react-typed';

function Hero({ user, alternateAvatarUrl }) {

  const myTitle = user.about.title;

  return (
    <section className="min-h-screen flex py-10 lg:px-20 md:flex-row flex-col items-center mt-6">
      <div className="flex-1 flex items-center justify-center h-full" data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
        <img src={alternateAvatarUrl} alt="" className=" w-80 object-cover rounded-lg" />
      </div>
      <div className="flex-1" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10
        font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span className="text-cyan-600 md:text-6xl text-5xl">{user.about.name}</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4
        font-bold text-gray-600">
            <ReactTyped className="typed-text"
              strings={[myTitle]}
              typeSpeed={60}
              backSpeed={60}
              loop /></h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-4xl flex items-center md:justify-start
        justify-center gap-5">
            <RiInstagramLine className="text-gray-600 hover:text-cyan-600 cursor-pointer" />
            <AiOutlineLinkedin className="text-gray-600 hover:text-cyan-600 cursor-pointer" />
            <FaXTwitter className="text-gray-600 hover:text-cyan-600 cursor-pointer" />
            <FaFacebook className="text-gray-600 hover:text-cyan-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero