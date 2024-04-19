import React from 'react';


function Services({ services }) {
  return (
    <section id="Services" className="px-10 py-8 mx-aut">
      <div className="flex items-center justify-center flex-col">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Services</span>
        </h3>
        <p className="text-gray-600 mt-3 text-lg">Services that I can offer</p>
      </div>
      <div className="flex flex-wrap justify-center -mx-4 lg:px-20 sm:px-2 mt-4">

        {
          services.map((service, i) => (
            <div key={i} className="relative w-full flex items-center justify-center sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8" data-aos="zoom-in-up">
              <img src={service.image.url} alt="" className="w-full rounded-lg" />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-60 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-400">
                <h3 className="text-white">{service.name}</h3>
                <h5 className="text-white">{service.charge}</h5>
                <p className="text-white">Description</p>
              </div>
            </div>
          ))
        }
        {/* Repeat the above div for other programs */}
      </div>
    </section>
  );
}

export default Services;
