'use client';

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {EffectCards, Navigation, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonial2 = [
  {
    id: 1,
    meta: "深圳有哪些奢華酒店?",
    avatar: "/img/avatars/testimonials/1.png",
    name: "Annette Black",
    designation: "UX / UI Designer",
    text: `"部份位於深圳的奢華酒店包括:深圳鵬瑞萊佛士酒店|深圳文華東方酒店|深圳灣安達仕酒店| 深圳柏悦酒店|深圳桔釣沙萊華度假酒店"`,
    dealyAnimation: "100",
  },
];


const Testimonial = () => {
  return (
    <>
      <div className="testimonials-slider-2 js-testimonials-slider-2">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Navigation, Pagination]}
          navigation={{
            nextEl: ".js-next_active",
            prevEl: ".js-prev_active",
          }}
          pagination={{
            el: ".js-pagination",
            clickable: true,
          }}
        >
          {testimonial2.slice(0, 3).map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonials -type-1 bg-white rounded-4 pt-40 pb-30 px-40 shadow-2">
                <div>
                  <h4 className="text-16 fw-500 text-blue-1 mb-20">
                    {item.meta}
                  </h4>
                  <p className="testimonials__text lh-18 fw-500 text-dark-1">
                    {item.text}
                  </p>
                  {/*<div className="pt-20 mt-28 border-top-light">*/}
                  {/*  <div className="row x-gap-20 y-gap-20 items-center">*/}
                  {/*    <div className="col-auto">*/}
                  {/*      <img src={item.avatar} alt="image" />*/}
                  {/*    </div>*/}
                  {/*    <div className="col-auto">*/}
                  {/*      <div className="text-15 fw-500 lh-14">{item.name}</div>*/}
                  {/*      <div className="text-14 lh-14 text-light-1 mt-5">*/}
                  {/*        {item.designation}*/}
                  {/*      </div>*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* End swiper-wrapper */}

        <div className="d-flex x-gap-15 items-center justify-center pt-30">
          <div className="col-auto">
            <button className="d-flex items-center text-24 arrow-left-hover text-white js-prev_active">
              <i className="icon icon-arrow-left" />
            </button>
          </div>
          {/* End .arrow left */}

          <div className="col-auto">
            <div className="pagination -dots text-white-50 js-pagination" />
          </div>
          {/* End col-auto */}

          <div className="col-auto">
            <button className="d-flex items-center text-24 arrow-right-hover text-white js-next_active">
              <i className="icon icon-arrow-right" />
            </button>
          </div>
          {/* End .arrow right */}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
