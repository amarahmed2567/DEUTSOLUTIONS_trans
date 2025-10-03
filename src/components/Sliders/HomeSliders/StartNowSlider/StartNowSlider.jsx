import React, { useState } from 'react';
import styles from './StartNowSlider.module.css';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

const StartNowSlider = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sectionBackground}>
        <div className={styles.gradientPill + ' ' + styles.leftPill }></div>
        <div className={styles.gradientPill + ' ' + styles.rightPill}></div>
      </div>
      <div className={styles.content}>
        <h2 className={styles.heading}>{t('home.takeTheNextStep')}</h2>
        <Link to={'/sign-up'} className={styles.BtnSmall}>{t('home.startYourJourney')}</Link>
      </div>
    </div>
  );
};

export default StartNowSlider;
