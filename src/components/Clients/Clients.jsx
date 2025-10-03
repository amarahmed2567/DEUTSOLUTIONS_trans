import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
//images
import img1 from "../../assets/images/clintes/1.png"
import img2 from "../../assets/images/clintes/2.svg"
import img3 from "../../assets/images/clintes/3.jpg"
import img4 from "../../assets/images/clintes/4.png"
import img5 from "../../assets/images/clintes/5.png"
import img6 from "../../assets/images/clintes/6.png"
import img7 from "../../assets/images/clintes/7.png"
import img8 from "../../assets/images/clintes/8.png"
import img9 from "../../assets/images/clintes/9.png"
import img10 from "../../assets/images/clintes/10.avif"
import img11 from "../../assets/images/clintes/11.svg"
import img12 from "../../assets/images/clintes/12.png"
import img13 from "../../assets/images/clintes/13.png"

import { useTranslation } from "react-i18next";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import styles from './Clients.module.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const {ClinteImg,ClinteImgBox,MySwiper,ClientsSection,header,gradient,bold,subtext,headercon} = styles;
export default function Clients() {
const { t } = useTranslation();

  return (
    <>
     <section className={ClientsSection} id="#Clients">
           <div className={headercon}>
          <h2 className={header}>
            <span className={gradient}>{t('clients.clientstitle')}</span>
            <br />
            <span className={bold}>{t('clients.clientssubtitle')}</span>
          </h2>
          <p className={subtext}>
            {t('clients.clientsDesc')}
          </p>
        </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className={MySwiper}
      >
        <SwiperSlide className={ClinteImgBox}>
            <img className={ClinteImg} src={img1} alt="deutsolutions Clients logo" />
        </SwiperSlide>
        <SwiperSlide className={ClinteImgBox}>
            <img className={ClinteImg} src={img2} alt="deutsolutions Clients logo" />
        </SwiperSlide>
        <SwiperSlide className={ClinteImgBox}>
            <img className={ClinteImg} src={img3} alt="deutsolutions Clients logo" />
        </SwiperSlide>
        <SwiperSlide className={ClinteImgBox}>
            <img className={ClinteImg} src={img4} alt="deutsolutions Clients logo" />
        </SwiperSlide>
        <SwiperSlide className={ClinteImgBox}>
            <img className={ClinteImg} src={img5} alt="deutsolutions Clients logo" />
        </SwiperSlide>
        <SwiperSlide className={ClinteImgBox}>
            <img className={ClinteImg} src={img6} alt="deutsolutions Clients logo" />
        </SwiperSlide>
        <SwiperSlide className={ClinteImgBox}>
            <img className={ClinteImg} src={img7} alt="deutsolutions Clients logo" />
        </SwiperSlide>
        <SwiperSlide className={ClinteImgBox}>
            <img className={ClinteImg} src={img8} alt="deutsolutions Clients logo" />
        </SwiperSlide>
        <SwiperSlide className={ClinteImgBox}>
            <img className={ClinteImg} src={img9} alt="deutsolutions Clients logo" />
        </SwiperSlide>
        <SwiperSlide className={ClinteImgBox}>
            <img className={ClinteImg} src={img10} alt="deutsolutions Clients logo" />
        </SwiperSlide>
        <SwiperSlide className={ClinteImgBox}>
            <img className={ClinteImg} src={img11} alt="deutsolutions Clients logo" />
        </SwiperSlide>
        <SwiperSlide className={ClinteImgBox}>
            <img className={ClinteImg} src={img12} alt="deutsolutions Clients logo" />
        </SwiperSlide>
        <SwiperSlide className={ClinteImgBox}>
            <img className={ClinteImg} src={img13} alt="deutsolutions Clients logo" />
        </SwiperSlide>
   
      </Swiper>
      </section>
    </>
  );
}
