import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './NotFound.module.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


const NotFound = () => {
  const { t } = useTranslation();
  
  return (
      <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className={styles.container}>
        <div className={styles.illustration}>
      {/* Retro TV SVG illustration */}
      <svg width="220" height="180" viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="30" width="160" height="110" rx="10" fill="#FDF6ED" stroke="#222" strokeWidth="2"/>
        <rect x="35" y="45" width="130" height="80" rx="6" fill="#111" stroke="#222" strokeWidth="2"/>
        <rect x="40" y="50" width="120" height="70" rx="4" fill="#fff"/>
        <rect x="40" y="50" width="17" height="70" fill="#ff5e00"/>
        <rect x="57" y="50" width="17" height="70" fill="#ffb800"/>
        <rect x="74" y="50" width="17" height="70" fill="#00c853"/>
        <rect x="91" y="50" width="17" height="70" fill="#2196f3"/>
        <rect x="108" y="50" width="17" height="70" fill="#9c27b0"/>
        <rect x="125" y="50" width="17" height="70" fill="#fff"/>
        <rect x="40" y="80" width="102" height="18" fill="#111"/>
        <text x="90" y="94" textAnchor="middle" fontFamily="monospace" fontSize="22" fill="#fff">404</text>
        <circle cx="30" cy="50" r="7" fill="#ff5e00" stroke="#222" strokeWidth="2"/>
        <rect x="30" y="120" width="30" height="8" rx="2" fill="#222"/>
        <rect x="60" y="120" width="30" height="8" rx="2" fill="#222"/>
      </svg>
    </div>
    <div className={styles.textSection}>
      <h1 className={styles.title}>{t('notFound.title')}</h1>
      <p className={styles.subtitle}>{t('notFound.subtitle')}</p>
      <Link to="/" className={styles.homeBtn}>&larr; {t('notFound.goHome')}</Link>
    </div>
  </div>
  </motion.section>
    );
};

export default NotFound; 