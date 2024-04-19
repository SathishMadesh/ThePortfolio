import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Autoplay } from 'swiper/modules';

function Projects({projects, alternateAvatarUrl}) {
  return (
    <section id="Projects" className="py-8 pt-10 pb-10 mt-10" data-aos="fade-up" data-aos-duration="3000">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-600 mt-3 text-lg">My awsome works</p>
      </div>
      <div className="flex text-white md:mt-5 sm:mt-5 max-w-6xl px-5 mx-auto item-center relative">
        <div className="lg:w-2/3 w-full flex items-center justify-center">
          <Swiper slidesPerView={1.2} spaceBetween={20} breakpoints={{
            768:{
              slidesPerView: 2,
            },
          }} loop={true} autoplay={{delay:3000,}} pagination={{clickable:true,}} modules={[Pagination, Autoplay]}>
            {
              projects.map((project,i)=>(
                <SwiperSlide key={i}>
              <div className="h-fit w-full p-4 bg-gray-500 rounded-xl">
                <img src={project.image.url} alt="" className="rounded-lg" />
                <h3 className="text-xl my-4">{project.title}</h3>
                <div className="flex gap-3">
                  <a href={project.githuburl} className="text-cyan-600 bg-gray-800 px-2 py-1 rounded-lg">
                    Github
                  </a>
                  <a href={project.liveurl} className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block rounded-lg">
                    Live Demo
                  </a>
                </div>
              </div>
            </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className="w-60 lg:block hidden">
          
          <img src={alternateAvatarUrl} className="w-60 ml-20 rounded-xl" alt="" />
          
        </div>
      </div>
    </section>
  )
}

export default Projects