import React, { useState } from 'react';
import quote from '../assets/images/quote.png';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

function Testimonial({ info }) {

  return (
    <section id="Testimonial" className="px-5 lg:pt-10">
      <div className="flex items-center justify-center flex-col mb-4">
      <h3 className="text-4xl font-semibold mb-6">
          What <span className="text-cyan-600">People Say's</span>
        </h3>
      </div>
        <Swiper slidesPerView={1} spaceBetween={60} loop={true} autoplay={{ delay: 3000, }} pagination={{ clickable: true, }} modules={[Pagination, Autoplay]} className="bg-gray-400 rounded-xl p-6 lg:p-10">
          {
            info.map((item, i) =>
              <SwiperSlide key={i}>
                <div className="mx-5">
                  <div className="flex gap-2">
                    <img src={quote} alt="" className="h-6" />
                    <h2 className="">{item.review}</h2>
                  </div>
                  <div className="">
                    {/* Set a fixed height to prevent position change */}
                    <div className="flex items-center gap-4 mt-5">
                      <img src={item.image.url} alt="" className="w-20 rounded-full" />
                      <div>
                        <h6 className="">{item.name}</h6>
                        <span className="">{item.position}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          }
        </Swiper>
    </section>
  )
}

export default Testimonial