import React from "react";
import { useTranslation } from "react-i18next";
import { FaHeart, FaAward, FaLightbulb } from "react-icons/fa";
import "./MissionSection.css";
// import OurMissionImg from "../../assets/svg/ourmission.svg"

const missions = [
  {
    icon: <FaHeart className="mission-icon" />, 
    titleKey: "mission.human.title", 
    descKey: "mission.human.desc"
  },
  {
    icon: <FaAward className="mission-icon" />, 
    titleKey: "mission.precision.title", 
    descKey: "mission.precision.desc"
  },
  {
    icon: <FaLightbulb className="mission-icon" />, 
    titleKey: "mission.innovation.title", 
    descKey: "mission.innovation.desc"
  },
];

const MissionSection = () => {
  const { t } = useTranslation();
  return (
    <section className="mission-section">
        <div className="About-content-card">
        <h2 className="About-content-card-subtitle">{t("mission.subtitle")}</h2>
        <h2 className="About-content-card-title">{t("mission.title")}</h2>
        <p className="About-content-card-desc">{t("mission.intro")}</p>
        </div>
        <div className="About-content-card">
        <h2 className="About-content-card-subtitle">{t("vision.subtitle")}</h2>
        <h2 className="About-content-card-title">{t("vision.title")}</h2>
        <p className="About-content-card-desc">{t("vision.intro")}</p>
        </div>
      {/* <img src={OurMissionImg} className="mission-img" alt="DEUTSOLUTIONS Mission" /> */}
    </section>
  );
};

export default MissionSection; 