import React from "react";
import { useTranslation } from "react-i18next";
import { FaAward, FaMapMarkerAlt, FaUsers, FaBullseye } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./StatsCards.css";

const stats = [
  {
    icon: <FaAward className="stat-icon" />, number: 500 ,suffix: "+", labelKey: "about.stats.projects"
  },
  {
    icon: <FaMapMarkerAlt className="stat-icon" />, number: 50,suffix: "+", labelKey: "about.stats.countries"
  },
  {
    icon: <FaUsers className="stat-icon" />, number: 1000 ,suffix: "+", labelKey: "about.stats.clients"
  },
  {
    icon: <FaBullseye className="stat-icon" />, number: 99,suffix: "%", labelKey: "about.stats.success"
  },
];

const StatsCards = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <div className="stats-cards-wrapper" ref={ref}>
      {stats.map((stat, idx) => (
        <div className="stat-card" key={idx}>
          <div className="stat-icon-wrapper">{stat.icon}</div>
          <div className="stat-number">
            <CountUp
              start={inView ? 0 : null}
              end={stat.number}
              duration={1.5}
              suffix={stat.suffix}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </div>
          <div className="stat-label">{t(stat.labelKey)}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards; 