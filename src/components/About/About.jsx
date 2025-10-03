import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";
import teamImg from "../../assets/videos/about-us-video.mp4"; 
import { Link } from "react-router-dom";

const About = () => {
  const { t } = useTranslation();
  
  return (
  <section className={styles.aboutSection} id="#about-us">
    <div className={styles.aboutContent}>
      <h2 className={styles.aboutHeadline}> <span className={styles.highlight}>{t('about.title2')}</span></h2>
      <h2 className={styles.aboutSubTitle}>{t('about.subtitle')}  </h2>
      <p className={styles.aboutText}>
        {t('about.description')}
      </p>
      <Link to={'/about-us'}  
      className={styles.learnMoreBtn}
      style={location.pathname === "/about-us" ? { display: "none" } : {}}
      >{t('about.learnMore')}</Link>

    </div>
    <div className={styles.aboutImageWrapper}>
      <div className={styles.topShape}></div>
      <div className={styles.aboutImage}>
        <video 
        className={styles.aboutVideo}
         src={teamImg} 
         autoPlay
         muted
         loop
         playsInline 
          />
      </div>
      <div className={styles.bottomShape}></div>
    </div>
  </section>
  );
};

export default About;
