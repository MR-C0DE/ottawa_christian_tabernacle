import React from 'react'
import styles from "./stylesheets/Service.module.css";
import { useTranslation } from "next-i18next";

const Service = () => {
    const { t } = useTranslation();
  return (
    <div className={styles.container}>
        <h2>{t("services")}</h2>
        <p className={styles.desc}>{t("serviceDescriptionHome")}</p>
        <div className={styles.detail_content}>
            <div>
                <img width={50}  src="/sun.svg" alt="Sunday Service Icon" />
                <h3>{t("sundayServiceHome")}</h3>
                <p>{t("sundayServiceDescriptionHome")}</p>
            </div>
            <div>
                <img width={50}  src="/star.svg" alt="Saturday Service Icon" />
                <h3>{t("saturdayServiceHome")}</h3>
                <p>{t("saturdayServiceDescriptionHome")}</p>
            </div>
            <div>
                <img width={50}  src="/circle.svg" alt="Children's Service Icon" />
                <h3>{t("onlineServiceHome")}</h3>
                <p>{t("onlineServiceDescriptionHome")}</p>
            </div>
        </div>
    </div>
  )
}

export default Service
