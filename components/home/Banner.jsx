import React from "react";
import { useTranslation } from "next-i18next";
import styles from "./stylesheets/Banner.module.css";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.Banner}>
      <div>
      <img width={100} src="/cross.svg" alt="" />
        <h2>{t("bannerHome")}</h2> 
      </div>


    </div>
  );
};

export default Banner;
