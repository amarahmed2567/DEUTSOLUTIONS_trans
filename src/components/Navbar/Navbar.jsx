import React, { useState,useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/logo.svg"
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { FaAngleDown } from "react-icons/fa";
import styles from "./Navbar.module.css"; 

const Navbar = () => {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <>
    <div className={styles.navbarBack}   style={{
        boxShadow: scrolled
          ? "0 2px 8px 1px rgba(0, 0, 0, 0.112)"
          : "none"
          }}>
    <nav className={styles.NavbarSection}>
      <div className={styles.NavbarLogo}>
        <a href="/">
        <img src={Logo} alt="DEUTSOLUTIONS logo" />
        </a>
      </div>
      <div className={`${styles.navbarLinks} ${mobileOpen ? styles.active : ""}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => isActive ? styles.active : undefined}
          onClick={() => { setMobileOpen(false); setServicesOpen(false); }}
        >
          {t('navigation.home')}
        </NavLink>
        <NavLink
          to="/about-us"
          className={({ isActive }) => isActive ? styles.active : undefined}
          onClick={() => { setMobileOpen(false); setServicesOpen(false); }}
        >
          {t('navigation.aboutUs')}
        </NavLink>
        <div style={{ position: 'relative'}}
             onMouseEnter={() => { if (window.innerWidth > 768) setServicesOpen(true); }}
             onMouseLeave={() => { if (window.innerWidth > 768) setServicesOpen(false); }}>
          <NavLink
            to="/services"
            className={`angleDownlink  ${({ isActive }) => isActive ? styles.active : undefined}`}
            onClick={(e) => {
              if (window.innerWidth <= 768) {
                e.preventDefault();
                setServicesOpen(prev => !prev);
              } else {
                setServicesOpen(true);
              }
            }}
          >
            {t('navigation.services') }<FaAngleDown className={styles.angleDown} />

          </NavLink>
          <div className={`${styles.subnav} ${servicesOpen ? styles.show : ''}`}>
            <NavLink to="/services#translation" className={styles['subnav-link']} onClick={() => { setMobileOpen(false); setServicesOpen(false); }}>
              {t('services.items.translation.title')}
            </NavLink>
            <NavLink to="/services#migration" className={styles['subnav-link']} onClick={() => { setMobileOpen(false); setServicesOpen(false); }}>
              {t('services.items.migration.title')}
            </NavLink>
            <NavLink to="/services" className={styles['subnav-link']} onClick={() => { setMobileOpen(false); setServicesOpen(false); }}>
              AI Solutions
            </NavLink>
            <NavLink to="/services#german" className={styles['subnav-link']} onClick={() => { setMobileOpen(false); setServicesOpen(false); }}>
              {t('services.items.german.title')}
            </NavLink>
          </div>
        </div>
        <NavLink
          to="/contact-us"
          className={({ isActive }) => isActive ? styles.active : undefined}
          onClick={() => { setMobileOpen(false); setServicesOpen(false); }}
        >
          {t('navigation.contactUs')}
        </NavLink>
        <div className={styles.languageSwitcherContainer}>
          <LanguageSwitcher />
        </div>
      </div>
      <div className={styles.mobileControls}>
      <div className={styles.navbarMenuIcon} onClick={() => { const next = !mobileOpen; setMobileOpen(next); if (!next) setServicesOpen(false); }}>
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={styles.mobileLanguageSwitcher}>
          <LanguageSwitcher />
        </div>
      </div>
          <motion.div
        style={{
          scaleX: scrollYProgress,
          height: "4px",
          background: "linear-gradient(90deg, #ff5e00 0%, #ffb800 100%)",
          position: "absolute",
          left: 0,
          right: 0,
          bottom:0,
          zIndex: 1000,
          transformOrigin: "0%"
        }}
      />
    </nav>
    </div>
    </>
  );
};

export default Navbar; 
