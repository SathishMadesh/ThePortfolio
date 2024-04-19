import React from 'react';


function About({ user }) {

  const info = [
    { text: 'Years of Experience', count: '05' },
    { text: 'Completed Projects', count: '12' },
    { text: 'Companies Work', count: '03' },
  ]
  return (
    <section id="About" className="py-10">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-500 my-3 text-lg">
          My Introduction
        </p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-5" data-aos="fade-up"
            data-aos-duration="1000">
            <div className="text-gray-700 my-3" >
              <p className="text-justify leading-7">{user.about.description}</p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-gray-600">{content.count} <span className="text-cyan-600">+</span> </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <a href="#" download>
                <button className="btn-primary mt-5">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center" >
            <div className="aboutImg lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm" data-aos="fade-down"
            data-aos-duration="1000">
              <img src={user.about.avatar.url} alt="" className="w-full object-cover bg-cyan-600 rounded-xl" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About