import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./AnimatedText.module.css";

const AnimatedText = () => {
  const { t, i18n } = useTranslation();
  // كلمات متغيرة حسب اللغة
  const words = t('home.animatedWords', { returnObjects: true });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className={styles.AnimatedWord}>
      {words[index]}
    </span>
  );
};

export default AnimatedText;
