import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import"./SwaperTestimonials.css";
import Testimonials1 from "../../../../assets/images/men-1.jpg"
import Testimonials2 from "../../../../assets/images/men-2.jpg"
import Testimonials3 from "../../../../assets/images/women-1.jpg"
import Testimonials4 from "../../../../assets/images/women-2.jpg"
import "../Swipe.css";
const testimonials = [
  {
    text: `Your team helped me move to Germany without stress. Everything was smooth and professional. Thank you!`,
    name: "Ahmed S., Egypt",
    rating: 4,
    img:Testimonials1
  },
  {
    text: `The AI agent you built saved us hours every day. Highly efficient and easy to use!`,
    name: "Lisa M., Germany",
    rating: 4,
    img:Testimonials3

  },
  {
    text: `We needed urgent certified translations — got them fast and spot on. Excellent service!`,
    name: "Khalid R., Dubai",
    rating: 4,
    img:Testimonials2

  },
  {
    text: `We needed urgent certified translations — got them fast and spot on. Excellent service!`,
    name: "Khalid R., Dubai",
    rating: 4,
    img:Testimonials4
  }
];

const SwaperTestimonials = () => {
  return (
    <Swiper
    modules={[Pagination]}
    spaceBetween={500}
    slidesPerView={1}
    centeredSlides={true} 
    initialSlide={2} 
    grabCursor={true}
    breakpoints={{
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    className={"swiper" + " " + "testimonialsSwiper"}
  >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx} className="slide">
            <div className="Testimonialscard">
              <div className="avatar" >
                <img src={t.img} alt={t.text} />
              </div>
              <p className="text">"{t.text}"</p>
              <div className="name">{t.name}</div>
              <div className="stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < t.rating ? "starActive" : "starInactive"}>★</span>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  );
};

export default SwaperTestimonials;