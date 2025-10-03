import React from "react";
import About from "../../components/About/About";
import StatsCards from "../../components/About/StatsCards/StatsCards";
import MissionSection from "../../components/About/MissionSection";
import styles from "./AboutPage.module.css"
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const AboutPage = ()=>{
    const { t } = useTranslation();
    return(
        <>
        <section>
            <div className={styles.AboutHeader}>
                <div>
                    <h1 className="minTeitle">{t('about.title')}</h1>
                    <p className="minSubtitle">{t('about.subtitle2')}</p>
                </div>
                <About/>
                <MissionSection />
                <StatsCards />
            </div>
        </section>
        </>
    )
}

export default AboutPage