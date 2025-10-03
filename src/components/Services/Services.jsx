import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Services.module.css";
import SwaperServicesSection from "../Swapers/HomeSwaper/SwaperServicesSection/SwaperServicesSection"


const Services = () => {
  const { t } = useTranslation();
  const carouselRef = useRef(null);

  const scroll = (dir) => {
    if (!carouselRef.current) return;
    const width = carouselRef.current.offsetWidth;
    carouselRef.current.scrollBy({ left: dir * (width * 0.7), behavior: "smooth" });
  };

  return (
    <section className={styles.servicesSection} id="#services">
              <div className={styles.header}>
          <h2 className={styles.headline}>
            <span className={styles.gradient}>{t('services.title')}</span>
            <br />
            <span className={styles.bold}>{t('services.subtitle')}</span>
          </h2>
          <p className={styles.subtext}>
            {t('services.description')}
          </p>
        </div>
         <SwaperServicesSection/>
         <div className={styles.servicesLearnMoreBtn}>
         <Link to={'/services'} className={styles.btnExploremore}>{t('services.exploremore')}</Link>

         </div>
    </section>
  );
};

export default Services;
